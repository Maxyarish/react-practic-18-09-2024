import ProductTable from './ProductsTable/ProductTable';
import data from './data'
import Cart from '../Shop/Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cardProducts, setCardProducts] = useState([])
    return(
        <>
            <h1>shop</h1>
            <ProductTable products={products}/>
            <h2>cart</h2>
            <Cart cartProducts={cardProducts}/>
        </>
    );
}


export default Shop;
