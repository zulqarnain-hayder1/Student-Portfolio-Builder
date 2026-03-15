import  { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../api/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "" || form.password === "") {
      alert("Please fill all the fields");
      return;
    }

    try {
      const req = await registerUser({fullname:form.name,email:form.email,password:form.password});
      if (req?.status === 200 || req?.status === 201) {
        alert("User registered successfully");
        
        document.cookie = "sign_Up token=" + req.data.token;
        // localStorage.setItem("login", form.email);
        //  window.dispatchEvent(new Event("storage"));
        navigate("/login");
      } else {
        alert("Something went wrong");
        navigate("/register");
      }
    } catch (error) {
      console.log("Error in user registration:", error);
      alert("Internal server error");
      return;
    }

    console.log("Form submitted:", form);
    console.log(form);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
        method="post"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded-lg"
          required
        />

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

        <button className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600">
          Register
        </button>

        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
