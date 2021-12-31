import React, { useState } from 'react'

const useForm = (initialState={}) => {

    const [Values, setValues] = useState(initialState);

    const handleInputChange=({target}) => {
        
        setValues({
            ...Values,
            [target.name]:target.value,
        })
}

    const reset=() => {
        setValues(initialState);
    }

return [Values,handleInputChange,reset];

}

export default useForm
