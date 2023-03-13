import { useEffect } from "react";
import Login from "./login";
import useToken from "./useToken";

const Dashboard = () => {
  const { token, setToken } = useToken();

  useEffect(() => {
    if (token) localStorage.removeItem("token");
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return <div className="uppercase p-6">dashboard</div>;
};

export default Dashboard;
