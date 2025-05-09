import { useState } from "react";

const characterOptions = [
  {name: 'Mario', icon: '/custom_mario_kart_icons/mario.jpg'},
  {name: 'Luigi', icon: '/custom_mario_kart_icons/luigi.jpg'},
  {name: 'Shy Guy', icon: '/custom_mario_kart_icons/shy guy.jpg'},
  {name: 'Wario', icon: '/custom_mario_kart_icons/wario.jpg'},
  {name: 'Waluigi', icon: '/custom_mario_kart_icons/waluigi.jpg'},
  {name: 'Yoshi', icon: '/custom_mario_kart_icons/yoshi.jpg'}
]

function App() {
  const [racers, setRacers] = useState([{name:'', character:''}])

  const handleChange = (index, field, value) => {
    const updatedRacers = [...racers];
    updatedRacers[index][field] = value;
    setRacers(updatedRacers)
  }

  const addRacer = () => {
    setRacers([...racers, {name:'', character: ''}])
  }

  const startSession = () => {
    console.log('starting session with racers:', racers)
  }


  return (
    <div className="min-h-screen bg-red-700 text-white p-6 font-mono">
       <div className="w-full h-4 bg-[repeating-linear-gradient(45deg,#fff_0_10px,#000_10px_20px)] mb-4"></div>

      <h1 className="text-4xl font-extrabold text-yellow-300 text-center mb-8 tracking-wide drop-shadow-md">
        Pit Stop Scoreboard 🏎️
      </h1>

      {/*Racers input field*/}
      <div className="space-y-4 max-w-2xl mx-auto">
        {racers.map((racer, index) => (
          <div key= {index}
           className="flex flex-col md:flex-row gap-4 bg-blue-600 border-white rounded-xl p-4 shadow-lg"
          >
            <input
            type="text"
            placeholder="Racer"
            value={racer.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="p-2 rounded bg-white text-black w-full md:w-1/2 font-bold placeholder:italic"
            />
            <div className="flex items-center gap-4 w-full md:w-1/2">
              <select
              value={racer.character}
              onChange={(e) => handleChange(index,'character',e.target.value)}
              className="p-2 rounded bg-white text-black w-full md:w-1/2 font-bold placeholder:italic"
              >
                <option value=''>Select a character</option>
                {characterOptions.map((char) => (
                  <option key={char.name} value={char.name}>{char.name}</option>
                ))}
              </select>
              {/*show icon if available */}
              {racer.character && (
                <img src={characterOptions.find(c => c.name === racer.character)?.icon}
                     alt={racer.character}
                     className="w-10 h-10 rounded-full border-2 border-white"
                />
              )}
            </div>
          </div>
  
        ))}
      </div>
      {/*Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
        onClick={addRacer}
        className="bg-yellow-400 text-black px-6 py-2 rounded-xl border-2 border-black hover:bg-yellow-300 transition-all duration-200"
         >+ Add Racer</button>
         
         <button
         onClick={startSession}
         className="bg-black text-white px-6 py-2 rounded-xl border-2 hover:bg-gray-800 font-extrabold transition-all duration-200"
         >Start Race!</button>

      </div>
    </div>
    
    
  )




}

export default App