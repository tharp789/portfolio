import ProjectDetail from '../../components/ProjectDetail';
import { blueHomeColor } from '../../assets';

export default function BlueHome() {
  return (
    <ProjectDetail 
      title="Blue Home Campaign"
      subtitle="Environmental awareness design campaign"
      date="Design Course Project"
      heroImage={blueHomeColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Campaign",
          content: `The Blue Home Campaign is an environmental awareness initiative focused on ocean 
            conservation. The project involved creating a cohesive visual identity across multiple 
            touchpoints including posters, digital media, and promotional materials.`,
          image: blueHomeColor,
          imagePosition: "right"
        },
        {
          title: "Visual Development",
          content: `The visual language uses a blue-dominant color palette to represent the ocean, 
            combined with organic shapes and environmental imagery. Typography choices balance 
            urgency with approachability to engage viewers without overwhelming them.`,
          image: blueHomeColor,
          imagePosition: "left"
        }
      ]}
    />
  );
}
