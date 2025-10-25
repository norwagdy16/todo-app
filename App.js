import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import Router from "./src/Router/Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

