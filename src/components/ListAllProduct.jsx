import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../repository/productRepository";

function ListAllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getAllProducts();
        console.log(data);
        setProducts(data);
      } catch (err) {
        setError("Không thể tải sản phẩm. Vui lòng thử lại sau.");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tất cả </h2>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div className="flex ml-4 mb-4" key={product.masp}>
            <div className="card w-56">
              <img
                src="https://github.com/QuangTeoo.png"
                className="card-img-top"
                alt={product.ten}
              />
              <div className="card-body">
                <h5 className="card-title">{product.ten}</h5>
                <p className="card-text">{product.gia.toLocaleString()} VNĐ</p>
                <Link
                  to={`/product/detail/${product.masp}`}
                  className="btn btn-primary"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAllProduct;
