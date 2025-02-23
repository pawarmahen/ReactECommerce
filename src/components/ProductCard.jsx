/* eslint-disable react/prop-types */
export default function ProductCard({product,handleAddToCart}){
    const addToCart= ()=> handleAddToCart(product.id)
    return(
        <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img src={product.image} alt="Product Image" className="w-full h-48 object-cover rounded-t-lg"/>
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-500">${product.price}</span>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
    )
}