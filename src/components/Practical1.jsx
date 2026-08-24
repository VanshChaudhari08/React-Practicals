function Practical1() {

    const numbers = [23, 45, 78, 21, 98, 12, 45, 67];

    console.log("Original Array:", numbers);

    const doubledNumbers = numbers.map(num => num * 2);

    console.log("Doubled Array:", doubledNumbers);


    const evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log("Even Numbers:", evenNumbers);

    const sum = numbers.reduce((total, num) => total + num, 0);

    console.log("Sum of All Elements:", sum);

    const studentMarks = [75, 92, 51, 64, 76, 68, 59, 85, 65, 88];

    console.log("Student Marks:", studentMarks);

    const marksAbove80 = studentMarks.filter(mark => mark > 80);

    console.log("Marks Greater Than 80:", marksAbove80);

    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    console.log("Sorted Array (Ascending):", sortedNumbers);

    return (
        <div>
            <h1>Practical 1 - Arrow Functions</h1>

            <h3>Original Array</h3>
            <p>{numbers.join(", ")}</p>

            <h3>Doubled Array</h3>
            <p>{doubledNumbers.join(", ")}</p>

            <h3>Even Numbers</h3>
            <p>{evenNumbers.join(", ")}</p>

            <h3>Sum of All Elements</h3>
            <p>{sum}</p>

            <h3>Student Marks</h3>
            <p>{studentMarks.join(", ")}</p>

            <h3>Marks Greater Than 80</h3>
            <p>{marksAbove80.join(", ")}</p>

            <h3>Sorted Array (Ascending)</h3>
            <p>{sortedNumbers.join(", ")}</p>
        </div>
    );
}

export default Practical1;