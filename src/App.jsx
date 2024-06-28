import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TvShow from "./components/TvShow";
import CarouselGrid from "./components/CarouselGrid";
import MyFooter from "./components/MyFooter";
import MyProfile from "./components/MyProfile";
import MySettingPage from "./components/MySettingPage";
import { Component } from "react";

class App extends Component {
  state = {
    displayHome: "block",
    displayProfile: "none",
    displaySetting: "none",
  };
  profilePage = () => {
    this.setState({ displayHome: "none", displayProfile: "block", displaySetting: "none" });
  };
  settingPage = () => {
    this.setState({ displayHome: "none", displayProfile: "none", displaySetting: "block" });
  };
  homePage = () => {
    this.setState({ displayHome: "block", displayProfile: "none", displaySetting: "none" });
  };
  render() {
    return (
      <div className="App">
        <TopBar profilePage={this.profilePage} settingPage={this.settingPage} homePage={this.homePage}/>
        <main className="container-fluid container-lg my-5" style={{ display: this.state.displayHome }}>
          <TvShow />
          <div className="my4 ">
            <div className="my-5">
              <CarouselGrid film="one piece" carouselTitle="Best Anime" />
              <CarouselGrid film="naruto" carouselTitle="Best anime until Shippuden" />
              <CarouselGrid film="transformers" carouselTitle="Tranding Last Week" />
              <CarouselGrid film="Harry Potter" carouselTitle="Watch It Again" />
            </div>
          </div>
        </main>
        <MyProfile display={this.state.displayProfile} />
        <MySettingPage display={this.state.displaySetting} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
// const btncheck2 = document.querySelector("#btncheck2");
// const btncheck2Icon = document.querySelector("#btncheck2Icon");
// const btncheck1 = document.querySelector("#btncheck1");
// const btncheck1Icon = document.querySelector("#btncheck1Icon");

// //   funzione che al click della checkbox cambia l'opacità del svg interna
// btncheck1.addEventListener("click", () => {
//   btncheck1Icon.classList.toggle("opacity1");
// });
// btncheck2.addEventListener("click", () => {
//   btncheck2Icon.classList.toggle("opacity1");
// });
