import "./App.css";
import { Route, Switch, Link } from "react-router";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInPage from "./pages/sign-in/sign-in";
import SignUpPage from "./pages/sign-up/sign-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exect path="/signin" component={SignInPage} />
        <Route exect path="/signup" component={SignUpPage} />
      </Switch>
    </div>
  );
}
export default App;
