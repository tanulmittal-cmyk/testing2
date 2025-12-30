import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-3xl mx-auto transform transition-all hover:scale-[1.01] duration-500">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-teal-300 uppercase bg-teal-500/10 rounded-full">
            Ready for Coolify
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500 mb-6 tracking-tight">
            Deploy with Ease.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A premium, production-ready React starter template designed for seamless deployment. Built with Vite, Tailwind CSS, and specific configurations for Coolify.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold text-lg shadow-lg hover:shadow-teal-500/30 transition-all hover:-translate-y-1 w-full md:w-auto">
              Get Started
            </button>
            <button className="px-8 py-3.5 rounded-lg bg-white/5 text-white font-medium text-lg border border-white/10 hover:bg-white/10 transition-all w-full md:w-auto">
              Learn More
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-white/5 border border-white/5">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-white mb-1">Vite + React</h3>
              <p className="text-sm text-slate-400">Blazing fast dev server & build</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-semibold text-white mb-1">Tailwind CSS</h3>
              <p className="text-sm text-slate-400">Utility-first premium styling</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/5">
              <div className="text-2xl mb-2">🐳</div>
              <h3 className="font-semibold text-white mb-1">Docker Ready</h3>
              <p className="text-sm text-slate-400">Optimized for containers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
