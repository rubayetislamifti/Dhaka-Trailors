import { useState } from "react";
import { Link } from "react-router-dom";
import "./orderTable.css";


function Order() {
  const handlePrint = () => window.print();

  const orders = Array.from({ length: 42 }).map((_, i) => ({
    id: i + 1,
    orderNo: `DT-${1000 + i}`,
    name: `গ্রাহক ${i + 1}`,
    phone: "01XXXXXXXXX",
    item: "পাঞ্জাবি",
    delivery: "25 Sep",
    amount: "৳ 2,500",
    status: "Pending",
  }));


  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentOrders = orders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="order-page">
      {/* Header */}
      <div className="order-header-card">
        <div>
          <h1>ঢাকা টেইলার্স এন্ড ফেব্রিক্স</h1>
          <p>বড় বাজার, সুলতানপুর, সাতক্ষীরা সদর, সাতক্ষীরা</p>
          <span>০১৯৫৬-১২৪৮৭৯ (bkash), ০১৮২২-৭৪৯৮৮৮ (nagad)</span>
        </div>
        <button className="print-btn" onClick={handlePrint}>
          🖨 Print
        </button>
      </div>

      {/* Orders */}
      <div className="orders-card">
        <div className="orders-header">
          <h2>অর্ডার তালিকা</h2>

          <Link to="/order/new" className="new-order-btn">
            + New Order
          </Link>
        </div>

        <div className="orders-list">
          {currentOrders.map((o) => (
            <div className="order-row" key={o.id}>
              <div className="cell id">#{o.id}</div>
              <div className="cell">
                <strong>{o.orderNo}</strong>
                <span>{o.name}</span>
              </div>
              <div className="cell">{o.phone}</div>
              <div className="cell">{o.item}</div>
              <div className="cell">{o.delivery}</div>
              <div className="cell amount">{o.amount}</div>
              <div className="cell">
                <span className="status pending">{o.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ‹ Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;

