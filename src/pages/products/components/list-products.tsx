interface Product {
  id: number;
  name: string;
  category: string;
}

interface ListProductsProps {
  products: Product[];
}

export default function ListProducts({ products }: ListProductsProps) {
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}
