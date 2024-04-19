import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "./ByCategory.module.css";

const data = [
  {
    name: "Categoria A",
    count: 200,
  },
  {
    name: "Categoria B",
    count: 2000,
  },
  {
    name: "Categoria C",
    count: 1700,
  },
  {
    name: "Categoria D",
    count: 900,
  },
  {
    name: "Categoria E",
    count: 1281,
  },
  {
    name: "Categoria F",
    count: 3400,
  },
  {
    name: "Categoria G",
    count: 500,
  },
];

const colors = [
  "#1cddda",
  "#ffddd8",
  "#b0f0a5",
  "#ffd09e",
  "#b4c1c7",
  "#fb9f9e",
  "#aef0ff",
  "#a1b4ff",
];
const ByCategory = () => {
  return (
    <main className={style.container}>
      <h1 className={style.title}>Ventas por Categoría</h1>
      <hr className={style.separateLine} />
      <div className={style.center}>
        <ResponsiveContainer>
          <Link to={"/sales"}>
            <div className={style.closeButton}>
              <AiOutlineClose />
            </div>
          </Link>
          <PieChart>
            <Pie
              dataKey="count"
              data={data}
              innerRadius={150}
              outerRadius={250}
              fill="#b78eb9"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default ByCategory;
