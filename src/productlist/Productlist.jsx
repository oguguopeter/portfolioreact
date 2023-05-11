import productlist from './productlist.css'
import Product from '../product/Product'

const Productlist = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className='pl-title'> Create & Inspire. It's Harida</h1>
            <p className="pl-desc">
                Harida is a creative portfolio that your work has been waiting for. Beautiful homes,stunning portfolio styles& a whole lot more inside. 
            </p>
        </div>
        <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
  )
}

export default Productlist