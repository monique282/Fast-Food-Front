import { useLocation } from "react-router-dom";
import {
  All,
  HeaderBhutans,
  SloganName,
  Control,
  Requests,
  Kitchen,
  Withdrawal,
} from "../assets/StylesPages/header";

export default function Header() {
  const location = useLocation();

  return (
    <All>
      <HeaderBhutans>
        <SloganName to="/">Fast Food</SloganName>
        <Control>
          <Requests to="/" isActive={location.pathname === "/"}>
            Pedidos
          </Requests>
          <Kitchen to="/kitchen" isActive={location.pathname === "/kitchen"}>
            Cozinha
          </Kitchen>
          <Withdrawal
            to="/withdrawal"
            isActive={location.pathname === "/withdrawal"}
          >
            Retirada
          </Withdrawal>
        </Control>
      </HeaderBhutans>
    </All>
  );
}
