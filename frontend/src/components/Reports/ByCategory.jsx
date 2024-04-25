import React from "react";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell } from "recharts";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "./ByCategory.module.css";

const data = [
  {
    name: "Conservas",
    count: 200,
  },
  {
    name: "Lácteos",
    count: 2000,
  },
  {
    name: "Limpieza",
    count: 1700,
  },
  {
    name: "Carnes",
    count: 900,
  },
  {
    name: "Golosinas",
    count: 1281,
  },
  {
    name: "Bebidas",
    count: 3400,
  },
  {
    name: "Congelados",
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
      <div className={style.flex}>
        <div className={style.col}>
          <table className={style.table}>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} style={{ marginBottom: "5px" }}>
                  <td
                    style={{
                      width: 40,
                      backgroundColor: colors[index % colors.length],
                    }}
                  ></td>
                  <td>{entry.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      </div>
    </main>
  );
};

export default ByCategory;
