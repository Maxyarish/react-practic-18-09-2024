import products from '../data';
import Products from './Product'
import styles from './Product.module.css'
import { PropTypes } from 'prop-types';

const ProductTable = (props) => {
    const {products,addNewProduct}=props;
    const showProduct=(product)=>
        (<Products key={product.id} product={product} addNewProduct={addNewProduct}/>);
    return (
        <>
        <table className={styles.table}>
        <thead>
            <tr>
                <th>Title:</th>
                <th>Price: </th>
                <th>Quantity: </th>
            </tr>
        </thead>
        <tbody>
{products.map(showProduct)}
        </tbody>
        </table>
        </>
    );
}
ProductTable.PropTypes={
    products:PropTypes.array,
    addNewProduct:PropTypes.array,
}
export default ProductTable;
