import { ErrorMsg } from "../../Interfaces/Error.interface";
const ErrorMessage = ({ error }: ErrorMsg) => {
  return <div>{error}</div>;
};

export default ErrorMessage;
