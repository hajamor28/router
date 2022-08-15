import React from 'react'
import {data} from '../Components/data'
import { useState } from 'react';
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import Details from './Details';
const RouterComp = () => {
  const [dataMovie, setDataMovie] = useState(data)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<App dataMovie={dataMovie} setDataMovie={setDataMovie} />} />
          <Route path='/movie/:id_user' element={<Details dataMovie={dataMovie} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComp