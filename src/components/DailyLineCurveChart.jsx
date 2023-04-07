import React, {useState, useEffect,useRef} from "react";
import * as Echarts from 'echarts';

const DailyLineCurveChart = ({ width, height, option }) => {

    const chartHolder = useRef(null);
    const [chart, setChart] = useState(chartHolder);
    

    useEffect ( () => {
        if (!chart){
            setChart( Echarts.init(chartHolder.current));
        }else {
            chart.resize({width, height});
            chart.setOptions(option);
        }
    }, [chart, options, width, height])

  
  return <div style={{width, height}} ref={chartHolder}></div>;
};

export default DailyLineCurveChart;
