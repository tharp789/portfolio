import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { 
  directoryBG,
  boatIcon,
  boatIconBW,
  RKDIcon,
  RKDIconBW,
  RCSIcon,
  RCSIconBW,
  eboardIcon,
  eboardIconBW,
  HMTSIcon,
  HMTSIconBW,
  droneIcon,
  droneIconBW,
  lidarIcon,
  lidarIconBW,
} from '../assets';

export default function Engineering() {
  const projects = [
    {
      to: '/engineering/coralbot',
      title: 'CoralBot Autonomous Boat',
      colorImage: boatIcon,
      bwImage: boatIconBW,
    },
    {
      to: '/engineering/rkd',
      title: 'Robot Arm Manipulation',
      colorImage: RKDIcon,
      bwImage: RKDIconBW,
    },
    {
      to: '/engineering/rcs',
      title: 'C++ Roller Coaster Simulator',
      colorImage: RCSIcon,
      bwImage: RCSIconBW,
    },
    {
      to: '/engineering/skateboard',
      title: 'Custom Electric Skateboard',
      colorImage: eboardIcon,
      bwImage: eboardIconBW,
    },
    {
      to: '/engineering/hmts',
      title: 'Human Motion Tracking Sleeve',
      colorImage: HMTSIcon,
      bwImage: HMTSIconBW,
    },
    {
      to: '/engineering/drone',
      title: 'Drone Deployment System',
      colorImage: droneIcon,
      bwImage: droneIconBW,
    },
    {
      to: '/engineering/lidar-mount',
      title: 'LiDAR Sensor Mount',
      colorImage: lidarIcon,
      bwImage: lidarIconBW,
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
            className="text-[#E8913A] text-5xl lg:text-7xl font-extrabold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Engineering Work
          </motion.h1>
          <motion.p 
            className="text-[#E8913A]/70 text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I have a passion for learning about both software and hardware, and thus, my work 
            is a mix of mechatronics, robotics, and pure software. Through personal experimentation 
            and school projects, I've gained a wide background in mechanical, electrical, and 
            software engineering and I use these skills to make complex mechatronic systems.
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
                className="w-12 h-12 mx-auto text-[#E8913A] opacity-60 hover:opacity-100 transition-opacity"
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
