# 📚 Sem-III Practical Question Bank — Complete Answers (Hinglish)

> **Format:** DOCX files jaisa — Question → Code Files → Hinglish Explanation
> **Source:** Sem-III-Practical-Questions-List.pdf (Q1 to Q25)

---

## 🟢 SECTION 1: React Forms + State Management (Q1 - Q5)

---

### Q1. Employee Management Application

> Build an Employee Management application using React Functional Components.
> Enter employee name, email, and department. Add employee, display all employees dynamically, prevent empty fields, remove employee.

**Setup:**
```bash
npm create vite@latest employee-app -- --template react
cd employee-app
npm install
```

**App.jsx:**
```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);

  const addEmployee = () => {
    // Agar koi bhi field empty hai toh add mat karo
    if (name.trim() === "" || email.trim() === "" || department.trim() === "") {
      alert("Please fill all fields");
      return;
    }
    const newEmployee = {
      id: Date.now(),
      name: name,
      email: email,
      department: department,
    };
    setEmployees([...employees, newEmployee]);
    // Form clear karo
    setName("");
    setEmail("");
    setDepartment("");
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div style={{ width: "600px", margin: "30px auto" }}>
      <h1>Employee Management</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Enter Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <br /><br />
      <button onClick={addEmployee}>Add Employee</button>

      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>
                  <button onClick={() => removeEmployee(emp.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- 3 input fields hain — name, email, department. Har ek ke liye alag `useState`.
- `addEmployee()` — pehle check karta hai ki fields empty toh nahi, phir naya object array mein add karta hai.
- `Date.now()` se unique ID milti hai har employee ko.
- `removeEmployee()` — `filter()` se us employee ko remove karta hai jiska ID match kare.
- `employees.map()` se table mein dynamically employees render hote hain.

---

### Q2. Student Registration Form (with Validation)

> Create a Student Registration Form with Student Name, Email, Mobile Number, Course, City.
> Validate all required fields, email format, mobile format. Display validation messages. Display student details after successful submission.

**App.jsx:**
```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    city: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Student Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // Agar koi error nahi hai toh submit karo
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", mobile: "", course: "", city: "" });
    }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <br /><br />

        <label>Email</label>
        <br />
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <br /><br />

        <label>Mobile Number</label>
        <br />
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
        <br /><br />

        <label>Course</label>
        <br />
        <input type="text" name="course" value={formData.course} onChange={handleChange} />
        {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
        <br /><br />

        <label>City</label>
        <br />
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <p style={{ color: "red" }}>{errors.city}</p>}
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid green" }}>
          <h2>Student Details</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mobile:</strong> {submittedData.mobile}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
        </div>
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `formData` object mein saare fields store hain ek state mein.
- `handleChange` — dynamic hai, `[e.target.name]` se koi bhi field update ho sakti hai.
- `validate()` — har field check karta hai. Email regex `\S+@\S+\.\S+` se check hota hai. Mobile `^\d{10}$` se exactly 10 digits check hote hain.
- `Object.keys(validationErrors).length === 0` — agar koi error nahi toh form submit ho jayega.
- Submit hone ke baad `submittedData` mein data show hota hai aur form clear ho jata hai.

---

### Q3. Book Management Form

> React form with Book ID, Book Name, Author Name, Publication.
> Store data using state, validate all fields, display book details after submission, Clear Form button.

