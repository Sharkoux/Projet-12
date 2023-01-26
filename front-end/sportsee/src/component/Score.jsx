import React from "react";
import {
 PieChart,
 Pie,
 Cell,
 Label,
 Legend
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";



export default function Score({ datas }) {
  console.log(datas)
  
  const color = ["red", "white"]

  const array = [{todayScore: datas.todayScore, fill: "red"}, {todayScore: 1, fill: "white"}]

  console.log(array)

  return (
    <PieChart width={260} height={250} style={{background: '#FBFBFB'}}>
    <text x={130} y={125} textAnchor="middle" fontSize={22} fontWeight={'bold'}>
    {datas.todayScore * 100}%
   </text>
   <text x={130} y={155} textAnchor="middle" fontSize={16}>
    de votre objectif
   </text>
    <Pie data={array} dataKey="todayScore"  innerRadius={80} startAngle={-270} cornerRadius={25} />
    </PieChart>
  )
}
