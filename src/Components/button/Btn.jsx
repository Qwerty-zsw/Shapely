import { Button } from "react-bootstrap";
import "./Btn.css";

const Btnz = (props) => {
  return (
    <>
      <Button
        style={{ width: "11.5rem", padding: ".9rem" }}
        className={`fs-7 fw-bold mx-1 border border-2 rounded-0 ${props.BtnSecClassName}`}
      >
        {props.BtnText}
      </Button>
    </>
  );
};
export default Btnz;
