function CakeItem(props){
    return(
        <div className="card cakeItem">
            <img className="card-img-top" src={props.data.Image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.data.Name}</h5>
                <h6 className="price">&#8377; {props.data.Price}</h6>
                <a href="#" className="btn btn-primary">Order Now</a>
            </div>
        </div>
    );
}
export default CakeItem;