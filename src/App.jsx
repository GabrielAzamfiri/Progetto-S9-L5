import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TvShow from "./components/TvShow";
import CarouselGrid from "./components/CarouselGrid";
import MyFooter from "./components/MyFooter";
import MyProfile from "./components/MyProfile";

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
      <MyFooter />
    </div>
  );
}

export default App;
