import React, { useState } from 'react';
import { Zap, Sparkles, Rocket, Star, ChevronRight, ExternalLink } from 'lucide-react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 font-sans p-4 md:p-8">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="py-8 md:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200/50">
              <Zap size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-slate-900">
                {{PROJECT_TITLE}}
              </h1>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-1"></div>
            </div>
          </div>
          <p className="text-slate-500 font-medium text-lg max-w-2xl">
            A modern React + Vite + Tailwind CSS starter template. Build beautiful applications faster.
          </p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column: Features */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Sparkles className="text-yellow-500" />
                Features Included
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Rocket className="text-blue-500" />, text: 'React 19 with Vite 7' },
                  { icon: <Zap className="text-purple-500" />, text: 'Tailwind CSS 4 + PostCSS' },
                  { icon: <Sparkles className="text-green-500" />, text: 'ESLint 9 with React Hooks' },
                  { icon: <Star className="text-amber-500" />, text: 'Lucide React Icons' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <span className="font-bold text-slate-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <Zap size={20} />
                Interactive Demo
              </h3>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-blue-100 font-medium">Counter Value</p>
                  <p className="text-5xl font-black mt-2">{count}</p>
                </div>
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all active:scale-95"
                >
                  <Zap size={20} />
                  Increment
                </button>
              </div>
              <button
                onClick={() => setCount(0)}
                className="text-blue-100 hover:text-white font-medium text-sm flex items-center gap-1"
              >
                Reset counter
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Getting Started */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Getting Started</h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500 font-bold mb-2">Development Server</p>
                  <code className="text-sm bg-slate-900 text-slate-100 px-3 py-2 rounded-xl font-mono block">
                    npm run dev
                  </code>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500 font-bold mb-2">Build for Production</p>
                  <code className="text-sm bg-slate-900 text-slate-100 px-3 py-2 rounded-xl font-mono block">
                    npm run build
                  </code>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-sm text-slate-500 font-bold mb-2">Lint Code</p>
                  <code className="text-sm bg-slate-900 text-slate-100 px-3 py-2 rounded-xl font-mono block">
                    npm run lint
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-black mb-4">Ready to Build</h3>
              <p className="text-emerald-100 mb-6">
                This template includes everything you need to start building modern web applications.
                Customize the colors, components, and layout to match your project.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all">
                  <ExternalLink size={18} />
                  View Docs
                </button>
                <button className="bg-emerald-800/30 hover:bg-emerald-800/50 text-white px-5 py-3 rounded-2xl font-bold border border-emerald-400/20 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 font-medium">
            Built with <span className="text-blue-600 font-bold">Zirr</span> • Modern React Starter
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Get started by editing <code className="text-slate-600 bg-slate-100 px-2 py-1 rounded">src/App.jsx</code>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;