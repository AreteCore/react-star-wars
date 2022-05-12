

export default function Links (props) {
    return (<div className="links">
        {(!!props.starships.previous) ? <div onClick={() => {props.getStarships(props.starships.previous)}}>Previous Page</div> : <p>You are on the first page of results</p>}
        {(!!props.starships.next) ? <div onClick={() => {props.getStarships(props.starships.next)}}>Next Page</div> : <p>You are on the last page of results</p>}
      </div>)
}