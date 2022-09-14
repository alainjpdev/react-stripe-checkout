import "@stripe/stripe-js"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}
