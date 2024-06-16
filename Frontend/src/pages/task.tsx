import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import TaskList from '@/components/TaskList';
const Dashboard: React.FC = () => {
    return (
        <PrivateRoute>
            <div>
               <TaskList/>
            </div>
        </PrivateRoute>
    );
};

export default Dashboard;
