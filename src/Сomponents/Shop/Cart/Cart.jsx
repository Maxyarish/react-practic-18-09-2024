import CartItem from './CartItem/CartItem';
import { PropTypes } from 'prop-types';

const Cart = (props) => {
    const {cartProducts}=props;
    const showItems=(product)=>(
    <CartItem key={product.id} product={product}/>
)
const totalSumma=cartProducts.reduce((summa,product)=>{
    return summa +(product.price*product.quantityInCart)
},0)
    return (
        <div>
            <section>
                <h2>cart</h2>
                {cartProducts.length===0?
                    <p>empty cart</p>:
                    <>
                    <ol>
                        {cartProducts.map(showItems)}
                    </ol>
                    <hr/>
                    <p>total: {totalSumma}</p>
                    </>
                }
            </section>
        </div>
    );
}
Cart.propTypes={
    cartProducts:PropTypes.array
}

export default Cart;
