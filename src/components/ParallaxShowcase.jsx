import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxShowcase() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y2 }} className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <motion.div style={{ y: y1 }} className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-white">Built for student life</h2>
            <p className="mt-3 text-white/80">
              Find everything happening around you — from club meetups and workshops to performances and hackathons. Follow organizers, save events, and get smart reminders.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                Personalized feeds based on your interests and clubs you follow.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                One-tap RSVP with calendar sync and reminders before showtime.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                Organizer tools to publish, manage capacity, and scan at entry.
              </li>
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1640&auto=format&fit=crop" alt="Students" className="h-56 w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1640&auto=format&fit=crop" alt="Workshop" className="h-56 w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1640&auto=format&fit=crop" alt="Concert" className="h-56 w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWNrYXRob258ZW58MHwwfHx8MTc2MjQwNjUwN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hackathon" className="h-56 w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
