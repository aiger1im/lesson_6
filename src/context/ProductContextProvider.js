import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";

export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
    //! Children - это наше предложение которое мы обернули в наш компонент (context)
  const [products, setProducts] = useState([]);
  const [oneproduct, setOneProduct] = useState([]);
  //!CREAT
  const addproduct = async (obj) => {
    await axios.post(API, obj);
    // API- куда отправить
    // Product - обект что отправить
  };
  //!GET

  const getProducts = async () => {
    const { data } = await axios(API);
    setProducts(data);

  };
  //!delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //!GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setOneProduct(data);
    //Data - начальное состояние
    // API ID - тут уже измененное состояние
  };

  //!EDIT
  const editproduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
  };
  const values = {
    addproduct,
    products,
    getProducts,
    deleteProduct,
    getOneProduct,
    oneproduct,
    editproduct,
  };
  //! Наш context возврашает наше предложение вместе с знаниями в атрибуте value  где хранится наши функции и состояния.
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
//провайдер может давать свой функционал только своим дочерним элементам контехста
// обяснить конекст провайдеру кто его дечерний элемент и обеернуть в чилдрен
// теперь это весь контекст
// все что находится в value = какие состоянии.функции можно перебрасывать какие нельзя
// что бы получить функцию состояние либо все что мы захотим.мы должны использовать деструктуризацию
//Children - что бы отображать динамично все что нам надо
// ProductContext
//GERONEPRODUCT - функция для того чтобы вытаскивать только один продукт
// 
// axios - библиотека для запроса с более простым синтаксисом.Укароченная версия fetch 