import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./items.css";
import styles from "./Hero.module.css";

const Items = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/items");
      setItems(response.data);
    } catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  return (
    <>
      <header className={styles.hero_container}>
        <form className={styles.search_container}>
          <input
            type="search"
            placeholder="search tikka"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <div>
        {categories?.map((cat) => (
          <div key={cat._id}>
            <h2 className="category_heading">{cat.CategoryName}</h2>
            <section className="items_flex">
              {items
                .filter(
                  (item) =>
                    item.CategoryName === cat.CategoryName &&
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((ele) => (
                  <Card
                    key={ele._id}
                    id={ele._id}
                    name={ele.name}
                    options={ele.options[0]}
                    img={ele.img}
                    description={ele.description}
                  />
                ))}
            </section>
          </div>
        ))}
      </div>
    </>
  );
};
export default Items;
