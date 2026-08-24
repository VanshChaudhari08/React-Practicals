import { useState } from "react";

function Practical9(props) {

    const [showText, setShowText] = useState(true);

    const handleClick = () => {
        setShowText(!showText);
    };

    return (
        <div>
            <h2>
                {showText
                    ? `Hello, ${props.name}`
                    : `Bye, ${props.name}`}
            </h2>

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default Practical9;