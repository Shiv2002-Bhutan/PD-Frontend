import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import CartProduct from "../components/CartProduct";
import toast, { Toaster } from "react-hot-toast"; // <-- hot toast
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const {
    backendUrl,
    token,
    cartItems,
    products,
    delivery_fee,
    getTotalAmount,
    setCartItems,
  } = useContext(ShopContext);

  const url = backendUrl || "http://localhost:4000";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");

  useEffect(() => {
    if (!token) {
      toast("Please log in to place an order.", { icon: "⚠️" });
      navigate("/login");
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    const { name, email, phone, address1, city, postalCode } = form;

    if (!name || !email || !phone || !address1 || !city || !postalCode) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const orderItems = [];

    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;

      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        if (quantity > 0) {
          orderItems.push({
            productId: itemId,
            name: product.name,
            size,
            quantity,
            price: product.price,
          });
        }
      }
    }

    const orderData = {
      items: orderItems,
      address: form,
      amount: getTotalAmount() + delivery_fee,
      paymentMethod,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success("Order placed successfully!");
        setCartItems({}); // Clear cart
        navigate("/orders");
      } else {
        toast.error(response.data.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Order placement error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to place order."
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-4 sm:px-10">
      <Toaster /> {/* Required for react-hot-toast */}
      {/* Delivery Info */}
      <div className="flex flex-col gap-4 w-full sm:w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="Delivery" text2="Information" />
        </div>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="address1"
            value={form.address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="address2"
            value={form.address2}
            onChange={handleChange}
            placeholder="Address Line 2 (optional)"
            className="border p-2 rounded-md"
          />
          <div className="flex gap-3">
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="border p-2 rounded-md w-full"
            />
            <input
              type="number"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="border p-2 rounded-md w-full"
            />
          </div>
        </form>
      </div>
      {/* Payment Section */}
      <div className="mt-8 w-full sm:w-[450px]">
        <CartProduct />
        <div className="mt-12">
          <Title text1="Payment" text2="Methods" />
          <div className="flex flex-col gap-4 mt-3">
            <button
              type="button"
              className={`border p-3 rounded-md text-left ${
                paymentMethod === "COD" ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setPaymentMethod("COD")}
            >
              PAY ON DELIVERY
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="w-full mt-8 bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-all"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
