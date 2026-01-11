import ProjectDetail from '../../components/ProjectDetail';
import { charcoalColor } from '../../assets';

export default function CharcoalFoot() {
  return (
    <ProjectDetail 
      title="Charcoal Foot Study"
      subtitle="Traditional charcoal rendering"
      date="Drawing Course"
      heroImage={charcoalColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Study",
          content: `A detailed anatomical study of the human foot rendered in charcoal. This piece 
            explores value range, form, and the challenges of depicting complex anatomical structures. 
            The study focuses on understanding bone structure, skin texture, and the play of light 
            across curved surfaces.`,
          image: charcoalColor,
          imagePosition: "right"
        }
      ]}
    />
  );
}
