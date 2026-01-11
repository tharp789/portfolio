import ProjectDetail from '../../components/ProjectDetail';
import { bnwColor } from '../../assets';

export default function BraveNewWorld() {
  return (
    <ProjectDetail 
      title="Brave New World"
      subtitle="Book cover design exploration"
      date="Design Course Project"
      heroImage={bnwColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "About the Project",
          content: `A reimagined book cover design for Aldous Huxley's "Brave New World." The design 
            captures the dystopian themes of the novel through symbolic imagery and a contemporary 
            visual style that would appeal to modern readers while honoring the classic work.`,
          image: bnwColor,
          imagePosition: "right"
        }
      ]}
    />
  );
}
