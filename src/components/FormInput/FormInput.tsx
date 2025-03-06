import React, { useState } from 'react';
import './formstyles.css';

type FormInputProps = {
    label: string;
    id: string;
    name: string;
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    options?: string[];
    multipleFiles?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, name, type, value, onChange, required = false, options=[], multipleFiles=true }) => {

    const renderInput = () => {
        switch (type) {
            case 'textarea':
                return <textarea id={id} name={name} value={value} onChange={onChange} required={required} />;
            case 'select':
                return <select id={id} name={name} value={value} onChange={onChange} required={required}>
                    <option value="">Select</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            case 'file':
                return <input type="file" id={id} name={name} onChange={onChange} required={required} multiple={multipleFiles} />;
            default:
                return <input type={type} id={id} name={name} value={value} onChange={onChange} required={required} />;
        }
    };

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {renderInput()}
        </div>
    );
};

export { FormInput, FormInputProps };