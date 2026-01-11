import ProjectDetail from '../../components/ProjectDetail';
import { longboardColor } from '../../assets';

export default function Longboard() {
  return (
    <ProjectDetail 
      title="Longboard Design"
      subtitle="Custom deck graphics and branding"
      date="Personal Project"
      heroImage={longboardColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Project",
          content: `Custom longboard deck graphics combining personal style with functional design 
            considerations. The project involved creating original artwork that works within the 
            unique canvas shape of a longboard deck while maintaining visual impact from different 
            viewing angles.`,
          image: longboardColor,
          imagePosition: "right"
        },
        {
          title: "Design Process",
          content: `The design process began with concept sketches exploring different themes and 
            styles. The final design balances bold graphics that are visible while riding with 
            detailed elements that reward closer inspection. Color choices consider both aesthetic 
            and practical durability concerns.`,
          image: longboardColor,
          imagePosition: "left"
        }
      ]}
    />
  );
}
