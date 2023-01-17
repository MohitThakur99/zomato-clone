// HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

// components
import Temp from "./components/Temp";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
