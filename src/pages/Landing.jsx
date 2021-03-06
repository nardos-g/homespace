import React from "react";
import {Button} from '../components/Button';
import {Field} from '../components/Field';
import {FaArrowRight,
    FaSearch, FaStar} from 'react-icons/fa';
import './css/landing.css';
import { Testimony } from "../components/testimony";
import { Card } from "../components/card";
import {faker} from '@faker-js/faker';

export const Landing = () => {

    return(
        <div className="bg pt-12">
            <div className="w-4/5 mx-auto mt-0">
            <header className="flex items-center justify-between mb-2">
                <div>
                    <p>LOGO</p>
                </div>
                <div className="flex items-center">
                    <nav className="flex">
                        <p className="mx-4">Rent</p>
                        <p className="mx-4">Buy</p>
                        <p className="mx-4">Sell</p>
                        <p className="mx-4">Signin/Register</p>
                    </nav>
                    <Button className="" text='Add Listing' />
                </div>
            </header>
            <section className="w-1/2 mt-40">
                <div>
                    <div>
                        <div>
                            <h1 className="font-bold text-3xl mb-4 hpl">ቤትዎን ያከራዩ፡ Sale, And buy <br /> with Ease!</h1>
                            <p>Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className="flex items-center">
                            <Field text='Email' className="h-12 rounded-lg" />
                            <Button className=""/>
                        </div>
                        </div>
                </div>
            </section>
            <section className="mt-24">
                <div>
                    <h2 className="font-semibold text-xl my-4 w-fit mx-auto">Featured Locations</h2>
                    <p className="font-medium text-lg mb-2 w-fit mx-auto">Our top locations for buying or renting
                        a home and office
                    </p>
                    <div className="flex">
                        <div className="flex flex-col items-center">
                            <img src="" alt="" className="h-52 w-52 rounded-xl bg-slate-900"/>
                            <p>name</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="#" alt="" className="h-52 w-52 rounded-xl bg-slate-900"/>
                            <p>name</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="#" alt="" className="h-52 w-52 rounded-xl bg-slate-900"/>
                            <p>name</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="#" alt="" className="h-52 w-52 rounded-xl bg-slate-900"/>
                            <p>name</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mt-12 w-4/5 mx-auto" >
                    <h2 className="font-semibold text-xl mb-12 mt-6 w-fit mx-auto">How it works!</h2>
                    <div className="flex justify-between items-center my-4 w-fit mx-auto mb-8">
                        <div className="w-1/2">
                            <FaSearch className="mx-auto h-12 w-12 mb-4 text-gray-500"/>
                            <h3 className="hpl text-xl mb-4">Search for your home</h3>
                            <p className="w-3/4">Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts.
                            </p>
                            <div className="my-4 ml-2 flex items-center">
                                <p className="mr-2">Learn more</p>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img src="#" alt="" className="h-96 w-96 rounded-xl bg-slate-900 mx-auto"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4 w-fit mx-auto mb-8">
                        <div className="w-1/2">
                            <img src="#" alt="" className="h-96 w-96 rounded-xl bg-slate-900 mx-auto"/>
                        </div>
                        <div className="w-1/2">
                            <FaSearch className="mx-auto h-12 w-12 mb-4 text-gray-500"/>
                            <h3 className="hpl text-xl mb-4">Contact Your Agent</h3>
                            <p>Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts.
                            </p>
                            <div className="my-4 ml-2 flex items-center">
                                <p>Learn more</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4 w-fit mx-auto mb-8">
                        <div className="w-1/2">
                            <FaSearch className="mx-auto h-12 w-12 mb-4 text-gray-500"/>
                            <h3 className="hpl text-xl mb-4">Negotiate Directly with your client</h3>
                            <p>Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts.
                            </p>
                            <div className="my-4 ml-2 flex items-center">
                                <p>Learn more</p>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div >
                            <img src="#" alt="" className="h-96 w-96 rounded-xl bg-slate-900 mx-auto"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4 w-fit mx-auto mb-8">
                        <div className="w-1/2">
                            <img src="#" alt="" className="h-96 w-96 rounded-xl bg-slate-900 mx-auto"/>
                        </div>
                        <div className="w-1/2">
                            <FaSearch className="mx-auto h-12 w-12 mb-4 text-gray-500"/>
                            <h3 className="hpl text-xl mb-4">Move to Your New Home</h3>
                            <p>Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts.
                            </p>
                            <div className="my-4 ml-2 flex items-center">
                                <p>Learn more</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <Field text='Email' className="h-12 rounded-lg"/>
                        <Button text="Contact Us"/>
                    </div>
                </div>
            </section>
            <div>
                <section className="mt-4">
                <h2 className="font-semibold text-xl mb-12 mt-6 w-fit mx-auto">Feaured Listings</h2>
                    <div className="flex flex-wrap justify-center">
                        {() => {
                            let file = faker.image.city()
                            return <Card imageUrl={file}/>
                        }}
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
                </section>
            </div>
            <div>
                <section className="mt-16">
                    <div>
                        <h2 className="font-semibold text-xl my-4 w-fit mx-auto">What do our clients say!</h2>
                        <div  className = "flex justify-center">
                            <Testimony />
                            <Testimony />
                            <Testimony />
                            <Testimony />
                        </div>
                    </div>
                </section>
            </div>
            </div>
                <footer className="mt-8 bg-slate-300">
                    <div className="flex justify-between w-3/4 ml-auto pt-10 pb-4 mr-4">
                        <div>
                            <h3 className="font-semibold text-lg my-4">COMPANY</h3>
                            <ul>
                                <li>Abous Us</li>
                                <li>Careers</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg my-4 ">FEATURES</h3>
                            <ul>
                                <li>Rent Home</li>
                                <li>Sell Home</li>
                                <li>Buy Home</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg my-4">CONTACT US</h3>
                            <ul>
                                <li>nardos1g3@gmail.com</li>
                                <li>+25193-888-1784</li>
                                <li>Bole, road, absynia building,
                                    office 302
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg my-4">Stay Up to date</h3>
                            <p>Subscribe to our Newsletter</p>
                            <div className="flex items-center">
                                <Field text='Email' className="h-12 rounded-lg"/>
                                <Button className="" text='Send' />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Put here some legal disclaimer or name of
                        company */}
                    </div>
                </footer>
            
        </div>
    )
}