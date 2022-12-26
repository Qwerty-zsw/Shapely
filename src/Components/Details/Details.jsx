import Btnz from "../button/Btn";

const Details = (props) => {
  return (
    <div className="w-100 h-75 bg-dark">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        
        <div className="w-50 d-flex justify-content-center align-items-center">
          <img className="w-75" src={props.img} alt="variable" />
        </div>

        <div className="w-25">
            <h3>SEO Friendly</h3>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
            <Btnz text='READ MORE'/>
        </div>

      </div>
    </div>
  );
};

export default Details;
