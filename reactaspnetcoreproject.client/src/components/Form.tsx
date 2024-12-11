import React, { FormEvent } from 'react';
import { IFormProps } from '../types';
import { updateFormField } from '../utils/formUtils';


const Form = ({ handleAddData, formData, setFormData, postEditedQuote, isEditing, setIsEditing }: IFormProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        updateFormField(formData, setFormData, e)
    };

    const submitPostForm = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const { ...newQuoteData } = formData;
            handleAddData(newQuoteData)
        } catch (error) {
            console.log(error)
            alert('There was an error submitting the form!');
        }
    };
    const cancleEdit = () => {
        setFormData({
            userId: '',
            name: '',
            email: '',
            content: '',
            date: '',
        });
        setIsEditing(false);
    }

    return (
        <div className="w-full max-w-xs mb-6 mt-6">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={submitPostForm} >
                <div className="mb-4 flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2 self-start">Name</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2 self-start">Email </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2 self-start">Date </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="block text-gray-700 text-sm font-bold mb-2 self-start">Write your quote </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required />
                </div>
                {!isEditing && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Add Quote</button>}
            </form>
            {isEditing && (
                <div className="flex items-center justify-between">
                    <button
                        onClick={postEditedQuote}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Update Quote
                    </button>
                    <button
                        onClick={cancleEdit}
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Cancel
                    </button>
                </div>
            )}
        </div>
    )
}
export default Form;