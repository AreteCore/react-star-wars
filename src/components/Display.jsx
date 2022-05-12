export default function (props) {

    let starships = props.starships

return <div className="display">
        { starships.results.map((ship, index) => {
          return (
            <div className="card" key={index}>
              <h3>{ship.name}</h3>
              <div>{ship.manufacturer}</div>
              </div>
          )
        })
        }
      </div>
}