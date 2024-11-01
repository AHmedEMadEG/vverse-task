import SectionHeader from "@/components/contract/SectionHeader";

const SummarySection = () => {
  return (
    <details className="collapse collapse-arrow" open>
      <summary className="collapse-title text-xl font-medium">
        <SectionHeader title="Contract Summary" />
      </summary>
      <div className="collapse-content">
        <div className="flex gap-2 me-2">
          <div className="flex justify-center bg-custom-gradient min-w-10 min-h-10 rounded-lg p-11">
            <img src="/deliverables-icons/musical.png" />
          </div>
          <p className="text-transparent bg-clip-text bg-text-gradient">
            &lt;This Will Be Sponsorship Name & It Can Be Over 2 Lines Based On
            Your Needs&gt;
          </p>
        </div>
        <hr className="my-4" />
        <div className="mt-2">
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Order ID:</p>
            <p className="">#ORDER-5362</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Tier</p>
            <p className="">&lt;Tier Name&gt;</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Sold By</p>
            <p className="">&lt;V-Customer Name&gt;</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Sold To</p>
            <p className="">&lt;V-Customer Name&gt;</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Price</p>
            <p className="">$100</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Escrow Amount</p>
            <p className="">$100</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Starting Date</p>
            <p className="">09-Sep-2023 05:45 PM</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="font-bold text-secondary">Delivery Date</p>
            <p className="">15-Sep-2023 05:45 PM</p>
          </div>
        </div>
      </div>
    </details>
  );
};

export default SummarySection;
