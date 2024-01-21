
import { MdPayment } from "react-icons/md";
import { CreditDebitMoney } from "../assets/StylesPages/payment";

export default function CreditDebitMoneyPayment({ text }) {
  return (
    <CreditDebitMoney>
      <p>
        <MdPayment
          style={{
            color: "#9F9F9F",
            marginRight: "3%",
            width: "30px",
            height: "30px",
          }}
        />
        {text}
      </p>
      <div
        style={{
          border: "3px solid #9F9F9F",
          backgroundColor: "#9F9F9F",
        }}
      ></div>
    </CreditDebitMoney>
  );
}
