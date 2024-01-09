import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (login === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      alert("Туура эмес");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex bg-[url('/education-bg.png')] bg-opacity-10 h-screen bg-center bg-cover">
      <div className="h-full w-full mx-auto pt-28">
        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
          <h1 className="font-semibold text-3xl text-gray-700 m-2">Логин</h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
          <div className="">
            <input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              placeholder="Логин"
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
            />
          </div>
          <div className="">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
              className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
            />
          </div>
        </div>
        <div className="text-center mt-7">
          <button
            onClick={handleLogin}
            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium "
          >
            Кирүү
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
