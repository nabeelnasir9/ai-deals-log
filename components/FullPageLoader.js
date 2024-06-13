// components/FullPageLoader.js
import React from "react";
import { HashLoader } from "react-spinners";

const FullPageLoader = ({ loading }) => {
  return (
    loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <HashLoader color="#000000" loading={loading} size={50} />
      </div>
    )
  );
};

export default FullPageLoader;
