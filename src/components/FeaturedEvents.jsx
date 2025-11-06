import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'TechnoVerse Hackathon 2025',
    club: 'Computer Science Club',
    date: 'Nov 22, 2025',
    time: '9:00 AM',
    location: 'Innovation Hub, Block A',
    cover:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1740&auto=format&fit=crop',
    tags: ['Hackathon', 'Coding', 'Prizes'],
  },
  {
    id: 2,
    title: 'Indie Night: Campus Music Fest',
    club: 'Art & Music Society',
    date: 'Dec 02, 2025',
    time: '6:30 PM',
    location: 'Amphitheatre',
    cover:
      'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1740&auto=format&fit=crop',
    tags: ['Music', 'Live', 'Community'],
  },
  {
    id: 3,
    title: 'Product Design Masterclass',
    club: 'Design Guild',
    date: 'Dec 10, 2025',
    time: '4:00 PM',
    location: 'Design Studio, Block C',
    cover:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1740&auto=format&fit=crop',
    tags: ['Design', 'Workshop', 'UI/UX'],
  },
];

function EventCard({ event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={event.cover}
          alt={event.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <CalendarDays className="h-4 w-4" />
          <span>
            {event.date} • {event.time}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white leading-tight">{event.title}</h3>
        <p className="text-sm text-white/70">{event.club}</p>

        <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {event.location}</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {event.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedEvents() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured events</h2>
            <p className="text-white/70 mt-1">Handpicked happenings trending across campus.</p>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">
            View all
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
