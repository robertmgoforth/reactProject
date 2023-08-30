
export default function GL({ items }) {
    return (
        <ul>
             {items.map(i => <li style={{color: i.completed ? "green" : "red", 
             textDecoration: i.completed ? "line-through" : "none"}}>
                {i.item} - {i.quantity}
                </li>)} 
        </ul>
    )
}

