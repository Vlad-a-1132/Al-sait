export type ImagingUser = { id: string; username: string; role: 'admin' | 'staff'; disabled: boolean; createdAt: string };
export type ImagingActor = { id: string; role: 'admin' | 'staff' | 'uploader' };
export type ImagingFile = { id: string; name: string; size: number; sha256: string; createdAt: string; uploadedBy: string; mime: string };
export type ImagingToken = { id: string; label: string; createdAt: string; revoked: boolean };
export type UploadResult = { id?: string; status: 'pending' | 'complete' | 'cancelled' | 'expired'; offset: number; size: number; expiresAt?: string; fileId?: string; duplicate?: boolean };
export type FileList = { files: ImagingFile[]; page: number; pages: number; total: number; archiveCount: number; totalBytes: number; quotaBytes: number };
