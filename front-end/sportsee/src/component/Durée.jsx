import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea
} from "recharts";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useCallUserSession from "../hook/useCallUserSession";

// Rules css (styled-component)
const Tooltips = styled.div`
    background: white;
    font-size: 15px;
    font-weight: bold;
    padding: 1px;
`


/**
 * Generate LineCharts with user data
 * @return { ReactDOM }
 */


export default function Durée() {
    // Retrieve ID with hook useParams
  const { id } = useParams()
  // Call data Session for user with hook useCallUserSession (params: ID)
  const { userSession, error } = useCallUserSession(id)



  //if no data, return
  if(!userSession.data?.sessions) {
    return
  }

  //Create Dictionary for format data
  const dict = [
  {data: "L", position: 1},
  {data: "M", position: 2},
  {data: "M", position: 3},
  {data: "J", position: 4},
  {data: "V", position: 5},
  {data: "S", position: 6},
  {data: "D", position: 7}
]

  //Create Custom Tooltip  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Tooltips>
          <p className="label">{`${payload[0].value}min`}</p>
        </Tooltips>
      );
    }

  }

  // Add band for style component ()
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

// Format Data, add days and position
  const resp = userSession.data.sessions.map((item) => {
    const meta = dict.find(g => g.position === Number(item.day));
    const global = { ...item, ...meta };
    const {day, ...rest} = global;
    return rest
  }).sort((a, b) => a.position - b.position);

  // Return LineChart component
  return (
    <LineChart width={260} height={250} data={resp}
      margin={{ top: 5, right: 12, left: 12, bottom: 5 }} style={{ background: '#FF0000', borderRadius: 5 }}>
      <text
        x='7%'
        y='10%'
        dy={+10}
        style={{ fontSize: 15, fill: '#FFFFFF', opacity: '0.5'}}
      >
        Durée moyenne des sessions
      </text>
      <XAxis tickLine={false} axisLine={false}  dataKey='data' style={{fontSize: 12, color: '#FFFFFF'}}  />
      <YAxis tickLine={false} axisLine={false} hide={true} padding={{top: 70}} />
      <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="sessionLength" stroke="white" legendType="none" />
      <ReferenceArea shape={<ReferenceBands />} />
    </LineChart>
  )
}
