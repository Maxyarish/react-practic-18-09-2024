import './Product.css'
const Product = (props) => {
    const {name='0',remained='0',price='0'}=props
    return (
        <div className='Product-class'>
            <h2>name: {name}</h2>
            <h2>remained: {remained}</h2>
            <h1>price: {price} uah</h1>
        </div>
    );
}

export default Product;
