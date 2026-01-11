import ProjectDetail from '../../components/ProjectDetail';
import { boatIcon } from '../../assets';

export default function CoralBot() {
  return (
    <ProjectDetail 
      title="CoralBot"
      subtitle="The autonomous coral reef monitoring robot"
      date="Robotics Capstone, January - May 2023"
      heroImage={boatIcon}
      accentColor="#E8913A"
      backLink="/engineering"
      backLabel="Back to Engineering"
      sections={[
        {
          title: "About the Project",
          content: `CoralBot is an autonomous coral reef surveying robot that takes reef health metrics 
            such as water data and specific species populations for scientists to predict reef decay better. 
            This was done for a year-long Robotics Capstone, and the video below served as our final demo. 
            It demonstrates our final functionality of the boat moving out to locations, deploying our 
            sensor package into the water at specified depths, and outputting these readings to an off-board computer.`,
          image: boatIcon,
          imagePosition: "right"
        },
        {
          title: "The Boat System",
          content: `The boat system features two motors which operate as a skid steer, controlled by ESCs 
            and operated by an Arduino with an IMU and a magnetometer to detect pose. The internal electronics 
            include batteries for powering all subsystems, along with a reel and chute system for deploying 
            the sensor package.`,
          image: boatIcon,
          imagePosition: "left"
        },
        {
          title: "The DSP System",
          content: `The Deployable Sensor Package (DSP) includes an Arduino wired to various water data 
            sensors like salinity, turbidity, temperature, and pH. This package is deployed from the boat 
            to collect underwater environmental data at specified depths, providing valuable metrics for 
            coral reef health assessment.`,
          image: boatIcon,
          imagePosition: "right"
        }
      ]}
    />
  );
}
