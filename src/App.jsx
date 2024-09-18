import UserProfile from "./Сomponents/UserProfile/UserProfile"
import Image from './Сomponents/image/Image';
import Product from './Сomponents/UserProfile/Product/Product';

function App() {
  return <>
  <UserProfile name='Olena' age='34' email='olena@Gmail.com'/>
  <Image url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMhh2utsW2Jv8x3YBuXw-Xo2rGbUoJm-AWQ&s' alt='video'/>
    <Product name='bread' remained='5' price='30'/>
  <UserProfile name='Tom' age='23' email='Tom@Gmail.com'/>
  <Image url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMhh2utsW2Jv8x3YBuXw-Xo2rGbUoJm-AWQ&s' alt='video'/>
  <Product name='bread' remained='5' price='30'/>
  <UserProfile name='Alex' age='28' email='Alex@Gmail.com' />
  <Image url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMhh2utsW2Jv8x3YBuXw-Xo2rGbUoJm-AWQ&s' alt='video'/>
  <Product name='bread' remained='5' price='30'/>
   </>
}

export default App