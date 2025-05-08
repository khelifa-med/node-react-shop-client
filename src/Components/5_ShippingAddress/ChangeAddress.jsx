import React, { useState } from "react";

const ChangeAddress = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
        if (!formData.address.trim()) newErrors.address = "Address is required.";
        if (!formData.city.trim()) newErrors.city = "City is required.";
        if (!formData.postalCode.trim())
            newErrors.postalCode = "Postal Code is required.";
        if (!formData.country.trim()) newErrors.country = "Country is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Form submitted successfully:", formData);
            // Add your form submission logic here
        }
    };

    return (
        <div className="change-address">
            <h2>Change Shipping Address</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={errors.fullName ? "error" : ""}
                    />
                    {errors.fullName && <small className="error-text">{errors.fullName}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={errors.address ? "error" : ""}
                    />
                    {errors.address && <small className="error-text">{errors.address}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={errors.city ? "error" : ""}
                    />
                    {errors.city && <small className="error-text">{errors.city}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className={errors.postalCode ? "error" : ""}
                    />
                    {errors.postalCode && <small className="error-text">{errors.postalCode}</small>}
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={errors.country ? "error" : ""}
                    />
                    {errors.country && <small className="error-text">{errors.country}</small>}
                </div>

                <button type="submit" className="submit-btn">
                    Save Address
                </button>
            </form>
        </div>
    );
};

export default ChangeAddress;