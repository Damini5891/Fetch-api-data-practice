import ProductList from "../components/ProductList";

/* eslint-disable react/jsx-key */
async function getProducts() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&select=title,price"
  );
  const data = await res.json();
  return data.products;
}

export default async function Products() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h1> Product List</h1>
      {products.map(({ id, title, price }) => {
        return <ProductList key={id} title={title} price={price} />;
      })}
    </div>
  );
}
