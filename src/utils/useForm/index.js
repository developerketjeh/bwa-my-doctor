import { useState } from "react";

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    return [values, (type, value) => {
        return setValues({...values, [type]: value})
    }]
}