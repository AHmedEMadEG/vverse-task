interface props {
  icon: string;
  text: string;
  date: string;
  first: boolean;
  last: boolean;
}

const TrackerItem = ({ icon, text, date, first, last }: props) => {
  return (
    <>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center border-secondary border-solid border rounded-full p-3">
            <div className="flex justify-center min-w-10 min-h-10">
              <img src={`/tracker-icons/${icon}.png`} />
            </div>
          </div>
          <p>{text}</p>
        </div>
        <div className="lg:flex items-center gap-2">
          {date}
          {first && (
            <>
              <div className="hidden lg:block">{" | "}</div>
              <div className="cursor-pointer text-lg font-bold text-transparent bg-clip-text bg-text-gradient">
                View Requirements
              </div>
            </>
          )}
        </div>
      </div>
      {!last && <hr />}
    </>
  );
};

export default TrackerItem;
