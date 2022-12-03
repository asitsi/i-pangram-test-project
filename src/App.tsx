import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const Home = lazy(() => import("./pages/Home"));

  return (
    <Suspense fallback={<h1 className="loading">Loading...</h1>}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={<Home />}
          />
          <Route
            path={"*"}
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
