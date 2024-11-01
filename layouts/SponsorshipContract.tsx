import DeliverablesSection from "./SponsorshipContractSections/DeliverablesSection";
import TrackerSection from "./SponsorshipContractSections/TrackerSection";
import SummarySection from "./SponsorshipContractSections/SummarySection";
import ActionsSection from "./SponsorshipContractSections/ActionsSection";
import PhasesSection from "./SponsorshipContractSections/PhasesSection";
import SupportSections from "./SponsorshipContractSections/SupportSections";

const SponsershipContract = () => {
  return (
    <div className="container mx-auto mt-6">
      {/* SPONSORSHIP CONTRACT HEADER */}
      <div className="flex items-center my-4">
        <div className="bg-custom-gradient rounded-full p-2 w-10 h-10 cursor-pointer">
          <img src="left-arrow.png" />
        </div>
        <div className="mx-3 font-bold text-2xl text-transparent bg-clip-text bg-text-gradient">
          Sponsorship Contract
        </div>
        <div className="hidden md:block flex-1 bg-custom-gradient h-[1px]" />
      </div>
      {/* SPONSORSHIP CONTRACT BODY */}
      <div className="xl:flex gap-4">
        {/* LEFT SIDE (UPPER IN MOBILE SCREENS) */}
        <div className="flex-[3] bg-white p-4 border-solid border rounded-lg">
          <TrackerSection />
          <DeliverablesSection />
        </div>
        {/* RIGHT SIDE (LOWER IN MOBILE SCREENS) */}
        <div className="flex-[1] bg-white p-4 border-solid border rounded-lg">
          <SummarySection />
          <ActionsSection />
          <PhasesSection />
          <SupportSections />
        </div>
      </div>
    </div>
  );
};

export default SponsershipContract;
