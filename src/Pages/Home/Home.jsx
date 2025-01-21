import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import DiscountedProducts from './DiscountedProducts';
import CategoryMedicine from './CategoryMedicine/CategoryMedicine';
import useCategory from '../../Hooks/useCategory';

const Home = () => {

    const [category] = useCategory();

    const tablets = category.filter(item => item.category === 'Tablet');
    const capsules = category.filter(item => item.category === 'Capsule');
    const syrups = category.filter(item => item.category === 'Syrup');
    const injections = category.filter(item => item.category === 'Injection');
    const creams = category.filter(item => item.category === 'Cream');
    const herbals = category.filter(item => item.category === 'Herbal');

    return (
        <div>
            <Helmet>
                <title>MediEase | Home</title>
            </Helmet>

            <Slider></Slider>

            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <CategoryMedicine items={tablets} title="Tablet"></CategoryMedicine>
                <CategoryMedicine items={capsules} title="Capsule"></CategoryMedicine>
                <CategoryMedicine items={syrups} title="Syrup"></CategoryMedicine>
                <CategoryMedicine items={injections} title="Injection"></CategoryMedicine>
                <CategoryMedicine items={creams} title="Cream"></CategoryMedicine>
                <CategoryMedicine items={herbals} title="Herbal"></CategoryMedicine>
            </section>

            <DiscountedProducts></DiscountedProducts>
        </div>
    );
};

export default Home;