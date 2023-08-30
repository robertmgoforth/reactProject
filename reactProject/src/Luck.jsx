
export default function Lucky() {
    const numOne = Math.floor(Math.random() * 10) + 1;
    const numTwo = Math.floor(Math.random() * 10) + 1;
    const isWinner = numOne === numTwo;
    // the styles inline here are only for dynamic/changing styles, do not normally do this.
    const styles = { color: isWinner ? "green" : "red", width: "100%", height:"50px" } 
    if (isWinner === true) {
        const rootbg = document.querySelector("#root")
        rootbg.style = "background-image: url('https://images.unsplash.com/photo-1576481564650-61d2ed81f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80')"
    } else {
        const rootbg = document.querySelector("#root")
        rootbg.style = "background-color: white;"
    }
   return (
       <div>
            {/* the styles inline here are only for dynamic/changing styles, do not normally do this. */}
           <h2 className="" style={ styles } >Double Dice</h2>
           {isWinner && <h3 style={ styles } >You Win!</h3>} {/* This function only runs if true. the double ampersand && only runs if true */}
           <p style={ styles }>Number 1 = {numOne}</p>
           <p style={ styles }>Number 2 = {numTwo}</p>
       </div>
   )
}




// THIRD EXAMPLE, GETTING BETTER BUT STILL NOT THE BEST
//
// export default function Lucky() {
//      const numOne = Math.floor(Math.random() * 10) + 1;
//      const numTwo = Math.floor(Math.random() * 10) + 1;
//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {numOne === numTwo ? <h3>You Win!</h3> : null}  // this is a turnary operator
//             <p>Number 1 = {numOne}</p>
//             <p>Number 2 = {numTwo}</p>
//         </div>
//     )
// }




//  SECOND EXAMPLE, STILL NOT A GOOD WAY
// 
// export default function Lucky() {
//     const numOne = Math.floor(Math.random() * 10) + 1;
//     const numTwo = Math.floor(Math.random() * 10) + 1;
//    return (
//        <div>
//            <h2>{numOne === numTwo ? "You Win!" : "Try Again!"}</h2>
//            <p>Number 1 = {numOne}</p>
//            <p>Number 2 = {numTwo}</p>
//        </div>
//    )
// }


// FIRST EXAMPLE, NOT THE BEST WAY
//
// export default function Lucky() {
//     const numOne = Math.floor(Math.random() * 10) + 1;
//     const numTwo = Math.floor(Math.random() * 10) + 1;
//     const result = numOne === numTwo ? "You Win!" : "Try Again!";
//    return (
//        <div>
//            <h2>{result}</h2>
//            <p>Number 1 = {numOne}</p>
//            <p>Number 2 = {numTwo}</p>
//        </div>
//    )
// }
