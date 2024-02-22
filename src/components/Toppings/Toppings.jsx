import React, { useEffect, useMemo, useState } from "react";

const wortsToppings = ["fried rice", "pear"];
function Toppings({ toppings }) {
  const [date, setDate] = useState(new Date());

  const goodToppings = useMemo(() => {
    console.log("Rendered");
    return toppings.filter((item) => !wortsToppings.includes(item));
  }, []);

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <h2>{date.toTimeString()}</h2>
      <ul>
        {goodToppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </>
  );
}

export default Toppings;
