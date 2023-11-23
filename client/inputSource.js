export const userInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "Rafi"
    },
    {
        id: 2, label: "email", errorMessage: "It should be a valid email address!" , type: "email", placeholder: "Rafi@gamil.com"
    },
    {
        id: 3, 
        errorMessage: "should be 4-20, 1 letter, 1 number, 1 special character!",  
        label: "password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
        required: true, 
        type: "password", 
        placeholder: "enter your password"
    },
]
export const updateUserInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "Rafi"
    },
    {
        id: 2, label: "email", errorMessage: "It should be a valid email address!" , type: "email", placeholder: "Rafi@gamil.com"
    },
    {
        id: 3, 
        errorMessage: "should be 4-20, 1 letter, 1 number, 1 special character!",  
        label: "password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
        required: true, 
        type: "password", 
        placeholder: "1 letter, 1 number and 1 special character!"
    },
]


export const itemInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "cloth"
    },
]

export const updateItemInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "cloth"
    },
]

export const singInInputs = [
    {
        id: 2, label: "email", errorMessage: "It should be a valid email address!" , type: "email", placeholder: "Rafi@gamil.com"
    },
    {
        id: 3, 
        errorMessage: "should be 4-20, 1 letter, 1 number, 1 special character!",  
        label: "password",
        // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
        required: true, 
        type: "password", 
        placeholder: "enter your password"
    },
]

export const signUpInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "Rafi"
    },
    {
        id: 2, label: "email", errorMessage: "It should be a valid email address!" , type: "email", placeholder: "Rafi@gamil.com"
    },
    {
        id: 3, 
        errorMessage: "should be 4-20, 1 letter, 1 number, 1 special character!",  
        label: "password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
        required: true, 
        type: "password", 
        placeholder: "enter your password"
    },
]
