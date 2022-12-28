import Btnz from "../button/Btn";

const Details = (props) => {
  return (
    <div className={`w-100 ${props.DetailsMainClass}`}>
      <div
        className={`w-100 h-100 d-flex justify-content-center align-items-center ${props.reverse}`}
      >
        <div
          className={`w-50 d-flex justify-content-center align-items-center ${props.ClassDetailImg}`}
        >
          <img className="w-75" src={props.img} alt="variable" />
        </div>

        <div className={`${props.ClassDetailsText}`}>
          <h3 className={`${props.DetailH3}`}>{props.DetailTitle}</h3>
          <p className="my-4 text-muted">{props.DetailPara}</p>
          <Btnz
            BtnText={props.BtnText}
            BtnSecClassName={props.BtnSecClassName}
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
