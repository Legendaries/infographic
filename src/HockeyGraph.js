import React from 'react';
import Plot from 'react-plotly.js';

function formatData(data) {
  const penalties = data[3];
  const color = data[8];

  const formattedPenalties = {
    homeTeamName: [penalties[2][1].replace('-', '/')],
    awayTeamName: [penalties[1][1].replace('-', '/')],
    totalHomePenalties: [],
    totalAwayPenalties: [],
    ppGoalsHome: [],
    ppGoalsAway: [],
    homeColor: color[0],
    awayColor: color[1]
  };

  let a = [penalties[1][1].split('-'), penalties[2][1].split('-')];
  formattedPenalties.totalHomePenalties = [Number(a[1][1] - a[1][0])];
  formattedPenalties.totalAwayPenalties = [Number(a[0][1] - a[0][0])];
  formattedPenalties.ppGoalsHome = [a[1][0]];
  formattedPenalties.ppGoalsAway = [a[0][0]];

  return formattedPenalties;
}

function HockeyGraph(props) {
  const data = formatData(props.data);

  return (
    <Plot
      data={[
        {
          x: [data.homeTeamName + '\u200b'],
          y: data.ppGoalsHome,
          type: 'bar',
          mode: 'lines+points',
          marker: {
            color: data.homeColor,
            line: { color: 'white', width: 2 }
          }
        },
        {
          x: [data.homeTeamName + '\u200b'],
          y: data.totalHomePenalties,
          type: 'bar',
          mode: 'lines+points',
          marker: {
            color: 'grey',
            opacity: 0.2,
            line: { color: 'white', width: 2 }
          }
        },
        {
          x: data.awayTeamName,
          y: data.ppGoalsAway,
          type: 'bar',
          mode: 'lines+points',
          marker: {
            color: data.awayColor,
            line: { color: 'white', width: 2 }
          }
        },
        {
          x: data.awayTeamName,
          y: data.totalAwayPenalties,
          type: 'bar',
          mode: 'lines+points',
          marker: {
            color: 'grey',
            opacity: 0.2,
            line: { color: 'white', width: 2 }
          }
        }
      ]}
      layout={{
        width: 300,
        height: 300,
        barmode: 'stack',
        margin: {
          t: 20
        },
        font: {
          family: 'Courier New, monospace',
          size: 25,
          color: '#ffffff'
        },
        plot_bgcolor: '#00000000',
        paper_bgcolor: '#00000000',
        showlegend: false,
        xaxis: {
          color: 'white',
          autotick: true,
          tickmode: 'array',
          type: 'category',
          showgrid: false,
          showline: false,
          tickangle: 0,
          title: {
            text: 'Power Play',
            font: { family: 'Courier New, monospace', size: 25, color: 'white' }
          }
        },
        yaxis: {
          color: 'white',
          zerolinewidth: 4,
          showgrid: false,
          showline: false,
          showticklabels: false
        }
      }}
      config={{
        staticPlot: true,
        displayModeBar: false,
      }}
    />
  );
}

export default HockeyGraph;
