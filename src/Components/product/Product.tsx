import { singleProduct } from '../../data'
import Single from '../single/Single'
import './Product.scss'

function Product() {
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product
