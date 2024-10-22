import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Search from "./pages/Search";

function App() {
  return (
    <div className="font-Agdasima flex">
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
            {/* Default Route Example */}
            <Route
              path="*"
              element={
                <div>
                  <h1>Welcome to the Homepage</h1>
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
