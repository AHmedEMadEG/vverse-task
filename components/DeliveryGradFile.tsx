interface props {
  icon: string;
}

const DeliveryGradFile = ({ icon }: props) => {
  return (
    <div className="flex justify-center bg-black w-28 h-28 rounded-lg p-11">
      <img src={`/${icon}.png`}/>
    </div>
  );
};

export default DeliveryGradFile;
