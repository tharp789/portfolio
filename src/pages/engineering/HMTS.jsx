import ProjectDetail from '../../components/ProjectDetail';
import { HMTSIcon } from '../../assets';

export default function HMTS() {
  return (
    <ProjectDetail 
      title="Human Motion Tracking Sleeve"
      subtitle="Wearable sensor system for motion capture"
      date="Research Project"
      heroImage={HMTSIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `A wearable sleeve designed to capture human arm motion using an array of IMU sensors. 
            The system provides real-time motion tracking data that can be used for applications in 
            rehabilitation, sports analysis, and human-robot interaction. The sleeve features a comfortable 
            design with embedded electronics and wireless data transmission.`,
          image: HMTSIcon,
          imagePosition: "right"
        },
        {
          title: "System Design",
          content: `The motion tracking system uses multiple IMUs strategically placed along the arm to 
            capture joint angles and movement patterns. Custom signal processing algorithms filter and 
            combine sensor data to produce accurate motion estimates in real-time.`,
          image: HMTSIcon,
          imagePosition: "left"
        }
      ]}
    />
  );
}
