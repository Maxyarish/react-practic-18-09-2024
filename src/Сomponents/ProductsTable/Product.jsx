import { useState } from "react";

const Product = (props) => {
    const {product:{ title, price, quantity }} = props;
    const [isColor, setIsColor] = useState(false);
    const changeIsColor=()=>{setIsColor(true)};
    const productTextColor=isColor?'green':'red';
    return (
      <tr onClick={changeIsColor} style={{color:productTextColor}}>
        <td>{title}</td>
        <td>{price} uah</td>
        <td>{quantity} etc.</td>
      </tr>
    );
  };
  
  export default Product;