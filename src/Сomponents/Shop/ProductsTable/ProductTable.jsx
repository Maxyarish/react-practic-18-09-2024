import Products from './Product'
import product from  '../data'
import styles from './Product.module.css'

const ProductTable = () => {
    const showProduct=(product)=>(<Products key={product.id} product={product}/>);
    return (
        <>
        <table className={styles['table']}>
        <thead>
            <tr>
                <th>Title:</th>
                <th>Price: </th>
                <th>Quantity: </th>
            </tr>
        </thead>
        <tbody>
{product.map(showProduct)}
        </tbody>
        </table>
        </>
    );
}

export default ProductTable;
