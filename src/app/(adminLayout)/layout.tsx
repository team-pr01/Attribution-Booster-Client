import Sidebar from '@/components/AdminDashboard/Sidebar/Sidebar';
import { ReactNode } from 'react';

const AdminDashboardLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='flex-1 p-6'>
                {children}
            </div>
        </div>
    );
};

export default AdminDashboardLayout;