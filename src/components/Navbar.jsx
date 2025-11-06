import { useState } from 'react';
import { Calendar, Search, User } from 'lucide-react';

export default function Navbar() {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', query);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-inner" />
          <span className="font-semibold text-white tracking-tight">eventeye</span>
        </a>

        <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2 w-[420px]">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events, clubs, speakers..."
              className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 pl-9 pr-3 py-2 outline-none border border-white/10 focus:border-white/30 transition"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20 transition">
            <Calendar className="h-4 w-4" />
            Create Event
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/10 text-white border border-white/10 hover:bg-white/20 transition">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
