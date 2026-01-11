import ProjectDetail from '../../components/ProjectDetail';
import { lidarIcon } from '../../assets';

export default function LidarMount() {
  return (
    <ProjectDetail 
      title="LiDAR Sensor Mount"
      subtitle="Precision mounting system with FEA analysis"
      date="Engineering Design Project"
      heroImage={lidarIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `A precision-engineered mounting system for LiDAR sensors designed for robotics applications. 
            The mount ensures stable sensor positioning while minimizing vibration transmission that could 
            affect scan quality. The design underwent finite element analysis (FEA) to optimize structural 
            rigidity while minimizing weight.`,
          image: lidarIcon,
          imagePosition: "right"
        },
        {
          title: "Design Process",
          content: `The design process involved iterative CAD modeling, stress analysis, and prototype testing. 
            Multiple mounting configurations were evaluated for different sensor orientations and platform 
            integration requirements. The final design achieves a balance between adjustability and rigidity.`,
          image: lidarIcon,
          imagePosition: "left"
        }
      ]}
    />
  );
}
