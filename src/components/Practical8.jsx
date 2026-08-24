import { useState } from "react";

function Practical8() {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const add = () => {
        setResult(Number(num1) + Number(num2));
    };

    const subtract = () => {
        setResult(Number(num1) - Number(num2));
    };

    const multiply = () => {
        setResult(Number(num1) * Number(num2));
    };

    const divide = () => {
        if (Number(num2) === 0) {
            setResult("Cannot divide by zero");
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };

    return (
        <div className="calculator-page">

            <div className="calculator">

                <h2>Simple Calculator</h2>

                <input
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <div className="buttons">

                    <button onClick={add}>
                        Add (+)
                    </button>

                    <button onClick={subtract}>
                        Subtract (-)
                    </button>

                    <button onClick={multiply}>
                        Multiply (×)
                    </button>

                    <button onClick={divide}>
                        Divide (÷)
                    </button>

                </div>

                <h3>Result: {result}</h3>

            </div>

        </div>
    );
}

export default Practical8;