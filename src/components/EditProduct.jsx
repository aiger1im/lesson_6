import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneproduct, editproduct } = useContext(productContext);
  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  const [name, setName] = useState(oneproduct.name);
  const [lastName, setLastName] = useState(oneproduct.lastName);
  const [img, setImg] = useState(oneproduct.img);
  useEffect(() => {
    setName(oneproduct.name);
    setLastName(oneproduct.lastName);
    setImg(oneproduct.img);
  }, [oneproduct]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (!name || !lastName || !img) {
      alert("Заполните данные");
      return;
    }
    let editedProduct = {
      name: name,
      lastName: lastName,
      img: img,
    };
    editproduct(id, editedProduct);
    navigate("/");
  };

  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="name"
        variant="outlined"
        value={name}
      />
      <TextField
        onChange={(e) => setLastName(e.target.value)}
        id="outlined-basic"
        label="lastName"
        variant="outlined"
        value={lastName}
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
      />
      <Button onClick={handleClick} variant="contained">
        Save
      </Button>
    </div>
  );
};

export default EditProduct;
// id - мы вытаскиваем с Mainroutes с помошью useparams querryParametr - это id потому что мы в mainRoutes указали после edit id
//useParams - это хук дает нам доступ к параметрам этого конкретного маршрута