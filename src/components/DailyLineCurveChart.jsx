import React, {useState, useEffect,useRef} from "react";
import * as Echarts from 'echarts';

const DailyLineCurveChart = ({ width, height, options }) => {
 
    const [chart, setChart] = useState(null);
    const chartHolder = useRef(null);

    useEffect ( () => {
        if (!chart){
            setChart( Echarts.init(chartHolder.current));
        }else {
            chart.resize({width, height});
            chart.setOptions(options);
        }
    }, [chart, options, width, height])

  
  return <div ref={chartHolder}></div>;
};

export default DailyLineCurveChart;
