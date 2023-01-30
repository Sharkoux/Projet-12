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
  let scores; 
  const color = ["red", "white"]

  if(datas.data.todayScore) {
   scores = datas.data.todayScore;
  }
  if(datas.data.score) {
    scores = datas.data.score
  }
  
  const array = [{todayScore: scores, fill: "red"}, {todayScore: 1, fill: "white"}]


  return (
    <PieChart width={260} height={250} style={{background: '#FBFBFB'}}>
    <text x={20} y={25} fontSize={16} fontWeight={'bold'}>Score</text>
    <text x={130} y={125} textAnchor="middle" fontSize={22} fontWeight={'bold'}>
    {scores * 100}%
    </text>
    <text x={130} y={155} textAnchor="middle" fontSize={16}>
    de votre objectif
    </text>
    <Pie data={array} dataKey="todayScore"  innerRadius={80} startAngle={-270} cornerRadius={25} />
    </PieChart>
  )
}
