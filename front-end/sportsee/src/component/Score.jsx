import React from "react";
import {
 PieChart,
 Pie,
 Legend,
 Tooltip,
 PolarAngleAxis
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Data = { score: 200}


export default function Score({ datas }) {
  console.log(datas)

  return (
    <PieChart width={730} height={250}>
    <Pie data={Data} dataKey="score" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
</PieChart>
  )
}
