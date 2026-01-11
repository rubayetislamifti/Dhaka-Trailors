import { useState } from "react";
import "./Login.css";
import { ENDPOINTS } from "../api/endpoint";
import { Link, Navigate } from "react-router-dom";

function Login(){
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const STATIC_EMAIL = "rubayetislam16@gmail.com";
    const STATIC_PASSWORD = "123456";

    if(isLoggedIn){
        return <Navigate to='/order/table' replace />;
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        setMessage("");
        setIsError(false);
        setLoading(true);

        try{
            const response = await fetch(ENDPOINTS.LOGIN,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    phone, password
                }),
            });

            const data = await response.json();

            if (response.status === 401){
                setIsError(true);
                setMessage(data.message);
                return;
            }

            setIsError(false);
            setMessage(data.message);
            setLoggedIn(true);
            localStorage.setItem("token",data.token);
        }catch(error){
            setIsError(true);
            setMessage("Network error. Please try again.");
        }finally{
            setLoading(false);
        }
    };

    return (
  <div className="page-wrapper">
    {/* ===== Header Section ===== */}
    <div className="header">
      <h1>ঢাকা টেইলার্স এন্ড ফেব্রিক্স</h1>
      <p>বড় বাজার, সুলতানপুর, সাতক্ষীরা সদর, সাতক্ষীরা</p>
      <p className="phone">
        মোবাইল: ০১৯৫৬-১২৪৮৭৯ (bkash পার্সোনাল),
        ০১৮২২-৭৪৯৮৮৮ (nagad ও bkash পেমেন্ট একাউন্ট)
      </p>
    </div>

    {/* ===== Login Card ===== */}
    <div className="login-wrapper">
      <div className="login-card">
        <h2>লগইন</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="মোবাইল"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="পাসওয়ার্ড"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "লগইন হচ্ছে..." : "লগইন"}
          </button>
        </form>

        {message && (
          <p className={isError ? "error" : "success"}>
            {message}
          </p>
        )}
        <p className="switch-link">
            একাউন্ট নেই? <Link to='/register'>Register</Link>
        </p>
      </div>
    </div>
  </div>
);

}

export default Login;