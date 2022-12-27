import Btnz from "../button/Btn"

const ImgPage = (props)=>{
    return(
        <>
        <div className="w-100 h-100">
            <div className="d-flex flex-column">
                <h3>{props.ImgPageTitle}</h3>
                <p>{props.ImgPagePara}</p>
                <Btnz BtnText={props.BtnText}/>
            </div>
            <div className="w-75">
                <img className="w-100" src={props.ImgPage} />
            </div>
        </div>
        </>
    )
}

export default ImgPage