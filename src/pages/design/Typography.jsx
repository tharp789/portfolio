import ProjectDetail from '../../components/ProjectDetail';
import { typographyIcon } from '../../assets';

export default function Typography() {
  return (
    <ProjectDetail 
      title="Typography Poster"
      subtitle="Experimental type design"
      date="Design Course Project"
      heroImage={typographyIcon}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Project",
          content: `An experimental typography poster exploring the visual potential of letterforms 
            beyond their linguistic function. The design plays with scale, weight, spacing, and 
            arrangement to create dynamic visual compositions while maintaining legibility as 
            a secondary consideration to aesthetic impact.`,
          image: typographyIcon,
          imagePosition: "right"
        }
      ]}
    />
  );
}
