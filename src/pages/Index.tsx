import CoverPage from "@/components/CoverPage";
import MessageScrolls from "@/components/MessageScrolls";
import AncientVsModern from "@/components/AncientVsModern";
import IncubationVision from "@/components/IncubationVision";
import InnovationSparks from "@/components/InnovationSparks";
import TechSocialSpotlight from "@/components/TechSocialSpotlight";
import Timeline from "@/components/Timeline";
import StartupSpotlight from "@/components/StartupSpotlight";
import ActivityRewards from "@/components/ActivityRewards";

const Index = () => {
  return (
    <div className="smooth-scroll">
      <CoverPage />
      <MessageScrolls />
      <AncientVsModern />
      <IncubationVision />
      <InnovationSparks />
      <TechSocialSpotlight />
      <Timeline />
      <StartupSpotlight />
      <ActivityRewards />
    </div>
  );
};

export default Index;