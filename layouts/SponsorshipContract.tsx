import DeliveryFile from "@/components/contract/DeliveryFile";
import DeliveryGradFile from "@/components/contract/DeliveryGradFile";
import HorizontalLine from "@/components/contract/HorizontalLine";
import TrackerItem from "@/components/contract/TrackerItem";

const SponsershipContract = () => {
  return (
    <div className="container mx-auto mt-6">
      <div className="flex items-center my-4">
        <div className="bg-custom-gradient rounded-full p-2 w-10 h-10 cursor-pointer">
          <img src="left-arrow.png" />
        </div>
        <div className="mx-3 font-bold text-2xl text-transparent bg-clip-text bg-text-gradient">
          Sponsorship Contract
        </div>
        <HorizontalLine />
      </div>
      <div className="flex gap-4">
        <div className="flex-[3] bg-white p-4 border-solid border rounded-lg">
          <div className="border-slate-300 border-solid border p-4 rounded-lg">
            <details className="collapse collapse-arrow" open>
              <summary className="collapse-title text-xl font-medium">
                <div className="flex items-center">
                  <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                    Contract Tracker
                  </p>
                  <HorizontalLine />
                </div>
              </summary>
              <div className="collapse-content">
                <TrackerItem
                  icon="rocket"
                  text="Your Contact Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={true}
                  last={false}
                />
                <TrackerItem
                  icon="correct"
                  text="Your Contact Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={false}
                  last={false}
                />
                <TrackerItem
                  icon="correct"
                  text="Your Contact Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={false}
                  last={false}
                />
                <TrackerItem
                  icon="wrong"
                  text="Your Contact Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={false}
                  last={false}
                />
                <TrackerItem
                  icon="correct"
                  text="Your Contact Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={false}
                  last={true}
                />
              </div>
            </details>
          </div>
          <div className="mt-4 border-slate-300 border-solid border p-4 rounded-lg">
            <details className="collapse collapse-arrow" open>
              <summary className="collapse-title text-xl font-medium">
                <div className="flex items-center">
                  <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                    Contract Deliverables
                  </p>
                  <HorizontalLine />
                </div>
              </summary>
              <div className="collapse-content">
                <div className="flex">
                  <div className="flex content-center border-black border-solid border rounded-full me-2 p-2 w-10 h-10">
                    <img src="/deliverables-icons/docs.svg" />
                  </div>
                  <div>
                    <div className="flex-1 border-slate-300 border-solid border px-2 py-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-[#1a4c95] font-semibold">Delivery-1</p>
                        <div className="flex items-center">
                          <p>09-sep-2023 05:45 PM</p>
                          <div className="ms-3 bg-violet-900 px-6 py-2 rounded-3xl text-white">
                            Pending
                          </div>
                        </div>
                      </div>
                      <hr />
                      <p className="my-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati facilis reprehenderit debitis numquam
                        voluptate culpa.
                      </p>
                      <details className="collapse" open>
                        <summary className="collapse-title text-xl font-medium">
                          <div className="flex items-center">
                            <div className="flex items-center p-2 me-2 border-solid border rounded-3xl">
                              <img src="docs.svg" width={10} height={10} />
                              <p className="me-3 text-sm mx-1">Files</p>
                              <img src="dropdown.png" width={10} height={10} />
                            </div>
                            <HorizontalLine />
                          </div>
                        </summary>
                        <div className="collapse-content">
                          <div className="flex flex-wrap gap-2">
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
        </div>
        <div className="flex-[1] bg-white p-4 border-solid border rounded-lg"></div>
      </div>
    </div>
  );
};

export default SponsershipContract;
