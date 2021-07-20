import  CakeItem from './CakeItem';

let cake1={
    Name:"Cup Cake",
    Price:250,
    Image:"../../images/product-1.jpeg"
}
let cake2={
    Name:"Macaron",
    Price:350,
    Image:"../../images/product-2.jpeg"
}
let cake3={
    Name:"Vanilla Cup Cake",
    Price:280,
    Image:"../../images/product-3.jpeg"
}
function CakeList(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <CakeItem data={cake1} />
                </div>
                <div className="col-md-4">
                    <CakeItem data={cake2} />
                </div>
                <div className="col-md-4">
                    <CakeItem data={cake3} />
                </div>
            </div>
        </div>
    );
}
export default CakeList;