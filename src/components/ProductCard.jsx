import React, { useContext } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ name, lastName, img, id }) => {
  const { deleteProduct } = useContext(productContext);
  return (
    <div>
      <img className="img" src={img} alt="" />
      <h3>{name}</h3>
      <h3>{lastName}</h3>
      <Button
        onClick={(e) => deleteProduct(id)}
        variant="contained"
        color="error"
      >
        delete{""}
      </Button>

      <Link to={`/edit/${id}/${name}`}>
        <Button variant="contained">Edit</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
