import Btnz from "../button/Btn";
import "./mainPara.css";

const Parallax = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.bgImg})` }}
      className={`w-100 ${props.height} position-relative parallax-window`}
    >
      <div className="w-100 h-100 d-flex position-absolute justify-content-center align-items-center">
        <div className="w-100 d-flex flex-column text-center">
          <section className={`w-100 ${props.paraFs}`}>
            {props.ParaText}
          </section>
          <div className="w-100 d-flex justify-content-center">
            <small
              className={`${props.paraSecWidth} ${props.paraSmallFont} mt-4 mb-2`}
            >
              {props.paraSmallText}
            </small>
          </div>
          <div
            className={`w-100 d-flex justify-content-center mt-4 ${props.paraBtnVisibility}`}
          >
            <Btnz BtnText={props.BtnText} />
            <Btnz BtnSecClassName={props.BtnSecClassName} BtnText={props.BtnTextSec} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
