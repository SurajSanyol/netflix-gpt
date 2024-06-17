

export const checkValidData = (email, password) => {
    const emailPattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!emailPattern.test(email)) {
        return "Email Id is invalid"
    }
    if (!passwordPattern.test(password)) {
        return "Password is Invalid"
    }

    return null;
};
