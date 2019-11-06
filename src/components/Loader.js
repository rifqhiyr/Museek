import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <i
        class="fa fa-spinner fa-spin"
        style={{ fontSize: "480px", color: "#ffee54", margin: "100px" }}
      ></i>
    </div>
  );
}

export default Loader;
