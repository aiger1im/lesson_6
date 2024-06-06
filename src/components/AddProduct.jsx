import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addproduct } = useContext(productContext);
  // хук реактр что бы понимать откуда мы хотим выташить функцию
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name || !lastName || !img) {
      alert("Заполните данные");
      return;
    }
    let newProduct = {
      name: name,
      lastName: lastName,
      img: img,
    };
    addproduct(newProduct);
    navigate("/");
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        id="outlined-basic"
        label="Lastname"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
      />
      <Button onClick={handleClick} variant="contained">
        Add product
      </Button>
    </div>
  );
};

export default AddProduct;
