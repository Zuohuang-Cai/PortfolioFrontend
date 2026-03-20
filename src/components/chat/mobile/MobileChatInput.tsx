import { type RefObject } from "react";

interface Props {
  inputRef: RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function MobileChatInput({ inputRef, value, onChange, onKeyDown, onSend, disabled }: Props) {
  return (
    <div className="px-4 py-3 pb-safe border-t border-gray-700/50 flex-shrink-0">
      <div className="flex items-center gap-2 bg-gray-800/60 rounded-2xl px-4 py-3 border border-gray-700/50 focus-within:border-purple-500/60 transition-colors">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask me anything..."
          disabled={disabled}
          enterKeyHint="send"
          className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500 disabled:opacity-50"
        />
        <button
          onClick={onSend}
          disabled={!value.trim() || disabled}
          aria-label="Send"
          className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed active:opacity-80 transition-opacity flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
