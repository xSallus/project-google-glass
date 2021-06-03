import { createContext, useContext, useState } from 'react'

const ContactFormContext = createContext({})

export const ContactFormProvider = ({ children }) => {
    const [ formData, setFormData ] = useState({})

    const retrieveData = (data) => {
        setFormData(data)
    }

    return (
        <ContactFormContext.Provider value={{
            retrieveData,
            formData
        }}>
            { children }
        </ContactFormContext.Provider>
    )
}

export default function useContact() {
    return useContext(ContactFormContext)
}
