import React from "react";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import style from "./ByMonth.module.css";

const data = [
  {
    name: "Enero",
    amount: 2000,
  },
  {
    name: "Febrero",
    amount: 2210,
  },
  {
    name: "Marzo",
    amount: 2290,
  },
  {
    name: "Abril",
    amount: 2000,
  },
  {
    name: "Mayo",
    amount: 701,
  },
  {
    name: "Junio",
    amount: 1500,
  },
  {
    name: "Julio",
    amount: 2100,
  },
  {
    name: "Agosto",
    amount: 1190,
  },
  {
    name: "Septiembre",
    amount: 1200,
  },
  {
    name: "Octubre",
    amount: 950,
  },
  {
    name: "Noviembre",
    amount: 1700,
  },
  {
    name: "Diciembre",
    amount: 2400,
  },
];

const ByMonth = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Ventas por Mes</h1>
      <hr className={style.separateLine} />
      <div className={style.center}>
        <ResponsiveContainer width="90%" aspect={2}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#7a4d7c"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default ByMonth;
