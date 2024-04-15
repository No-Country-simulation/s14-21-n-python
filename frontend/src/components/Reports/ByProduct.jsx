import React from "react";
import {
  CartesianGrid,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import style from "./ByProduct.module.css";

const data = [
  {
    name: "Producto1",
    count: 200,
  },
  {
    name: "Producto2",
    count: 2210,
  },
  {
    name: "Producto3",
    count: 2290,
  },
  {
    name: "Producto4",
    count: 2000,
  },
  {
    name: "Producto5",
    count: 701,
  },
  {
    name: "Producto6",
    count: 1500,
  },
  {
    name: "Producto7",
    count: 2100,
  },
  {
    name: "Producto8",
    count: 1190,
  },
  {
    name: "Producto9",
    count: 1200,
  },
  {
    name: "Producto10",
    count: 950,
  },
  {
    name: "Producto11",
    count: 1700,
  },
  {
    name: "Producto12",
    count: 2400,
  },
];

const ByProduct = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Ventas por Producto</h1>
      <hr className={style.separateLine} />
      <div className={style.center}>
        <ResponsiveContainer width="90%" aspect={2}>
          <BarChart data={data} width={200} height={400}>
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#b78eb9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default ByProduct;
