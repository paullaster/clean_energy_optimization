import React, {useState, useEffect,useRef} from "react";
import * as echarts from 'echarts';

const DailyLineCurveChart = ({ width, height, options }) => {

    const chartHolder = useRef(null);
    const [chart, setChart] = useState(chartHolder);
    

    useEffect ( () => {
        if (!chart){
            setChart( echarts.init(chartHolder.current));
        }else {
            chart.resize({width, height});
            chart.setOptions(options);
        }
    }, [chart, options, width, height])

  
  return <div style={{width, height}} ref={chartHolder}></div>;
};

export default DailyLineCurveChart;
