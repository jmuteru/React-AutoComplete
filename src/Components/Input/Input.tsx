import "./input.css"
import { Input } from "../../Interfaces/Input.inteface";
const InputItem = ({ value, onChange }: Input) => {


  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type a country name..."
    />
  );
};

export default InputItem;
