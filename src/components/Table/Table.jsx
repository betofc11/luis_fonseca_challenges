import React, { useState, useEffect, useMemo } from 'react'

function Table({ csv }) {

  const [date, setDate] = useState(new Date());

  const jsonData = useMemo(() => {
    console.log('jsonData')
    const startArr = csv.split('\n')
    const firstLine = startArr.shift().split(',')
    return startArr.map((line) => {
      let curLine = line.split(',');

      return firstLine.reduce(( acc, cur, index ) => {
        acc[cur] = curLine[index];
        return acc;
      }, {})
    })
  }, [csv]);



  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  )
}

export default Table