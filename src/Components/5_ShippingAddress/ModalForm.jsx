import React from 'react'

export default function ModalForm({ shippingAddress, setShippingAddress ,setModalOpen }) {
    const handleAddressSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newAddress = {
            name: formData.get('name'),
            address: formData.get('address'),
            city: formData.get('city'),
            postalCode: formData.get('postalCode'),
            country: formData.get('country'),
        }
        setShippingAddress(newAddress)
        setModalOpen(false) // Close the modal after saving the address
    }
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Change Shipping Address</h2>
            <form className="flex flex-col gap-4" onSubmit={handleAddressSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    defaultValue={shippingAddress.name}
                    className="border rounded px-4 py-2"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    defaultValue={shippingAddress.address}
                    className="border rounded px-4 py-2"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    defaultValue={shippingAddress.city}
                    className="border rounded px-4 py-2"
                />
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    defaultValue={shippingAddress.postalCode}
                    className="border rounded px-4 py-2"
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    defaultValue={shippingAddress.country}
                    className="border rounded px-4 py-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Save Address
                </button>
            </form>
        </div>
    )
}
