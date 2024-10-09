import {PropTypes} from 'prop-types'

const CartItem = (props) => {
    const {product:{id,title, price,quantityInCart },}=props;
    return (
        <div>
            <li>{title} quantity:{quantityInCart}, total price:{price * quantityInCart} uah,</li>
        </div>
    );
}
CartItem.propTypes={
    product:PropTypes.shape({
      title:PropTypes.string.isRequired,
      price:PropTypes.number.isRequired,
      quantityInCart:PropTypes.number.isRequired,
    })
  }
CartItem.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        quantityInCart:PropTypes.isRequired,
      }) 

}

export default CartItem;
