import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import {
  directoryBG,
  liveColor,
  liveBW,
  blueHomeColor,
  blueHomeBW,
  bnwColor,
  bnwBW,
  charcoalColor,
  charcoalBW,
  clothColor,
  clothBW,
  enjoyColor,
  enjoyBW,
  longboardColor,
  longboardBW,
  marineColor,
  marineBW,
  snailColor,
  snailBW,
  typographyIcon,
} from '../assets';

export default function Design() {
  const projects = [
    {
      to: '/design/25live',
      title: '25Live Redesign',
      colorImage: liveColor,
      bwImage: liveBW,
    },
    {
      to: '/design/blue-home',
      title: 'Blue Home Campaign',
      colorImage: blueHomeColor,
      bwImage: blueHomeBW,
    },
    {
      to: '/design/brave-new-world',
      title: 'Brave New World',
      colorImage: bnwColor,
      bwImage: bnwBW,
    },
    {
      to: '/design/charcoal-foot',
      title: 'Charcoal Foot Study',
      colorImage: charcoalColor,
      bwImage: charcoalBW,
    },
    {
      to: '/design/cloth-study',
      title: 'Cloth Study',
      colorImage: clothColor,
      bwImage: clothBW,
    },
    {
      to: '/design/enjoy-little-things',
      title: 'Enjoy the Little Things',
      colorImage: enjoyColor,
      bwImage: enjoyBW,
    },
    {
      to: '/design/longboard',
      title: 'Longboard Design',
      colorImage: longboardColor,
      bwImage: longboardBW,
    },
    {
      to: '/design/marine-pollution',
      title: 'Marine Pollution Campaign',
      colorImage: marineColor,
      bwImage: marineBW,
    },
    {
      to: '/design/snail-study',
      title: 'Snail Study',
      colorImage: snailColor,
      bwImage: snailBW,
    },
    {
      to: '/design/typography',
      title: 'Typography Poster',
      colorImage: typographyIcon,
      bwImage: typographyIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-24 bg-white flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src={directoryBG} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-24 text-center">
          <motion.h1 
            className="text-[#cc83c0] text-5xl lg:text-7xl font-extrabold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Design Work
          </motion.h1>
          <motion.p 
            className="text-[#cc83c0]/70 text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design is where creativity meets purpose. From graphic design to UI/UX, I explore 
            visual communication through various mediums. These projects showcase my journey 
            in understanding color, composition, typography, and the art of visual storytelling.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="inline-block animate-float">
              <svg 
                className="w-12 h-12 mx-auto text-[#cc83c0] opacity-60 hover:opacity-100 transition-opacity"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="pt-12 pb-24 bg-[#e3e3e3]">
        <div className="w-full px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
