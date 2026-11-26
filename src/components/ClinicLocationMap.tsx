'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { CLINIC_MAP_BRANCHES } from '@/data/clinic-map';
import { CLINIC_MAP_STREET_LABELS } from '@/data/clinic-map-labels';
import styles from './ClinicLocationMap.module.css';

type BranchId = typeof CLINIC_MAP_BRANCHES[number]['id'];
const MAX_ZOOM = 3;
const MAP_BOUNDS = { left: -750, top: -300, right: 1650, bottom: 800 };
type MapPoint = { x: number; y: number };

function clampView(value: number, size: number, minimum: number, maximum: number) {
  if (size >= maximum - minimum) return (minimum + maximum - size) / 2;
  return Math.max(minimum, Math.min(maximum - size, value));
}

function ExternalArrow() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

export default function ClinicLocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ pointerId: number; moved: boolean } | null>(null);
  const dragCleanupRef = useRef<(() => void) | null>(null);
  const suppressClickRef = useRef(false);
  const wheelActionRef = useRef<((delta: number, anchor: MapPoint) => void) | null>(null);
  const lastWheelTimeRef = useRef(0);
  const [viewport, setViewport] = useState({ width: 618, height: 404 });
  const [selectedId, setSelectedId] = useState<BranchId>('mozhayskoye');
  const [cameraId, setCameraId] = useState<BranchId>('mozhayskoye');
  const [zoomLevel, setZoomLevel] = useState(0);
  const [pan, setPan] = useState<MapPoint>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const selected = CLINIC_MAP_BRANCHES.find(branch => branch.id === selectedId)!;
  const camera = CLINIC_MAP_BRANCHES.find(branch => branch.id === cameraId)!;

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width > 0 && height > 0) setViewport(previous => previous.width === width && previous.height === height ? previous : { width, height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const compact = viewport.width <= 420 || viewport.height <= 300;
  const pinFactor = compact ? .5 : .62;
  const topClearance = compact ? 66 : 80;
  const bottomClearance = compact ? 74 : 90;
  const maximumPinHeight = 74 * pinFactor * 1.08;
  const upperPoint = CLINIC_MAP_BRANCHES[1].y;
  const pointSpan = CLINIC_MAP_BRANCHES[0].y - upperPoint;
  const baseScale = Math.max(.1, (viewport.height - topClearance - bottomClearance - maximumPinHeight) / pointSpan);
  const scale = baseScale * Math.pow(1.45, zoomLevel);
  const viewWidth = viewport.width / scale;
  const viewHeight = viewport.height / scale;
  const defaultCenterX = (CLINIC_MAP_BRANCHES[0].x + CLINIC_MAP_BRANCHES[1].x) / 2;
  const cameraPointY = (topClearance + maximumPinHeight + viewport.height - bottomClearance) / 2;
  const baseViewX = (zoomLevel === 0 ? defaultCenterX : camera.x) - viewWidth / 2;
  const baseViewY = zoomLevel === 0
    ? upperPoint - (topClearance + maximumPinHeight) / scale
    : camera.y - cameraPointY / scale;
  const viewX = clampView(baseViewX + pan.x, viewWidth, MAP_BOUNDS.left, MAP_BOUNDS.right);
  const viewY = clampView(baseViewY + pan.y, viewHeight, MAP_BOUNDS.top, MAP_BOUNDS.bottom);
  const isPanned = Math.abs(viewX - baseViewX) > .01 || Math.abs(viewY - baseViewY) > .01;

  const chooseBranch = (id: BranchId) => {
    setSelectedId(id);
    setCameraId(id);
    setPan({ x: 0, y: 0 });
  };
  const previewBranch = (id: BranchId) => {
    if (dragRef.current) return;
    setSelectedId(id);
    if (zoomLevel > 0) {
      setCameraId(id);
      setPan({ x: 0, y: 0 });
    }
  };
  const changeZoom = (delta: number, anchor?: MapPoint) => {
    const nextLevel = Math.max(0, Math.min(MAX_ZOOM, zoomLevel + delta));
    if (nextLevel === zoomLevel || dragRef.current?.moved) return;
    const nextCamera = delta > 0 && !isPanned && !anchor ? selected : camera;
    const nextScale = baseScale * Math.pow(1.45, nextLevel);
    const nextWidth = viewport.width / nextScale;
    const nextHeight = viewport.height / nextScale;
    const nextBaseX = (nextLevel === 0 ? defaultCenterX : nextCamera.x) - nextWidth / 2;
    const nextBaseY = nextLevel === 0
      ? upperPoint - (topClearance + maximumPinHeight) / nextScale
      : nextCamera.y - cameraPointY / nextScale;
    if (isPanned || anchor) {
      const point = anchor ?? { x: viewport.width / 2, y: cameraPointY };
      const nextX = viewX + point.x / scale - point.x / nextScale;
      const nextY = viewY + point.y / scale - point.y / nextScale;
      setPan({
        x: clampView(nextX, nextWidth, MAP_BOUNDS.left, MAP_BOUNDS.right) - nextBaseX,
        y: clampView(nextY, nextHeight, MAP_BOUNDS.top, MAP_BOUNDS.bottom) - nextBaseY,
      });
    } else setPan({ x: 0, y: 0 });
    setCameraId(nextCamera.id);
    setZoomLevel(nextLevel);
  };
  const fitBranches = () => {
    setZoomLevel(0);
    setPan({ x: 0, y: 0 });
  };

  useEffect(() => { wheelActionRef.current = changeZoom; });
  useEffect(() => {
    const element = sceneRef.current;
    if (!element) return;
    const wheel = (event: WheelEvent) => {
      if ((!event.ctrlKey && !event.metaKey) || event.deltaY === 0) return;
      event.preventDefault();
      if (dragRef.current) return;
      const now = performance.now();
      if (now - lastWheelTimeRef.current < 140) return;
      lastWheelTimeRef.current = now;
      const bounds = element.getBoundingClientRect();
      wheelActionRef.current?.(event.deltaY < 0 ? 1 : -1, { x: event.clientX - bounds.x, y: event.clientY - bounds.y });
    };
    element.addEventListener('wheel', wheel, { passive: false });
    return () => {
      element.removeEventListener('wheel', wheel);
      dragCleanupRef.current?.();
    };
  }, []);

  const beginPan = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (event.isPrimary) suppressClickRef.current = false;
    if (event.button !== 0 || !event.isPrimary || (event.pointerType !== 'mouse' && event.pointerType !== 'pen')) return;
    dragCleanupRef.current?.();
    const element = event.currentTarget;
    const pointerId = event.pointerId;
    const start = { x: event.clientX, y: event.clientY };
    const gesture = { pointerId, moved: false };
    dragRef.current = gesture;
    const updatePan = (clientX: number, clientY: number) => {
      const nextX = clampView(viewX - (clientX - start.x) / scale, viewWidth, MAP_BOUNDS.left, MAP_BOUNDS.right);
      const nextY = clampView(viewY - (clientY - start.y) / scale, viewHeight, MAP_BOUNDS.top, MAP_BOUNDS.bottom);
      setPan({ x: nextX - baseViewX, y: nextY - baseViewY });
    };
    const move = (pointer: PointerEvent) => {
      if (pointer.pointerId !== pointerId) return;
      if (!gesture.moved && Math.hypot(pointer.clientX - start.x, pointer.clientY - start.y) < 5) return;
      if (!gesture.moved) {
        gesture.moved = true;
        suppressClickRef.current = true;
        element.setPointerCapture(pointerId);
        setIsDragging(true);
      }
      pointer.preventDefault();
      updatePan(pointer.clientX, pointer.clientY);
    };
    const cleanup = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', finish);
      window.removeEventListener('pointercancel', finish);
      window.removeEventListener('blur', blur);
      dragRef.current = null;
      dragCleanupRef.current = null;
      if (element.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
    };
    const finish = (pointer: PointerEvent) => {
      if (pointer.pointerId !== pointerId) return;
      if (gesture.moved && pointer.type === 'pointerup') updatePan(pointer.clientX, pointer.clientY);
      cleanup();
      setIsDragging(false);
    };
    const blur = () => { cleanup(); setIsDragging(false); };
    dragCleanupRef.current = cleanup;
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', finish);
    window.addEventListener('pointercancel', finish);
    window.addEventListener('blur', blur);
  };

  return (
    <div ref={mapRef} className={styles.map} data-clinic-map data-selected-branch={selectedId} data-zoom-level={zoomLevel} data-map-panned={isPanned}>
      <nav className={styles.branches} aria-label="Филиалы Альтамед-С на карте">
        {CLINIC_MAP_BRANCHES.map(branch => (
          <a key={branch.id} className={`${styles.branchLink} ${selectedId === branch.id ? styles.activeBranch : ''}`} href={branch.yandexUrl} target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => previewBranch(branch.id)} onFocus={() => previewBranch(branch.id)} onClick={() => chooseBranch(branch.id)}
            aria-label={`Альтамед-С, ${branch.address} — открыть в Яндекс Картах в новой вкладке`}>
            <span className={styles.branchNumber}>{branch.number}</span>
            <span className={styles.branchText}><strong>{branch.street}</strong><small>{branch.building.split(',')[0]}, <b>{branch.houseNumber}</b></small></span>
            <ExternalArrow />
          </a>
        ))}
      </nav>
      <svg ref={sceneRef} className={styles.scene} data-dragging={isDragging} onPointerDown={beginPan}
        onDragStart={event => event.preventDefault()}
        onLostPointerCapture={() => { dragCleanupRef.current?.(); setIsDragging(false); }}
        onClickCapture={event => {
          if (suppressClickRef.current && event.detail > 0) {
            event.preventDefault();
            event.stopPropagation();
          }
          suppressClickRef.current = false;
        }}
        viewBox={`${viewX} ${viewY} ${viewWidth} ${viewHeight}`} preserveAspectRatio="xMidYMid meet" role="group" aria-label="Схема расположения двух филиалов Альтамед-С в Одинцове. Перетаскивайте мышью; Ctrl и колесо меняют масштаб.">
        <rect x={viewX} y={viewY} width={viewWidth} height={viewHeight} fill="#f5f5f2" aria-hidden="true" pointerEvents="none" />
          <image href="/images/maps/odintsovo-clinics.svg" x={MAP_BOUNDS.left} y={MAP_BOUNDS.top} width={MAP_BOUNDS.right - MAP_BOUNDS.left} height={MAP_BOUNDS.bottom - MAP_BOUNDS.top} aria-hidden="true" pointerEvents="none" />
        <g aria-hidden="true" pointerEvents="none">
          {CLINIC_MAP_STREET_LABELS.map(label => {
            const halfWidth = label.name.length * (compact ? 10 : 12) * .29;
            const screenX = (label.x - baseViewX) * scale;
            const fittedX = Math.max(halfWidth + 12, Math.min(viewport.width - halfWidth - 12, screenX));
            const offsetX = (fittedX - screenX) / scale;
            return (
              <g key={label.name} transform={`translate(${label.x + offsetX} ${label.y + offsetX * Math.tan(label.angle * Math.PI / 180)}) rotate(${label.angle}) scale(${1 / scale})`}>
                <text className={styles.streetLabel} textAnchor="middle" y="-4">{label.name}</text>
              </g>
            );
          })}
        </g>
        <a href={selected.yandexUrl} target="_blank" rel="noopener noreferrer" className={styles.mapSurface} aria-label={`Открыть карту: ${selected.address}, Альтамед-С`}>
          <title>Перетаскивайте карту мышью. Масштаб: кнопки +/− или Ctrl + колесо.</title>
          <rect x={viewX} y={viewY} width={viewWidth} height={viewHeight} fill="transparent" />
        </a>
        {CLINIC_MAP_BRANCHES.map(branch => {
          const isSelected = selectedId === branch.id;
          const markerFactor = pinFactor * (isSelected ? 1.08 : 1);
          const markerX = (branch.x - viewX) * scale;
          const markerY = (branch.y - viewY) * scale;
          if ((zoomLevel > 0 || isPanned) && (markerY - 74 * markerFactor < topClearance || markerY > viewport.height - bottomClearance || markerX < 30 * markerFactor || markerX > viewport.width - 30 * markerFactor)) return null;
          return (
            <g key={branch.id} transform={`translate(${branch.x} ${branch.y}) scale(${markerFactor / scale})`}>
              <a href={branch.yandexUrl} target="_blank" rel="noopener noreferrer" className={`${styles.point} ${isSelected ? styles.activePoint : ''}`}
                onMouseEnter={() => { if (!dragRef.current) setSelectedId(branch.id); }} onFocus={() => setSelectedId(branch.id)} onClick={() => chooseBranch(branch.id)}
                aria-label={`Метка ${branch.number}: Альтамед-С, ${branch.address} — открыть в Яндекс Картах`}>
                <circle className={styles.hitArea} cy="-22" r="62" fill="transparent" />
                <circle className={styles.halo} cy="-23" r="46" />
                <g className={styles.pointLabel} aria-hidden="true">
                  <rect x="-274" y="-51" width="229" height="49" rx="13" fill="#fff" stroke="#d6dce1" strokeWidth="1.5" />
                  <text x="-260" y="-21" fill="#353e49" fontFamily="Arial,sans-serif" fontSize="21" fontWeight="500">{branch.id === 'krylova' ? 'б-р М. Крылова, ' : 'Можайское ш., '}<tspan fontWeight="750">{branch.houseNumber}</tspan></text>
                </g>
                <path className={styles.pin} d="M0 0C-8-13-29-26-29-45a29 29 0 0 1 58 0C29-26 8-13 0 0Z" fill="currentColor" stroke="#fff" strokeWidth="3" />
                <text x="0" y="-35" textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="28" aria-hidden="true">{branch.number}</text>
              </a>
            </g>
          );
        })}
      </svg>
      <div className={styles.mapControls} role="group" aria-label="Масштаб карты">
        <div className={styles.zoomButtons}>
          <button type="button" onClick={() => changeZoom(1)} disabled={zoomLevel === MAX_ZOOM} aria-label="Увеличить карту" title="Увеличить карту"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button>
          <button type="button" onClick={() => changeZoom(-1)} disabled={zoomLevel === 0} aria-label="Уменьшить карту" title="Уменьшить карту"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 12h14" /></svg></button>
        </div>
        <button type="button" className={styles.fitButton} onClick={fitBranches} aria-label="Показать оба филиала" title="Показать оба филиала"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /><circle cx="9" cy="15" r="2" /><circle cx="15" cy="9" r="2" /></svg><span>Оба филиала</span></button>
        <span className={styles.srOnly} role="status">Масштаб: {zoomLevel + 1} из {MAX_ZOOM + 1}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerText} aria-live="polite"><small>Альтамед-С · Одинцово</small><strong>{selected.address}</strong></div>
        <a href={selected.yandexUrl} target="_blank" rel="noopener noreferrer" className={styles.openMap} aria-label={`Открыть ${selected.address} в Яндекс Картах в новой вкладке`}><span>Яндекс Карты</span><ExternalArrow /></a>
      </div>
      <a className={styles.credit} href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© участники OpenStreetMap</a>
    </div>
  );
}
