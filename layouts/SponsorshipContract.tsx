import DeliveryFile from "@/components/contract/DeliveryFile";
import DeliveryGradFile from "@/components/contract/DeliveryGradFile";
import HorizontalLine from "@/components/contract/HorizontalLine";
import TrackerItem from "@/components/contract/TrackerItem";

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
        {/* LEFT SIDE */}
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
                  text="Your Contract Started With <V-Customer Name>"
                  date="09-sep-2023 05:45 PM"
                  first={true}
                  last={false}
                />
                <TrackerItem
                  icon="correct"
                  text="Your Contract Started With <V-Customer Name>"
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
                  <div className="flex items-start">
                    <div className="flex content-center me-2 p-2 border-black border-solid border rounded-full min-w-10 min-h-10">
                      <img src="/deliverables-icons/docs.svg" />
                    </div>
                  </div>
                  <div>
                    <div className="flex-1 border-slate-300 border-solid border px-2 py-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-secondary font-semibold">
                          Delivery-1
                        </p>
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
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-[1] bg-white p-4 border-solid border rounded-lg">
          <details className="collapse collapse-arrow" open>
            <summary className="collapse-title text-xl font-medium">
              <div className="flex items-center">
                <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                  Contract Summary
                </p>
                <HorizontalLine />
              </div>
            </summary>
            <div className="collapse-content">
              <div className="flex gap-2 me-2">
                <div className="flex justify-center bg-custom-gradient w-14 h-14 rounded-lg p-11">
                  <img src="/deliverables-icons/docs.svg" />
                </div>
                <p className="text-transparent bg-clip-text bg-text-gradient">
                  &lt;This Will Be Sponsorship Name & It Can Be Over 2 Lines
                  Based On Your Needs&gt;
                </p>
              </div>
              <hr className="my-4"/>
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
          <details className="collapse collapse-arrow" open>
            <summary className="collapse-title text-xl font-medium">
              <div className="flex items-center">
                <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                  Contract Actions
                </p>
                <HorizontalLine />
              </div>
            </summary>
            <div className="collapse-content">
              <div className="flex justify-center">
                <button className="font-semibold text-white bg-custom-gradient rounded-3xl px-1 py-3 w-[100%] max-w-96">
                  Submit Delivery
                </button>
              </div>
            </div>
          </details>
          <details className="collapse collapse-arrow" open>
            <summary className="collapse-title text-xl font-medium">
              <div className="flex items-center">
                <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                  Contract Phases
                </p>
                <HorizontalLine />
              </div>
            </summary>
            <div className="collapse-content">
              <div className="flex flex-col ms-14 sm:ms-48 md:ms-64 lg:ms-96 xl:ms-0">
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/phases-icons/correct-filled.svg"
                    width={50}
                    height={50}
                  />
                  <p className="text-xl text-slate-600">Contract Started</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/phases-icons/correct-filled.svg"
                    width={50}
                    height={50}
                  />
                  <p className="text-xl text-slate-600">
                    Contract Requirements
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/phases-icons/correct-filled.svg"
                    width={50}
                    height={50}
                  />
                  <p className="text-xl text-slate-600">Contract In Progress</p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/phases-icons/exclamation.png"
                    width={50}
                    height={50}
                  />
                  <p className="text-xl text-slate-600">Contract Closure</p>
                </div>
              </div>
            </div>
          </details>
          <details className="collapse collapse-arrow" open>
            <summary className="collapse-title text-xl font-medium">
              <div className="flex items-center">
                <p className="me-3 text-transparent bg-clip-text font-bold bg-text-gradient">
                  Contract Support
                </p>
                <HorizontalLine />
              </div>
            </summary>
            <div className="collapse-content">
              <div className="flex gap-2 border-slate-300 border-solid border rounded-lg p-4">
                <div className="flex items-center p-2 border-slate-300 border-solid border rounded-lg">
                  <div className="min-w-12 max-h-12">
                    <img
                      src="/support-icons/warning.png"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-transparent bg-clip-text font-bold bg-text-gradient">
                    Payment Protection
                  </p>
                  <p>
                    Money Is Being Held In Escrow Until Successful Delivery Of
                    The Contract
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
                    <img
                      src="/support-icons/help-desk.png"
                      width={20}
                      height={20}
                    />{" "}
                    Visit Help Desk
                  </button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default SponsershipContract;
