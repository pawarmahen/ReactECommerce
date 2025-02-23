
/* eslint-disable react/prop-types */
export default function CartSummary({cartItems}){
    const subTotal = cartItems.reduce((partialSum, a) => partialSum + a.price, 0);
    return(
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-semibold">${subTotal}</p>
            </div>
            <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Shipping</p>
                <p className="font-semibold">$100</p>
            </div>
            <div className="flex justify-between items-center border-t-2 border-gray-200 pt-2">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">${(subTotal + 100).toFixed(2)}</p>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded w-full mt-4">Buy All Items</button>
        </div>
    )
}