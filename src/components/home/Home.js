import "./style.css";
import HomeBanner from "../../assets/home-banner.png";
import Type from "./Type";
const Home = () => {
  return (
    <>
      <div className="main-con">
        <div className="home-con">
          <div className="text-con">
            <h1>
              Hi There!<span className="wave">👋🏻</span> <br />{" "}
              I'M
              <strong className="main-name"> Madan Gopal</strong>
              <Type/>

            </h1>
          </div>
          <div className="img-con">
            {" "}
            <img src={HomeBanner} height={400} width={400} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
