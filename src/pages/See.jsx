import React, { useRef } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase.config';
import { Card } from '../components/card';

export const See = () => {
    const image = useRef(null);
    getDownloadURL(ref(storage, 'images/nardos.jpg'))
    .then((url) => {
       console.log(url)
       image.current.setAttribute('src', url);
    })

    // Ask fire store for image urls, 

    //what is the data structure, I don't know, what is user information, 
    //how do we store data, how do we retrieve data, and how we improve data

    //my very first idea was that people get in and post a house for kiray, using the listings page, they
    //post it, and that goes to cloud storage. Okay, but another request should also be sent to the database
    //update the database entry, and have a url link of that base, I will not ask again for him, I will
    //ask again his data, about pending rows and store them
    return(
       <div className='bg-gray-200'>
           <div className="h-12 bg-gray-800 w-full align-middle">
               <p className='text-white font-medium ml-16'>You can do a lot with this page</p>
           </div>
           <div className='flex flex-wrap justify-center mt-4 width mx-auto'>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
           </div>
       </div>
    )
}