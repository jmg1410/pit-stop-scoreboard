function ActionsButtons ({addRacer, startSession}) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
          onClick={addRacer}
          className="bg-yellow-400 text-black font-kart px-6 py-2 rounded-xl border-2 border-black hover:bg-yellow-300 transition-all duration-200"
        >
          + Add Racer
        </button>

        <button
          onClick={startSession}
          className="bg-black font-kart text-white px-6 py-2 rounded-xl border-2 hover:bg-gray-800 font-extrabold transition-all duration-200"
        >
          Start Race!
        </button>
      </div>
    )
}

export default ActionsButtons