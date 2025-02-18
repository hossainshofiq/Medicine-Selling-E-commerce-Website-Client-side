import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='text-center rounded-md border p-2 lg:w-1/2 mx-auto'>
            <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-500 pb-2 border-b uppercase'>{heading}</p>
            <h3 className='text-green-800'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;