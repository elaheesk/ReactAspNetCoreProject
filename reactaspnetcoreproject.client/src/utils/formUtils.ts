export const updateFormField = (formData, setFormData, e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

export const isFormDataComplete = (data: any) => {
    console.log("datda", Object.keys(data))
    return Object.keys(data)
        .filter(key => key !== 'userId') // Exclude userId from the check if needed
        .every(key => data[key] !== null && data[key] !== undefined && data[key] !== '');
};