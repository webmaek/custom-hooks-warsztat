import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Pokemon from "./components/Pokemon/Pokemon";
import TodoReducer from "./components/Todo/TodoReducer";
import Todo from "./components/Todo/Todo";
import Form from "./components/Form/Form";
import Lotr from "./components/ReactQuery/LOTR";
import Calendar from "./components/ReactQuery/Calendar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/pokemon" exact component={Pokemon} />
          <Route path="/todo" exact component={Todo} />
          <Route path="/todo-reducer" exact component={TodoReducer} />
          <Route path="/form" exact component={Form} />
          <Route path="/lotr" exact component={Lotr} />
          <Route path="/calendar" exact component={Calendar} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
