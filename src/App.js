import { Route, Routes } from "react-router-dom";
import "./styles.css";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Exercise } from "./pages/Exercise/Exercise";
import { Food } from "./pages/Food/Food";
import { Goals } from "./pages/Goals/Goals";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Error } from "./pages/Error/Error";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/food" element={<Food />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff"
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black"
            }
          }
        }}
      />
      <p className="footer-tagline">
        Check Backend{" "}
        <a href="https://replit.com/@OmkarPatil20/Fitness-Tracker-APIs">Here</a>{" "}
      </p>
    </div>
  );
}
