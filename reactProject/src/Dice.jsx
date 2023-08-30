
export default function Dice({ numSides = 6 }) {
    const roll = Math.floor((Math.random() * numSides)) + 1;
    return <p>Your Complentary Dice Roll is {roll} out of {numSides}</p>
}

// THIS FUNCTION WILL DO THE SAME AS ABOVE BUT DOESN'T DESCRUCTURE THE PROP
// export default function Dice(prop) {
//     const numSides = prop.numSides || 6;
//     const roll = Math.floor((Math.random() * numSides)) + 1;
//     return <p>Your Complentary Dice Roll is {roll} out of {numSides}</p>
// }

//  THIS FUNCTION WILL DO THE SAME AS THE ABOVE FUNCTION
//  THE FUNCTION BELOW DOES NOT DESCONTRUCT THE prop
//
// export default function Dice(prop) {
//     const roll = Math.floor((Math.random() * prop.numSides)) + 1;
//     return <p>Your Complentary Dice Roll is {roll}</p>
// }

