import { QUICK_QUESTIONS } from "./chatConfig";

interface Props {
  onSelect: (question: string) => void;
}

export default function ChatEmptyState({ onSelect }: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
      <div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </div>
      <div>
        <p className="text-white font-medium text-sm">Hi there! I&apos;m Zuria.</p>
        <p className="text-gray-500 text-xs mt-1">Ask me about skills, projects, or experience.</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center mt-1">
        {QUICK_QUESTIONS.map(q => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
