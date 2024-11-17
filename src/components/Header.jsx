import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../repository/categoryRepository";

function Header() {
  const [categories, setCategories] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Không thể tải danh mục sản phẩm:", error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleAccountClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("user");
    if (token) {
      window.location.href = "/profile";
    } else {
      window.location.href = "/login";
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={handleAccountClick}>
          Tài khoản
        </a>
        <div>
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li key={category.idnhom} className="nav-item">
                <Link className="nav-link" to={`/category/${category.idnhom}`}>
                  {category.ten}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="btn btn-outline-primary">
              Đăng xuất
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline-primary">
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
