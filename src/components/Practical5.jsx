function Practical5() {

    const avatar =
        "https://react.dev/images/docs/scientists/7vQD0fPs.jpg";

    const description = "Gregorio Y. Zara";

    return (
        <div>
            <h1>Profile Picture</h1>

            <img
                className="avatar"
                src={avatar}
                alt={description}
            />

            <h3>{description}</h3>
        </div>
    );
}

export default Practical5;