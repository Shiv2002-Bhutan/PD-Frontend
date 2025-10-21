import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "NU.";
  const deliveryCharge = 10;
  const backendUrl = "http://localhost:4000";

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();

  // Persist token and fetch cart on login
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchUserCart(token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Add item to cart
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size.");
      return;
    }

    const newCart = structuredClone(cartItems);
    if (newCart[itemId]) {
      newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;
    } else {
      newCart[itemId] = { [size]: 1 };
    }

    setCartItems(newCart);
    toast.success("Added to cart");

    if (token) {
      axios
        .post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        )
        .catch((err) => toast.error(err.message));
    }
  };

  // Update quantity in cart
  const updateCart = async (itemId, size, quantity) => {
    const newCart = structuredClone(cartItems);
    newCart[itemId][size] = quantity;
    setCartItems(newCart);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  // Fetch cart from backend
  const fetchUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Remove item from cart
  const removeFromCart = (itemId, size) => {
    const newCart = { ...cartItems };
    if (newCart[itemId]?.[size]) {
      delete newCart[itemId][size];
      if (Object.keys(newCart[itemId]).length === 0) delete newCart[itemId];
      setCartItems(newCart);
    }
  };

  // Get total number of items in cart
  const getCartCount = () =>
    Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, count) => sum + count, 0),
      0
    );

  // Get total amount
  const getTotalAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (const size in cartItems[itemId]) {
        total += product.price * cartItems[itemId][size];
      }
    }
    return total;
  };

  // Fetch product data
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) setProducts(response.data.products);
      else toast.error(response.data.message);
    } catch (err) {
      toast.error(err.message);
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        products,
        currency,
        delivery_fee: deliveryCharge,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        removeFromCart,
        updateCart,
        getCartCount,
        getTotalAmount,
        navigate,
        backendUrl,
        fetchProducts,
        token,
        setToken,
        setCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
