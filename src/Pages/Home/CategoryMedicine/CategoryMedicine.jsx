import React from 'react';
import CategoryMedicineCard from './CategoryMedicineCard';
import { Link } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';
import useCategory from '../../../Hooks/useCategory';

const CategoryMedicine = ({ items, title }) => {

    const [product] = useProduct();
    const [category] = useCategory();

    const filteredProducts = product.filter(item => item.category === category);
    // console.log(filteredProducts.length);

    return (
        <div>
            {/* {
                items.map(item => <CategoryMedicineCard key={item._id} item={item}></CategoryMedicineCard>)
            } */}

            {
                items.map(item =>
                    <div key={item._id} className="card bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        <Link to={`/specificMedicine/${title}`}>
                            <figure className="p-4">
                                <img className="mx-auto max-w-full rounded-lg h-auto"
                                    src={item.image}
                                    alt="Medicine image"
                                />
                            </figure>
                            <div className="p-4 text-center">
                                <p className="text-sm text-gray-500">
                                    Available Medicines: {item.medicine_count}
                                </p>
                                {/* <p className="text-sm text-gray-500">
                                    Available Medicines: {item.category?.length}
                                </p> */}
                                <h2 className="font-bold text-center bg-white text-gray-700 hover:bg-blue-500 hover:text-white py-2 rounded transition duration-200">
                                    {item.category}
                                </h2>
                            </div>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default CategoryMedicine;