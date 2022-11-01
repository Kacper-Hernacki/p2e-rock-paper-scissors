import Choices from "./components/Choices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import Nav from "./components/Nav";
import Web3 from "web3";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      loadBlockchainData();
    }

    return () => {
      subscribed = false;
    };
  }, []);

  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network: " + network);
  };

  return (
    <div className="app">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/game/:itemId">
              <Game />
            </Route>
            <Route path="/">
              <Choices />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
