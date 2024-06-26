import { useEffect } from "react";
import { useState } from "react";

export const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // Normally values like these would come from some form of secrets manager or environment variable
  const USERNAME = "elizabeth.camp";
  const BASE_URL = "https://expenses-backend-mu.vercel.app/expenses";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL, {
          headers: {
            "Content-Type": "application/json",
            Username: USERNAME,
          },
        });
        const data = await response.json();
        setExpenses(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(expenses)

  return <table>Empty table</table>;
};
export default App;
