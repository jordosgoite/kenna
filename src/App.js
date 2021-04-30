import React, { useEffect, useState } from 'react';
import NewDisplay from './components/NewDisplay';

const App =()=>{
  useEffect(()=>{
    load();
  },[])
  const load =()=>{
    fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1&limit=100')
    .then(response=>response.json())
    .then((result)=>{
      setResult(result.data.results)
    })
  }
  const [result, setResult] = useState([]);
  return(
    <NewDisplay data={result} />
  )
}
export default App
