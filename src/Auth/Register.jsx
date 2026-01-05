import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // reuse same design

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register API will be added later");
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
              type="email"
              placeholder="ইমেইল"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">রেজিস্টার</button>
          </form>

          <p className="switch-link">
            ইতিমধ্যে একাউন্ট আছে? <Link to="/login">লগইন করুন</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
