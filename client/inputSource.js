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
    {
        id: 4, label: "created_by", type: "text", placeholder: "enter name"
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
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true, 
        type: "password", 
        placeholder: "1 letter, 1 number and 1 special character!"
    },
    {
        id: 4, label: "created_by", type: "text", placeholder: "enter name"
    },
]


export const itemInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "cloth"
    },
    {
        id: 4, label: "created_by", type: "text", placeholder: "enter name"
    }, 
]

export const updateItemInputs = [
    {
        id: 1, label: "name" ,errorMessage: "should be 3-16 without special character!", pattern: "^[A-Za-z0-9]{3,16}$", type: "text", placeholder: "cloth"
    },
    {
        id: 3, label: "created_by", type: "text", placeholder: "enter name"
    },
]