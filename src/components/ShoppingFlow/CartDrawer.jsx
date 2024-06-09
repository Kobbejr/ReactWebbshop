import React from "react";

const CartDrawer = ({ cart, products, incrementQuantity, decrementQuantity, closeDrawer, goToCheckout }) => {
  const getTotalPrice = () => {
    return Object.keys(cart).reduce((total, id) => {
      const product = products.find((item) => item.id === parseInt(id));
      return total + product.price * cart[id];
    }, 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end">
      <div className="w-96 bg-white p-4 overflow-y-auto">
        <button className="text-gray-500 hover:text-gray-700" onClick={closeDrawer}>
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {Object.keys(cart).map((id) => {
              const product = products.find((item) => item.id === parseInt(id));
              return (
                <div key={id} className="flex justify-between items-center mb-4">
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="w-[120px] h-[40px] p-[0.5rem] bg-sky-50 rounded-[20px] border-2 border-teal-600 text-stone-900 text-lg font-semibold font-Poppins flex items-center justify-center">
                        <button onClick={() => decrementQuantity(id)} className="text-stone-900 text-lg font-semibold" style={{ borderRadius: 'inherit', paddingRight: '1.2 rem' }}>
                          - {/* padding to the right for a gap between - and number */}
                        </button>
                        <span>{cart[id]}</span>
                        <button onClick={() => incrementQuantity(id)} className="text-stone-900 text-lg font-semibold" style={{ borderRadius: 'inherit', paddingLeft: '1.2 rem' }}>
                          + {/* same padding -- but to the left- Not working for some reason! */}
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold">${(product.price * cart[id]).toFixed(2)}</p>
                </div>
              );
            })}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-xl font-bold">Total: ${getTotalPrice()}</h3>
              <button className="mt-4 bg-teal-600 text-white px-9 py-2 rounded" onClick={goToCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
