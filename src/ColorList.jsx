
export default function ColorList({ colors }) {
    const lis = colors.map(color => <li>{ color }</li>)
    const elements = [<li>{colors[0]}</li>, <li>{colors[1]}</li>]
    return (
        <div>
            <p>Color List:</p>
            {/* <p>{ colors }</p> */}
            <p>{ elements }</p>   {/*  first try  */}
            <p>{ lis }</p>     {/*  second try  */}
            <p>{ colors.map((c) => <li style={{ color: c }} >{ c }</li>)} </p>    {/*  third try  */}
        </div>
    )
}


// something.map((x) => x + 2)
// map will create a new array from the something array and run the function 
//   on every element from the something array and return a new array in a loop like fashion.