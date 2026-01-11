import ProjectDetail from '../../components/ProjectDetail';
import { enjoyColor } from '../../assets';

export default function EnjoyLittleThings() {
  return (
    <ProjectDetail 
      title="Enjoy the Little Things"
      subtitle="Typography and illustration poster"
      date="Design Course Project"
      heroImage={enjoyColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Project",
          content: `An inspirational poster combining custom typography with hand-drawn illustration. 
            The design emphasizes the message through playful letterforms and whimsical visual elements. 
            The project explores the integration of text and image as unified visual communication.`,
          image: enjoyColor,
          imagePosition: "right"
        }
      ]}
    />
  );
}
