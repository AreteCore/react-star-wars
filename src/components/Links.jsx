

export default function Links({ starships, getStarships }) {
    let previous = "no link yet"
    let next = "no link yet"

    if (!!starships.previous) {
        previous = <div onClick={() => { getStarships(starships.previous) }}>Go To Previous Page</div>
    } else {
        previous = <p>You are on the first page of results</p>
    }

    if (!!starships.next) {
        next = <div onClick={() => { getStarships(starships.next) }}>Go To Next Page</div>
    } else {
        next = <p>You are on the last page of results</p>
    }

    return (<div className="links">

        {previous} // {next}

        {/* this also works and is imo way cleaner  */}
        {/* {(!!starships.previous) ? <div onClick={() => {getStarships(props.starships.previous)}}>Previous Page</div> : <p>You are on the first page of results</p>}
        {(!!starships.next) ? <div onClick={() => {getStarships(props.starships.next)}}>Next Page</div> : <p>You are on the last page of results</p>} */}

    </div>)
}