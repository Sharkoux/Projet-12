import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Tooltips = styled.div`
  background-color: #E60000;
  color: white;
  font-size: 15px;
  padding: 5px;
  border: transparent;
`

const ContainerBarChart = styled.div`
  display: flex;
  background-color: #FBFBFB;
  width: 100%;
  height: 320px; 
  margin-top: 70px;
  .recharts-surface {
    width: 100%;
  }
  
`


export default function Activité({ userActivity }) {
  console.log(userActivity)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Tooltips>
          <p className="label">{`${payload[0].value}kg`}</p>
          <p className="labels">{`${payload[1].value}kcal`}</p>
        </Tooltips>
      );
    }

  }

  return (
    <ContainerBarChart>
      <BarChart
        width={1000}
        height={320}
        data={userActivity.sessions}
        margin={{
          top: 25,
          right: 30,
          left: 30,
          bottom: 5
        }}
        style={{ width: '100%' }}

      >
        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={9} wrapperStyle={{ marginRight: "50px", fontSize: "17px", paddingBottom: "35px", fontWeight: "bold" }} />
        <text x='5%'
          y='10%'
          dy={+12}
          style={{ fontSize: 16, fill: '#20253A', fontWeight: "bold" }}

        >Activité quotidienne
        </text>
        <CartesianGrid vertical={false} strokeDasharray="2" />
        <XAxis dataKey="day" tickLine={false} domain={[1, 10]} />

        <Tooltip content={<CustomTooltip />} />

        <Bar barSize={6} name="Poids(kg)" dataKey="kilogram" fill="#282D30" cornerRadius={25} radius={[25, 25, 0, 0]} />
        <Bar barSize={6} name="Calorie brûlées(kCal)" dataKey="calories" fill="#E60000" radius={[25, 25, 0, 0]} />
        <YAxis orientation="right" tickLine={false} axisLine={false} />
      </BarChart>
    </ContainerBarChart>
  );
}
