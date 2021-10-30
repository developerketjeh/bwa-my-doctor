import { useState } from "react";

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    return [values, (type, value) => {
        if (type === 'reset') {
            return setValues(initialValue)
        } else {
            return setValues({...values, [type]: value})
        }
    }]
}