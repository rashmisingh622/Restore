import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Container, Typography } from "@mui/material";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5002/products')
    .then(response => response.json())
    .then(response => setProducts(response))
  }, [])

 function addProducts(){
    setProducts((prevState) => [
      ...prevState, 
      {
        id: (prevState.length) + 1,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        pictureUrl: 'http://picsum.photos/200',
        brand: 'someBrand',
        description: 'some Product'
      }])
  }

  return (
    <>
      <Header></Header>
      <Container>
      <Catalog products={products} addProducts={addProducts}/>
      </Container>
    </>
  );
}

export default App;
