import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { id: productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const allSizes = ["S", "M", "L", "XL"]; // default size options

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      let availableSizes = [];

      if (product.size.includes("ALL")) {
        availableSizes = allSizes.map((s) => ({ name: s, available: true }));
      } else {
        // backend sends size array: ["S", "M"] or [{name: "S", available: true}, ...]
        availableSizes = allSizes.map((s) => ({
          name: s,
          available: product.size.includes(s),
        }));
      }

      setProductData({ ...product, sizes: availableSizes });
      setImage(product.image?.[0] || "");
    }
  }, [productId, products]);

  if (!productData) return <div>Loading...</div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={productData.name}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt={productData.name} />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{productData.name}</h2>
          <p className="text-sm mt-4 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex justify-between mt-4">
            <span className="text-xl font-medium">NU. {productData.price}</span>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((s, index) => (
                <button
                  key={index}
                  onClick={() => s.available && setSize(s.name)}
                  disabled={!s.available}
                  className={`border py-2 px-4 ${
                    s.available
                      ? "bg-gray-100 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                  } ${s.name === size ? "border-black" : ""}`}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              disabled={!size}
              className={`bg-black text-white px-8 py-3 text-sm mt-4 ${
                !size ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
              }`}
            >
              Add to Cart
            </button>
          </div>
          <hr className="mt-8 w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Product;
