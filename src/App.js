import './App.css';
import MovieCard from './Components/moviecard';
import { useState } from 'react';
import {data} from './Components/data'

import Add from './Components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filtre from './Components/Filtre';


function App() {
  const [dataMovie,setDataMovie] = useState(data)
  const AddMovie=(movie)=>{
    setDataMovie([...dataMovie,movie])
  }

  const [search,setSearch]= useState('');
  const [rate,setRate]= useState(0)



  return (
    <div className="App">

      <div style={{display:'flex',justifyContent:'space-around'}}>
      <Add AddMovie={AddMovie}/>
      <Filtre setSearch={setSearch} setRate={setRate}  rate={rate}/>
      </div>

      <MovieCard dataMovie={dataMovie.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()) && movie.rating>=rate)}/> 

    </div>
  );
}
export default App;
