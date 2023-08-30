export default function Greeter({ name = "everyone", from ="everyone" }) {
    const heart = "<3";
    return (<>
    <h1>Hi {name}!</h1>
    <h2>{heart} {from}</h2>
    </>);
}

//  THIS WAY IS USED INITIALLY FOR props.variable 
//  ABOVE IS DESTRUCTURING THE VARIABLE FROM props
//  SO WE ONLY NEED THE VARIABLE 
//
// export default function Greeter(props) {
//     return (
//     <h1>Hi {props.name}!</h1>
//     )
// }