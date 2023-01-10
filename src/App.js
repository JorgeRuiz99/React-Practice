import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Link, Route } from "wouter";
import SearchResults from "./pages/SearchResults";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  // const [keyword, setKeyword] = useState("space");
  // const [quantity, setQuantity] = useState(5);

  return (
    <StaticContext.Provider
      value={{
        name: "LSK",
        SBR: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <div className="Logo">
              <img className="App-logo" alt="Logo" src="/logo1.jpg" />
            </div>

            <h3 className="Title">【 ＡＳＳＡＬＡＭＵＡＬＡＩＫＵＭ 】</h3>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
