import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  waveWrap,
  profileFull,
  directoryBG,
  aboutMeImg,
  engIcon,
  engIconBW,
  engIconGlow,
  designIcon,
  designIconBW,
  designGlow,
} from '../assets';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const waveY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const profileY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-white" style={{ overflow: 'hidden' }}>
        {/* Wave Background */}
        <motion.div 
          className="absolute -left-[10%] -right-[10%] bottom-[-20%] z-10"
          style={{ y: waveY }}
        >
          <img 
            src={waveWrap} 
            alt="" 
            className="w-full h-auto animate-wave"
          />
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="absolute bottom-[-10%] left-[15%] z-20"
          style={{ y: profileY }}
        >
          <img 
            src={profileFull} 
            alt="Tyler Harp" 
            className="h-[105vh] w-auto"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div 
          className="absolute top-[15%] left-[50%] z-30"
          style={{ y: textY }}
        >
          <h1 className="text-[#FAA098] text-8xl lg:text-9xl font-extrabold leading-[0.85] opacity-0 animate-slide-in-right delay-500">
            Hello,<br />
            I'm <span className="text-[#cc83c0]">Tyler</span>
          </h1>
          <p className="mt-8 text-[#FAA098] text-2xl font-medium leading-relaxed opacity-0 animate-slide-in-right delay-1500">
            Robotics, Engineering,<br />and Design
          </p>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="relative h-screen bg-[#e3e3e3] flex items-center">
        {/* Background Pattern */}
        <div className="absolute -inset-[25%] opacity-20 pointer-events-none">
          <img 
            src={directoryBG} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full px-[10%] flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image */}
          <motion.div 
            className="lg:w-[30%] h-[75vh]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl overflow-hidden bg-[#c9c9c9] shadow-2xl h-full">
              <img 
                src={aboutMeImg} 
                alt="About Tyler" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div 
            className="lg:w-[45%] lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-[#c074b3] text-8xl lg:text-8xl font-extrabold mb-6">
              About Me
            </h2>
            <p className="text-[#cc85c0] text-xl lg:text-3xl leading-[1.5] mb-8">
              My name is Tyler Harp and I am currently pursuing a Masters in Mechanical 
              Engineer with a concentration in Robotic and Control Systems from Carnegie Mellon.
              My undergrad was also at Carnegie Mellon where I studied many topics like Engineering, 
              Mechatronics, Robotics, and Design. Through my unique and multi-disciplinary
              background, I hope to enter industry to help create complex and ground breaking 
              robotic systems that seek to enable humans, rather than replace them.
            </p>
            <Link 
              to="/about"
              className="inline-block px-12 py-5 rounded-full bg-[#cf86c3] text-white font-bold text-xl
                border-2 border-[#cf86c3] transition-all duration-300
                hover:bg-transparent hover:text-[#c074b3] hover:border-[#c074b3]"
            >
              Find out more about me!
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="relative h-screen bg-white">
        <div className="h-full flex overflow-hidden">
          {/* Engineering Box */}
          <Link 
            to="/engineering" 
            className="group relative w-1/2 h-full flex items-center justify-center overflow-visible"
          >
            {/* BW Icon */}
            <img 
              src={engIconBW} 
              alt="" 
              className="absolute h-[70%] w-auto left-[-5%] top-[15%] z-10 
                transition-all duration-700 group-hover:opacity-0 
                group-hover:scale-150 group-hover:translate-x-[5vw]"
            />
            {/* Color Icon */}
            <img 
              src={engIcon} 
              alt="" 
              className="absolute h-[70%] w-auto left-[-5%] top-[15%] z-10 opacity-0
                transition-all duration-700 group-hover:opacity-100 
                group-hover:scale-150 group-hover:translate-x-[5vw]"
            />
            {/* Glow */}
            <img 
              src={engIconGlow} 
              alt="" 
              className="absolute inset-0 w-full h-full z-5 opacity-0
                transition-opacity duration-700 group-hover:opacity-100"
            />
            {/* Text */}
            <h2 className="absolute right-0 z-20 text-[#E8913A] text-5xl lg:text-7xl font-extrabold 
              opacity-0 translate-x-0 transition-all duration-700
              group-hover:opacity-100 group-hover:translate-x-1/2">
              Engineering
            </h2>
          </Link>

          {/* Design Box */}
          <Link 
            to="/design" 
            className="group relative w-1/2 h-full flex items-center justify-center overflow-visible"
          >
            {/* BW Icon */}
            <img 
              src={designIconBW} 
              alt="" 
              className="absolute h-[90%] w-auto right-[-20%] top-[5%] z-10 
                transition-all duration-700 group-hover:opacity-0 
                group-hover:scale-140 group-hover:translate-x-[-6vw]"
            />
            {/* Color Icon */}
            <img 
              src={designIcon} 
              alt="" 
              className="absolute h-[90%] w-auto right-[-20%] top-[5%] z-10 opacity-0
                transition-all duration-700 group-hover:opacity-100 
                group-hover:scale-140 group-hover:translate-x-[-6vw]"
            />
            {/* Glow */}
            <img 
              src={designGlow} 
              alt="" 
              className="absolute inset-0 w-full h-full z-5 opacity-0
                transition-opacity duration-700 group-hover:opacity-100"
            />
            {/* Text */}
            <h2 className="absolute left-0 z-20 text-[#BC68AA] text-5xl lg:text-7xl font-extrabold 
              opacity-0 translate-x-0 transition-all duration-700
              group-hover:opacity-100 group-hover:-translate-x-1/2">
              Design
            </h2>
          </Link>
        </div>
      </section>
    </div>
  );
}
