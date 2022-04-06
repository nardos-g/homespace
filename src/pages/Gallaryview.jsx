import React, { useState } from 'react';
import { Gallary } from '../components/gallary';



export const GallaryView = () => {
    const [imageSource, setImageSource] = useState();

    const thumbUp = (e) => {
        console.log(e.target.src)
        setImageSource(e.target.src)
    }

    const remove = () => {
        console.log('removed')
        setImageSource(null);
    }
    return(
        <div className='relative bg-blue-500 group'>
            {/* The filter div */}
            <div className='fixed left-6 mt-12'>

                <h2 className='my-2 font-semibold'>Filter By</h2>

                <div className='ml-2'>

                    <h3 className='my-1 font-semibold'>Location</h3>

                    <input className='ml-2 border-2 border-black px-2 rounded-md' size="15" type="text" placeholder="search by location"/>
                   
                    {/* The about input field should have a drop down menu to select inputs from
                    and can't accept any random input, it is a controlled input field.*/}

                    <h3 className='my-1 font-semibold'>Price</h3>

                    <input min='0' max='1000000'  className='ml-2 border-2 border-black px-2 rounded-md' type="number" placeholder="max"/>
                    
                    <h3 className='my-1 font-semibold'>House Type</h3>

                    <div className='flex flex-col ml-2'>
                        <span><input className='mr-2' type="radio" name="houseType"/>Appartment</span>
                        <span><input className='mr-2' type="radio" name="houseType"/>Condominum</span>
                        <span><input className='mr-2' type="radio" name="houseType"/>Single room</span>
                        <span><input className='mr-2' type="radio" name="houseType"/>Whole compound</span>
                    </div>

                </div>

            </div>

            {/* The photo gallary div is here */}
            <div className='flex flex-wrap justify-center w-10/12 ml-auto pt-6'>
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
                <Gallary thumbUp={thumbUp} />
            </div>

            <div className={`fixed top-32 left-1/2 -translate-x-1/2 ${imageSource ? 'block' : 'hidden'}`}>
                
                {/* Photo view area in the middle of the page*/}
                <img onClick={remove} src={imageSource} alt="name" width='100%' max-width='300px' />
            
            </div>

        </div>
    )
}
