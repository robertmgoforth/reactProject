import("./Slots.css");

export default function Solts({ val1, val2, val3 }) {
  let result = null;
  const items = ["💸", "💰", "💲", "✨"];
  val1 = items[Math.floor(Math.random() * items.length)];
  val2 = items[Math.floor(Math.random() * items.length)];
  val3 = items[Math.floor(Math.random() * items.length)];
  const winCheck = val1 === val2 && val2 === val3 && val1 === val3;
  const styles = { color: winCheck ? "green" : "red" };
  if (winCheck) {
    result = (
      <>
        <h2 className="winner" style={styles}>
          WINNER
        </h2>
        <h3>Congrats!!!</h3>
      </>
    );
  } else {
    result = (
      <h2 className="loser" style={styles}>
        Try Again
      </h2>
    );
  }

  return (
    <div className="machine">
      <span>{val1}</span>
      <span>{val2}</span>
      <span>{val3}</span>
      {result}
    </div>
  );
}
