import axios from "axios";
import { AuthContext } from "../context/authContext";
import React, { useContext, useEffect, useState } from "react";
import Combo from "../assets/images/Combo.jpeg";
import dessert from "../assets/images/dessert.jpeg";
import drinks from "../assets/images/drinks.png";
import follow from "../assets/images/follow.jpg";
import snack from "../assets/images/snacks.jpeg";
import Revision from "../components/Revision";
import Payment from "../components/Payment";
import {
  All,
  Welcome,
  Products,
  Title,
  Subtitle,
  PurchaseSummary,
  DescriptionPrice,
  Summary,
  PriceDescription,
  Divider,
  FinalValue,
  Amount,
  Finishing,
  RemoveOrderFromList,
  AddProducttoList,
} from "../assets/StylesPages/home";
import SearchHome from "../Return/home/SearchHome";
import CategoriesHome from "../Return/home/CategoriesHome";
import MenuHome from "../Return/home/MenuHome";
import PurchaseSummaryHome from "../Return/home/PurchaseSummaryHome";
import FinishingHome from "../Return/home/FinishingHome";

export default function Home() {
  const {
    products,
    setProducts,
    setId,
    showReview,
    setShowReview,
    setOrder,
    order,
    showPayment,
    setShowPayment,
    setCode,
    code,
  } = useContext(AuthContext);
  const [search, setSearch] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [follo, setFollow] = useState([]);
  const [drink, setDrink] = useState([]);
  const [desser, setDesert] = useState([]);
  const [comboo, setCombo] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [productFiltered, setProductFiltered] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [ordereIds, setOrdereIds] = useState([]);
  let sumTotal = 0;

  useEffect(() => {
    const urlCode = `${import.meta.env.VITE_API_URL}/code`;
    const promise = axios.get(urlCode);
    promise.then((response) => {
      setCode(response.data);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }, [code, setCode]);

  useEffect(() => {
    const urlHome = `${import.meta.env.VITE_API_URL}/home`;
    const promise = axios.get(urlHome);
    promise.then((response) => {
      setProducts(response.data);
      const follo = response.data.filter(
        (product) => product.category === "FOLLOW"
      );
      setFollow(follo);
      const snacks = response.data.filter(
        (product) => product.category === "SNACKS"
      );
      setSnacks(snacks);
      const drink = response.data.filter(
        (product) => product.category === "DRINK"
      );
      setDrink(drink);
      const dessert = response.data.filter(
        (product) => product.category === "DESSERT"
      );
      setDesert(dessert);
      const comboo = response.data.filter(
        (product) => product.category === "COMBOO"
      );
      setCombo(comboo);
    });
    promise.catch((err) => {
      console.log(err.response);
    });

    if (order && order.length >= 0) {
      const orderedIds = order.map((item) => item.ProductSpecific.id);
      setOrdereIds(orderedIds);
    }
  }, [order, setOrder]);

  function ShowProductDetails(id) {
    setShowReview(true);
    setId(id);
  }

  if (order && order.length > 0) {
    sumTotal = order.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.total.replace(",", "."));
    }, 0);
  }

  if (products.length === 0) {
    return <>carregando</>;
  } else {
    return (
      <All>
        {showReview === true && <Revision></Revision>}
        {showPayment === true && <Payment></Payment>}

        <Welcome>Seja bem Vindo(a)!</Welcome>
        <SearchHome
          setSearch={setSearch}
          setSearchResults={setSearchResults}
          setProductFiltered={setProductFiltered}
          setSelectedCategory={setSelectedCategory}
          products={products}
          search={search}
        />
        <Products>
          <Title>Categorias</Title>
          <Subtitle>Navegue por categorais</Subtitle>
          <CategoriesHome
            setProductFiltered={setProductFiltered}
            setSelectedCategory={setSelectedCategory}
            Combo={Combo}
            snack={snack}
            follow={follow}
            drinks={drinks}
            dessert={dessert}
          />
          <Title>Produtos</Title>
          <Subtitle>Selecione um produto para adicioar ao seu pedido</Subtitle>
          <MenuHome
            productFiltered={productFiltered}
            snacks={snacks}
            ordereIds={ordereIds}
            ShowProductDetails={ShowProductDetails}
            selectedCategory={selectedCategory}
            comboo={comboo}
            follo={follo}
            desser={desser}
            drink={drink}
            search={search}
            searchResults={searchResults}
          />
        </Products>
        {order && order.length > 0 && (
          <PurchaseSummaryHome order={order} sumTotal={sumTotal} />
        )}
        <FinishingHome order={order} setShowPayment={setShowPayment} />
      </All>
    );
  }
}
