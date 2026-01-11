import ProjectDetail from '../../components/ProjectDetail';
import { droneIcon } from '../../assets';

export default function Drone() {
  return (
    <ProjectDetail 
      title="Drone Deployment System"
      subtitle="Autonomous UAV launch and recovery"
      date="Engineering Project"
      heroImage={droneIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `A mechanical system designed for autonomous drone deployment and recovery. The project 
            addresses the challenge of launching and retrieving UAVs from mobile platforms or confined spaces. 
            The system features automated mechanisms for secure drone storage, controlled launch sequences, 
            and precision landing assistance.`,
          image: droneIcon,
          imagePosition: "right"
        }
      ]}
    />
  );
}
