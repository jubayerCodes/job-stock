import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ data }) => {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-white text-black p-2">
                    <p className="label">{`${payload[0].name}: ${payload[0].value} Marks`}</p>
                    <p className="desc">Topic: {payload[0].payload.payload.topic}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <PieChart width={500} height={500}>
                <Pie
                    dataKey="marks"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                />
                <Tooltip content={<CustomTooltip></CustomTooltip>} />
            </PieChart>

            <h2 className='text-3xl font-bold'>Assignment Marks</h2>
        </>
    );
};

export default Chart;