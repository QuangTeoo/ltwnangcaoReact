import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../repository/productRepository";
import { useState } from "react";
function ProductDetail() {
  const { masp } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await detailProduct(masp);
        console.log(data);
        setProduct(data);
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm:", err);
      }
    };

    fetchProduct();
  }, [masp]);
  if (!product) {
    return <h2 className="text-center mt-4">Không tìm thấy sản phẩm</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://github.com/QuangTeoo.png"
            className="img-fluid"
            alt={product.ten}
          />
        </div>
        <div className="col-md-3">
          <h2>{product.ten}</h2>
          <p>
            <strong>Giá:</strong> {product.gia}
          </p>
          <p>
            <strong>Mô tả:</strong> {product.mota}
          </p>
          <button className="btn btn-success">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
