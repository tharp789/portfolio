import ProjectDetail from '../../components/ProjectDetail';
import { liveColor } from '../../assets';

export default function Live25() {
  return (
    <ProjectDetail 
      title="25Live Redesign"
      subtitle="UI/UX redesign of campus room booking system"
      date="Design Course Project"
      heroImage={liveColor}
      accentColor="#cc83c0"
      backLink="/design"
      backLabel="Back to Design"
      sections={[
        {
          title: "The Challenge",
          content: `25Live is Carnegie Mellon's room booking system, used daily by students and faculty. 
            The original interface was cluttered and unintuitive, making simple tasks unnecessarily complex. 
            This redesign project aimed to create a cleaner, more user-friendly experience while maintaining 
            all necessary functionality.`,
          image: liveColor,
          imagePosition: "right"
        },
        {
          title: "The Solution",
          content: `The redesigned interface features a simplified navigation structure, clearer visual hierarchy, 
            and improved information architecture. Key improvements include a streamlined booking flow, 
            better calendar visualization, and responsive design for mobile access.`,
          image: liveColor,
          imagePosition: "left"
        }
      ]}
    />
  );
}
