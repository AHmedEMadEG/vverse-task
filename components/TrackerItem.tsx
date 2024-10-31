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
          <div className="border-black border-solid border rounded-full p-3 w-12 h-12">
            <img src={`/${icon}.png`} />
          </div>
          <p>{text}</p>
        </div>
        <p>
          {date}
          {first && (
            <>
              <span>{" | "}</span>
              <span className="cursor-pointer text-lg font-bold text-transparent bg-clip-text bg-text-gradient">
                View Requirements
              </span>
            </>
          )}
        </p>
      </div>
      {!last && <hr />}
    </>
  );
};

export default TrackerItem;
