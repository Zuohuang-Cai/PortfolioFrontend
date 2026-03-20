interface Props {
  onClose: () => void;
}

export default function MobileChatHeader({ onClose }: Props) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-purple-900/60 to-cyan-900/60 border-b border-gray-700/50 flex-shrink-0">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
          Z
        </div>
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-gray-900" />
      </div>
      <div className="flex-1">
        <p className="text-white font-semibold text-sm">Zuria</p>
        <p className="text-gray-400 text-xs">Ask me anything about Zuohuang</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Close chat"
        className="w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
