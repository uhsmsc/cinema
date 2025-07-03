import "./Input.css";

function Input({ children, icon = null }) {
  return (
    <div className="input-wrapper">
      {icon && <span className="input-icon">{icon}</span>}
      <input className="input" placeholder={children}></input>
    </div>
  );
}

export default Input;
