import Details from "./Components/Details/Details";
import Parallax from "./Components/main-parallax/main-parallax";
import Header from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-100 h-100">
      <Header />
      <Parallax
        paraSecWidth='w-100'
        BtnclassName='TransBtn'
        paraFs="fs-60"
        BtnText='READ MORE'
        BtnTextSec='DOWNLOAD NOW'
        ParaText="We Change Everything WordPress"
        height="h-100"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-1.jpg"
      />
      <Details
        bgc="bg-black"
        BtnText='Read more'
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
      />
      <Details
        reverse="flex-row-reverse"
        bgc="bg-dark"
        BtnText='See it in action'
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
      />
      <Parallax
        paraFs='fs-60'
        paraSmallFont='font-s'
        ParaText='Small Parallax Section'
        paraSecWidth='w-50'
        BtnSecClassName='d-none'
        paraSmallText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis.'
        height="h-50"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1452723312111-3a7d0db0e024.jpg"
        BtnText='MORE INFO'
      />
    </div>
  );
};

export default App;
