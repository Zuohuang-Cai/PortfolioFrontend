export default function ChatHeader() {
  return (
    <div
      className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-purple-900/60 to-cyan-900/60 border-b border-gray-700/50 flex-shrink-0">
      <div className="relative">
        <div
          className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
          Z
        </div>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-gray-900" />
      </div>
      <div>
        <p className="text-white font-semibold text-sm">Zuria</p>
        <p className="text-gray-400 text-xs">Ask me anything about Zuohuang</p>
      </div>
    </div>
  );
}
