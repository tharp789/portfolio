import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectDetail({ 
  title, 
  subtitle, 
  date, 
  heroImage, 
  sections = [],
  backLink = '/engineering',
  backLabel = 'Back to Engineering',
  accentColor = '#E8913A'
}) {
  return (
    <div>
      {/* Back Navigation */}
      <div className="bg-white px-12 py-4 pt-28">
        <Link 
          to={backLink}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-white overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-12 py-16 flex flex-col justify-end min-h-[60vh]">
          <motion.h1 
            className="text-6xl lg:text-8xl font-extrabold mb-4"
            style={{ color: accentColor }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            className="w-32 h-1.5 mb-6"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p 
            className="text-gray-700 text-2xl lg:text-3xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.p 
            className="text-gray-500 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {date}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section 
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-[#e3e3e3]' : 'bg-white'}`}
        >
          <div className="w-full px-12">
            <div className={`flex flex-col ${section.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              {/* Text */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: section.imagePosition === 'right' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 
                  className="text-4xl lg:text-5xl font-bold mb-8"
                  style={{ color: accentColor }}
                >
                  {section.title}
                </h2>
                <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed">
                  {section.content}
                </p>
              </motion.div>

              {/* Media */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: section.imagePosition === 'right' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {section.video ? (
                  <video 
                    controls 
                    className="w-full rounded-2xl shadow-2xl"
                    poster={section.image}
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
