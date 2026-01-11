import ProjectDetail from '../../components/ProjectDetail';
import { clothImg } from '../../assets';

export default function ClothStudy() {
  return (
    <ProjectDetail 
      title="Cloth Study"
      subtitle="Fabric and drapery rendering"
      date="Drawing Course"
      heroImage={clothImg}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Study",
          content: `A detailed study of fabric folds and drapery. This exercise explores how cloth 
            behaves under gravity, how folds form at tension and compression points, and how light 
            interacts with different fabric textures. Understanding drapery is fundamental to 
            figure drawing and costume design.`,
          image: clothImg,
          imagePosition: "right"
        }
      ]}
    />
  );
}
