// HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

// components
import Temp from "./components/Temp";
import Master from "./components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
      <HomeLayoutHOC path="/:type" exact component={Master} />
    </>
  );
}

export default App;
