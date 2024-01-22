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
  Search,
  Products,
  Title,
  Subtitle,
  Categories,
  Box,
  Menu,
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
import handleSearchHome from "../Functionality/HandleSearchHome";
import ProcuctBoxHome from "../Return/ProductBoxHome";

export default function Home() {
  const {
    products,
    setProducts,
    setId,
    showReview,
    setShowReview,
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
  }, [code]);

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

    if (order && order.length > 0) {
      const orderedIds = order.map((item) => item.ProductSpecific.id);
      setOrdereIds(orderedIds);
    }
  }, [order]);

  function ShowSpecific(parament) {
    setProductFiltered(true);
    setSelectedCategory();
    setSelectedCategory(parament);
  }

  function handleSearch(query) {
    handleSearchHome(
      query,
      setSearch,
      setSearchResults,
      setProductFiltered,
      setSelectedCategory,
      products
    );
  }

  function ShowProductDetails(id) {
    setShowReview(true);
    setId(id);
  }

  if (order && order.length > 0) {
    sumTotal = order.reduce((accumulator, item) => {
      return accumulator + parseFloat(item.total.replace(",", "."));
    }, 0);
  }

  function cancel() {
    location.reload();
  }

  function IWantThese() {
    setShowPayment(true);
  }

  if (products.length === 0) {
    return <>carregando</>;
  } else {
    return (
      <All>
        {showReview === true && <Revision></Revision>}
        {showPayment === true && <Payment></Payment>}

        <Welcome>Seja bem Vindo(a)!</Welcome>
        <Search
          placeholder="O que voê procura?"
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        ></Search>
        <Products>
          <Title>Categorias</Title>
          <Subtitle>Navegue por categorais</Subtitle>
          <Categories>
            <Box onClick={() => ShowSpecific("COMBOO")}>
              <img src={Combo} alt="" />
              <p style={{ fontWeight: "bold" }}>Combos</p>
            </Box>
            <Box onClick={() => ShowSpecific("SNACKS")}>
              <img src={snack} alt="" />
              <p style={{ fontWeight: "bold" }}>Lanches</p>
            </Box>
            <Box onClick={() => ShowSpecific("FOLLOW")}>
              <img src={follow} alt="" />
              <p style={{ marginTop: "-5px", fontWeight: "bold" }}>
                Acompanhamentos
              </p>
            </Box>
            <Box onClick={() => ShowSpecific("DRINK")}>
              <img src={drinks} alt="" />
              <p style={{ fontWeight: "bold" }}>Bebidas</p>
            </Box>
            <Box onClick={() => ShowSpecific("DESSERT")}>
              <img src={dessert} alt="" />
              <p style={{ fontWeight: "bold" }}>Sobremesas</p>
            </Box>
          </Categories>
          <Title>Produtos</Title>
          <Subtitle>Selecione um produto para adicioar ao seu pedido</Subtitle>
          <Menu>
            {!productFiltered &&
              snacks.map((main) => (
                <ProcuctBoxHome
                  key={main.id}
                  main={main}
                  ordereIds={ordereIds}
                  ShowProductDetails={ShowProductDetails}
                />
              ))}
            {productFiltered === true && (
              <>
                {selectedCategory === "COMBOO" &&
                  comboo.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
                {selectedCategory === "FOLLOW" &&
                  follo.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
                {selectedCategory === "DESSERT" &&
                  desser.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
                {selectedCategory === "SNACKS" &&
                  snacks.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
                {selectedCategory === "DRINK" &&
                  drink.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
                {search.length !== 0 &&
                  searchResults.map((main) => (
                    <ProcuctBoxHome
                      key={main.id}
                      main={main}
                      ordereIds={ordereIds}
                      ShowProductDetails={ShowProductDetails}
                    />
                  ))}
              </>
            )}
          </Menu>
        </Products>
        {order && order.length > 0 && (
          <PurchaseSummary>
            {order.map((main) => (
              <React.Fragment key={main.ProductSpecific.id}>
                <DescriptionPrice>
                  <Summary>
                    {main.counter}x {main.ProductSpecific.name}
                  </Summary>
                  <PriceDescription>
                    R$ {(main.ProductSpecific.price * main.counter).toFixed(2)}
                  </PriceDescription>
                </DescriptionPrice>
                {main.followUp.length > 0 &&
                  main.followUp.map((followUpItem) => (
                    <DescriptionPrice key={followUpItem.id}>
                      <Summary>{followUpItem.item}</Summary>
                      <PriceDescription>{followUpItem.price}</PriceDescription>
                    </DescriptionPrice>
                  ))}
              </React.Fragment>
            ))}

            <Divider></Divider>
            <FinalValue>
              <h1>Total do pedido:</h1>
              <Amount>R$ {sumTotal.toFixed(2)} </Amount>
            </FinalValue>
          </PurchaseSummary>
        )}

        <Finishing>
          <RemoveOrderFromList onClick={() => cancel()}>
            Cancelar
          </RemoveOrderFromList>
          {order.length > 0 && (
            <AddProducttoList
              style={{
                backgroundColor: "#2E5D15",
                border: "2px solid #2E5D15",
              }}
              onClick={() => IWantThese()}
            >
              Finalizar pedido
            </AddProducttoList>
          )}
          {order.length === 0 && (
            <AddProducttoList
              style={{
                backgroundColor: "#9F9F9F",
                border: "2px solid #9F9F9F",
              }}
            >
              Finalizar pedido
            </AddProducttoList>
          )}
        </Finishing>
      </All>
    );
  }
}
