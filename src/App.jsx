import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TvShow from "./components/TvShow";
import CarouselGrid from "./components/CarouselGrid";
import MyFooter from "./components/MyFooter";
import MyProfile from "./components/MyProfile";
import MySettingPage from "./components/MySettingPage";

function App() {
  return (
    <div className="App">
      <TopBar />
      <main className="container-fluid container-lg my-5">
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
      <MyProfile/>
      <MySettingPage/>
      <MyFooter />
      
    </div>
  );
}

export default App;
const btncheck2 = document.querySelector("#btncheck2");
const btncheck2Icon = document.querySelector("#btncheck2Icon");
const btncheck1 = document.querySelector("#btncheck1");
const btncheck1Icon = document.querySelector("#btncheck1Icon");

//   funzione che al click della checkbox cambia l'opacità del svg interna
btncheck1.addEventListener("click", () => {
  btncheck1Icon.classList.toggle("opacity1");
});
btncheck2.addEventListener("click", () => {
  btncheck2Icon.classList.toggle("opacity1");
});