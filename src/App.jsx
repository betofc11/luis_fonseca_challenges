import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toppings from './components/Toppings/Toppings';
import Table from './components/Table/Table';

function App() {
  const toppings = [
    'apple',
    'fried rice',
    'm&ms',
    'pear',
    'pineapple'
  ]

  const csv = 'nombre,edad,ciudad|Juan,25,Barcelona|María,30,Madrid|Pedro,28,Valencia|Laura,35,Sevilla|Carlos,40,Bilbao';

  return (
    <>
      <Toppings toppings={toppings}/>
      <Table csv={csv.replaceAll('|', '\n')} />
    </>
  )
}

export default App
