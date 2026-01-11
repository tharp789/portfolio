import { motion } from 'framer-motion';
import { 
  profileFull, 
  aboutPhoto1, 
  aboutPhoto2, 
  aboutPhoto3, 
  aboutPhoto4 
} from '../assets';

export default function About() {
  const education = [
    {
      title: "Carnegie Mellon University",
      subtitle: "Master of Science in Robotics | School of Computer Science",
      period: "December 2025",
      details: "GPA 4.0/4.0"
    },
    {
      title: "Carnegie Mellon University", 
      subtitle: "B.S. in Mechanical Engineering & Robotics | College of Engineering",
      period: "May 2023",
      details: "GPA 3.97/4.0"
    }
  ];

  const experience = [
    {
      title: "Autonomy Software Engineer",
      company: "Stealth Startup",
      period: "January 2025 - Present",
      points: [
        "Led object detection model data collection, annotation, and training pipelines for drone anti-poaching data",
        "Built augmented reality overlays and detection mapping features for real-time situational awareness",
        "Developed on-device infrastructure including CI image builds, live video streaming, and LoRa vehicle trackers"
      ]
    },
    {
      title: "Robotics Graduate Researcher",
      company: "AirLab",
      period: "Fall 2023 - November 2025",
      points: [
        "Designed autonomy and perception for a powerline-charging VTOL using classical and learning-based vision methods",
        "Researched mapping algorithms for deep learning-based depth estimation in ROS, utilizing OpenCV and PCL libraries"
      ]
    },
    {
      title: "Robotics Software Engineer Intern",
      company: "Symbotic",
      period: "Summer 2024",
      points: [
        "Led full production software deployment of a ROS and C++ based test stand for warehouse robot diagnostics",
        "Developed camera calibration system using OpenCV and AprilTags for onboard robot cameras"
      ]
    },
    {
      title: "Robotics Software Engineer Intern",
      company: "Gecko Robotics",
      period: "Summer 2023",
      points: [
        "Prototyped an Adaptive Extended Kalman Filter using Python for wheel encoder sensor fusion",
        "Implemented A-EKF in real-time using C++ and ROS2 with Docker and Git"
      ]
    }
  ];

  const skills = {
    software: ['Python', 'C++', 'ROS/ROS2', 'Rust', 'Bash', 'Linux', 'PX4', 'ArduPilot', 'Isaac Sim', 'Gazebo'],
    devops: ['Docker', 'Git/GitHub/GitLab', 'Google Cloud', 'CVAT', 'Supabase'],
    libraries: ['Eigen', 'Open3D', 'OpenCV', 'Pandas', 'PCL', 'PyTorch'],
    hardware: ['CAD', '3D Printing', 'Manual Machining', 'Motor Control', 'PCB Design', 'Rapid Prototyping']
  };

  const honors = [
    "Distinguished Military Graduate - Top 20% of Cadets Nationally",
    "Tau Beta Pi Engineering Honor Society - Executive Board",
    "Pi Tau Sigma Mechanical Engineering Honor Society - Executive Board",
    "Secret Security Clearance"
  ];

  const photos = [
    { src: aboutPhoto1, alt: "Tyler portrait" },
    { src: aboutPhoto2, alt: "Army photo" },
    { src: aboutPhoto3, alt: "Action shot" },
    { src: aboutPhoto4, alt: "Ohio Northern" },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-white flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#cc83c0] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FAA098] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#cc83c0] to-[#FAA098] rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />
              <img 
                src={profileFull} 
                alt="Tyler Harp" 
                className="relative rounded-3xl w-full shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-[#FAA098] text-5xl lg:text-7xl font-extrabold mb-6">
              About <span className="text-[#cc83c0]">Me</span>
            </h1>
            <p className="text-gray-700 text-xl leading-relaxed mb-6">
              I'm Tyler Harp, a Robotics Engineer with a Master of Science in Robotics from Carnegie Mellon University's 
              School of Computer Science and a Bachelor's in Mechanical Engineering & Robotics from CMU's College of Engineering.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Currently, I'm an Autonomy Software Engineer at a stealth startup, building drone-based anti-poaching systems 
              with object detection, AR overlays, and real-time situational awareness tools. Previously, I researched 
              VTOL perception and mapping algorithms at CMU's AirLab, and interned at Symbotic and Gecko Robotics 
              developing production robotics software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-[#E8913A] text-5xl font-extrabold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E8913A]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-[#1a1a2e] text-2xl font-bold">{exp.title}</h3>
                    <p className="text-[#E8913A] text-lg font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2">
                      <span className="text-[#E8913A] mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-[#c074b3] text-5xl font-extrabold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="bg-[#e3e3e3] rounded-2xl p-8 shadow-lg border-l-4 border-[#cc83c0]"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-[#1a1a2e] text-2xl font-bold">{edu.title}</h3>
                    <p className="text-[#cc85c0] text-lg mt-1">{edu.subtitle}</p>
                    <p className="text-gray-500 mt-1">{edu.details}</p>
                  </div>
                  <span className="text-[#c074b3] font-semibold mt-4 md:mt-0">{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-[#c074b3] text-5xl font-extrabold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Software */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#E8913A] text-xl font-bold mb-4">Software & Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.software.map((skill) => (
                  <span key={skill} className="bg-[#E8913A]/10 text-[#E8913A] px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#cc83c0] text-xl font-bold mb-4">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <span key={skill} className="bg-[#cc83c0]/10 text-[#cc83c0] px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Libraries */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[#c074b3] text-xl font-bold mb-4">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill) => (
                  <span key={skill} className="bg-[#c074b3]/10 text-[#c074b3] px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hardware */}
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-[#FAA098] text-xl font-bold mb-4">Hardware & Prototyping</h3>
              <div className="flex flex-wrap gap-2">
                {skills.hardware.map((skill) => (
                  <span key={skill} className="bg-[#FAA098]/10 text-[#FAA098] px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-[#c074b3] text-5xl font-extrabold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Gallery
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <motion.div 
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-24 bg-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            className="text-[#E8913A] text-5xl font-extrabold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Honors & Leadership
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honors.map((honor, index) => (
              <motion.div 
                key={honor}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-3 h-3 bg-[#E8913A] rounded-full flex-shrink-0" />
                <span className="text-gray-700 font-medium">{honor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
