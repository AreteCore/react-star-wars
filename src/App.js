import './App.css';
import { useState, useEffect } from "react"
import Links from './components/Links';
import TopBar from './components/TopBar'
import Display from './components/Display'

function App() {

  const [starships, setStarships] = useState(null)

  async function getStarships(url) {
    console.log(url)
    let response = await fetch(
       url
    )
    response = await response.json()
    console.log("response obj", response)
    // let results = response.results
    // console.log("resultsarray", results)
    setStarships(response)
    await console.log("starships variable", starships)
  }

  useEffect(() => { getStarships("https://swapi.dev/api/starships/") }, [])

  if (starships) {
  return (
    <div className="App">
      <TopBar />
      <Links starships={starships} getStarships={getStarships}/>
      <Display starships={starships} />
    </div>
  );
      } else {return <h3>HOLD UP, JEDI</h3>}
}

export default App;


