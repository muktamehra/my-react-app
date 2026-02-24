function ProductCard ({name, price, image, description}) {
    return (
        <div className="card">
            <img src={image} alt={name} width="300" height="200" />
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="price">${price}</span>
            <button>Buy Now</button>
        </div>
    )
}

export default ProductCard