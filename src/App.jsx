import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import "./components/Practical22.css";
// import { lazy } from "react";
import Practical1 from './components/Practical1'
import Practical2 from './components/Practical2'
import Practical3 from './components/Practical3'
import Practical4 from './components/Practical4'
import Practical5 from './components/Practical5'
import TodoList from './components/Practical6'
import Counter from './components/Practical7'
import Practical8 from './components/Practical8'
import Practical9 from './components/Practical9'
import Practical10 from './components/Practical10'
import Practical11 from './components/Practical11'
import Practical11_2 from './components/Practical11_2'
import DigitalClock from './components/Practical12'
import { createContext } from "react";
import Home from "./components/Home";
import Practical14Home from "./components/Practical14Home"
import College from './components/College'
import Practical16College from "./components/Practical16College";

import Practical17Header from "./components/Practical17Header";
import Practical17Footer from "./components/Practical17Footer";
import Practical17Home from "./components/Practical17Home";
import Practical17About from "./components/Practical17About";
import Practical17Contact from "./components/Practical17Contact";
import { Routes, Route } from "react-router-dom";
import Practical18 from './components/Practical18'
import Practical19 from './components/Practical19'
import Practical20 from "./components/Practical20";

import { Suspense, lazy } from "react";
import Practical22Navbar from "./components/Practical22Navbar";


import Practical21Header from "./components/Practical21Header";
import Practical21Footer from "./components/Practical21Footer";

import Practical21Products from "./components/Practical21Products";
import Practical21ProductDetails from "./components/Practical21ProductDetails";


const Practical21Home = lazy(
  () => import("./components/Practical21Home")
);

const Practical21About = lazy(
  () => import("./components/Practical21About")
);

const Practical21Contact = lazy(
  () => import("./components/Practical21Contact")
);


const Practical22Home = lazy(
  () => import("./components/Practical22Home")
);

const Practical22Students = lazy(
  () => import("./components/Practical22Students")
);

const Practical22About = lazy(
  () => import("./components/Practical22About")
);

export const UserContext = createContext();
export const FacultyContext = createContext();

function App() {
  // const [count, setCount] = useState(0)
  // const userInfo = {
  //       name: "Raj Mehta",
  //       email: "raj@gmail.com",
  //       class: "MCA"
  //   };

  // const facultyInfo = {
  //   username: "Raj Mehta",
  //   email: "raj@gmail.com",
  //   collegeName: "ABC College",
  //   department: "MCA",
  //   city: "Ahmedabad",
  //   state: "Gujarat"
  // };



  return (
    // <Practical1/>
    // <Practical2 />
    // <Practical3/>
    // <Practical4 />
    // <Practical5/>
    // <TodoList/>
    // <Counter/>
    // <Practical8/>
    // <Practical9 name="Harsh" />
    // <Practical10/>
    // <Practical11/>
    // <Practical11_2/>
    // <DigitalClock/>



    // <div>

    //   <UserContext.Provider value="Raj Mehta">

    //     <Home />

    //   </UserContext.Provider>

    // </div>


    // <div>
    // <UserContext.Provider value={userInfo}>
    //   <Practical14Home />
    // </UserContext.Provider>
    //     </div>

    // <College/>

    // <FacultyContext.Provider value={facultyInfo}>
    //   <Practical16College />
    // </FacultyContext.Provider>

    // <>
    //   <Practical17Header />

    //   <main className="container">
    //     <Routes>
    //       <Route path="/" element={<Practical17Home />} />
    //       <Route path="/about" element={<Practical17About />} />
    //       <Route path="/contact" element={<Practical17Contact />} />
    //     </Routes>
    //   </main>

    //   <Practical17Footer />
    // </>
    // <Practical18/>
    // <Practical19/>
    // <Practical20 />

    // <>
    //   <Practical21Header />

    //   <main className="container">

    //     <Suspense fallback={<h2>Loading...</h2>}>

    //       <Routes>

    //         <Route
    //           path="/"
    //           element={<Practical21Home />}
    //         />

    //         <Route
    //           path="/about"
    //           element={<Practical21About />}
    //         />

    //         <Route
    //           path="/contact"
    //           element={<Practical21Contact />}
    //         />

    //         <Route
    //           path="/products"
    //           element={<Practical21Products />}
    //         />

    //         <Route
    //           path="/products/:id"
    //           element={<Practical21ProductDetails />}
    //         />

    //       </Routes>

    //     </Suspense>

    //   </main>

    //   <Practical21Footer />
    // </>

    <div className="p22-page">

      <header className="p22-header">

        <Practical22Navbar />

      </header>


      <main className="p22-content">

        <Suspense
          fallback={
            <h2 className="p22-loading">
              Loading Page...
            </h2>
          }
        >

          <Routes>

            <Route
              path="/"
              element={<Practical22Home />}
            />

            <Route
              path="/students"
              element={<Practical22Students />}
            />

            <Route
              path="/about"
              element={<Practical22About />}
            />

          </Routes>

        </Suspense>

      </main>


      <footer className="p22-footer">
        © 2026 Practical 22 | React Router
      </footer>

    </div>
  );
}

export default App;
