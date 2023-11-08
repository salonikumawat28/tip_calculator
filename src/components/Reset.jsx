function Reset({ onReset }) {
  return (
    <div>
      <button onClick={(event) => onReset(event.target.value)}>Reset</button>
    </div>
  );
}
export default Reset;
