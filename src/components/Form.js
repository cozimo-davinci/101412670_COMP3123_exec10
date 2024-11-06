import React from 'react';

import { useState } from 'react';

export default function Form() {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreement] = useState(false);

    const handleFormChange = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }


    return (
        <div className="max-w-2xl mx-auto p-6 rounded-lg my-6 bg-slate-950">
            <h1 className="text-2xl font-semibold text-center mb-6 text-white">Data Entry Form</h1>
            <form onSubmit={handleFormChange} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white">Email</label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            className="w-full p-2 border rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-white">Full Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-2 border rounded-md"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <label className="block text-white text-center">Address</label>
                    <input
                        type="text"
                        placeholder="1234 Main St"
                        className="w-full p-2 border rounded-md"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div>
                    <label className="block text-white text-center">Address 2</label>
                    <input
                        type="text"
                        placeholder="Apartment, studio, or floor"
                        className="w-full p-2 border rounded-md"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-white">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full p-2 border rounded-md"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-white">Province</label>
                        <select
                            className="w-full p-2 border rounded-md"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}>
                            <option>Choose...</option>
                            <option value="Alberta">Alberta</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="New Brunswick">New Brunswick</option>
                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                            <option value="Nova Scotia">Nova Scotia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Prince Edward Island">Prince Edward Island</option>
                            <option value="Quebec">Quebec</option>
                            <option value="Saskatchewan">Saskatchewan</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-white">Postal Code</label>
                        <input
                            type="text"
                            placeholder="Postal Code"
                            className="w-full p-2 border rounded-md"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)} />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        id='checkBox'
                        type="checkbox"
                        className="text-center"
                        checked={agreed}
                        onChange={(e) => setAgreement(e.target.checked)} />
                    <label id='checkBoxText' className="text-white">Agree Terms & Conditions?</label>
                </div>

                <button type="submit" className="w-full p-2 mt-4 text-white bg-teal-400 rounded-md hover:bg-teal-700">Submit</button>
            </form>
            {
                submitted && agreed && (
                    <div className='mt-6 bg-orange-600 text-white rounded-lg hover:bg-emerald-600 border-white border-3'>
                        <h2 className='text-2xl font-semibold text-center'>Submitted Data</h2>
                        <p className='text-xl ml-2 font-bold'>Email: {email}</p>
                        <p className='text-xl ml-2 font-bold'>Full Name: {fullName}</p>
                        <p className='text-xl ml-2 font-bold'>Address: {address}</p>
                        <p className='text-xl ml-2 font-bold'>Address 2: {address2}</p>
                        <p className='text-xl ml-2 font-bold'>City: {city}</p>
                        <p className='text-xl ml-2 font-bold'>Province: {province}</p>
                        <p className='text-xl ml-2 font-bold'>Postal Code: {postalCode}</p>
                    </div>
                )
            }
        </div>
    );
}