**App.jsx:**
```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    bookId: "",
    bookName: "",
    authorName: "",
    publication: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate — sabhi fields bhare hone chahiye
    if (
      !formData.bookId.trim() ||
      !formData.bookName.trim() ||
      !formData.authorName.trim() ||
      !formData.publication.trim()
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    setSubmittedData(formData);
  };

  const clearForm = () => {
    setFormData({ bookId: "", bookName: "", authorName: "", publication: "" });
    setSubmittedData(null);
    setError("");
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Book Management Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Book ID</label><br />
        <input type="text" name="bookId" value={formData.bookId} onChange={handleChange} />
        <br /><br />
        <label>Book Name</label><br />
        <input type="text" name="bookName" value={formData.bookName} onChange={handleChange} />
        <br /><br />
        <label>Author Name</label><br />
        <input type="text" name="authorName" value={formData.authorName} onChange={handleChange} />
        <br /><br />
        <label>Publication</label><br />
        <input type="text" name="publication" value={formData.publication} onChange={handleChange} />
        <br /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>{" "}
        <button type="button" onClick={clearForm}>Clear Form</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid green" }}>
          <h2>Book Details</h2>
          <p><strong>Book ID:</strong> {submittedData.bookId}</p>
          <p><strong>Book Name:</strong> {submittedData.bookName}</p>
          <p><strong>Author Name:</strong> {submittedData.authorName}</p>
          <p><strong>Publication:</strong> {submittedData.publication}</p>
        </div>
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- Simple form hai with 4 fields. Sab controlled components hain (`value` + `onChange`).
- Submit pe check hota hai ki koi field empty toh nahi — agar empty hai toh error message dikhega.
- "Clear Form" button pe `clearForm()` call hota hai — form aur displayed data dono clear ho jaate hain.

---

### Q4. Product Entry Form

> React form with Product Name, Price, Category, Quantity.
> Controlled components, validate all fields, price/quantity positive numbers, display submitted product, reset form after submission.

**App.jsx:**
```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    category: "",
    quantity: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.productName.trim()) newErrors.productName = "Product Name is required";
    if (!formData.price || Number(formData.price) <= 0)
      newErrors.price = "Price must be a positive number";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.quantity || Number(formData.quantity) <= 0)
      newErrors.quantity = "Quantity must be a positive number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      // Reset form
      setFormData({ productName: "", price: "", category: "", quantity: "" });
    }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Product Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label><br />
        <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
        {errors.productName && <p style={{ color: "red" }}>{errors.productName}</p>}
        <br /><br />

        <label>Price</label><br />
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
        {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
        <br /><br />

        <label>Category</label><br />
        <input type="text" name="category" value={formData.category} onChange={handleChange} />
        {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}
        <br /><br />

        <label>Quantity</label><br />
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        {errors.quantity && <p style={{ color: "red" }}>{errors.quantity}</p>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid green" }}>
          <h2>Product Details</h2>
          <p><strong>Product Name:</strong> {submittedData.productName}</p>
          <p><strong>Price:</strong> ₹{submittedData.price}</p>
          <p><strong>Category:</strong> {submittedData.category}</p>
          <p><strong>Quantity:</strong> {submittedData.quantity}</p>
        </div>
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `Number(formData.price) <= 0` — check karta hai ki price positive number hai ya nahi.
- Form submit hone ke baad automatically reset ho jata hai — `setFormData({...empty values})`.
- `submittedData` state mein last submitted data store hota hai.

---

### Q5. Feedback Management Application

> Collect customer feedback — Customer Name, Email, Rating (1-5), Comments.
> useState use karo, validate required fields, display submitted feedback dynamically, Delete Feedback button.

**App.jsx:**
```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    rating: "",
    comments: "",
  });
  const [feedbackList, setFeedbackList] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.customerName.trim() ||
      !formData.email.trim() ||
      !formData.rating ||
      !formData.comments.trim()
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    const newFeedback = { id: Date.now(), ...formData };
    setFeedbackList([...feedbackList, newFeedback]);
    setFormData({ customerName: "", email: "", rating: "", comments: "" });
  };

  const deleteFeedback = (id) => {
    setFeedbackList(feedbackList.filter((fb) => fb.id !== id));
  };

  return (
    <div style={{ width: "600px", margin: "30px auto" }}>
      <h1>Feedback Management</h1>
      <form onSubmit={handleSubmit}>
        <label>Customer Name</label><br />
        <input type="text" name="customerName" value={formData.customerName} onChange={handleChange} />
        <br /><br />
        <label>Email</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />
        <label>Rating (1-5)</label><br />
        <input type="number" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} />
        <br /><br />
        <label>Comments</label><br />
        <textarea name="comments" rows="3" value={formData.comments} onChange={handleChange}></textarea>
        <br /><br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit Feedback</button>
      </form>

      <h2>Submitted Feedback</h2>
      {feedbackList.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        feedbackList.map((fb) => (
          <div key={fb.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <p><strong>Name:</strong> {fb.customerName}</p>
            <p><strong>Email:</strong> {fb.email}</p>
            <p><strong>Rating:</strong> {"⭐".repeat(fb.rating)}</p>
            <p><strong>Comments:</strong> {fb.comments}</p>
            <button onClick={() => deleteFeedback(fb.id)}>Delete Feedback</button>
          </div>
        ))
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `feedbackList` array mein saare feedbacks store hote hain.
- Rating 1 se 5 ke beech honi chahiye — `min="1" max="5"` se HTML level pe restrict kiya.
- `"⭐".repeat(fb.rating)` — rating ke hisaab se stars dikhata hai.
- `deleteFeedback()` — `filter()` se specific feedback remove karta hai.

---

## 🔵 SECTION 2: React Router (Q6 - Q9)

**Common Setup for all Router programs:**
```bash
npm create vite@latest project-name -- --template react
cd project-name
npm install
npm install react-router-dom
```

**main.jsx mein yeh add karo (sabke liye same):**
```jsx
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### Q6. College Website

> College website with Home, Courses, About pages.
> React Router, NavLink, course & faculty info, active-link styling, common layout.

**App.jsx:**
```jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
```

**components/Header.jsx:**
```jsx
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>ABC College</h2>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>Courses</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      </nav>
    </header>
  );
}
export default Header;
```

**components/Footer.jsx:**
```jsx
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 ABC College. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
```

**components/Home.jsx:**
```jsx
function Home() {
  return (
    <div>
      <h1>Welcome to ABC College</h1>
      <p>We provide quality education in Computer Science and IT.</p>
    </div>
  );
}
export default Home;
```

**components/Courses.jsx:**
```jsx
function Courses() {
  const courses = [
    { name: "MCA", duration: "2 Years", faculty: "Prof. Raj Mehta" },
    { name: "BCA", duration: "3 Years", faculty: "Prof. Priya Shah" },
    { name: "MSc IT", duration: "2 Years", faculty: "Prof. Amit Patel" },
  ];
  return (
    <div>
      <h1>Our Courses</h1>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr><th>Course</th><th>Duration</th><th>Faculty</th></tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.faculty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Courses;
```

**components/About.jsx:**
```jsx
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>ABC College was established in 2000. We are dedicated to providing quality higher education.</p>
      <p><strong>Address:</strong> Ahmedabad, Gujarat</p>
      <p><strong>Phone:</strong> +91-9876543210</p>
    </div>
  );
}
export default About;
```

**App.css:**
```css
.header {
  background: #0d6efd;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
}
nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;
}
nav a:hover { color: yellow; }
.active { color: yellow; border-bottom: 2px solid yellow; }
.container { width: 80%; margin: 30px auto; min-height: 60vh; }
.footer { background: #0d6efd; color: white; text-align: center; padding: 15px; }
```

**Explanation (Hinglish):**
- `Header` aur `Footer` har page pe common hain — `Routes` ke bahar hain isliye.
- `NavLink` automatically active class deta hai jab current URL match ho.
- `Routes` mein 3 routes define kiye — `/`, `/courses`, `/about`.

---

### Q7. Online Shopping Portal Using React Router

> Home (welcome message), Products (list of products), About (portal info).
> Link for navigation, active link styling.

**App.jsx:**
```jsx
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return <div><h1>Welcome to ShopEasy!</h1><p>Your one-stop online shopping portal.</p></div>;
}

function Products() {
  const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mobile Phone", price: 25000 },
    { name: "Headphones", price: 2500 },
    { name: "Smartwatch", price: 8000 },
    { name: "Tablet", price: 30000 },
  ];
  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ₹{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About ShopEasy</h1>
      <p>ShopEasy is an online shopping portal offering a wide range of electronics and accessories.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <nav className="header">
        <h2>ShopEasy</h2>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `Link` / `NavLink` use karne se page reload nahi hota — SPA (Single Page Application) ka behaviour.
- Products list hardcoded hai — `map()` se render ho rahi hai.
- Active link ko `NavLink` automatically highlight karta hai `isActive` prop se.

---

### Q8. Student Information Portal

> Home, Student List, Student Details, About pages.
> At least 5 students, dynamic route `/students/:id`, display selected student's details, highlight active NavLink.

**App.jsx:**
```jsx
import { Routes, Route, NavLink, useParams, Link } from "react-router-dom";
import "./App.css";

const students = [
  { id: 1, name: "Raj Mehta", course: "MCA", city: "Ahmedabad", email: "raj@gmail.com" },
  { id: 2, name: "Priya Shah", course: "BCA", city: "Surat", email: "priya@gmail.com" },
  { id: 3, name: "Amit Patel", course: "MCA", city: "Vadodara", email: "amit@gmail.com" },
  { id: 4, name: "Neha Roy", course: "MSc IT", city: "Rajkot", email: "neha@gmail.com" },
  { id: 5, name: "Rahul Singh", course: "BCA", city: "Ahmedabad", email: "rahul@gmail.com" },
];

function Home() {
  return <div><h1>Welcome to Student Information Portal</h1></div>;
}

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StudentDetails() {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <h2>Student not found!</h2>;
  }
  return (
    <div>
      <h1>Student Details</h1>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>City:</strong> {student.city}</p>
      <p><strong>Email:</strong> {student.email}</p>
    </div>
  );
}

function About() {
  return <div><h1>About</h1><p>This portal displays student information.</p></div>;
}

function App() {
  return (
    <>
      <nav className="header">
        <h2>Student Portal</h2>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/students" className={({ isActive }) => (isActive ? "active" : "")}>Students</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `/students/:id` — dynamic route hai. `:id` variable hai jo URL se value lega.
- `useParams()` hook se URL ka `id` parameter milta hai.
- `students.find(s => s.id === Number(id))` — array mein wo student dhundhta hai.
- Agar student nahi mila toh "Student not found!" dikhega.
- `Link to={...}` se har student name clickable hai — click pe detail page khulega.

---

### Q9. Online Bookstore Navigation

> Home, Books, Book Details, Contact pages.
> At least 5 books, dynamic route parameters, navigate without reloading, Not Found page.

**App.jsx:**
```jsx
import { Routes, Route, NavLink, useParams, Link } from "react-router-dom";
import "./App.css";

const books = [
  { id: 1, name: "React in Action", author: "Mark T.", price: 450, description: "Learn React from scratch." },
  { id: 2, name: "Node.js Design Patterns", author: "Mario C.", price: 600, description: "Master Node.js patterns." },
  { id: 3, name: "JavaScript: The Good Parts", author: "Douglas C.", price: 350, description: "Core JS concepts." },
  { id: 4, name: "MongoDB in Action", author: "Kyle B.", price: 500, description: "Complete MongoDB guide." },
  { id: 5, name: "Full Stack Development", author: "Frank Z.", price: 700, description: "End-to-end web development." },
];

function Home() {
  return <div><h1>Welcome to Online Bookstore</h1><p>Browse our collection of tech books!</p></div>;
}

function BookList() {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.name}</Link> - by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  if (!book) return <h2>Book not found!</h2>;
  return (
    <div>
      <h1>{book.name}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <Link to="/books">← Back to Books</Link>
    </div>
  );
}

function Contact() {
  return <div><h1>Contact Us</h1><p>Email: bookstore@example.com</p><p>Phone: +91-9876543210</p></div>;
}

function NotFound() {
  return <div><h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p></div>;
}

function App() {
  return (
    <>
      <nav className="header">
        <h2>📚 Bookstore</h2>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/books" className={({ isActive }) => (isActive ? "active" : "")}>Books</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `path="*"` — yeh wildcard route hai. Koi bhi URL jo match nahi karta, usse NotFound page dikhega.
- Dynamic routing `/books/:id` se har book ki detail page banti hai.
- `Link to="/books"` se "Back to Books" navigation bina reload ke hota hai.

---

## 🟡 SECTION 3: MongoDB Integration (Q10 - Q14)

**Common Setup for all MongoDB programs:**
```bash
npm create vite@latest frontend-app -- --template react
cd frontend-app
npm install

# Backend folder alag banao
mkdir backend && cd backend
npm init -y
npm install express mongoose cors
```

> **Note:** MongoDB locally install hona chahiye ya MongoDB Atlas use karo. `mongod` running hona chahiye.

---

### Q10. Employee Registration with MongoDB

> Employee Name, Email, Department, Salary. Mongoose schema, Express POST route, insert into MongoDB, confirmation message.

**Backend — server.js:**
```js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
});
const Employee = mongoose.model("Employee", employeeSchema);

// POST route — employee data receive karo aur MongoDB mein save karo
app.post("/employees", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: "Employee registered successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "Error saving employee", error: error.message });
  }
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));
```

**Frontend — App.jsx:**
```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", department: "", salary: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ " + data.message);
        setFormData({ name: "", email: "", department: "", salary: "" });
      } else {
        setMessage("❌ " + data.message);
      }
    } catch (error) {
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Employee Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Employee Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br /><br />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required /><br /><br />
        <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- Backend pe `mongoose.Schema` se Employee ka structure define kiya.
- `new Employee(req.body)` — request body se naya document banata hai.
- `await employee.save()` — MongoDB mein save karta hai.
- Frontend se `fetch()` POST request bhejta hai JSON data ke saath.
- Success/Error message frontend pe show hota hai.

---

### Q11. Product Management Form with MongoDB

> Product Name, Price, Category, Quantity. Product schema, POST route, store in MongoDB, success message. DB name: shoppingDB.

**Backend — server.js:**
```js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/shoppingDB")
  .then(() => console.log("MongoDB connected to shoppingDB"))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
});
const Product = mongoose.model("Product", productSchema);

app.post("/products", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Error saving product", error: error.message });
  }
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));
```

**Frontend — App.jsx:** *(Q10 jaisa hi structure hai, bus fields alag hain)*
```jsx
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", price: "", category: "", quantity: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/products", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) { setMessage("✅ " + data.message); setFormData({ name: "", price: "", category: "", quantity: "" }); }
      else { setMessage("❌ " + data.message); }
    } catch (error) { setMessage("❌ Error: " + error.message); }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h1>Product Management Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required /><br /><br />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required /><br /><br />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required /><br /><br />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required /><br /><br />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
export default App;
```

---

### Q12. Student Registration with MongoDB (DB: employees)

> Student Name, Email, Mobile, Course, City. Mongoose schema, POST API, save in MongoDB. DB name: employees.

**Backend — server.js:** *(Same structure, DB name `employees`)*
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employees")
  .then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, email: { type: String, required: true },
  mobile: { type: String, required: true }, course: { type: String, required: true },
  city: { type: String, required: true },
});
const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
  try { const student = new Student(req.body); await student.save();
    res.status(201).json({ message: "Student registered successfully" });
  } catch (error) { res.status(500).json({ message: "Error", error: error.message }); }
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

