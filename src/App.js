import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

// Some comment
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;
