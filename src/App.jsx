import Header from './Header'
import Hero from './Hero'
import ProductCard from './ProductCard'
import './Hero.css'
import './ProductCard.css'

function App() { // ← this is a React component
  const products = [
    {id: 1, name: "Winter Coat", price: 30, image: "images/jacket.jpg", description: " A great all year round jacket"},
    {id: 2, name: "Summer Dress", price: 60, image: "images/dress.jpg", description: " A beautiful red dress"},
    {id: 3, name: "Comfortable Shoes", price: 45, image: "images/shoes.jpg", description: " A pair of comfortable shoes"}
  ]
  
  return (     //← everything inside here shows on the page
    <div>
      <Header />
      <Hero />
      <div className="cards">
        {products.map(function(product) {
          return (
            <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App  // ← makes this component available to other files