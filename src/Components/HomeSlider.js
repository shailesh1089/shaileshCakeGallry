import { Link } from "react-router-dom";

let slide1 = "../../images/banner-1.jpeg";
let slide2 = "../../images/banner-2.jpeg";
let slide3 = "../../images/banner-3.jpeg";

function HomeSlider(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Link to="/shop"><img className="d-block w-100" src={slide1} alt="First slide" /></Link>
                </div>
                <div className="carousel-item">
                    <Link to="/shop"><img className="d-block w-100" src={slide2} alt="Second slide" /></Link>
                </div>
                <div className="carousel-item">
                    <Link to="/shop"><img className="d-block w-100" src={slide3} alt="Third slide" /></Link>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    )
}
export default HomeSlider;