import CategoryItem from "./components/category-item/category-item.component";
import categories from "./components/categories/categories.components";
import "./components/categories/categories.styles.scss";

const App = () => {
      
  return (
    <div className="categories-container">
      {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        )
      )}
    </div>
  );
}

export default App;
