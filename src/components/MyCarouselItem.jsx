import { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class MyCarouselItem extends Component {
  state = {
    films: [],
  };
  fetchGetFilms = async () => {
    fetch("http://www.omdbapi.com/?apikey=9c68448e&s=" + this.props.film)
      .then(resp => {
        if (resp.ok) {
          // restituiamo il dato convertito in array da JSON
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento del commento");
        }
      })
      .then(objResp => {
        this.setState({ films: objResp.Search });
      })
      .catch(err => alert(err));
  };

  componentDidMount() {
    this.fetchGetFilms();
  }

  render() {
    return (
      this.state.films.length > 0 && (
        <Carousel>
          <Carousel.Item>
            <Row className="gx-3 gy-2 ">
             
              <Col  >
                <a href="#">
                  <img src={this.state.films[0].Poster} alt="immagine film" class="w-100" height={300} />
                </a>
              </Col>
              <Col >
                <a href="#">
                  <img src={this.state.films[1].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col className=" d-none d-sm-inline">
                <a href="#">
                  <img src={this.state.films[2].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col className=" d-none d-md-inline">
                <a href="#" >
                  <img src={this.state.films[3].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col  className=" d-none d-lg-inline">
                <a href="#">
                  <img src={this.state.films[4].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item >
            <Row className="gx-3 gy-2">
              <Col  className=" d-none d-lg-inline">
                <a href="#">
                  <img src={this.state.films[5].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              
              <Col  className=" d-none d-md-inline">
                <a href="#">
                  <img src={this.state.films[6].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col className=" d-none d-sm-inline">
                <a href="#">
                  <img src={this.state.films[7].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col >
                <a href="#">
                  <img src={this.state.films[8].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              <Col >
                <a href="#">
                  <img src={this.state.films[9].Poster} alt="immagine film" class="w-100" height={300}/>
                </a>
              </Col>
              
            </Row>
          </Carousel.Item>
        </Carousel>
      )
      // console.log(this.state.films[0].Poster)
    );
  }
}

export default MyCarouselItem;
