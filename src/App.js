import Choices from "./components/Choices";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <nav>
            <button>Connect wallet</button>
            <Counter />
          </nav>
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
