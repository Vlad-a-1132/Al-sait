"use client";

import { FormEvent, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

type AppointmentFlow = {
  step: "target" | "name" | "phone";
  target?: string;
  name?: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Здравствуйте! Добро пожаловать в «Альтамед-С». С чем могу вам помочь?",
  },
];

function makeId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatMessageText(text: string) {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return <span key={index} className="block h-2" />;
    }

    const isBullet = trimmed.startsWith("•");

    return (
      <span
        key={index}
        className={
          isBullet
            ? "block rounded-lg bg-white/[0.04] px-2 py-1.5 leading-snug"
            : "block leading-relaxed"
        }
      >
        {line}
      </span>
    );
  });
}

function normalizeMessage(value: string) {
  return value
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[^\p{L}\p{N}+]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const ADMIN_CONTACT_WORDS = [
  "админ",
  "администратор",
  "оператор",
  "человек",
  "живой",
  "перезвон",
  "позвон",
  "свяж",
  "связь",
  "звонок",
];

function getWords(value: string) {
  return normalizeMessage(value).split(" ").filter(Boolean);
}

function distance(a: string, b: string) {
  const rows = Array.from({ length: a.length + 1 }, (_, index) => [index]);

  for (let column = 1; column <= b.length; column += 1) {
    rows[0][column] = column;
  }

  for (let row = 1; row <= a.length; row += 1) {
    for (let column = 1; column <= b.length; column += 1) {
      rows[row][column] =
        a[row - 1] === b[column - 1]
          ? rows[row - 1][column - 1]
          : Math.min(rows[row - 1][column - 1], rows[row][column - 1], rows[row - 1][column]) + 1;
    }
  }

  return rows[a.length][b.length];
}

function isAppointmentStart(value: string) {
  const normalized = normalizeMessage(value);
  const asksWhereToGo =
    normalized.includes("к кому") ||
    normalized.includes("какому врачу") ||
    normalized.includes("куда") ||
    normalized.includes("к какому");

  return !asksWhereToGo && (normalized.includes("запис") || normalized.includes("запиш") || normalized.includes("заявк"));
}

function isAdminContactRequest(value: string) {
  const normalized = normalizeMessage(value);

  if (ADMIN_CONTACT_WORDS.some((word) => normalized.includes(word))) {
    return true;
  }

  return getWords(value).some((token) =>
    ADMIN_CONTACT_WORDS.some((word) => {
      if (token.length < 4) return false;
      if (token.startsWith(word.slice(0, 4)) || word.startsWith(token.slice(0, 4))) return true;
      return Math.abs(token.length - word.length) <= 2 && distance(token, word) <= 2;
    })
  );
}

function extractAppointmentTarget(value: string) {
  const normalized = normalizeMessage(value)
    .replace(/^(хочу|можно|надо|нужно)\s+/u, "")
    .replace(/записаться|запишите|запиши|записать|запись|оставить заявку|заявку/gu, "")
    .replace(/\b(меня|мне|пожалуйста)\b/gu, "")
    .replace(/на прием|на приём|к врачу/gu, "")
    .replace(/^(к|ко|на|в)\s+/u, "")
    .replace(/\s+/g, " ")
    .trim();

  return normalized.length >= 3 ? normalized : undefined;
}

function isPhoneLike(value: string) {
  return value.replace(/\D/g, "").length >= 10;
}

function extractPhone(value: string) {
  return value.match(/(?:\+?\d[\d\s\-()]{8,}\d)/u)?.[0]?.trim();
}

function extractNameWithoutPhone(value: string, phone: string) {
  const name = value
    .replace(phone, "")
    .replace(/\b(телефон|тел|номер|контакт|контакты)\b/giu, "")
    .replace(/[,;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return name || "Не указано";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentFlow, setAppointmentFlow] = useState<AppointmentFlow | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionIdRef = useRef(makeId());
  const welcomeLoggedRef = useRef(false);

  const logChatMessage = async (role: ChatMessage["role"], text: string) => {
    try {
      await fetch("/api/chat-dialogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          role,
          text,
        }),
      });
    } catch {
      // Журнал не должен мешать пользователю общаться с ботом.
    }
  };

  const addAssistantMessage = (text: string) => {
    setMessages((current) => [
      ...current,
      {
        id: makeId(),
        role: "assistant",
        text,
      },
    ]);
    logChatMessage("assistant", text);
  };

  const submitAppointmentFromChat = async (target: string, name: string, phone: string) => {
    const message = `Заявка из чат-бота.\nК кому/услуга: ${target}\nID диалога: ${sessionIdRef.current}`;
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, formType: "Заявка из чат-бота", message }),
    });

    if (!response.ok) {
      throw new Error("Appointment request failed");
    }
  };

  const handleAppointmentFlow = async (value: string) => {
    if (appointmentFlow?.step === "target") {
      setAppointmentFlow({ step: "name", target: value });
      addAssistantMessage("Как вас зовут?");
      return true;
    }

    if (appointmentFlow?.step === "name") {
      const phone = extractPhone(value);
      if (phone) {
        const name = extractNameWithoutPhone(value, phone);

        try {
          await submitAppointmentFromChat(
            appointmentFlow.target || "Не указано",
            name,
            phone
          );
          setAppointmentFlow(null);
          addAssistantMessage(
            `Заявку передала администратору.\n• К кому/услуга: ${appointmentFlow.target}\n• Имя: ${name}\n• Телефон: ${phone}\n\nАдминистратор свяжется для подтверждения времени и цены.`
          );
        } catch {
          addAssistantMessage(
            "Не удалось сохранить заявку. Позвоните, пожалуйста, по телефону +7 (495) 255-44-50."
          );
        }

        return true;
      }

      setAppointmentFlow({ ...appointmentFlow, step: "phone", name: value });
      addAssistantMessage("Напишите номер телефона для связи.");
      return true;
    }

    if (appointmentFlow?.step === "phone") {
      if (!isPhoneLike(value)) {
        addAssistantMessage("Похоже, номер неполный. Напишите телефон в формате +7 999 123-45-67.");
        return true;
      }

      try {
        await submitAppointmentFromChat(
          appointmentFlow.target || "Не указано",
          appointmentFlow.name || "Не указано",
          value
        );
        setAppointmentFlow(null);
        addAssistantMessage(
          `Заявку передала администратору.\n• К кому/услуга: ${appointmentFlow.target}\n• Имя: ${appointmentFlow.name}\n• Телефон: ${value}\n\nАдминистратор свяжется для подтверждения времени и цены.`
        );
      } catch {
        addAssistantMessage(
          "Не удалось сохранить заявку. Позвоните, пожалуйста, по телефону +7 (495) 255-44-50."
        );
      }

      return true;
    }

    if (isAdminContactRequest(value)) {
      setAppointmentFlow({ step: "name", target: "Связаться с администратором" });
      addAssistantMessage("Передам заявку администратору. Как вас зовут?");
      return true;
    }

    if (isAppointmentStart(value)) {
      const target = extractAppointmentTarget(value);

      if (target) {
        setAppointmentFlow({ step: "name", target });
        addAssistantMessage(`Запишем: ${target}.\nКак вас зовут?`);
      } else {
        setAppointmentFlow({ step: "target" });
        addAssistantMessage("К кому или на какую услугу записать?");
      }

      return true;
    }

    return false;
  };

  const sendMessage = async (text: string) => {
    const value = text.trim();
    if (!value || isLoading) return;

    setInput("");
    setMessages((current) => [
      ...current,
      { id: makeId(), role: "user", text: value },
    ]);
    logChatMessage("user", value);
    setIsLoading(true);

    if (await handleAppointmentFlow(value)) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value }),
      });
      const data = await response.json();
      const reply = data.reply || "Не удалось найти ответ. Позвоните нам: +7 (495) 255-44-50.";
      addAssistantMessage(reply);

      if (reply.toLowerCase().includes("оставьте имя и телефон")) {
        setAppointmentFlow({
          step: "name",
          target: isAdminContactRequest(value) ? "Связаться с администратором" : value,
        });
      }
    } catch {
      addAssistantMessage("Сейчас не удалось обработать вопрос. Позвоните нам: +7 (495) 255-44-50.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const openChat = () => {
    setIsOpen(true);
    if (!welcomeLoggedRef.current) {
      welcomeLoggedRef.current = true;
      logChatMessage("assistant", initialMessages[0].text);
    }
    if (
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      window.setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const closeChat = () => {
    inputRef.current?.blur();
    setIsOpen(false);
  };

  return (
    <div className="mobile-chat-shell fixed right-[max(1rem,env(safe-area-inset-right))] z-[90] md:bottom-6 md:right-6">
      {isOpen ? (
        <section
          className="mobile-chat-panel flex w-[calc(100vw_-_2rem_-_env(safe-area-inset-left)_-_env(safe-area-inset-right))] max-w-[360px] flex-col overflow-hidden rounded-2xl bg-[#111827] text-white shadow-2xl ring-1 ring-white/10"
          aria-label="Чат Альтамед-С"
        >
          <header className="flex items-center gap-3 border-b border-white/10 bg-[#0f1729] px-4 py-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white">
              <img
                src="/images/icons/S.webp"
                alt=""
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0f1729] bg-[#22c55e]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold">Мила</div>
              <div className="truncate text-xs text-slate-300">Медицинский центр «Альтамед-С»</div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="grid h-9 w-9 place-items-center rounded-full text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Закрыть чат"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18" strokeLinecap="round" />
                <path d="m6 6 12 12" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto bg-[#111827] px-4 py-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] ${
                      message.role === "user"
                        ? "bg-[#13ab7b] text-white"
                        : "bg-[#1f2937] text-slate-100"
                    }`}
                  >
                    <div className="space-y-1">{formatMessageText(message.text)}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-[#1f2937] px-3 py-2 text-sm text-slate-300">
                    Печатает...
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#0f1729] p-3">
            <div className="mb-2 flex gap-2 overflow-x-auto pb-2 [scrollbar-color:rgba(19,171,123,.85)_rgba(255,255,255,.10)] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#13ab7b]/80 [&::-webkit-scrollbar-thumb:hover]:bg-[#13ab7b] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/10">
              {["Акции", "Расписание гинеколога", "Цена общего анализа крови", "Режим работы"].map((hint) => (
                <button
                  key={hint}
                  type="button"
                  onClick={() => sendMessage(hint)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition ${
                    hint === "Акции"
                      ? "bg-[#13ab7b] font-semibold text-white hover:bg-[#11966d]"
                      : "bg-white/10 text-slate-100 hover:bg-white/15"
                  }`}
                >
                  {hint}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="min-w-0 flex-1 bg-transparent text-base text-white placeholder:text-slate-400 focus:outline-none md:text-sm"
                placeholder="Введите ваше сообщение..."
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#13ab7b] text-white transition hover:bg-[#11966d] disabled:cursor-not-allowed disabled:bg-slate-600"
                aria-label="Отправить сообщение"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12 14-7-7 14-2-5-5-2Z" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={openChat}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#13ab7b] text-white shadow-xl ring-1 ring-white/20 transition hover:bg-[#11966d] md:h-16 md:w-16"
          aria-label="Открыть чат"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
          </svg>
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-white bg-[#22c55e]" />
        </button>
      )}
    </div>
  );
}
