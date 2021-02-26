import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TodoReducer from "./components/TodoReducer";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/todo" exact component={Todo} />
          <Route path="/todo-reducer" exact component={TodoReducer} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
