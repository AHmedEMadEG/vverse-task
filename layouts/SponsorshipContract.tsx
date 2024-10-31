import DeliveryFile from "@/components/DeliveryFile";
import DeliveryGradFile from "@/components/DeliveryGradFile";
import HorizontalLine from "@/components/HorizontalLine";
import NavItem from "@/components/NavItem";
import TrackerItem from "@/components/TrackerItem";

const SponsershipContract = () => {
  return (
    <div className="container ms-auto mt-6">
      <div className="flex items-center my-4">
        <div className="bg-black rounded-full p-2 w-10 h-10 cursor-pointer">
          <img src="left-arrow.png" />
        </div>
        <div className="mx-3">Sponsorship Contract</div>
        <HorizontalLine />
      </div>
      <div className="flex gap-4">
        <div className="flex-[3] bg-white p-4 border-solid border rounded-lg">
          <div className="border-slate-300 border-solid border p-4 rounded-lg">
            <details className="collapse collapse-arrow">
              <summary className="collapse-title text-xl font-medium">
                <div className="flex items-center">
                  <p className="me-3">Contract Tracker</p>
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
            <details className="collapse collapse-arrow">
              <summary className="collapse-title text-xl font-medium">
                <div className="flex items-center">
                  <p className="me-3">Contract Deliverables</p>
                  <HorizontalLine />
                </div>
              </summary>
              <div className="collapse-content">
                <div className="flex">
                  <div className="flex content-center border-black border-solid border rounded-full me-2 p-2 w-10 h-10">
                    <img src="docs.svg" />
                  </div>
                  <div>
                    <div className="flex-1 border-slate-300 border-solid border px-2 py-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p>Delivery-1</p>
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
                      <details className="collapse">
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
                            <DeliveryFile icon="docs" />
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
                      <button className="text-white bg-black rounded-3xl px-6 py-2 hover:bg-green-600">
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
