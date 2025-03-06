import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {FormInput, FormInputProps} from '@site/src/components/FormInput/FormInput';
import styles from './index.module.css';

function PageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
          Emio Support Request Form
          </Heading>
          <p className="hero__subtitle">Please fill out this form to create a support request.</p>
        </div>
      </header>
    );
  }


const EmioSupportForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        type: '',
        serialnumber: '',
        issue: '',
        description: '',
        files: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log("[handleChange]", name, value);
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);

        fetch("https://hook.eu2.make.com/p8xp4r3e4rd7jfh938yi33vzk5bb3e21", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
    };

    function handleTypeSelected(event: React.ChangeEvent<HTMLSelectElement>): void {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        setFormData({
            ...formData,
            files: files
        });
    };

    const fields: FormInputProps[] = [
        {
            label: 'Name',
            id: 'name',
            name: 'name',
            type: 'text',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Email',
            id: 'email',
            name: 'email',
            type: 'email',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Issue type',
            id: 'type',
            name: 'type',
            type: 'select',
            value: '',
            onChange: handleTypeSelected,
            required: true,
            options: ['Software', 'Hardware', 'Other']
        },
        {
            label: 'Company',
            id: 'company',
            name: 'company',
            type: 'text',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Serial Number',
            id: 'serialnumber',
            name: 'serialnumber',
            type: 'text',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Issue Title',
            id: 'issue',
            name: 'issue',
            type: 'text',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Description',
            id: 'description',
            name: 'description',
            type: 'textarea',
            value: '',
            onChange: handleChange,
            required: true
        },
        {
            label: 'Files',
            id: 'files',
            name: 'files',
            type: 'file',
            onChange: handleFilesChange,
            required: false,
            multipleFiles: true
        }
    ];

    return (
        <Layout>
            <PageHeader />
            <div className="container" style={{ padding: '2rem' }}>
            <div className='row' style={{ justifyContent: 'center' }}>
            {/* <form onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <FormInput
                        key={index}
                        label={field.label}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={field.onChange}
                        required={field.required}
                        options={field.options}
                        multipleFiles={field.multipleFiles}
                    />
                ))    
                }
                <button type="submit">Submit</button>
            </form> */}
            <iframe src="https://compliance-robotics.notion.site/ebd/135582ce7d3a8042a130ceab6cca0d39" width="100%" height="2000vh" />
            </div>
        </div>

        </Layout>
    );
};

export default EmioSupportForm;