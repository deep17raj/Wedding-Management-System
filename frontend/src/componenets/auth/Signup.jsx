import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    religion: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate and Submit Form
  const handleSubmit = async(e) => {
    e.preventDefault();
    let newErrors = {};

    // Simple Validation
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone.match(/^\d{10,15}$/))
      newErrors.phone = "Phone must be 10-15 digits";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.role) newErrors.role = "Role is required";
    if (!formData.religion) newErrors.religion = "Religion is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit Form Data (Mock API Call)
    try{
      const res = await axios.post("http://localhost:3001/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });
    if(res.status==200){
      alert("Signed up Succcessfully");
      navigate("/");
    }
    else{
      
        alert("Failed !")
      }
    }
    catch(err){
      console.error("Error:", err);
      alert("An error occurred while uploading.");
    }
    console.log("Form Submitted", formData);

    // Reset form after submission
    setFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      role: "",
      religion: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Couple">Couple</option>
              <option value="Planner">Planner</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>

          {/* Religion Selection */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Sikh">Sikh</option>
              <option value="Christian">Christian</option>
            </select>
            {errors.religion && (
              <p className="text-red-500 text-sm">{errors.religion}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
