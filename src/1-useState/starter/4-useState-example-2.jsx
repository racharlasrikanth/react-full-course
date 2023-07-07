import React, { useState } from "react";

const Index =() => {

    const [fname,setName] = useState("");
    const [mail,setMail] = useState("");
    const [password, setPassword] = useState("")
    const [userdata,showData] = useState(false)


    const handleChanges =(e,name) => {
        if(name === "fname"){
            setName(e.target.value)
            console.log(fname);
        }
        else if(name === "mail"){
            setMail(e.target.value)
            console.log(mail);
        }
        else if(name === "password") {
            setPassword(e.target.value)
            console.log(password);
        }
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        let data = {
            fname : fname,
            mail : mail,
            password : password
        };

        showData(true)
        console.log(data);
        alert("Form submitted successfully!")
    }

    // const nameChange =(e) => {
    //     setName(e.target.value)
    //     console.log(name);
    // }

    // const mailChange =(e) => {
    //     setMail(e.target.value)
    //     console.log(mail);

    // }

    // const passwordChange =(e) => {
    //     setPassword(password)
    //     console.log(password);
    // }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    onChange={(e)=> handleChanges(e,"fname")}
                     />
                </div>
                <div>
                    <input 
                    type="mail"
                    id="mail"
                    name="mail"
                    placeholder="Enter your mail"
                    onChange={(e)=> handleChanges(e,"mail")}

                     />
                </div>
                <div>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={(e)=> handleChanges(e,"password")}
                     />
                </div>
                <button>Submit</button>
            </form>

            <div> 
                {userdata ? (
                <div>
                <h1>{fname}</h1>
                <h1>{mail}</h1>
                <p>{password}</p>
                </div>
                ) : " Data hidden"}
            </div>


        </div>
    );
}

export default Index;