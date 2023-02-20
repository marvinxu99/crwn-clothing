import "./categories.styles.scss";


const App = () => {
  
  const categories = [
    {
      id: 1,
      title: 'HATS',
      imgsrc: '',
    },
    {
      id: 2,
      title: 'JACKETS',
    },
    {
      id: 3,
      title: 'SNEAKERS',
    },
    {
      id: 4,
      title: 'WOMENS',
    },
    {
      id: 5,
      title: 'MENS',
    },
  ]

  return (
    <div className="categories-container">
      {categories.map((category) => (
          <div className="category-container" key={category.id}>
            <div className="background-image"></div>
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
