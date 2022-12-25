import React, { useEffect, useState } from 'react'
import './Checkout.css'
import commerce from '../lib/commerce'


const Checkout = ({ cart }) => {

    const [token, setToken] = useState({})
    const [countriesList, setCountriesList] = useState([])
    const [country, setCountry] = useState('')
    const [subdivisionList, setSubdivisionList] = useState([])
    const [subdivision, setSubdivision] = useState(null)
    const [shipping, setShipping] = useState(null)
    const [shippingOptions, setShippingOptions] = useState(null)


    const getShippingCountry = async (tokenID) => {
        try {
            const { countries } = await commerce.services.localeListShippingCountries(tokenID);
            setCountriesList(Object.entries(countries))
        } catch (error) {
            console.log(error)
        }
    }

    const getShippingSubdivisions = async (country) => {
        try {
            const { subdivisions } = await commerce.services.localeListSubdivisions(country);
            setSubdivisionList(Object.entries(subdivisions))
            setSubdivision(Object.keys(subdivisions)[0])
        } catch (error) {
            console.log(error)
        }
    }

    const generateToken = async (cartID) => {
        try {
            const token = await commerce.checkout.generateToken(cartID, { type: 'cart' })
            setToken(token)
        } catch (error) {
            console.log(error)
        }
    }

    const getShippingOptions = async (tokenID, c, s) => {
        try {
            const response = await commerce.checkout.getShippingOptions(tokenID.id, {
                country: c,
                region: s,
            })
            setShipping(response[0].id)
            setShippingOptions(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        generateToken(cart?.id)
        if (token) {
            getShippingCountry(token.cart_id)

        }
    }, [cart])



    useEffect(() => {
        if (country) {
            getShippingSubdivisions(country)
        }
    }, [country])

    useEffect(() => {
        if (subdivision) {
            getShippingOptions(token, country, subdivision)
        }
    }, [subdivision])

    const handleOptionChange = (e) => {
        setCountry(e.target.value)
    }
    const handleOptionSubdivision = (e) => {
        setSubdivision(e.target.value)
    }


    return (
        <div className='checkout_wrap'>
            <h2>Shopping Details</h2>
            <br />

            <form action="">
                <div className="checkout__form">
                    <div className="checkout__column">
                        <label htmlFor="">First Name*</label>
                        <input name="firstname" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Last Name*</label>
                        <input name="lastname" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Address*</label>
                        <input name="address" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Email*</label>
                        <input name="email" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">City*</label>
                        <input name="city" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Zipcode*</label>
                        <input name="zipcode" id="" required />
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Shipping Country*</label>
                        <select name="country" id="" value={country} onChange={handleOptionChange}>
                            {
                                countriesList?.map((curVal, i) => {
                                    return <option value={curVal[0]} key={i}>{curVal[1]}</option>

                                })
                            }
                        </select>
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">Shipping Subdivision</label>
                        <select name="subdivision" id="" onChange={handleOptionSubdivision}>
                            {
                                subdivisionList?.map((curVal, i) => {
                                    return <option key={i} value={curVal[0]}>{curVal[1]}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="checkout__column">
                        <label htmlFor="">Shipping Options</label>
                        <select name="subdivision" id="">
                            {
                                shippingOptions?.map((curVal) => {
                                    console.log(899, curVal)
                                    return <option value={curVal.id}>{curVal.description} {curVal.price.formatted_with_symbol}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className="checkout__column">
                        <label htmlFor="">&nbsp;</label>
                        <button>Pay Now</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Checkout