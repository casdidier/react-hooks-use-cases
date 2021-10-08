import React, { createContext, useContext, useState } from 'react';

const moods = {
    happy : ':)',
    sad : ':('
}


const MoodContext = createContext(moods);

export default function UseCaseSharingData() {

    const [mood, setMood] = useState(':o')

    const switchMood = () => {
        if (mood === ':)') {
            setMood(':o')
        }
        else {
            setMood(':)')
        }
    }

    return (
        <MoodContext.Provider value={mood}>
            <MoodEmoji />
            <button onClick={switchMood}>Change my Mood</button>
        </MoodContext.Provider>
    )
}



function MoodEmoji() {

    const mood = useContext(MoodContext);

    return (
        <div>
            <p>{mood}</p>
        </div>
    )
}
