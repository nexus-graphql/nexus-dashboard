import React from "react";

const ChangeAlert = () => {
  return (
    <div
      className={
        "text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-600"
      }
    >
      <span className="text-xl inline-block mr-5 align-middle">
        <i className="fas fa-bell" />
      </span>
      <span className="inline-block align-middle mr-8">
        <b className="capitalize">Hello!</b> You have made local changes that
        are ready to redeploy.
      </span>
    </div>
  );
};

export default ChangeAlert;
