import Btnz from "../button/Btn"

const ImgPage = (props)=>{
    return(
        <>
        <div className={`w-100 ${props.ImgPageMainClassName}`}>
            <div className="w-100 d-flex pt-5 flex-column justify-content-center align-items-center">
                <h3 className="pt-5">{props.ImgPageTitle}</h3>
                <p className="py-3">{props.ImgPagePara}</p>
                <Btnz BtnText={props.BtnText} BtnSecClassName={props.BtnSecClassName}/>
            </div>
            <div style={{width:'62%'}} className={`d-flex mx-auto bottom-0 pt-3 ${props.MainImgLook}`}>
                <img className="w-100" src={props.ImgPage} />
            </div>

            <div className={`w-25 d-flex felx-wrap pt-4 ${props.SmallImgLook}`}>
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
            </div>

            <div className={`w-25 d-flex  ${props.SmallImgLook}`}>
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
            </div>

            <div className={`w-25 d-flex felx-wrap ${props.SmallImgLook}`}>
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
                <img className="w-100" src={props.ImgPageSmall} />
            </div>

        </div>
        </>
    )
}

export default ImgPage