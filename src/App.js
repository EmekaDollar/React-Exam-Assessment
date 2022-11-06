import React from "react";
import { Route, Routes} from "react-router-dom";
import About from "./components/About"
import AboutFeatures from "./components/AboutFeatures";
import AboutProducts from "./components/AboutProducts";
import Home from "./components/Home"
import Users from "./components/Users";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <section className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="products" element={<AboutProducts />} />
            <Route path="features" element={<AboutFeatures />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </section>
  );
}

export default App;
