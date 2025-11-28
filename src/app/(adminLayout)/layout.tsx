import Sidebar from '@/components/AdminDashboard/Sidebar/Sidebar';
import { ReactNode } from 'react';

const AdminDashboardLayout = ({children} : {children: ReactNode}) => {
    return (
        <div className='flex gap-6'>
            <Sidebar/>
            <div>
                {children}
            </div>
        </div>
    );
};

export default AdminDashboardLayout;