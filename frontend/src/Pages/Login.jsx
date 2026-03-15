import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(form.email === "" || form.password === ""){
      alert("Please fill all the fields");
      return ;
    }
    try{
      let req =await loginUser({email:form.email,password:form.password});
      if(req?.status === 200){
        document.cookie = "login token=" + req.data.token;
        alert(req.data.message || "Login successful");
      }else{
        alert(req.data.message || "Login failed");
      }

    }catch(error){
      console.log("Error in user login:", error);
      alert("Internal server error");
      return;
    }
    console.log(form);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 mb-6 rounded-lg"
          required
        />

        <button
          className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600"
        >
          Login
        </button>
      <div className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-500 hover:underline">
          Register here
        </Link>
      </div>
      </form>

    </div>
  );
};

export default Login;