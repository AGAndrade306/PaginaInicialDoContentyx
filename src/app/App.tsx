import PencilCircle from "../imports/PencilCircle";
import UserPlus from "../imports/UserPlus";
import CameraText from "../imports/CameraText";

export default function App() {
  return (
    <div className="w-full max-w-md mx-auto h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 flex items-center justify-center relative overflow-hidden">
      {/* Ambient Light Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl"></div>

      {/* Top Right Corner Button - Profile */}
      <button className="absolute top-8 right-8 w-16 h-16 rounded-full transition-all duration-300 hover:scale-110 group">
        {/* Multiple liquid glass layers for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-blue-500 opacity-70 blur-md"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-blue-200 to-white/50 opacity-60 blur-sm"></div>
        <div className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl shadow-blue-300/50"></div>
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/95 via-white/60 to-white/30"></div>
        <div className="absolute inset-1 top-1 left-1 w-6 h-6 rounded-full bg-white/80 blur-sm"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 relative z-10 [--fill-0:rgb(37_99_235)]" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}>
            <UserPlus />
          </div>
        </div>
      </button>

      {/* Center Button */}
      <button className="w-72 h-72 rounded-full transition-all duration-500 hover:scale-105 group relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-orange-500 opacity-50 blur-2xl"></div>
        {/* Main gradient border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-orange-500 p-[3px] shadow-2xl">
          <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-xl flex items-center justify-center border border-white/60 relative overflow-hidden">
            {/* Inner liquid glass shine */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/40 rounded-full blur-2xl"></div>
            <span className="text-2xl text-center px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 bg-clip-text text-transparent font-semibold transition-all duration-300 relative z-10">
              Criar ideias de conteúdo
            </span>
          </div>
        </div>
      </button>

      {/* Bottom Left Corner Button */}
      <button className="absolute bottom-12 left-8 w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 group">
        {/* Multiple liquid glass layers for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 opacity-70 blur-md"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-orange-200 to-white/50 opacity-60 blur-sm"></div>
        <div className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl shadow-orange-300/50"></div>
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/95 via-white/60 to-white/30"></div>
        <div className="absolute inset-1 top-1 left-1 w-8 h-8 rounded-full bg-white/80 blur-sm"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 relative z-10 [--fill-0:rgb(234_88_12)]" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}>
            <PencilCircle />
          </div>
        </div>
      </button>

      {/* Bottom Right Corner Button */}
      <button className="absolute bottom-12 right-8 w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 group">
        {/* Multiple liquid glass layers for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-orange-400 to-orange-500 opacity-70 blur-md"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-orange-200 to-blue-200 opacity-60 blur-sm"></div>
        <div className="absolute inset-0 rounded-full bg-white/80 backdrop-blur-2xl border border-white/60 shadow-xl shadow-orange-300/50"></div>
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/95 via-white/60 to-white/30"></div>
        <div className="absolute inset-1 top-1 left-1 w-8 h-8 rounded-full bg-white/80 blur-sm"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 relative z-10 [--fill-0:rgb(37_99_235)]" style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}>
            <CameraText />
          </div>
        </div>
      </button>
    </div>
  );
}