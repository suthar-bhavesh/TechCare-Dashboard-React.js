import Respiratory from "../assets/Images/respiratory rate.png";
import Temperature from "../assets/Images/temperature.png";
import Heart from "../assets/Images/HeartBPM.png";

const HealthCards = ({ patient }) => {
  const cards = patient?.diagnosis_history?.at(-1);

  if (!cards) return null;

  return (
    <div className="grid md:grid-cols-3 gap-5 md:h-58 grid-cols-1">
      {/* Respiratory Rate */}
      <div className="bg-[#E0F3FA] p-4 rounded-2xl">
        <img src={Respiratory} alt="respiratory" className="mb-2" />

        <p className="text-[16px] text-gray-500">Respiratory Rate</p>

        <p className="text-[30px] font-bold">
          {cards.respiratory_rate.value} bpm
        </p>

        <p className="text-sm text-gray-500">{cards.respiratory_rate.levels}</p>
      </div>

      {/* Temperature */}
      <div className="bg-[#FFE6E9] p-4 rounded-2xl">
        <img src={Temperature} alt="temperature" className="mb-2" />

        <p className="text-[16px] text-gray-500">Temperature</p>

        <p className="text-[30px] font-bold">{cards.temperature.value}°F</p>

        <p className="text-sm text-gray-500">{cards.temperature.levels}</p>
      </div>

      {/* Heart Rate */}
      <div className="bg-[#FFE6F1] p-4 rounded-2xl">
        <img src={Heart} alt="heart" className="mb-2" />

        <p className="text-[16px] text-gray-500">Heart Rate</p>

        <p className="text-[30px] font-bold">{cards.heart_rate.value} bpm</p>

        <div className="flex items-center w-full">
          <p className="text-sm text-gray-500">{cards.heart_rate.levels}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthCards;
