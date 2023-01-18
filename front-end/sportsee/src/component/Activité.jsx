
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



export default function Activité({userActivity}) {
 
  return (
    
    <BarChart
      width={835}
      height={320}
      data={userActivity.sessions}
      margin={{
        top: 25,
        right: 30,
        left: 10,
        bottom: 5
      }}
      
    >
    <Legend verticalAlign="top" align="right"  iconType="circle" iconSize={9} wrapperStyle={{marginRight: "50px", fontSize: "17px", paddingBottom: "35px"}}/>
    <text       x='5%'
                y='10%'
                dy={+12}
                style={{ fontSize: 16, fill: '#20253A', fontWeight: "bold" }}
                width={200}
               >Activité quotidienne</text>
      <CartesianGrid  vertical={false} strokeDasharray="2" />
      <XAxis dataKey="day" tickLine={false} domain={[1, 10]} />
      
      <Tooltip />
      
      <Bar barSize={6} name="Poids(kg)" dataKey="kilogram"  fill="#282D30" />
      <Bar barSize={6} name="Calorie brûlées(kCal)" dataKey="calories" fill="#E60000" />
      <YAxis orientation="right"  tickLine={false} axisLine={false}  />
    </BarChart>
  );
}
