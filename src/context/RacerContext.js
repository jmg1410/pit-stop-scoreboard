import { createContext, useContext, useState } from "react";

const RacerContext = createContext();

export const RacerProvider = ({children}) => {
    const [racers, setRacers] = useState([
        {name:'', character: '', points:0}
    ])

    const updateRacerScore = (name, position) => {
        const pointsByPosition = {
            1:15,2:12,3:10,4:8,5:6,6:4,7:2
        }
        const points = pointsByPosition[position] || 1;

        setRacers((prev) =>
        prev.map((racer) => 
        racer.name === name
        ? {...racer, points: racer.points + points}
        : racer
        )
        )
    }
    return (
        <RacerContext.Provider value={{racers,setRacers,updateRacerScore}}>
            {children}
        </RacerContext.Provider>
    )
}

export const useRacers = () => useContext(RacerContext)