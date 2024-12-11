import { Trophy } from 'lucide-react';

export function TournamentHero() {
  return (
    <div className="relative bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3")'
        }}
      />
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-8 h-8" />
            <span className="text-xl font-semibold">Arishnakunte Sports Association</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            2024 Cricket Championship
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join Arishnakunte sports association's most prestigious cricket tournament. Showcase your skills and compete with the best players across the state.
          </p>
          <div className="flex gap-4">
            <a href="#register" className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Register Now
            </a>
            <a href="#info" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium backdrop-blur-sm transition-all duration-300">
              Tournament Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}