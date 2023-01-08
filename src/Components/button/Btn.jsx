import "./Btn.css";

const Btnz = (props) => {
  return (
    <>
      <button
        style={{ width: "11.5rem", padding: ".9rem" }}
        className={`btnz fs-7 fw-bold mx-1 border border-2 rounded-0 ${props.BtnSecClassName}`}
      >
        {props.BtnText}
      </button>
    </>
  );
};
export default Btnz;