**Frontend — App.jsx:** *(Same pattern — fields: name, email, mobile, course, city)*
```jsx
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({ name:"", email:"", mobile:"", course:"", city:"" });
  const [message, setMessage] = useState("");
  const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/students", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(formData) });
      const data = await res.json();
      if(res.ok){ setMessage("✅ "+data.message); setFormData({name:"",email:"",mobile:"",course:"",city:""}); }
      else { setMessage("❌ "+data.message); }
    } catch(err){ setMessage("❌ Error: "+err.message); }
  };
  return (
    <div style={{width:"500px", margin:"30px auto"}}>
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} required/><br/><br/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/><br/><br/>
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required/><br/><br/>
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required/><br/><br/>
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required/><br/><br/>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
export default App;
```

---

### Q13. Book Registration System with MongoDB

> Book ID, Book Name, Author Name, Publication. Mongoose schema, POST route, validate all required fields.

**Backend — server.js:**
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bookDB").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  bookId: { type: String, required: true }, bookName: { type: String, required: true },
  authorName: { type: String, required: true }, publication: { type: String, required: true },
});
const Book = mongoose.model("Book", bookSchema);

app.post("/books", async (req, res) => {
  try { const book = new Book(req.body); await book.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (error) { res.status(500).json({ message: "Error saving book", error: error.message }); }
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

**Frontend — App.jsx:** *(Same pattern — fields: bookId, bookName, authorName, publication)*
```jsx
import { useState } from "react";
function App() {
  const [formData, setFormData] = useState({ bookId:"", bookName:"", authorName:"", publication:"" });
  const [message, setMessage] = useState("");
  const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/books", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData) });
      const data = await res.json();
      if(res.ok){ setMessage("✅ "+data.message); setFormData({bookId:"",bookName:"",authorName:"",publication:""}); }
      else { setMessage("❌ "+data.message); }
    } catch(err){ setMessage("❌ Error: "+err.message); }
  };
  return (
    <div style={{width:"500px", margin:"30px auto"}}>
      <h1>Book Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bookId" placeholder="Book ID" value={formData.bookId} onChange={handleChange} required/><br/><br/>
        <input type="text" name="bookName" placeholder="Book Name" value={formData.bookName} onChange={handleChange} required/><br/><br/>
        <input type="text" name="authorName" placeholder="Author Name" value={formData.authorName} onChange={handleChange} required/><br/><br/>
        <input type="text" name="publication" placeholder="Publication" value={formData.publication} onChange={handleChange} required/><br/><br/>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
export default App;
```

---

### Q14. Customer Registration System

> Customer Name, Email, Mobile Number, Address. Mongoose schema, POST API, save in MongoDB, confirmation message.

**Backend — server.js:**
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/customerDB").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true }, email: { type: String, required: true },
  mobile: { type: String, required: true }, address: { type: String, required: true },
});
const Customer = mongoose.model("Customer", customerSchema);

app.post("/customers", async (req, res) => {
  try { const customer = new Customer(req.body); await customer.save();
    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) { res.status(500).json({ message: "Error", error: error.message }); }
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

**Frontend** — Same pattern as Q10-Q13, fields: `name, email, mobile, address`.

---

## 🟠 SECTION 4: REST APIs — In-Memory Array (Q15 - Q19)

> Yeh saare Node.js + Express programs hain — koi frontend nahi. **Postman se test karo.**

---

### Q15. Product REST API

> GET /products (return product array), POST /products (add product). Validate data. Test with Postman.

```js
const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 2500 },
];

// GET — sabhi products return karo
app.get("/products", (req, res) => {
  res.json(products);
});

// POST — naya product add karo
app.post("/products", (req, res) => {
  const { id, name, price } = req.body;
  // Validation
  if (!id || !name || !price) {
    return res.status(400).json({ message: "id, name, and price are required" });
  }
  const newProduct = { id, name, price };
  products.push(newProduct);
  res.status(201).json({ message: "Product added", product: newProduct });
});

app.listen(8080, () => console.log("Server running on http://localhost:8080"));
```

**Postman se test:**
- **GET** `http://localhost:8080/products` → products ki list milegi
- **POST** `http://localhost:8080/products` → Body mein JSON bhejo: `{"id":4, "name":"Tablet", "price":30000}`

---

### Q16. Employee REST API

> In-memory array. GET /employees (all), GET /employees/:id (one), POST /employees (add), DELETE /employees/:id (delete). Suitable status codes.

```js
const express = require("express");
const app = express();
app.use(express.json());

let employees = [
  { id: 1, name: "Raj", department: "IT", salary: 50000 },
  { id: 2, name: "Priya", department: "HR", salary: 45000 },
  { id: 3, name: "Amit", department: "IT", salary: 55000 },
];

app.get("/employees", (req, res) => { res.json(employees); });

app.get("/employees/:id", (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);
  if (emp) res.json(emp);
  else res.status(404).json({ message: "Employee not found" });
});

app.post("/employees", (req, res) => {
  const newEmp = req.body;
  employees.push(newEmp);
  res.status(201).json({ message: "Employee added", employee: newEmp });
});

app.delete("/employees/:id", (req, res) => {
  const index = employees.findIndex(e => e.id == req.params.id);
  if (index !== -1) {
    const deleted = employees.splice(index, 1);
    res.json({ message: "Employee deleted", employee: deleted[0] });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

---

### Q17. Student REST API

> id, name, course, city. GET (all), POST (add), PUT (update), DELETE (remove). Test with Postman.

```js
const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Rahul", course: "MCA", city: "Ahmedabad" },
  { id: 2, name: "Priya", course: "BCA", city: "Surat" },
  { id: 3, name: "Amit", course: "MCA", city: "Vadodara" },
];

app.get("/students", (req, res) => { res.json(students); });

app.post("/students", (req, res) => {
  students.push(req.body);
  res.status(201).json({ message: "Student added", student: req.body });
});

app.put("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    students[index] = req.body;
    res.json({ message: "Student updated", student: students[index] });
  } else res.status(404).json({ message: "Student not found" });
});

