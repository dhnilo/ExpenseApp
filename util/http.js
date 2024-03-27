import axios from "axios";

const BACKEND_URL = "https://reactnativecourse-34a34-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', // expenses.json "node" in the database
    expenseData // data to be stored
  );
  const id = response.data.name; // the id of the stored data
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json'); // expenses.json "node" in the database

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, // expenses.json "node" in the database
    expenseData // data to be updated
  );
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`); // expenses.json "node" in the database
}