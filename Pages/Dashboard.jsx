// src/pages/Dashboard.jsx

import React, { useState } from "react";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    status: "",
  });

  const [editId, setEditId] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // CREATE (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/Dashboard/create-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formData.id,
            name: formData.name,
            email: formData.email,
            status: formData.status,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Error while adding customer");
        return;
      }

      alert("Customer Added Successfully");

      setFormData({
        id: "",
        name: "",
        email: "",
        status: "",
      });

      setEditId(null);
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  // FIND BY ID (GET)
  const handleFind = async () => {
    if (!formData.id) {
      alert("Please enter Customer ID");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/Dashboard/findProfileById/${formData.id}`
      );

      // Important fix for 404 issue
      if (!response.ok) {
        alert("Customer not found");
        return;
      }

      const data = await response.json();
      console.log(data);

      setFormData({
        id: data.id || "",
        name: data.name || "",
        email: data.email || "",
        status: data.status || "",
      });

      setEditId(data.id);

      alert("Customer Found Successfully");
    } catch (error) {
      console.log(error);
      alert("Error while finding customer");
    }
  };

  // UPDATE (PUT)
  const handleUpdate = async () => {
    if (!editId) {
      alert("Please find customer first");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/Dashboard/update-ProfileById/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            status: formData.status,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Update failed");
        return;
      }

      alert("Customer Updated Successfully");

      setFormData({
        id: "",
        name: "",
        email: "",
        status: "",
      });

      setEditId(null);
    } catch (error) {
      console.log(error);
      alert("Error while updating customer");
    }
  };

  // DELETE (DELETE)
  const handleDelete = async () => {
    if (!editId) {
      alert("Please find customer first");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/Dashboard/deleteProfileById/${editId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        alert(data.message || "Delete failed");
        return;
      }

      alert("Customer Deleted Successfully");

      setFormData({
        id: "",
        name: "",
        email: "",
        status: "",
      });

      setEditId(null);
    } catch (error) {
      console.log(error);
      alert("Error while deleting customer");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        CRM Dashboard
      </h1>

      {/* Form Box */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {editId ? "Update / Delete Customer" : "Add Customer"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ID */}
          <input
            type="number"
            name="id"
            placeholder="Enter Customer ID"
            value={formData.id}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Find Button */}
          <button
            type="button"
            onClick={handleFind}
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700"
          >
            Find Customer
          </button>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Status */}
          <input
            type="text"
            name="status"
            placeholder="Enter Status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
            >
              Add
            </button>

            <button
              type="button"
              onClick={handleUpdate}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
              Update
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;