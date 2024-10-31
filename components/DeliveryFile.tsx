interface props {
  icon: string;
}

const DeliveryFile = ({ icon }: props) => {
  return (
    <div className="flex justify-center w-28 h-28 border-slate-500 border-solid border rounded-lg p-11">
      <img src={`/${icon}.svg`} />
    </div>
  );
};

export default DeliveryFile;
