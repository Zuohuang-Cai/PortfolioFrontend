interface Props {
  isFullscreen: boolean;
  onToggle: () => void;
}

export default function ChatHeader({ isFullscreen, onToggle }: Props) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-purple-900/60 to-cyan-900/60 border-b border-gray-700/50 flex-shrink-0">
      <div className="relative">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
          Z
        </div>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-gray-900" />
      </div>
      <div className="flex-1">
        <p className="text-white font-semibold text-sm">Zuria</p>
        <p className="text-gray-400 text-xs">Ask me anything about Zuohuang</p>
      </div>
      <button
        onClick={onToggle}
        aria-label={isFullscreen ? "Exit fullscreen" : "Expand to fullscreen"}
        className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
      >
        {isFullscreen ? (
          // Compress icon
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25M9 15H4.5M9 15v4.5M9 15l-5.25 5.25" />
          </svg>
        ) : (
          // Expand icon
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        )}
      </button>
    </div>
  );
}
