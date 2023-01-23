import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import { Home } from './views/Home';
import { DishScreen } from './screens/dish-screen/DishScreen';
import { SportsScreen } from './screens/sports-screen/SportsScreen';

export interface Items {
  id?: number | null | undefined
  title?: string
  description?: string
  url?: string | undefined
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dishscreen">
            <DishScreen />
          </Route>
          <Route path="/sportsscreen">
            <SportsScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
