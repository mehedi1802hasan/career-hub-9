import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';

const Dashboard = () => {
  
      const data = [
        { name: 'Assignment 1', number: 60 },
        { name: 'Assignment 2', number: 58 },
        { name: 'Assignment 3', number: 58 },
        { name: 'Assignment 4', number: 58 },
        { name: 'Assignment 5', number: 54 },
        { name: 'Assignment 6', number: 47 },
        { name: 'Assignment 7', number: 60 },
        { name: 'Assignment 8', number: 58 },
      ];
           
    return (
        <div className='flex justify-center'>
             
             <PieChart width={400} height={400}>
          <Pie
            dataKey="number"
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