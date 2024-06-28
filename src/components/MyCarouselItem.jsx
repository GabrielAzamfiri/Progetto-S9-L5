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
    this.state.films.length >0 && (
      this.state.films.map(film => {
        return(

        <Carousel.Item>
          <Row className="gx-1 gy-2">
            <Col sm={4} md={3} lg={1} >

            <a href="#"><img src={film.Poster} alt="immagine film" class="w-100" height={200} /></a>
                
             
            </Col>
           
          </Row>
        </Carousel.Item>
        )
      })
      // console.log(this.state.films[0].Poster)
      
      )
    );
  }
}

export default MyCarouselItem;
