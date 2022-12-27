import Details from "./Components/Details/Details";
import ImgPage from "./Components/ImagePage/ImgPage";
import Parallax from "./Components/main-parallax/main-parallax";
import Header from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-100 h-100">
      <Header />
      <Parallax
        paraSecWidth="w-100"
        BtnclassName="TransBtn"
        paraFs="fs-60"
        BtnText="READ MORE"
        BtnTextSec="DOWNLOAD NOW"
        ParaText="We Change Everything WordPress"
        height="h-100"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-1.jpg"
      />
      <Details
        DetailsBgc="bg-black"
        BtnText="Read more"
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
      />
      <Details
        DetailsBgc="bg-dark"
        reverse="flex-row-reverse"
        BtnText="See it in action"
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
      />
      <Parallax
        paraFs="fs-60"
        paraSmallFont="font-s"
        ParaText="Small Parallax Section"
        paraSecWidth="w-50"
        BtnSecClassName="d-none"
        paraSmallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum. Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget tincidunt leo ornare quis."
        height="h-50"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1452723312111-3a7d0db0e024.jpg"
        BtnText="MORE INFO"
      />
      <ImgPage
        ImgPageMainClassName="bg-light"
        ImgPageTitle="Limitless Options"
        ImgPagePara="Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante"
        BtnText="Download Now"
        SmallImgLook="d-none"
        ImgPage="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1440557653082-e8e186733eeb-1.jpg"
      />

      <ImgPage
        ImgPageMainClassName="bg-black"
        ImgPageTitle="Limitless Options"
        ImgPagePara="Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante"
        MainImgLook="d-none"
        BtnSecClassName='d-none'
        ImgPageSmall="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1422568374078-27d3842ba676-1.jpg"
      />
    </div>
  );
};

export default App;
