import { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import ProductCreate from "./screens/CreateProduct/ProductCreate";
import ProductList from "./screens/ProductList/ProductList";
import ProductEdit from "./screens/ProductEdit/ProductEdit";
import ProductDetail from "./screens/ProductDetail/ProductDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";
import GitHub from "./screens/GitHub/GitHub";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/productList">
          <ProductList user={user} />
        </Route>
        <Route path="/add-product">
          {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user} />
        </Route>
        <Route exact path="/Support-us-on-GitHub">
          <GitHub />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
