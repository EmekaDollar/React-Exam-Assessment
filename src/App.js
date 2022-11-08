import React from "react";
import { Route, Routes} from "react-router-dom";
import About from "./components/About"
import AboutFeatures from "./components/AboutFeatures";
import AboutProducts from "./components/AboutProducts";
import Home from "./components/Home"
import Repo from "./components/Repo"
import PageNotFound from "./components/PageNotFound";
import GithubRepo from "./components/GithubRepo";
import {ErrorBoundary} from 'react-error-boundary';
import Error from "./components/Error";
import ErrorTest from "./components/ErrorTest";


function App() {
  return (
    <section className="App">
      <ErrorBoundary FallbackComponent={Error}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="products" element={<AboutProducts />} />
            <Route path="features" element={<AboutFeatures />} />
          </Route>
          <Route path="users" element={<Repo />}>
          <Route path="/users/:name" element={<GithubRepo/>}/>
          </Route>
          <Route path="error" element={<ErrorTest />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </ErrorBoundary>
    </section>
  );
}

export default App;
