import SectionHeader from "@/components/contract/SectionHeader";

const SupportSections = () => {
  return (
    <details className="collapse collapse-arrow" open>
      <summary className="collapse-title text-xl font-medium">
        <SectionHeader title="Contract Support" />
      </summary>
      <div className="collapse-content">
        <div className="flex gap-2 border-slate-300 border-solid border rounded-lg p-4">
          <div className="flex items-center p-2 border-slate-300 border-solid border rounded-lg">
            <div className="min-w-12 max-h-12">
              <img src="/support-icons/warning.png" width={48} height={48} />
            </div>
          </div>
          <div>
            <p className="text-transparent bg-clip-text font-bold bg-text-gradient">
              Payment Protection
            </p>
            <p>
              Money Is Being Held In Escrow Until Successful Delivery Of The
              Contract
            </p>
          </div>
        </div>
        <div className="border-slate-300 border-solid border rounded-lg p-4 mt-3">
          <div className="flex">
            <div className="flex items-center p-2">
              <div className="min-w-10 max-h-10">
                <img src="/logo.png" width={40} height={40} />
              </div>
            </div>
            <div>
              <p className="text-transparent bg-clip-text font-bold bg-text-gradient">
                Need Help With This Contract?
              </p>
              <p>We Are Always Here For You</p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-center">
            <button className="flex items-center gap-2 text-white bg-custom-gradient rounded-3xl px-6 py-2">
              <img src="/support-icons/help-desk.png" width={20} height={20} />{" "}
              Visit Help Desk
            </button>
          </div>
        </div>
      </div>
    </details>
  );
};

export default SupportSections;
