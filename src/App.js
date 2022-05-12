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

{
  // MGLT: "60"
  // cargo_capacity: "3000000"
  // consumables: "1 year"
  // cost_in_credits: "3500000"
  // created: "2014-12-10T14:20:33.369000Z"
  // crew: "30-165"
  // edited: "2014-12-20T21:23:49.867000Z"
  // films: (3)['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
  // hyperdrive_rating: "2.0"
  // length: "150"
  // manufacturer: "Corellian Engineering Corporation"
  // max_atmosphering_speed: "950"
  // model: "CR90 corvette"
  // name: "CR90 corvette"
  // passengers: "600"
  // pilots: []
  // starship_class: "corvette"
  // url: "https://swapi.dev/api/starships/2/"
}
