import { HiOutlineX } from "react-icons/hi";
import { Exit } from "../../assets/StylesPages/revision";

export default function ExitRevision(setShowReview) {
  return (
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
  );
}
