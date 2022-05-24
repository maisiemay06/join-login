import { useState } from "react";
import "./App.css";
import JoinLoginCard from "./components/JoinLoginCard";
import PageTitle from "./components/PageTitle";

function App() {
  const [pageTitle, setPageTitle] = useState("Login");

  return (
    <div className="App">
      <header className="App-header">
        <PageTitle pageTitle={pageTitle} />
      </header>

      <JoinLoginCard pageTitle={pageTitle} setPageTitle={setPageTitle} />

      <p className="contact">
        Having a problem?
        <a href=""> Contact us</a>
      </p>
    </div>
  );
}

export default App;
