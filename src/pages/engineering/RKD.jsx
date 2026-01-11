import ProjectDetail from '../../components/ProjectDetail';
import { RKDIcon } from '../../assets';

export default function RKD() {
  return (
    <ProjectDetail 
      title="Robot Arm Manipulation"
      subtitle="Advanced robotic kinematics and dynamics"
      date="Robotics Course Project"
      heroImage={RKDIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `This project focused on robot arm manipulation, exploring forward and inverse kinematics, 
            trajectory planning, and dynamic control. The work involved programming a multi-degree-of-freedom 
            robotic arm to perform precise manipulation tasks, implementing various control algorithms and 
            path planning strategies.`,
          image: RKDIcon,
          imagePosition: "right"
        }
      ]}
    />
  );
}
