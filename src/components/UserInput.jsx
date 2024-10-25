export default function UserInput({ text, id, onChange, input }) {
  return (
    <div className="input-group">
      <div>
        <label htmlFor={id}>{text}</label>
        <input
          type="number"
          id={id}
          required
          onChange={onChange}
          value={input[id]}
        />
      </div>
    </div>
  );
}
