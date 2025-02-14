import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = props => {
    return (
        <nav>
            <ul className={classes['links-container']} >
                <li><Link to="/">Home</Link></li>
                <li>useState
                    <ul>
                        <li><Link to="/usestate/state-management">State Management</Link></li>
                        <li><Link to="/usestate/conditional-rendering">Conditional Rendering</Link></li>
                        <li><Link to="/usestate/toggle">Toggle Flags</Link></li>
                        <li><Link to="/usestate/counter">Counter</Link></li>
                        <li><Link to="/usestate/api">Get API data and store it in state</Link></li>
                    </ul>
                </li>
                <li>useReducer
                    <ul>
                        <li><Link to="/usereducer/multiple-states">Manage multiple states: modify an array</Link></li>
                        <li><Link to="/usereducer/complex-states">Modify complex states, such as arrays or objects: login form</Link></li>
                    </ul>
                </li>
                <li>useEffect
                    <ul>
                        <li><Link to="/useeffect/fetch-api">Running once on mount: fetch API data</Link></li>
                        <li><Link to="/useeffect/input-validation">Running on state change: validating input field</Link></li>
                        <li><Link to="/useeffect/live-filter">Running on state change: live filtering</Link></li>
                        <li><Link to="/useeffect/animation">Running on state change: trigger animation on new array value</Link></li>
                        <li><Link to="/useeffect/update-data">Running on props change: update paragraph list on fetched API data update</Link></li>
                        <li><Link to="/useeffect/update-api">Running on props change: updating fetched API data to get updated BTC price</Link></li>
                    </ul>
                </li>
                <li>useMemo
                    <ul>
                        <li><Link to="/usememo/sort">Expensive function call: get a list of Reddits and sort them alphabetically</Link></li>
                        <li><Link to="/usememo/initial-value">Expensive function call: create a complex initial value counting how many posts have more than 10 votes in a subreddit</Link></li>
                    </ul>
                </li>
                <li>useCallBack
                    <ul>
                        <li><Link to="/usecallback/avoid-rendering">Avoid unnecessary rendering</Link></li>
                    </ul>
                </li>
                <li>useContext
                    <ul>
                        <li><Link to="/usecontext/share-data">share data across components</Link></li>
                    </ul>
                </li>
                <li>useRef
                    <ul>
                        <li><Link to="/useref/create-mutable-value-not-re-render-ui">Create a mutable value that does not re-render the UI</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;