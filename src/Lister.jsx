
export default function Lister({ values }) {
    const randIndx = Math.floor(Math.random() * values.length)
    const randElement = values[randIndx]
    return (<>
        <div>
            <p>The list of values: { values } </p>
            <p>Random element from the list is: { randElement }</p>
        </div>
    </>)
}