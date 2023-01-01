import Details from "./Components/Details/Details";
import ImgPage from "./Components/ImagePage/ImgPage";
import Parallax from "./Components/main-parallax/main-parallax";
import Header from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="w-100 h-100 col-12 col-md-8 col-lg-6">
      <Header />
      <Parallax
        paraSecWidth="w-100"
        BtnSecClassName="TransBtn"
        paraFs="fs-60"
        BtnText="READ MORE"
        BtnTextSec="DOWNLOAD NOW"
        ParaText="We Change Everything WordPress"
        paraSmallText="This is the only WordPress theme you will ever want to use.        "
        height="h-100"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-1.jpg"
      />
      <Details
        DetailsMainClass="bg-black h-75"
        ClassParaDetail='text-muted'
        ClassDetailsText="w-25"
        DetailTitle="SEO Friendly"
        DetailPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies."
        BtnText="READ MORE"
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
      />
      <Details
        DetailsMainClass="bg-dark h-75"
        ClassDetailsText="w-25"
        ClassParaDetail='text-muted'
        DetailTitle="Portfolio Section"
        DetailPara="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum."
        BtnText="SEE IT IN ACTION"
        reverse="flex-row-reverse"
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
        BtnText="DWONLOAD NOW"
        SmallImgLook="d-none"
        ImgPage="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1440557653082-e8e186733eeb-1.jpg"
      />

      <ImgPage
        ImgPageMainClassName="bg-black"
        ImgPageTitle="Limitless Options"
        ImgPagePara="Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus, accumsan non efficitur id, pretium quis ante"
        MainImgLook="d-none"
        BtnSecClassName="d-none"
        ImgPageSmall="https://149842022.v2.pressablecdn.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1451186859696-371d9477be93-1-1.jpg"
      />

      <Parallax
        ParaText="What Our Customers Say"
        paraSmallText="Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante."
        BtnClassMain="d-none"
        BtnSecClassName="d-none"
        paraSecWidth="w-50"
        height="h-50"
        bgImg="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/12/photo-1451417379553-15d8e8f49cde.jpg"
      />
      <Details
        DetailsMainClass="bg-black h-25"
        DetailTitle="Our Main Clients"
        BtnSecClassName="d-none"
        ClassDetailImg="d-none"
      />
      <Details
        DetailsMainClass="bg-dark h-25"
        DetailTitle="Do you like this awesome WordPress theme?"
        ClassDetailsText="w-75 d-flex justify-content-center align-items-center"
        DetailH3="w-50 me-5"
        BtnText="DOWNLOAD NOW"
        BtnSecClassName="cusBtnWidth"
        ClassDetailImg="d-none"
      />
      <Details
        DetailsMainClass="bg-black h-25"
        DetailTitle="Theme by Colorlib Powered by WordPress"
        ClassDetailsText="w-75 d-flex justify-content-between align-items-center"
        DetailPara='III III III III III'
        BtnSecClassName="d-none"
        ClassDetailImg="d-none"
      />
    </div>
  );
};
export default App;
