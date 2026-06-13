import { Route, Switch } from "wouter";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import HomePage from "./pages/index";
import ShopPage from "./pages/shop";
import ProductPage from "./pages/product";
import AboutPage from "./pages/about";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shop/:slug" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route>
          {/* 404 */}
          <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{ background: "var(--black)", color: "var(--cream)" }}
          >
            <div
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "8rem", color: "var(--red)" }}
            >
              404
            </div>
            <p style={{ fontFamily: "'Oswald', sans-serif", opacity: 0.5 }}>Page introuvable</p>
          </div>
        </Route>
      </Switch>
      {import.meta.env.DEV && <AgentFeedback />}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
