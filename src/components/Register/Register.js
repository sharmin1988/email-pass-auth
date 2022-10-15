import React from 'react';

const Register = () => {


    const handelFormSubmitBtn = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
    }
    const handelOnChange = (event) => {
        const email = event.target.value;
        console.log(email)
    }

    const handelOnBlur = (event) => {
        const password = event.target.value;
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handelFormSubmitBtn}>
                <input onChange={handelOnChange} type="email" name="email" placeholder='Email please' id="" />
                <br />
                <input onBlur={handelOnBlur} type="password" name="password" placeholder='Password' id="" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Register;