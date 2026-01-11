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
    <div className="pt-24">
      {/* Back Navigation */}
      <div className="bg-[#0f0f23] px-8 py-4">
        <Link 
          to={backLink}
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-[#0f0f23] overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-[#0f0f23]/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-24 flex flex-col justify-end min-h-[70vh]">
          <motion.h1 
            className="text-5xl lg:text-7xl font-extrabold mb-4"
            style={{ color: accentColor }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 mb-6"
            style={{ backgroundColor: accentColor }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p 
            className="text-white/80 text-2xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          <motion.p 
            className="text-white/50 text-lg"
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
          className={`py-24 ${index % 2 === 0 ? 'bg-[#1a1a2e]' : 'bg-[#0f0f23]'}`}
        >
          <div className="max-w-6xl mx-auto px-8">
            <div className={`flex flex-col ${section.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Text */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: section.imagePosition === 'right' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 
                  className="text-3xl lg:text-4xl font-bold mb-6"
                  style={{ color: accentColor }}
                >
                  {section.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
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

