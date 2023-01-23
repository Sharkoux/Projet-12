import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const Tooltips = styled.div`
    background: white;
    font-size: 15px;
    font-weight: bold;
    padding: 2px;
`



export default function Durée({datas}) {
    console.log(datas)

      
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Tooltips>
          <p className="label">{`${payload[0].value}min`}</p>
        </Tooltips>
      );
    }
  
  }


    return (
        <LineChart width={260} height={250} data={datas.sessions}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }} style={{background: '#FF0000'}}>
            
            <XAxis tickLine={false} axisLine={false}  dataKey="day" />
            <YAxis tickLine={false} axisLine={false} hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="white" legendType="none"  />
            
        </LineChart>
    )
}
