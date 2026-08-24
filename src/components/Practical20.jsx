import { useMemo, useState } from "react";

function Practical20() {

    const [number, setNumber] = useState(5);
    const [count, setCount] = useState(0);

    const result = useMemo(() => {

        console.log("Calculation Executed");

        let total = 0;

        for (let i = 0; i < 100000000; i++) {
            total += number;
        }

        return total;

    }, [number]);

    return (
        <div className="memo-page">

            <div className="memo-box">

                <h1>useMemo Example</h1>

                <div className="section">

                    <h2>Number: {number}</h2>

                    <button
                        onClick={() => setNumber(number + 1)}
                    >
                        Change Number
                    </button>

                </div>

                <div className="section">

                    <h2>Counter: {count}</h2>

                    <button
                        onClick={() => setCount(count + 1)}
                    >
                        Increase Counter
                    </button>

                </div>

                <div className="result">
                    <h3>Result: {result}</h3>
                </div>

            </div>

        </div>
    );
}

export default Practical20;