import { useState } from "react";
import { Link } from "react-router-dom";
import "./newOrder.css";

function NewOrder() {
  const handlePrint = () => window.print();

  return (
    <div className="new-order-page">

      {/* ===== Header ===== */}
      <div className="order-top">
        <h1>ঢাকা টেইলার্স এন্ড ফেব্রিক্স</h1>
        <p>নতুন অর্ডার ফর্ম</p>
      </div>

      {/* ===== Order + Customer ===== */}
      <div className="section-grid">
        <Section title="অর্ডার বিবরণ">
          <input placeholder="অর্ডার নাম্বার" />
          <input type="date" placeholder="অর্ডার তারিখ" />
          <input type="date" placeholder="ডেলিভারি তারিখ" />
          <select>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </Section>

        <Section title="গ্রাহকের বিবরণ">
          <input placeholder="নাম" />
          <input placeholder="ঠিকানা" />
          <input placeholder="মোবাইল" />
          <input placeholder="গ্রাম" />
        </Section>
      </div>

      {/* ===== পোশাকের বিবরণ ===== */}
      <Section title="পোশাকের বিবরণ">
        <YNGrid items={[
          "এক হাত পাঞ্জাবি","দুই হাত পাঞ্জাবি","পাঞ্জাবি","শার্ট",
          "ফতুয়া","সালোয়ার","পায়জামা","পাঞ্জাবি পায়জামা"
        ]} />
      </Section>

      {/* ===== বৈশিষ্ট্য ===== */}
      <Section title="বৈশিষ্ট্য">
        <TextGrid items={[
          "সেলাইয়ের ধরন","হাফ পকেট","বাটন কালার","কাজ পকেট",
          "কলার ডিজাইন","কাফ ডিজাইন","হাতার ডিজাইন"
        ]} />
        <YNGrid items={[
          "বুক পকেট","কলার বোতাম","ডাবল স্টিচ",
          "সামনে বোতাম","সাইড কাট"
        ]} />
      </Section>

      {/* ===== উপরের পরিমাপ ===== */}
      <Section title="উপরের পরিমাপ">
        <InputGrid items={[
          "লম্বা","বডি","পেট","হাতা","গলা","কাঁধ","কফ","হিপ"
        ]} />
      </Section>

      {/* ===== নিচের পরিমাপ ===== */}
      <Section title="নিচের পরিমাপ">
        <InputGrid items={["লম্বা","নেচারি","কোমর","হাই","রান"]} />
        <YNGrid items={[
          "ব্যাক পকেট",
          "সামনে বোতাম পকেট",
          "এক পকেট এ ডিজাইন",
          "দুই পকেট এ ডিজাইন"
        ]} />
      </Section>

      {/* ===== অর্ডারের বিবরণ ===== */}
      <Section title="অর্ডারের বিবরণ">
        <CalcRow label="কাপড়" />
        <CalcRow label="মজুরি" />
        <CalcRow label="ডিজাইন" />
        <CalcRow label="বোতাম" />
        <CalcRow label="এমব্রয়ডারি" />
        <CalcRow label="কুরিয়ার চার্জ" />
      </Section>

      {/* ===== টাকা হিসাব ===== */}
      <Section title="টাকা হিসাব">
        <MoneyRow label="মোট টাকা" />
        <MoneyRow label="অগ্রিম টাকা" />
        <MoneyRow label="বকেয়া টাকা" />
      </Section>

      {/* ===== মন্তব্য ===== */}
      <Section title="মন্তব্য">
        <textarea rows="4" placeholder="মন্তব্য লিখুন..." />
      </Section>

      {/* ===== Actions ===== */}
      <div className="form-actions">
        <button className="save-btn">💾 Save</button>
        <button className="print-btn"><Link to='/order/print' className="print-btn">Print</Link></button>
      </div>

    </div>
  );
}

/* ===== Helper Components ===== */

const Section = ({ title, children }) => (
  <div className="form-card">
    <h3>{title}</h3>
    {children}
  </div>
);

const InputGrid = ({ items }) => (
  <div className="input-grid">
    {items.map(i => <input key={i} placeholder={i} />)}
  </div>
);

const TextGrid = ({ items }) => (
  <div className="input-grid">
    {items.map(i => <input key={i} placeholder={i} />)}
  </div>
);

const YNGrid = ({ items }) => (
  <div className="yn-grid">
    {items.map(i => (
      <label key={i} className="yn-item">
        <input type="checkbox" /> {i}
      </label>
    ))}
  </div>
);

const CalcRow = ({ label }) => (
  <div className="calc-row">
    <span>{label}</span>
    <input placeholder="পরিমাণ" />
    <input placeholder="মূল্য" />
    <input placeholder="টাকা" />
  </div>
);

const MoneyRow = ({ label }) => (
  <div className="money-row">
    <span>{label}</span>
    <input placeholder="৳" />
  </div>
);

export default NewOrder;
