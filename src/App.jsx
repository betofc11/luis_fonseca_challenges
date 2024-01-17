import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const [date, setDate] = useState(new Date());

  const increment = (by = 1) => setCount((prevState) => (prevState += by));
  const decrement = (by = 1) => setCount((prevState) => (prevState -= by));
  
  const handleChange = (event) => setCount(Number(event.target.value));

  useEffect(() => {
    fetch("https://ghibliapi.dev/films")
      .then((res) => res.json())
      .then((res) => {
        const resSorted = res.sort(
          (a, b) => Number(b.release_date) - Number(a.release_date)
        );
        setMovies(resSorted);
      });
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(event.target.documentElement.scrollTop)
    }

    document.addEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <h1>Week 2 - useState/Counter</h1>
      <div className="card">
        <button className="bg-green" onClick={() => decrement(10)}>
          -10
        </button>
        <button className="bg-yellow" onClick={() => decrement()}>
          -1
        </button>

        <input type="number" value={count} onChange={handleChange} />

        <button className="bg-yellow" onClick={() => increment()}>
          +1
        </button>
        <button className="bg-green" onClick={() => increment(10)}>
          +10
        </button>
      </div>

      <h1>Week 2 - useEffect/API</h1>
      <div className="card movie-list">
        <ul>
          {movies.map((item) => (
            <li key={item.id}>
              {item.title}, <span className="date">{item.release_date}</span>
            </li>
          ))}
        </ul>
      </div>

      <h1>Week 2 - useEffect/Clock</h1>
      <div className="card clock">
        <time dateTime={date.toISOString()}>
          {date.toTimeString().split(" ")[0]}
        </time>
      </div>
    </>
  );
}

export default App;
