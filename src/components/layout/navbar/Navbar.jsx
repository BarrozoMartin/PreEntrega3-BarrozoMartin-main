import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <aside>
        <header>
          <Link to="/">
            <img className="logo" src="/src/components/assets/img/buhoneroicon.png" alt="" />
          </Link>
          <h2>Got some rare things on sale, stranger!</h2>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="menu">
                Todos los productos
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.path} className="menu">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
