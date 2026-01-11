import ProjectDetail from '../../components/ProjectDetail';
import { snailColor } from '../../assets';

export default function SnailStudy() {
  return (
    <ProjectDetail 
      title="Snail Study"
      subtitle="Detailed observational drawing"
      date="Drawing Course"
      heroImage={snailColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Study",
          content: `A detailed observational study of a snail, focusing on capturing the unique 
            textures and forms of the shell spiral and soft body. The piece demonstrates careful 
            attention to surface qualities, from the smooth shell to the textured skin of the 
            creature itself.`,
          image: snailColor,
          imagePosition: "right"
        }
      ]}
    />
  );
}
