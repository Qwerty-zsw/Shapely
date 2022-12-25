import './mainPara.css'

const Parallax = () => {
  return (
    <div className="parallax-window position-relative">
        <div className='w-100 h-75 d-flex position-absolute justify-content-center align-items-center'>
            <div className='d-flex flex-column text-center'>
            <section className='fs-60'>We Change Everything WordPress</section>
            <small className='mt-4'>This is the only WordPress theme you will ever want to use.</small>
            </div>
        </div>
    </div>
  );
};

export default Parallax;
