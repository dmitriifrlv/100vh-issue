import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowSizeChange = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);
  return (
    <div className="App" style={{ height: height }}>
      <header className="top"></header>
      <div className="main"></div>
      <footer className="bottom"><button className="btn">Click</button></footer>
    </div>
  );
}

export default App;
