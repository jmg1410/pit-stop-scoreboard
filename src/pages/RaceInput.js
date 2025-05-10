import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoHeader from "../components/LogoHeader";
import InputLogo from "../components/InputLogo";
import { useRacers } from "../context/RacerContext";

function RaceInput() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const navigate = useNavigate();
  const {updateRacerScore} = useRacers()
  const pointsByPosition = {
    1: 15,
    2: 12,
    3: 10,
    4:8,
    5:6,
    6:4,
    7:2
  }

  const getPointsForPosition = (pos) => pointsByPosition[pos] || 1;

  const points = getPointsForPosition(selectedPosition);

  

  const handleSubmit = () => {
    if (!selectedPosition) {
      alert("Please select your position before submitting!");
      return;
    }

    console.log("Selected position:", selectedPosition);
    updateRacerScore('Jay', selectedPosition)// Later: send to server here
    navigate("/scoreboard");
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-red-700 to-black text-white p-6 font-mono text-center">
       <InputLogo />
      

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto -mt-[65px]   justify-items-center ">
        {Array.from({ length: 12 }, (_, i) => {
          const position = i + 1;
          const isSelected = selectedPosition === position;

          return (
            <button
              key={position}
              onClick={() => setSelectedPosition(position)}
              className={`
               w-20 h-20
              rounded-full
              text-3xl font-kart text-black
              bg-yellow-300 border-4 border-white
              shadow-md hover:shadow-lg
              hover:scale-105 transition duration-200 
              ${isSelected ? 'ring-4 ring-white scale-110' : ''}
              `}
            >
              {position}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-10 px-6 py-3 bg-yellow-400 text-black font-kart rounded-xl hover:bg-yellow-300 transition-all mb-1"
      >
        Submit Placement
      </button>
    </div>
  );
}

export default RaceInput;