import DeliveryFile from "@/components/contract/DeliveryFile";
import DeliveryGradFile from "@/components/contract/DeliveryGradFile";
import HorizontalLine from "@/components/contract/HorizontalLine";
import SectionHeader from "@/components/contract/SectionHeader";

const ContractDeliverablesSection = () => {
  return (
    <div className="mt-4 border-slate-300 border-solid border p-4 rounded-lg">
      <details className="collapse collapse-arrow" open>
        <summary className="collapse-title text-xl font-medium">
          <SectionHeader title="Contract Deliverables" />
        </summary>
        <div className="collapse-content">
          <div className="flex">
            <div className="flex items-start">
              <div className="flex content-center me-2 p-2 border-black border-solid border rounded-full min-w-10 min-h-10">
                <img src="/deliverables-icons/docs.svg" />
              </div>
            </div>
            <div>
              <div className="flex-1 border-slate-300 border-solid border px-2 py-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-secondary font-semibold">Delivery-1</p>
                  <div className="flex items-center">
                    <p className="hidden md:block">09-sep-2023 05:45 PM</p>
                    <div className="ms-3 bg-violet-900 px-6 py-2 rounded-3xl text-white">
                      Pending
                    </div>
                  </div>
                </div>
                <hr />
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati facilis reprehenderit debitis numquam voluptate
                  culpa.
                </p>
                <details className="collapse" open>
                  <summary className="collapse-title text-xl font-medium">
                    <div className="flex items-center">
                      <div className="flex items-center p-2 me-2 border-solid border rounded-3xl">
                        <img
                          src="/deliverables-icons/docs.svg"
                          width={10}
                          height={10}
                        />
                        <p className="me-3 text-sm mx-1">Files</p>
                        <img src="dropdown.png" width={10} height={10} />
                      </div>
                      <HorizontalLine />
                    </div>
                  </summary>
                  <div className="collapse-content">
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      <DeliveryGradFile icon="video" />
                      <DeliveryGradFile icon="musical" />
                      <DeliveryGradFile icon="video" />
                      <DeliveryFile icon="word" />
                      <DeliveryFile icon="excel" />
                      <DeliveryFile icon="word" />
                      <DeliveryFile icon="powerpoint" />
                      <DeliveryFile icon="docs" />
                    </div>
                  </div>
                </details>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                <button className="text-white bg-violet-900 rounded-3xl px-6 py-2 hover:bg-red-400">
                  Decline
                </button>
                <button className="text-white bg-custom-gradient rounded-3xl px-6 py-2">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default ContractDeliverablesSection;
