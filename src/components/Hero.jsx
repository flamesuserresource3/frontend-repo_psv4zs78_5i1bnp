import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-50, Math.min(50, offsetX / 6)));
    y.set(Math.max(-50, Math.min(50, offsetY / 6)));
  };

  return (
    <section onMouseMove={handleMouseMove} className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[1200px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-3xl" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div style={{ rotateX, rotateY }} className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Eventeye
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300">Discover. Connect. Experience.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-4 text-lg text-white/80"
          >
            A modern platform for college students to explore campus happenings, join vibrant communities, and never miss a moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-8 flex items-center gap-3"
          >
            <button className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition">
              Explore events
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white/10 text-white border border-white/15 backdrop-blur hover:bg-white/15 transition">
              Create an event
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
