import { QUICK_QUESTIONS } from "../shared/chatConfig";
import ChatMascot from "../shared/ChatMascot";

interface Props {
  onSelect: (question: string) => void;
}

export default function MobileChatEmptyState({ onSelect }: Props) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-4">
      <ChatMascot mood="idle" />
      <div className="-mt-1">
        <p className="text-white font-medium text-sm">Hi there! I&apos;m Zuria.</p>
        <p className="text-gray-500 text-xs mt-1">Click me! Ask about skills, projects, or experience.</p>
      </div>
      {/* Horizontal scroll on mobile for quick questions */}
      <div className="w-full overflow-x-auto pb-1 mt-1">
        <div className="flex gap-2 px-4 w-max mx-auto">
          {QUICK_QUESTIONS.map(q => (
            <button
              key={q}
              onClick={() => onSelect(q)}
              className="text-xs px-3 py-1.5 rounded-full border border-gray-700 text-gray-400 whitespace-nowrap hover:border-purple-500 hover:text-purple-400 active:border-purple-500 active:text-purple-400 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
