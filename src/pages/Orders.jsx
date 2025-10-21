import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadOrderData = async () => {
    if (!token) return;

    try {
      const userId = JSON.parse(atob(token.split(".")[1])).id;

      const response = await axios.post(
        `${backendUrl}/api/order/userOrders`,
        { userId },
        { headers: { token } }
      );

      if (response.data.success) {
        const allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              date: order.date,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
            });
          });
        });
        setOrderData(allOrdersItem.reverse());
      } else {
        setError(response.data.message || "Failed to fetch orders");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (orderData.length === 0) return <p>No orders found.</p>;

  return (
    <div className="border-t pt-16 px-4 sm:px-10">
      <div className="text-2xl mb-6">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="flex flex-col gap-6">
        {orderData.map((item, index) => {
          const imageUrl = item.image?.[0]; // This should be Cloudinary URL if stored properly

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Product Info */}
              <div className="flex items-start gap-6 text-sm">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.name || "Product"}
                    className="w-16 sm:w-20 object-cover rounded"
                  />
                ) : (
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-200 flex items-center justify-center text-center rounded text-xs px-1">
                    {item.name || "Unnamed Product"}
                  </div>
                )}

                <div>
                  <p className="sm:text-base font-medium">
                    {item.name || "Unnamed Product"}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-base text-gray-700">
                    <p className="text-lg">NU {item.price || 0}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-2">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </p>
                </div>
              </div>

              {/* Order Status */}
              <div className="flex items-center gap-3 pl-2 md:pl-0">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.status === "delivered"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                />
                <p className="text-sm md:text-base">{item.status}</p>
              </div>

              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
