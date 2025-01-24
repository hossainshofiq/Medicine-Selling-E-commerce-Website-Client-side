import React from 'react';
import { FaCartPlus, FaHome, FaList, FaUsers } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiKnightBanner } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar';
import { AiFillMedicineBox } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import useSeller from '../Hooks/useSeller';
import useAuth from '../Hooks/useAuth';


const DashboardLayout = () => {

    const { user } = useAuth();
    // to do: get isAdmin from the database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;

    // to do: get isSeller from the database
    const [isSeller] = useSeller();
    // const isSeller = false;

    // or: get isUser from the database

    return (
        <>
            <Helmet>
                <title>MediEase | Dashboard</title>
            </Helmet>
            {/* <Navbar></Navbar> */}
            {/* <div className='flex gap-10'>
                
                <div className='w-80 min-h-screen bg-green-300'>
                    <div className='ml-5  my-5'>
                        <h1 className='text-3xl font-semibold'>MediEase</h1>
                        <h5 className='text-xl font-semibold'>Health Care Products</h5>
                    </div>
                    <div className='divider'></div>


                    <ul className='menu'>

                        {
                            isAdmin ? <>
                              
                                <li>
                                    <NavLink to="/dashboard/manageUsers">
                                        <FaUsers></FaUsers> Manage Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageCategory">
                                        <FaList></FaList> Manage Category
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentManagement">
                                        <MdOutlinePayment></MdOutlinePayment> Payment Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/salesReport">
                                        <FcSalesPerformance></FcSalesPerformance> Sales Report
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageBanner">
                                        <GiKnightBanner></GiKnightBanner> Manage Banner Advertise
                                    </NavLink>
                                </li>
                                <div className='divider'></div>
                            </> : <>
                                
                                {
                                    isSeller ? <>
                                        <li>
                                            <NavLink to="/dashboard/manageMedicines">
                                                <AiFillMedicineBox></AiFillMedicineBox> Manage Medicines
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/paymentHistory">
                                                <MdOutlinePayment></MdOutlinePayment> Payment History
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/requestAd">
                                                <GiKnightBanner></GiKnightBanner> Ask For Advertisement
                                            </NavLink>
                                        </li>
                                        <div className="divider"></div>
                                    </> : <>
                                        <li>
                                            <NavLink to="/dashboard/paymentHistory">
                                                <GiKnightBanner></GiKnightBanner> Payment History
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </>
                        }

                        



                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                <FaCartPlus></FaCartPlus> Shop
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div> */}

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col lg:items-center lg:justify-center p-4">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden fixed top-4 left-4 z-50"
                    >
                        Open drawer
                    </label>
                    <div className="mt-8 lg:mt-0 w-full">
                        {/* <div>Welcome, {user.displayName} </div> */}
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay lg:hidden"></label>

                    <ul className="menu bg-green-300 text-base-content min-h-screen w-64 lg:w-80 p-4">
                        <div className='ml-5  my-5'>
                            <h1 className='text-3xl font-semibold'>MediEase</h1>
                            <h5 className='text-xl font-semibold'>Health Care Products</h5>
                        </div>
                        <div className='divider'></div>
                        {
                            isAdmin ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/manageUsers">
                                            <FaUsers /> Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageCategory">
                                            <FaList /> Manage Category
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentManagement">
                                            <MdOutlinePayment /> Payment Management
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/salesReport">
                                            <FcSalesPerformance /> Sales Report
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageBanner">
                                            <GiKnightBanner /> Manage Banner Advertise
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                </>
                            ) : !isAdmin && isSeller ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/manageMedicine">
                                            <AiFillMedicineBox /> Manage Medicines
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/sellerPaymentHistory">
                                            <MdOutlinePayment /> Payment History
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/requestAdvertisement">
                                            <GiKnightBanner /> Ask For Advertisement
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userPaymentHistory">
                                            <GiKnightBanner /> Payment History
                                        </NavLink>
                                    </li>
                                    <div className='divider'></div>
                                </>
                            )
                        }

                        <li>
                            <NavLink to="/">
                                <FaHome></FaHome> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                <FaCartPlus></FaCartPlus> Shop
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>


        </>

    );
};

export default DashboardLayout;