app.delete("/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  if (index !== -1) {
    const deleted = students.splice(index, 1);
    res.json({ message: "Student deleted", student: deleted[0] });
  } else res.status(404).json({ message: "Student not found" });
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

---

### Q18. Book REST API

> id, bookName, authorName, publication. GET, POST, PUT, DELETE. JSON responses.

```js
const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, bookName: "React Guide", authorName: "Mark T.", publication: "O'Reilly" },
  { id: 2, bookName: "Node Handbook", authorName: "Alex Y.", publication: "Packt" },
  { id: 3, bookName: "MongoDB Basics", authorName: "Kyle B.", publication: "Manning" },
];

app.get("/books", (req, res) => { res.json(books); });

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).json({ message: "Book added", book: req.body });
});

app.put("/books/:id", (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index !== -1) { books[index] = req.body; res.json({ message: "Book updated", book: books[index] }); }
  else res.status(404).json({ message: "Book not found" });
});

app.delete("/books/:id", (req, res) => {
  const index = books.findIndex(b => b.id == req.params.id);
  if (index !== -1) { const deleted = books.splice(index, 1); res.json({ message: "Book deleted", book: deleted[0] }); }
  else res.status(404).json({ message: "Book not found" });
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

---

### Q19. User Registration API

> Accept name, email, password via POST. Validate all fields. Check duplicate email. Don't return password in response.

```js
const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  // Validate — sabhi fields required hain
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields (name, email, password) are required" });
  }

  // Check duplicate email
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "Email already registered" });
  }

  // Save user
  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  // Response mein password mat bhejo
  res.status(201).json({
    message: "User registered successfully",
    user: { id: newUser.id, name: newUser.name, email: newUser.email }
  });
});

