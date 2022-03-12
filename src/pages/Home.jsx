import { getDoc, doc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../firebase.config'
import Navbar from '../components/Navbar'

function Home() {
  useEffect(() => {
    const docRef = doc(db, 'messages', 'EWcPxsH7Quh9ufDVHYXw');
    getDoc(docRef)
    .then(value => console.log(value.data()))
  }, [])
  return (
    <div className="check">
      <Navbar/>
    </div>
  )
}

export default Home