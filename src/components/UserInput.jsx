export default function UserInput({ text, id }) {
  return (
    <div className="input-group">
      <div>
        <label htmlFor={id}>{text}</label>
        <input type="number" id={id} />
      </div>
    </div>
  );
}
