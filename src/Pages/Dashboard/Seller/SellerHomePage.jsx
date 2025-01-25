import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDollarSign } from 'react-icons/fa';
import { MdPaid, MdPendingActions } from 'react-icons/md';

const SellerHomePage = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['seller-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/seller-stats');
            return res.data
        }

    })

    return (
        <div>
            <h2 className='text-3xl font-semibold my-10'><span>Hi, Welcome </span>
                {
                    user?.displayName ? <span className='text-blue-500'>Mr. {user?.displayName}</span> : "Back"
                }
            </h2>

            <div className="stats shadow border">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaDollarSign className='text-4xl'></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdPaid className='text-5xl'></MdPaid>
                    </div>
                    <div className="stat-title">Paid Total</div>
                    <div className="stat-value">{stats.paidStatus}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdPendingActions className='text-5xl'></MdPendingActions>
                    </div>
                    <div className="stat-title">Pending Total</div>
                    <div className="stat-value">{stats.pendingStatus}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default SellerHomePage;