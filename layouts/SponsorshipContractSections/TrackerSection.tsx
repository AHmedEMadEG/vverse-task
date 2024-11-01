import SectionHeader from "@/components/contract/SectionHeader";
import TrackerItem from "@/components/contract/TrackerItem";

const ContractTrackerSection = () => {
  return (
    <div className="border-slate-300 border-solid border p-4 rounded-lg">
      <details className="collapse collapse-arrow" open>
        <summary className="collapse-title text-xl font-medium">
          <SectionHeader title="Contract Tracker" />
        </summary>
        <div className="collapse-content">
          {["rocket", "correct", "correct", "wrong", "correct"].map(
            (icon, index) => (
              <TrackerItem
                key={index}
                icon={icon}
                text="Your Contract Started With <V-Customer Name>"
                date="09-sep-2023 05:45 PM"
                first={index === 0}
                last={index === 4}
              />
            )
          )}
        </div>
      </details>
    </div>
  );
};

export default ContractTrackerSection;
