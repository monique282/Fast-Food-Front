import { HiOutlineX } from "react-icons/hi";
import { Header, Exit } from "../assets/StylesPages/revision";

export default function HeaderRevision(setShowReview) {
  return (
    <Header>
      <p>Revise seu pedido!</p>
      <Exit
        onClick={() => {
          setShowReview(false);
        }}
      >
        <HiOutlineX
          style={{
            width: "30px",
            height: "30px",
            color: "#9F9F9F",
            fontWeight: "bold",
          }}
        />
      </Exit>
    </Header>
  );
}
