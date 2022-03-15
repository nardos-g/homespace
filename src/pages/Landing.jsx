import React from "react";
import {Link} from 'react-router-dom';
import {Button} from '../components/Button';
import {Field} from '../components/Field';
import { FaAngleLeft, FaArrowRight,
        FaAngleRight, FaSearch} from 'react-icons/fa';
import './css/landing.css';

export const Landing = () => {
    return(
        <>
        <header id="Landing__header">
            <div className="Landing__header__logo">
                <p>LOGO</p>
            </div>
            <div className="Landing__navig">
                <nav>
                   <div className="Landing__nav__menu">
                       <ul>
                           <li><Link to='/'>Rent</Link></li>
                           <li><Link to='/'>Buy</Link></li>
                           <li><Link to='/'>Sell</Link></li>
                           <li><Link to='/'>Signin/Register</Link></li>
                       </ul>
                   </div>
                </nav>
                <Button className='Landing__header__btn' text='Add Listing' />
            </div>
        </header>

        <main>
            <div className="main__jumbo">
                <h1>Rent, Sell, And <br />
                    Buy with Ease
                </h1>
                <p>
                Far far away, behind the word mountains, far from the countries <br /> 
                Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="main__jumbo__start">
                    <Field className='main__jumbo__field' text="Email" />
                    <Button className='main__jumbo__btn' text='Get Started'/>
                </div>
            </div>


            <div className="whiteback">
                <div className="Featured">
                    <h2 className="Featured__title">Featured Listings</h2>
                    <p className="Featured__subtitle">Our top locations for buying or renting a home, office etc.</p>
                    <div className="Featured__scroll">
                        <FaAngleLeft className="Featured__scroll__left"/>
                        <div className="Featured__scroll__card">
                            <img src="" alt="" />
                            <p>Bole</p>
                        </div>
                        <div className="Featured__scroll__card">
                            <img src="" alt="" />
                            <p>Megenagna</p>
                        </div>
                        <div className="Featured__scroll__card">
                            <img src="" alt="" />
                            <p>Piasa</p>
                        </div>
                        <div className="Featured__scroll__card">
                            <img src="" alt="" />
                            <p>Piasa</p>
                        </div>
                        <FaAngleRight className="Featured__scroll__right"/>
                    </div>
                </div>


                <div className="steps">
                    <h2 className="steps__title">How it Works!</h2>
                    <div className="step__container">
                        <div className="step__container__para">
                            <FaSearch className="stepContPara__search"/>
                            <h3>Search from Home</h3>
                            <p className="stepContPara__detail">
                                Far far away, behind the word mountains, far from the 
                                countries Vokalia and Consonantia, there live the blind 
                                texts.
                            </p>
                            <div className="step__link">
                                <Link className="stepContPara__link__more" to='/#'>Learn more</Link>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="step__container__card">
                            <div className="stepContCard__header">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Flisting">

                </div>
                <div className="testimonial">

                </div>
            </div>
        </main>

        
        
        </>
    )
}