app.listen(8080, () => console.log("Server running on port 8080"));
```

**Explanation (Hinglish):**
- `409 Conflict` status code — jab email already exist kare.
- Response mein sirf `id, name, email` return kiya — **password nahi** (security ke liye).

---

## 🔴 SECTION 5: Full-Stack Applications (Q20, Q22, Q23, Q25)

---

### Q20. Full-Stack Employee Management (React + Express + MongoDB)

> Employee Name, Email, Department. POST and GET APIs. Display all employees in table. Success/error messages.

**Backend — server.js:**
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employeeMgmt").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const empSchema = new mongoose.Schema({
  name: { type: String, required: true }, email: { type: String, required: true }, department: { type: String, required: true },
});
const Employee = mongoose.model("Employee", empSchema);

// GET — sabhi employees lao
app.get("/employees", async (req, res) => {
  try { const employees = await Employee.find(); res.json(employees); }
  catch (err) { res.status(500).json({ message: "Error fetching employees" }); }
});

// POST — naya employee add karo
app.post("/employees", async (req, res) => {
  try { const emp = new Employee(req.body); await emp.save();
    res.status(201).json({ message: "Employee added successfully", employee: emp });
  } catch (err) { res.status(500).json({ message: "Error adding employee", error: err.message }); }
});

app.listen(8080, () => console.log("Server on port 8080"));
```

