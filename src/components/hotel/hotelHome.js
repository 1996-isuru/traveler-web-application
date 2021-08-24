import React, { useEffect, useState } from "react";

const HotelHome = () => {
  //getting async storage data
//   const [userToken, setToken] = useState(null);
//   const [userEmail, setEmail] = useState(null);
//   const [userName, setUserName] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const email = localStorage.getItem("userEmail");
      const usertype = localStorage.getItem("usertype");
      const token = localStorage.getItem("token");

    //   setEmail(email);
        console.log(email);
        console.log(usertype);
        console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
  //getting async storage data

  return (
    <div className="login-form">
      <h1 className="heading">HotelHome</h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        HotelHome
      </p>
      <br />
    </div>
  );
};

export default HotelHome;
