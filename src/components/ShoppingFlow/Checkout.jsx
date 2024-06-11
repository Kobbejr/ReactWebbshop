import React from "react";

const CheckoutPage = ({ cart, products, total }) => {
  return (
    <div className="Shoppingcart" style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.90)", justifyContent: "center", alignItems: "center", display: "inline-flex" }}>
      <div className="Container" style={{ flex: "1 1 0", alignSelf: "stretch", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex" }}>
        <div className="EcommerceNavbars1" style={{ width: 1440, height: 100, position: "relative", background: "white" }}>
          <div className="Header" style={{ width: 1440, height: 100, left: 0, top: 0, position: "absolute" }}>
            <div className="Rectangle1" style={{ width: 1440, height: 100, left: 0, top: 0, position: "absolute", background: "#F3FEFF" }} />
            <div className="KappNSCatch" style={{ left: 34, top: 46, position: "absolute", color: "#4C3C33", fontSize: 36, fontFamily: "Findet Nemo", fontWeight: 400, wordWrap: "break-word" }}>KApp’n’S cAtch</div>
            <div className="SearchAlt" style={{ width: 26, height: 26, left: 1300, top: 42, position: "absolute" }}>
              <div className="Vector" style={{ width: 24.58, height: 22.51, left: 0.70, top: 1.75, position: "absolute", background: "#4C3C33" }}></div>
            </div>
            <div className="Cart" style={{ width: 26, height: 26, paddingTop: 0.73, paddingBottom: 0.73, paddingLeft: 1.41, paddingRight: 1.50, left: 1351, top: 42, position: "absolute", justifyContent: "center", alignItems: "center", display: "inline-flex" }}>
              <div className="Group" style={{ width: 23.08, height: 24.54, position: "relative" }}>
                <div className="Vector" style={{ width: 5.85, height: 5.85, left: 10.73, top: 18.69, position: "absolute", background: "#4C3C33" }}></div>
                <div className="Vector" style={{ width: 5.85, height: 5.85, left: 3.01, top: 18.69, position: "absolute", background: "#4C3C33" }}></div>
                <div className="Vector" style={{ width: 23.08, height: 16.74, left: 0, top: 0, position: "absolute", background: "#4C3C33" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(cart).map((id) => {
              const product = products.find((item) => item.id === parseInt(id));
              return (
                <div key={id} className="flex justify-between items-center mb-4">
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span>{cart[id]}</span>
                    </div>
                  </div>
                  <p className ="font-bold">${(product.price * cart[id]).toFixed(2)}</p>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-4 mt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

