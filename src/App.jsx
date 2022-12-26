import Details from "./Components/Details/Details";
import Parallax from "./Components/main-parallax/main-parallax";
import Header from "./Components/Navbar/Navbar";

const App = () => {

  return (
    <div className="w-100 h-100">
      <Header />
      <Parallax height='h-100' bgImg='https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/photo-1443527216320-7e744084f5a7-1.jpg' />
      <Details
        bgc="bg-black"
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
      />
      <Details
        reverse="flex-row-reverse"
        bgc="bg-dark"
        img="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
      />
    </div>
  );
};

export default App;
