import React from "react";
import { Button } from "../components/Button";
import { Field } from "../components/Field";

export const Alist = () => {
    return(
        <div className="w-fit mx-auto mt-6">
            <h2 className="font-semibold text-lg my-4 w-fit mx-auto">List your house for rent or sale here</h2>
            <form action="">
                <div className="flex ">
                    <div>
                        <label htmlFor="">NAME OF LISTING</label>
                        <Field  text="Express your property" className="h-12 rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor="">LOCATION</label>
                        <Field  text="Location" className="h-12 rounded-lg"/>
                    </div>
                    <div className="flex flex-col items-center w-fit mx-4">
                        <label htmlFor="">RENT</label>
                        <span className="flex items-center ml-4"><input type="radio" value="Rent" name="listing-type"/>Rent</span>
                    </div>
                    <div className="flex flex-col items-center w-fit mx-4">
                        <label htmlFor="">SALE</label>
                        <span className="flex items-center ml-4"><input type="radio" value="Sale" name="listing-type"/>Sale</span>
                    </div>
                </div>

                <div className="pb-4">
                    <label htmlFor="" className="mt-0">TYPE</label>
                    <div className="flex justify-between items-center">
                        <span><input type="radio" name="house-type" />Condominium</span>
                        <span><input type="radio" name="house-type" />Apartement</span>
                        <span><input type="radio" name="house-type" />Single Home</span>
                        <span><input type="radio" name="house-type" />Single Room</span>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <div className="flex flex-col">
                        <label htmlFor="">BED ROOMS</label>
                        <input type="number" defaultValue="0"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">BED ROOMS</label>
                        <input type="number" defaultValue="0"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Furnished</label>
                        <div className="flex justify-between">
                            <span><input type="radio" name="funished"/>Furnished</span>
                            <span><input type="radio" name="funished"/>Unfurnished</span>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col mt-8">
                    <h2>PHOTOS</h2>
                    <div className="flex justify-between mt-4">
                        <Button text="Add Photos" bgColor="lightblue"/>
                        <div className="flex flex-col">
                            <label htmlFor="">Add photos using the button or drag
                            and drop in the box (Max 6 photos allowed)</label>
                            <div className="h-28 w-28 border-2 border-red-600">
                                <p>Drag and drop your pictures here</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>CONTACTS</h2>
                    <div className="flex">
                        <Field text="First Name" className="h-12 rounded-lg"/>
                        <Field text="Last Name" className="h-12 rounded-lg"/>
                        <Field text="Email" className="h-12 rounded-lg"/>
                        <Field text="Phone Number" className="h-12 rounded-lg"/>
                    </div>
                </div>
                <div>
                    <h2>DESCRIPTION</h2>
                    <textarea name="" id="" cols="80" rows="10"></textarea>
                </div>
                <div className="flex">
                    <div className="flex items-center">
                        <input type="radio" />
                        <p className="w-1/3">
                            bychecking this box i agree as follows: i am the owner of this properts
                            or have the authority to transact on behalf of the owner. I will provide
                            accurate and non discriminatory information, and i will comply with
                            Terms and conditions of <em>COMPANY</em>.
                        </p>
                    </div>
                    <Button kind="submit" text="Create Listing" bgColor="lightblue"/>
                </div>
            </form>
        </div>
    )
}