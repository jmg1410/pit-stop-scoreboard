import { useEffect, useState } from "react";
import socket from "../socket"; // 👈 back out of /pages to import socket
import { useNavigate } from "react-router-dom";
import LogoHeader from "../components/LogoHeader";
import Layout from "../components/Layout";
import RacersInput from "../components/RacersInput";
import ActionsButtons from "../components/ActionsButtons";

const characterOptions = [
  { name: "Mario", icon: "/custom_mario_kart_icons/mario.jpg" },
  { name: "Luigi", icon: "/custom_mario_kart_icons/luigi.jpg" },
  { name: "Shy Guy", icon: "/custom_mario_kart_icons/shy guy.jpg" },
  { name: "Wario", icon: "/custom_mario_kart_icons/wario.jpg" },
  { name: "Waluigi", icon: "/custom_mario_kart_icons/waluigi.jpg" },
  { name: "Yoshi", icon: "/custom_mario_kart_icons/yoshi.jpg" },
];

function AddRacers() {
  const [racers, setRacers] = useState([{ name: "", character: "" }]);

  const navigate = useNavigate();

  

  useEffect(() => {
    socket.emit("test-message", "Yo server, its ya boy JAY!");
  }, []);

  const handleChange = (index, field, value) => {
    const updatedRacers = [...racers];
    updatedRacers[index][field] = value;
    setRacers(updatedRacers);
  };

  const addRacer = () => {
    setRacers([...racers, { name: "", character: "" }]);
  };

  const startSession = () => {
    console.log("Starting session with racers:", racers);
    navigate('/race')// TODO: Navigate to /race later
  };

  return (
    <Layout>
    <div>
    <RacersInput 
    racers={racers}
    handleChange={handleChange}
    characterOptions={characterOptions}
    />
     <ActionsButtons
     addRacer={addRacer}
     startSession={startSession}
     />
    </div>
    </Layout>
  );
}

export default AddRacers;