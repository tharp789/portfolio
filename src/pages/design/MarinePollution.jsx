import ProjectDetail from '../../components/ProjectDetail';
import { marineColor } from '../../assets';

export default function MarinePollution() {
  return (
    <ProjectDetail 
      title="Marine Pollution Campaign"
      subtitle="Environmental awareness design series"
      date="Design Course Project"
      heroImage={marineColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Campaign",
          content: `A comprehensive design campaign addressing marine pollution and its impact on 
            ocean ecosystems. The project includes posters, infographics, and social media assets 
            designed to raise awareness and inspire action on ocean conservation.`,
          image: marineColor,
          imagePosition: "right"
        },
        {
          title: "Visual Strategy",
          content: `The campaign uses striking imagery juxtaposing marine life with pollution to 
            create emotional impact. Data visualization elements present complex environmental 
            statistics in accessible formats, while the overall design language maintains hope 
            alongside urgency.`,
          image: marineColor,
          imagePosition: "left"
        }
      ]}
    />
  );
}
