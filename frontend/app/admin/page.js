"use client";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Link from "next/link";

export default function Home({ children }) {
  const [productCount, setProductCount] = useState(0);
  const [sellersCount, setSellersCount] = useState(0);
  const [todaySalesCount, setTodaySalesCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchDataFromAPI = async (url, setter) => {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
          }
          const data = await response.json();
          setter(data.count);
        };

        await fetchDataFromAPI('http://localhost:5000/api/productCount', setProductCount);
        await fetchDataFromAPI('http://localhost:5000/api/sellersCount', setSellersCount);
        await fetchDataFromAPI('http://localhost:5000/api/todaySalesCount', setTodaySalesCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>{children}</div>
      
      {/* Cards Section */}
      <div className="bg-gray-100">
      <nav className="flex justify-end">
        <Link href="../pages/signin" className="text-blue-500">SignIn</Link>
        <Link href="../pages/register" className="text-blue-500 ml-4">Register</Link>
    </nav>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          {/* Card for Product Total Count */}
          <DashboardCard title="Product Total Count" value={productCount} />

          {/* Card for Sellers Count */}
          <DashboardCard title="Sellers Count" value={sellersCount} />

          {/* Card for Today's Sales Count */}
          <DashboardCard title="Today's Sales Count" value={todaySalesCount} />
        </div>

        {/* Graph Image Section */}
        <div className="flex justify-center items-center my-8">
          <img src="/graph.png" alt="Graph" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
}

// Reusable Dashboard Card Component
function DashboardCard({ title, value }) {
  return (
    <div className="bg-purple-100 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
