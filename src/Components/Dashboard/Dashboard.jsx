import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';

const Dashboard = () => {
  
      const data = [
        { name: 'Assignment 1', marks: 60 },
        { name: 'Assignment 2', marks: 58 },
        { name: 'Assignment 3', marks: 58 },
        { name: 'Assignment 4', marks: 58 },
        { name: 'Assignment 5', marks: 54 },
        { name: 'Assignment 6', marks: 47 },
        { name: 'Assignment 7', marks: 60 },
        { name: 'Assignment 8', marks: 58 },
      ];
           
    return (
        <div className='flex justify-center' >
             
             <PieChart width={350} height={400}>
          <Pie
            dataKey="marks"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
           <Tooltip />
        </PieChart>
       
        </div>
    );
};

export default Dashboard;