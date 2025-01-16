import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet-async';
import CategoryMedicine from './CategoryMedicine/CategoryMedicine';
import DiscountedProducts from './DiscountedProducts';
import useProduct from '../../Hooks/useProduct';

const Home = () => {

    const [product] = useProduct();

    const Tablets = product.filter(item => item.category === 'Tablet');
    const Capsules = product.filter(item => item.category === 'Capsule');
    const Syrups = product.filter(item => item.category === 'Syrup');
    const Injections = product.filter(item => item.category === 'Injection');
    const Topicals = product.filter(item => item.category === 'Topical');

    return (
        <div>
            <Helmet>
                <title>MediEase | Home</title>
            </Helmet>

            <Slider></Slider>

            {/* <CategoryMedicine></CategoryMedicine> */}

            <CategoryMedicine items={Tablets} title={"Tablet"}></CategoryMedicine>
            <CategoryMedicine items={Capsules} title={"Capsule"}></CategoryMedicine>
            <CategoryMedicine items={Syrups} title={"Syrup"}></CategoryMedicine>
            <CategoryMedicine items={Injections} title={"Injection"}></CategoryMedicine>
            <CategoryMedicine items={Topicals} title={"Topical"}></CategoryMedicine>

            <DiscountedProducts></DiscountedProducts>
        </div>
    );
};

export default Home;