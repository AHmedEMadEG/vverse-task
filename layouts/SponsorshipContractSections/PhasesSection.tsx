import SectionHeader from "@/components/contract/SectionHeader";

const phases = [
  { icon: "correct-filled.svg", text: "Contract Started" },
  { icon: "correct-filled.svg", text: "Contract Requirements" },
  { icon: "correct-filled.svg", text: "Contract In Progress" },
  { icon: "exclamation.png", text: "Contract Closure" },
];

const PhasesSection = () => {
  return (
    <details className="collapse collapse-arrow" open>
      <summary className="collapse-title text-xl font-medium">
        <SectionHeader title="Contract Phases" />
      </summary>
      <div className="collapse-content">
        <div className="flex flex-col ms-14 sm:ms-48 md:ms-64 lg:ms-96 xl:ms-0">
          {phases.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <img src={`/phases-icons/${icon}`} width={50} height={50} />
              <p className="text-xl text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </details>
  );
};

export default PhasesSection;
