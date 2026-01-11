import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ 
  to, 
  title, 
  colorImage, 
  bwImage, 
  className = '' 
}) {
  return (
    <Link to={to} className="group block">
      <motion.div 
        className={`relative overflow-hidden rounded-2xl bg-white shadow-lg ${className}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* BW Image (visible by default) */}
          <img 
            src={bwImage} 
            alt={title}
            className="absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-500 group-hover:opacity-0"
          />
          {/* Color Image (visible on hover) */}
          <img 
            src={colorImage} 
            alt={title}
            className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#cc83c0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-gray-700 text-xl font-bold text-center leading-tight group-hover:text-[#cc83c0] transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 60px rgba(204, 131, 192, 0.2), 0 0 40px rgba(204, 131, 192, 0.1)'
          }}
        />
      </motion.div>
    </Link>
  );
}

