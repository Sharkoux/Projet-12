import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Tooltips = styled.div`
    background: white;
    font-size: 15px;
    font-weight: bold;
    padding: 1px;
`



export default function Durée({ datas }) {
  console.log(datas)

  const DateFormat = ["L","M","M","J", "V", "S", "D"]


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Tooltips>
          <p className="label">{`${payload[0].value}min`}</p>
        </Tooltips>
      );
    }

  }

  const ReferenceBands = () => {

    const bands =
      { color: "#000000", x: 175, height: 250 };

    return (
      <rect
        key={bands.index}
        x={bands.x}
        width={100}
        height={bands.height}
        fill={bands.color}
        fillOpacity={0.1}
      />
    );
  }

  const formatXAxis = (tickItem) => {
    return DateFormat[tickItem]
  }
  


  return (
    <LineChart width={260} height={250} data={datas.sessions}
      margin={{ top: 5, right: 12, left: 12, bottom: 5 }} style={{ background: '#FF0000', borderRadius: 5 }}>
      <text
        x='7%'
        y='10%'
        dy={+10}
        style={{ fontSize: 15, fill: '#FFFFFF', opacity: '0.5'}}
      >
        Durée moyenne des sessions
      </text>
      <XAxis tickLine={false} axisLine={false}  tickFormatter={formatXAxis} style={{fontSize: 12, color: '#FFFFFF'}}  />
      <YAxis tickLine={false} axisLine={false} hide={true} padding={{top: 70}} />
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="sessionLength" stroke="white" legendType="none" />
      <ReferenceArea shape={<ReferenceBands />} />
    </LineChart>
  )
}
