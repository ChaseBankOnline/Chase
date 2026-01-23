const historyData = [
  { date: "2025-01-14", desc: "Amazon Purchase", amount: "-$1,200", status: "Completed" },
  { date: "2025-02-02", desc: "Salary Credit", amount: "+$4,500", status: "Completed" },
  { date: "2025-03-11", desc: "Electricity Bill", amount: "-$180", status: "Completed" },
  { date: "2025-04-07", desc: "Wire Transfer", amount: "-$15,000", status: "Completed" },
  { date: "2025-05-21", desc: "Investment Dividend", amount: "+$2,300", status: "Completed" },
  { date: "2025-06-10", desc: "Netflix Subscription", amount: "-$19.99", status: "Completed" },
  { date: "2025-07-03", desc: "ATM Withdrawal", amount: "-$500", status: "Completed" },
  { date: "2025-08-16", desc: "Transfer to John Doe", amount: "-$3,200", status: "Completed" },
  { date: "2025-09-09", desc: "Bonus Payment", amount: "+$1,800", status: "Completed" },
  { date: "2025-10-28", desc: "Online Purchase", amount: "-$750", status: "Completed" }
];

const tbody = document.getElementById("history-body");

historyData.forEach(tx => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.desc}</td>
    <td>${tx.amount}</td>
    <td>${tx.status}</td>
    <td><button class="receipt-btn">View Receipt</button></td>
  `;
  tbody.appendChild(row);
});
