import { useState, useEffect } from "react";
import "./App.css";
import axiosInstance from "./helpers/axiosIntance";

function App() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData(); // Only call on mount
  }, []); // ✅ added empty dependency array to prevent infinite loop

  return <div>{data}</div>;
}

export default App;
