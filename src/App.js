import './App.css';
import { useState, useEffect } from "react"
import Links from './components/Links';
import TopBar from './components/TopBar'
import Display from './components/Display'

function App() {

  const [starships, setStarships] = useState(null)

  //accepts a url param so it can be called by onClick when user wants page 2
  async function getStarships(url) {
    // console.log(url)
    let response = await fetch(url)
    response = await response.json()
    // console.log("response obj", response)
    // let results = response.results
    // console.log("resultsarray", results)
    setStarships(response)
    // await console.log("starships variable", starships)
  }

  //runs the default url at pageload
  useEffect(() => { getStarships("https://swapi.dev/api/starships/") }, [])

  //makes sure there's something to parse
  if (starships) {
  return (
    <div className="App">
      <TopBar />
      <Links starships={starships} getStarships={getStarships}/>
      <Display starships={starships} />
    </div>
  );
      } else {return <h1>HOLD ON, JEDI</h1>}
}

export default App;


