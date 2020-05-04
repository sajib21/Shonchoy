const transactions = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    description: "Initial Balance",
    amount: 2000,
    date: "2020-05-03",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    description: "Food",
    amount: -500,
    date: "2020-05-04",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    description: "Ki korsi mone nai",
    amount: -500,
    date: "2020-05-04",
  },
];

let currentBalance = 1000;

export function getTransactions() {
  return transactions;
}

export function search(key) {
  return transactions.filter((t) =>
    t.description.toLowerCase().includes(key.toLowerCase())
  );
}

export function getCurrentBalance() {
  return currentBalance;
}
