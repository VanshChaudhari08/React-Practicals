import { useState } from "react";
import Practical19Student from "./Practical19Student";
import "./Practical19.css";

function Practical19() {

    const [count, setCount] = useState(0);

    console.log("Parent rendered");

    return (
        <div className="memo-page">

            <div className="memo-container">

                <h1>React.memo Example</h1>

                <div className="counter-box">

                    <h2>Counter: {count}</h2>

                    <button onClick={() => setCount(count + 1)}>
                        Increase
                    </button>

                </div>

                <Practical19Student name="Raj Mehta" />

            </div>

        </div>
    );
}

export default Practical19;