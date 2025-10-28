import React, { useEffect, useState } from "react";
import API from "../api";
import EventTable from "../components/EventTable";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const fetchEvents = async () => {
    const { data } = await API.get("/events");
    setEvents(data);
  };



  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Event List
          </h2>
          <EventTable events={events} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

