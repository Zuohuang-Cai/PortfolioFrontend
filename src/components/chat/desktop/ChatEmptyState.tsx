import { QUICK_QUESTIONS } from "../shared/chatConfig";
import ChatMascot from "../shared/ChatMascot";

interface Props {
  onSelect: (question: string) => void;
}

export default function ChatEmptyState({ onSelect }: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-2">
      <ChatMascot mood="idle" />
      <div className="-mt-1">
        <p className="text-white font-medium text-sm">Hi there! I&apos;m Zuria.</p>
        <p className="text-gray-500 text-xs mt-1">Click me! Ask about skills, projects, or experience.</p>
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
