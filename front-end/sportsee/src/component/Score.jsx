import React from "react";
import {
  PieChart,
  Pie
} from "recharts";
import PropTypes from 'prop-types';


/**
 * Generates a display of scores with data User
 * @param { Object } 
 * @return { ReactElement }
 */

 function Score({ datas }) {

  const array = [{ todayScore: datas.scores, fill: "red" }, { todayScore: 1, fill: "white" }]

  // Return Score component
  return (
    <PieChart width={260} height={250} style={{ background: '#FBFBFB' }}>
      <text x={20} y={25} fontSize={16} fontWeight={'bold'}>Score</text>
      <text x={130} y={125} textAnchor="middle" fontSize={22} fontWeight={'bold'}>
        {datas.scores * 100}%
      </text>
      <text x={130} y={155} textAnchor="middle" fontSize={16}>
        de votre objectif
      </text>
      <Pie data={array} dataKey="todayScore" innerRadius={80} startAngle={-270} cornerRadius={25} />
    </PieChart>
  )
}

Score.propTypes = {
  datas: PropTypes.object,
}

export default Score