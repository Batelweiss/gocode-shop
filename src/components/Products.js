import './Products.css'
import Product from "./Product";
function Products({products}) {
  return (
    <section className="products">
      {products.map((item) => <Product key={item.id} 
      image={item.image}
       description={item.description} 
       price={item.price}>

       </Product>)}
    </section> 
  );
}

export default Products;
   