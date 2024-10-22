import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Search from "./pages/Search";
import Tracker from "./pages/Tracker";

function App() {
  return (
    <div className="font-Agdasima flex bg-primary">
      <Router>
        <div className="w-14">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Search />
                </div>
              }
            />
            <Route
              path="/price"
              element={
                <div>
                  <Tracker />
                </div>
              }
            />
            {/* Default Route Example */}
            <Route
              path="*"
              element={
                <div>
                  <h1 className="text-3xl text-center">
                    Oops! 🚧 Under Construction
                  </h1>
                  <p className=" text-center">
                    It looks like you&apos;ve wandered into uncharted territory!
                    Our developer is still working on this part of the website.
                    🚀 <br />
                    Stay tuned—great things are coming soon. In the meantime,
                    why not head back and explore the rest of the site? 🎨
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
