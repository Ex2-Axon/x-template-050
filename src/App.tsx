import { useState } from 'react'
import { StarIcon, FaceSmileIcon, HandThumbUpIcon, FireIcon } from '@heroicons/react/24/solid'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="min-h-screen bg-pink-200 p-4 md:p-8 flex items-center justify-center font-mono">
      <main className="w-full max-w-2xl">
        <div className="brutal-card p-8 md:p-12 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="bg-black text-white px-4 py-1 text-sm font-black rotate-[-2deg]">
              V5.0_BETA
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-black" />
              <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-black" />
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-black" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic rotate-[1deg]">
              BRUTAL <br />
              <span className="bg-yellow-400 px-2">AXON.</span>
            </h1>
            <p className="text-xl font-bold bg-white border-2 border-black p-2 inline-block">
              // DESIGN WITHOUT LIMITS_
            </p>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-400 border-4 border-black p-4 rotate-[-1deg]">
              <FireIcon className="w-12 h-12 mb-2" />
              <h3 className="font-black text-lg">FAST AS HELL</h3>
            </div>
            <div className="bg-green-400 border-4 border-black p-4 rotate-[2deg]">
              <StarIcon className="w-12 h-12 mb-2" />
              <h3 className="font-black text-lg">TOP TIER</h3>
            </div>
          </div>

          {/* Interactive Section */}
          <div className="space-y-6 pt-4">
            <p className="text-lg font-bold leading-tight">
              Stop making boring websites. Embrace the raw power of Neo-Brutalism. 
              Built with React 19 and Tailwind 4.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <button 
                onClick={() => setLikes(likes + 1)}
                className="brutal-btn flex items-center gap-3"
              >
                <HandThumbUpIcon className="w-6 h-6" />
                HYPED! [{likes}]
              </button>
              
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-white flex items-center justify-center">
                    <FaceSmileIcon className="w-8 h-8 text-black" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="flex flex-col md:flex-row gap-0">
            <input 
              type="text" 
              placeholder="ENTER_YOUR_NAME..."
              className="brutal-input flex-1"
            />
            <button className="bg-black text-white px-8 py-3 font-black uppercase hover:bg-slate-800 transition-colors">
              JOIN_
            </button>
          </div>
        </div>

        {/* Floating Tag */}
        <div className="mt-8 text-center">
          <span className="bg-black text-yellow-400 px-6 py-2 font-black text-xl rotate-[3deg] inline-block shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]">
            #AXON_RULES
          </span>
        </div>
      </main>
    </div>
  )
}

export default App
