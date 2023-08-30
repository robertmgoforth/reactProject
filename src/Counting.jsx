export default function Counting({count}) {
    let message = <h2>wow you click alot!</h2>;
    {if (count >= 10) {
    return (<>
        { message }
    </>)
    }} 
}

