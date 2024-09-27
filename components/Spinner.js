"use client";

import ClipLoader from "react-spinners/ClipLoader";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const Spinner = ({
  loading,
  size = 35,
  color = "#004aad",
  margin = "100px",
}) => {
  return (
    <div style={style}>
      <div style={{ textAlign: "center", marginTop: margin }}>
        <ClipLoader
          color={color}
          loading={loading}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Spinner;
