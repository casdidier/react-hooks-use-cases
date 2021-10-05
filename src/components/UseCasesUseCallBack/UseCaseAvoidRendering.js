/*
useCallback hook is used when you have a component in which the child is rerendering again and again without need.
Pass an inline callback and an array of dependencies.
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
*/

import React, { useCallback, useState, useEffect} from "react"



function List({ getItems }){

    /* Initial state of the items */
    const [items, setItems] = useState([]);

    /* This hook sets the value of items if
       getItems object changes */
    useEffect(() => {
        console.log("Fetching items");
        setItems(getItems());
    }, [getItems]);

    /* Maps the items to a list */
    return <div>
        {items.map(item => <div key={item}>{item}</div>)}
    </div>
}

function UseCaseAvoidRendering(){

    const [input, setInput] = useState(1);
    const [light, setLight] = useState(true);

    {/* useCallback memoizes the getItems() which
       returns a list of number which is number+10
       and number + 100 */}
    const getItems = useCallback(() => {
        return [input + 10, input + 100];
    }, [input]);

    const theme = {
        backgroundColor: light ? "White": "grey",
        color: light ? "grey" : "white"
    }


    return <>
        <div style={theme}>
            <input type="number"
            value={input}
            onChange={event =>
            setInput(parseInt(event.target.value))
            } />
            <button onClick={() =>
            setLight(prevLight =>
            !prevLight)}>{light ? "dark mode":"light mode"}
            </button>
            <List getItems={getItems} />
        </div>
    </>;
}

export default UseCaseAvoidRendering;