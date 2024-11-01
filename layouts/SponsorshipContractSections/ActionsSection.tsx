import SectionHeader from "@/components/contract/SectionHeader";

const ActionsSection = () => {
  return (
    <details className="collapse collapse-arrow" open>
      <summary className="collapse-title text-xl font-medium">
        <SectionHeader title="Contract Actions" />
      </summary>
      <div className="collapse-content">
        <div className="flex justify-center">
          <button className="font-semibold text-white bg-custom-gradient rounded-3xl px-1 py-3 w-[100%] max-w-96">
            Submit Delivery
          </button>
        </div>
      </div>
    </details>
  );
};

export default ActionsSection;
