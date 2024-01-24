// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiOutlineX } from "react-icons/hi";
import { Exit } from "../../assets/StylesPages/revision";
import PropTypes from "prop-types";

export default function ExitRevision({ setShowReview }) {
  ExitRevision.propTypes = {
    setShowReview: PropTypes.func.isRequired,
  };
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