**Frontend — App.jsx:**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", department: "" });
  const [message, setMessage] = useState("");

  const fetchEmployees = async () => {
    try { const res = await fetch("http://localhost:8080/employees"); const data = await res.json(); setEmployees(data); }
    catch (err) { console.log(err); }
  };

  useEffect(() => { fetchEmployees(); }, []);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/employees", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) { setMessage("✅ " + data.message); setFormData({ name: "", email: "", department: "" }); fetchEmployees(); }
      else { setMessage("❌ " + data.message); }
    } catch (err) { setMessage("❌ Error: " + err.message); }
  };

  return (
    <div style={{ width: "700px", margin: "30px auto" }}>
      <h1>Employee Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
        <button type="submit">Add Employee</button>
      </form>
      {message && <p>{message}</p>}
      <h2>All Employees</h2>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead><tr><th>Name</th><th>Email</th><th>Department</th></tr></thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}><td>{emp.name}</td><td>{emp.email}</td><td>{emp.department}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
```

---

### Q22. Student Management System (Full CRUD — MongoDB)

> Student Name, Email, Course. Registration form, Save in MongoDB, Retrieve & display, Update, Delete, Validate.

**Backend — server.js:**
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentMgmt").then(() => console.log("MongoDB connected")).catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true }, email: { type: String, required: true }, course: { type: String, required: true },
});
const Student = mongoose.model("Student", studentSchema);

app.get("/students", async (req, res) => {
  const students = await Student.find(); res.json(students);
});

app.post("/students", async (req, res) => {
  try { const student = new Student(req.body); await student.save();
    res.status(201).json({ message: "Student added successfully" });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

app.put("/students/:id", async (req, res) => {
  try { const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (student) res.json({ message: "Student updated", student });
    else res.status(404).json({ message: "Student not found" });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

app.delete("/students/:id", async (req, res) => {
  try { const student = await Student.findByIdAndDelete(req.params.id);
    if (student) res.json({ message: "Student deleted" });
    else res.status(404).json({ message: "Student not found" });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

app.listen(8080, () => console.log("Server on port 8080"));
```

