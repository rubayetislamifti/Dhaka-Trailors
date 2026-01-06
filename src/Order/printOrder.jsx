import { useState } from "react";
import "./printOrder.css";

function OrderReceipt() {
  return (
    <div className="receipt-page">
      
      {/* ===== Header ===== */}
      <div className="receipt-header">
        <div className="logo">DTF</div>
        <div className="shop-info">
          <h1>ঢাকা টেইলার্স এন্ড ফেব্রিক্স</h1>
          <p>বড় বাজার, সুলতানপুর, সাতক্ষীরা সদর, সাতক্ষীরা</p>
          <p>
            মোবাইল: ০১৯৫৬-১২৪৮৭৯ (bkash), ০১৮২২-৭৪৯৮৮৮ (nagad)
          </p>
        </div>
      </div>

      {/* ===== Top Info ===== */}
      <div className="two-col">
        <InfoBlock title="অর্ডার বিবরণ" items={[
          ["অর্ডার নাম্বার", "DT-1001"],
          ["অর্ডার তারিখ", "25-09-2026"],
          ["ডেলিভারি তারিখ", "30-09-2026"],
        ]} />

        <InfoBlock title="গ্রাহকের বিবরণ" items={[
          ["নাম", "গ্রাহক নাম"],
          ["মোবাইল", "01XXXXXXXXX"],
          ["ঠিকানা", "সাতক্ষীরা"],
        ]} />
      </div>

      {/* ===== Dress & Features ===== */}
      <div className="three-col">
        <Box title="পোশাকের বিবরণ" items={[
          "এক হাত পাঞ্জাবি",
          "দুই হাত পাঞ্জাবি",
          "শার্ট",
          "পায়জামা",
        ]} />

        <Box title="বৈশিষ্ট্য" items={[
          "বুক পকেট",
          "ডাবল স্টিচ",
          "কলার বোতাম",
          "কাফ ডিজাইন",
        ]} />

        <Box title="উপরের পরিমাপ" items={[
          "লম্বা: 40",
          "বডি: 38",
          "হাতা: 25",
          "গলা: 15",
        ]} />
      </div>

      {/* ===== Lower Measurement ===== */}
      <div className="box full">
        <h3>নিচের পরিমাপ</h3>
        <div className="inline-list">
          <span>লম্বা: 40</span>
          <span>কোমর: 32</span>
          <span>হাই: 36</span>
          <span>রান: 22</span>
          <span>ব্যাক পকেট ✔</span>
        </div>
      </div>

      {/* ===== Order Cost ===== */}
      <table className="cost-table">
        <thead>
          <tr>
            <th>বিবরণ</th>
            <th>পরিমাণ</th>
            <th>মূল্য</th>
            <th>টাকা</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>কাপড়</td>
            <td>1</td>
            <td>1500</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>মজুরি</td>
            <td>1</td>
            <td>1000</td>
            <td>1000</td>
          </tr>
          <tr>
            <td colSpan="3" className="right">মোট টাকা</td>
            <td>2500</td>
          </tr>
          <tr>
            <td colSpan="3" className="right">অগ্রিম</td>
            <td>1000</td>
          </tr>
          <tr>
            <td colSpan="3" className="right">বকেয়া</td>
            <td>1500</td>
          </tr>
        </tbody>
      </table>

      {/* ===== Note ===== */}
      <div className="note">
        <strong>নোট:</strong> কাপড় ডেলিভারির সময় অবশ্যই রশিদ আনতে হবে।
      </div>

      {/* ===== Footer ===== */}
      <div className="receipt-footer">
        <div>গ্রাহকের স্বাক্ষর</div>
        <div>দোকানের স্বাক্ষর</div>
      </div>

      {/* ===== Actions ===== */}
      <div className="actions">
        <button onClick={() => window.print()}>Print</button>
      </div>

    </div>
  );
}

export default OrderReceipt;


/* ===== Helper Components ===== */

const InfoBlock = ({ title, items }) => (
  <div className="box">
    <h3>{title}</h3>
    {items.map(([k, v]) => (
      <div className="row" key={k}>
        <span>{k}</span>
        <span>{v}</span>
      </div>
    ))}
  </div>
);

const Box = ({ title, items }) => (
  <div className="box">
    <h3>{title}</h3>
    {items.map(i => <div key={i}>{i}</div>)}
  </div>
);
