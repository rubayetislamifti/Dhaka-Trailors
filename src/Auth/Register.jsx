import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ENDPOINTS } from "../api/endpoint";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setLoading(true);

    if (password !== password_confirmation) {
      setIsError(true);
      setMessage("পাসওয়ার্ড মিলছে না");
      setLoading(false);
      return;
    }

    try{
      const response = await fetch(ENDPOINTS.REGISTER,{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          name,
          address, 
          phone, 
          password, 
          password_confirmation
        }),
      });

      const result = await response.json();

      if(!result.status){
        setIsError(true);
        setMessage(result.error);
        return;
      }

      setIsError(false);
      setMessage(result.message);

      setTimeout(()=>{
        navigate("/")
      },1500);
    }catch(error){
      setIsError(true);
      setMessage("Network error. Please try again.");
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
        <div className="header">
      <h1>ঢাকা টেইলার্স এন্ড ফেব্রিক্স</h1>
      <p>বড় বাজার, সুলতানপুর, সাতক্ষীরা সদর, সাতক্ষীরা</p>
      <p className="phone">
        মোবাইল: ০১৯৫৬-১২৪৮৭৯ (bkash পার্সোনাল),
        ০১৮২২-৭৪৯৮৮৮ (nagad ও bkash পেমেন্ট একাউন্ট)
      </p>
    </div>
      <div className="login-wrapper">
        <div className="login-card">
          <h2>রেজিস্টার</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="নাম"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="মোবাইল"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="ঠিকানা"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="কনফার্ম পাসওয়ার্ড"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
            {loading ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার"}  
            </button>
          </form>

          {message && (
            <p className={isError ? "error":"success"}>
              {message}
            </p>
          )}

          <p className="switch-link">
            ইতিমধ্যে একাউন্ট আছে? <Link to="/login">লগইন করুন</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
