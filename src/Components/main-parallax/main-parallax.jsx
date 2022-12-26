import Btnz from '../button/Btn';
import './mainPara.css'

const Parallax = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.bgImg})`}} className={`w-100 ${props.height} position-relative parallax-window`}>
        <div className='w-100 h-100 d-flex position-absolute justify-content-center align-items-center'>
            <div className='d-flex flex-column text-center'>
            <section className='fs-60'>We Change Everything WordPress</section>
            <small className='mt-4 mb-2'>This is the only WordPress theme you will ever want to use.</small>
            <div className='d-flex justify-content-center mt-4'>
            <Btnz text='READ MORE'/>
            <Btnz text='DOWNLOAD NOW'/>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Parallax;
