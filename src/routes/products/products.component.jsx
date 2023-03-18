import ProductCard from '../../components/product-card/product-card.component';


<Fragment key={title}>
<h2>{title.toUpperCase()}</h2>
<div className='products-container'>
  {categoriesMap[title].map((product) => (
    <ProductCard key={product.id} product={product} />    
  ))}
</div>      
</Fragment>
