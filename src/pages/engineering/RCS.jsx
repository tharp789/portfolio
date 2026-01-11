import ProjectDetail from '../../components/ProjectDetail';
import { RCSIcon } from '../../assets';

export default function RCS() {
  return (
    <ProjectDetail 
      title="Roller Coaster Simulator"
      subtitle="C++ physics simulation and graphics"
      date="Computer Graphics Course Project"
      heroImage={RCSIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `A fully functional roller coaster simulator built in C++ using OpenGL for graphics rendering. 
            The project implements realistic physics simulation including gravity, momentum, and centripetal force 
            calculations. Users can design custom track layouts and experience the ride from a first-person 
            perspective with accurate physics-based motion.`,
          image: RCSIcon,
          imagePosition: "right"
        }
      ]}
    />
  );
}