**Frontend — App.jsx:** *(Full CRUD — same pattern as Product Management in DOCX)*
```jsx
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const fetchStudents = async () => {
    const res = await fetch("http://localhost:8080/students"); const data = await res.json(); setStudents(data);
  };
  useEffect(() => { fetchStudents(); }, []);

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.course) { alert("All fields required"); return; }
    try {
      let res;
      if (editId) {
        res = await fetch(`http://localhost:8080/students/${editId}`, { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData) });
      } else {
        res = await fetch("http://localhost:8080/students", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData) });
      }
      const data = await res.json();
      setMessage(data.message); setFormData({ name:"", email:"", course:"" }); setEditId(null); fetchStudents();
    } catch(err){ setMessage("Error: "+err.message); }
  };

  const handleEdit = (student) => { setEditId(student._id); setFormData({ name:student.name, email:student.email, course:student.course }); };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this student?")) return;
    const res = await fetch(`http://localhost:8080/students/${id}`, { method:"DELETE" });
    const data = await res.json(); setMessage(data.message); fetchStudents();
  };

  return (
    <div style={{ width:"700px", margin:"30px auto" }}>
      <h1>Student Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
        <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required/>
        <button type="submit">{editId ? "Update" : "Add"} Student</button>
        {editId && <button type="button" onClick={()=>{setEditId(null); setFormData({name:"",email:"",course:""});}}>Cancel</button>}
      </form>
      {message && <p>{message}</p>}
      <table border="1" cellPadding="10" style={{width:"100%", marginTop:"20px"}}>
        <thead><tr><th>Name</th><th>Email</th><th>Course</th><th>Actions</th></tr></thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}><td>{s.name}</td><td>{s.email}</td><td>{s.course}</td>
              <td><button onClick={()=>handleEdit(s)}>Edit</button> <button onClick={()=>handleDelete(s._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
```

---

### Q23. Online Shopping Cart

> Display products with name/price. Add to cart. Increase/decrease quantities. Calculate total dynamically. Remove from cart. Cart summary.

**App.jsx:** *(Yeh sirf React hai — koi backend nahi chahiye)*
```jsx
import { useState } from "react";

const productList = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 2500 },
  { id: 4, name: "Smartwatch", price: 8000 },
  { id: 5, name: "Tablet", price: 30000 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCart(cart.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ width: "700px", margin: "30px auto" }}>
      <h1>Online Shopping Cart</h1>

      <h2>Products</h2>
      {productList.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "5px 0", display: "flex", justifyContent: "space-between" }}>
          <span>{product.name} — ₹{product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (<p>Cart is empty</p>) : (
        <>
          <table border="1" cellPadding="8" style={{ width: "100%" }}>
            <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Subtotal</th><th>Actions</th></tr></thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button onClick={() => decreaseQty(item.id)}>-</button>{" "}
                    {item.quantity}{" "}
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `addToCart()` — agar product pehle se cart mein hai toh quantity badhao, nahi toh naya add karo.
- `increaseQty` / `decreaseQty` — `+` / `-` buttons se quantity change hoti hai.
- `reduce()` se total amount dynamically calculate hota hai.
- `removeFromCart()` — `filter()` se product cart se remove hota hai.

---

### Q25. Library Management System (React + Express + MongoDB — Full CRUD)

> Book ID, Book Name, Author Name, Publication, Availability Status. Add, Store in MongoDB, Display table, Update availability, Delete, Success/error messages.

**Backend — server.js:**
```js
const express = require("express"); const mongoose = require("mongoose"); const cors = require("cors");
const app = express(); app.use(cors()); app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/libraryDB").then(()=>console.log("MongoDB connected")).catch(err=>console.log(err));

const bookSchema = new mongoose.Schema({
  bookId: { type: String, required: true }, bookName: { type: String, required: true },
  authorName: { type: String, required: true }, publication: { type: String, required: true },
  availability: { type: String, default: "Available" },
});
const Book = mongoose.model("Book", bookSchema);

app.get("/books", async (req,res) => { const books = await Book.find(); res.json(books); });

app.post("/books", async (req,res) => {
  try { const book = new Book(req.body); await book.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch(err) { res.status(500).json({ message: err.message }); }
});

app.put("/books/:id", async (req,res) => {
  try { const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(book) res.json({ message: "Book updated", book });
    else res.status(404).json({ message: "Book not found" });
  } catch(err) { res.status(500).json({ message: err.message }); }
});

app.delete("/books/:id", async (req,res) => {
  try { const book = await Book.findByIdAndDelete(req.params.id);
    if(book) res.json({ message: "Book deleted successfully" });
    else res.status(404).json({ message: "Book not found" });
  } catch(err) { res.status(500).json({ message: err.message }); }
});

app.listen(8080, () => console.log("Server on port 8080"));
```

**Frontend — App.jsx:**
```jsx
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({ bookId:"", bookName:"", authorName:"", publication:"", availability:"Available" });
  const [message, setMessage] = useState("");

  const fetchBooks = async () => { const res = await fetch("http://localhost:8080/books"); setBooks(await res.json()); };
  useEffect(() => { fetchBooks(); }, []);

  const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/books", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData) });
    const data = await res.json(); setMessage(data.message);
    setFormData({ bookId:"", bookName:"", authorName:"", publication:"", availability:"Available" }); fetchBooks();
  };

  const toggleAvailability = async (book) => {
    const newStatus = book.availability === "Available" ? "Not Available" : "Available";
    await fetch(`http://localhost:8080/books/${book._id}`, { method:"PUT", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ ...book, availability: newStatus }) });
    fetchBooks();
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this book?")) return;
    const res = await fetch(`http://localhost:8080/books/${id}`, { method:"DELETE" });
    const data = await res.json(); setMessage(data.message); fetchBooks();
  };

  return (
    <div style={{ width:"900px", margin:"30px auto" }}>
      <h1>Library Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="bookId" placeholder="Book ID" value={formData.bookId} onChange={handleChange} required/>
        <input type="text" name="bookName" placeholder="Book Name" value={formData.bookName} onChange={handleChange} required/>
        <input type="text" name="authorName" placeholder="Author Name" value={formData.authorName} onChange={handleChange} required/>
        <input type="text" name="publication" placeholder="Publication" value={formData.publication} onChange={handleChange} required/>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
      <table border="1" cellPadding="8" style={{ width:"100%", marginTop:"20px" }}>
        <thead><tr><th>Book ID</th><th>Name</th><th>Author</th><th>Publication</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.bookId}</td><td>{book.bookName}</td><td>{book.authorName}</td><td>{book.publication}</td>
              <td style={{ color: book.availability === "Available" ? "green" : "red" }}>{book.availability}</td>
              <td>
                <button onClick={()=>toggleAvailability(book)}>Toggle Status</button>{" "}
                <button onClick={()=>handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
```

**Explanation (Hinglish):**
- `availability` field ka default value "Available" hai.
- `toggleAvailability()` — "Available" ↔ "Not Available" toggle karta hai PUT request se.
- Green/Red color se status visually dikhta hai.
- `findByIdAndUpdate` — MongoDB mein ID se document update karta hai.
- `findByIdAndDelete` — MongoDB mein ID se document delete karta hai.

---

> 📝 **Yeh saare Q1 se Q25 ke complete answers hain — PDF ke practical question bank ke hisaab se.** DOCX files ka format follow kiya hai. Koi doubt ho toh pooch lo! 🚀
