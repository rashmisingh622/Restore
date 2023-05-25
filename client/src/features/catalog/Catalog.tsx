import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface Props{
    products: Product[];
    addProducts: () => void;
}

export default function Catalog({products, addProducts}:Props){
    return (
        <>
      <ProductList products={products}/>
      <Button variant="contained" onClick={addProducts}>Add product</Button></>
    )
}