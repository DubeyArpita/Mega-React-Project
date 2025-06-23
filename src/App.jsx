import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth"
import "./App.css";
import { login, logout } from "./store/authSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  },[])
  
  return !loading ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <div className="w-full block max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1>Welcome to the Mega Project</h1>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
}

export default App;
