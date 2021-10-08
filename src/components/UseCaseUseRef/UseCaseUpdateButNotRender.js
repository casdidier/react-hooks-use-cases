// allow to create a mutable object that keep the same reference between renders
// The value can change without re-rendering the UI

import React, { useRef, useState } from 'react'

function UseCaseUpdateButNotRender() {

    const count = useRef(0);
    const [renderCount, setRenderCounter] = useState(1);

    console.log('I just rendered !!')

    return (
        <>
            <button onClick={() => count.current++}>
                +
            </button>
            <button onClick={() => alert(count.current)}>Show the current count</button>
            <button onClick={() => setRenderCounter(prevState => prevState + 1)}>Re-render</button>
            <p>my actual counter is {count.current}</p>
            <p>my actual render-counter is {renderCount}</p>
        </>
    );
}

export default UseCaseUpdateButNotRender;
