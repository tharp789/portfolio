import ProjectDetail from '../../components/ProjectDetail';
import { eboardIcon } from '../../assets';

export default function Skateboard() {
  return (
    <ProjectDetail 
      title="Electric Skateboard"
      subtitle="Custom designed and built electric transportation"
      date="Personal Project"
      heroImage={eboardIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `A custom-built electric skateboard featuring a hand-picked component selection for optimal 
            performance. The project involved designing the electronics integration, motor mounting system, 
            and battery enclosure. The board achieves high speeds while maintaining reliability and safety 
            through custom firmware and fail-safe systems.`,
          image: eboardIcon,
          imagePosition: "right"
        },
        {
          title: "The Build",
          content: `The build process included CAD design for custom motor mounts, 3D printed enclosures, 
            and careful component selection for the ESC, battery management system, and wireless remote. 
            Every aspect was optimized for performance, durability, and rider safety.`,
          image: eboardIcon,
          imagePosition: "left"
        }
      ]}
    />
  );
}
