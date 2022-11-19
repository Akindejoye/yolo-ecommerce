import { useState, useEffect } from "react";
import Product from "../components/Product";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProductsInfo(data));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))];

  return (
    <div className="p-5">
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            <h2 className="text-2xl capitalize">{categoryName}</h2>
            {productsInfo
              .filter((p) => p.category === categoryName)
              .map((productInfo, index) => (
                <Product key={productInfo.name} {...productInfo} />
              ))}
          </div>
        ))}
        <div className="py-4"></div>
      </div>
    </div>
  );
}
