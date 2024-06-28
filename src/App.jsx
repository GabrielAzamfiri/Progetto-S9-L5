import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopBar from './components/TopBar';
import TvShow from './components/TvShow';
import CarouselGrid from './components/CarouselGrid';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App" >
      
      <TopBar/>
      <main className="container-fluid container-lg my-5">

      <TvShow/>
      <div className='my4 '>
        <div className='my-5 d-flex justify-content-start'>
          <h3 className='mb-4'>Trending Now</h3>
          <CarouselGrid film="Harry Potter"/>
        </div>
        
      
     
        
      </div>
     
    
      </main>
      <MyFooter/>
    </div>
  );
}

export default App;
