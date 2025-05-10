function RacersInput ({racers, handleChange, characterOptions}) {
    return (
        <div className="space-y-4 max-w-3xl mx-auto mt-[-140px]">
        {racers.map((racer, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 bg-blue-600 border-white rounded-xl p-4 shadow-lg"
          >
            <input
              type="text"
              placeholder="Racer"
              value={racer.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="p-2 rounded bg-white text-black w-full md:w-1/2 font-kart placeholder:italic"
            />
           <div className="flex items-center gap-4 w-full md:w-1/2">
  <select
    value={racer.character}
    onChange={(e) =>
      handleChange(index, "character", e.target.value)
    }
    className="w-full p-2 rounded bg-white text-black font-kart placeholder:italic focus:outline-none focus:ring-2 focus:ring-yellow-400"
  >
    <option value="">Select a character</option>
    {characterOptions.map((char) => (
      <option key={char.name} value={char.name}>
        {char.name}
      </option>
    ))}
  </select>
  {racer.character && (
    <img
      src={
        characterOptions.find((c) => c.name === racer.character)?.icon
      }
      alt={racer.character}
      className="w-10 h-10 rounded-full border-2 border-white"
    />
  )}
</div>

          </div>
        ))}
      </div>
    )
}

export default RacersInput