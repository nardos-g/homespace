import React from 'react';

export const Upload = () => {
    return(
        <>
            <div>
                <h2>Rent</h2>
                <h3>Sale</h3>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Personal Information</label>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="number" placeholder='Tin umber' />
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Phone number' />
                    <input type="text" placeholder='another info' />
                </div>
                <div>
                    <label htmlFor="">House Information</label>
                    <input type="text" placeholder='Location' />
                    <input type="number" placeholder='bedrooms' />
                    <input type="number" placeholder='Floor type' />
                    <input type="number" placeholder='price' />
                    <input type="number" placeholder='bathrooms' />
                    {/* <input type="" placeholder='wall' /> */}
                    <select name="" id="">
                        <option value="">Mud</option>
                        <option value="">blocket</option>
                    </select>
                    <input type="number" placeholder='rooms' />
                    <span><input type="checkbox" /> Furnished</span>
                    <input type="text" placeholder='Describe your property (the title in the post' />
                </div>
                <div>
                    <label htmlFor="">House Information</label>
                    <span><input type="checkbox" placeholder='First Name' />Condominum</span>
                    <span><input type="checkbox" placeholder='First Name' />Apartment</span>
                    <span><input type="checkbox" placeholder='First Name' />Single Home</span>
                    <span><input type="checkbox" placeholder='First Name' />Single Room</span>
                </div>
            </form>
        </>
    )
}