import React from 'react';
import './form.css';

function FormData () {
    const [firstName, setFirstName ] = React.useState("");
    const [lastName, setLastName ] = React.useState("");
    const [password , setPassword ] = React.useState("");
    const [againPassword, setAgainPassword ] = React.useState("");
    const [email, setEmail ] = React.useState("");
    const [view , setView]  = React.useState("begin");
    const err = React.useRef();
    const err2 = React.useRef();
    const validateFormData = () =>{
      err.current.textContent="";
      err2.current.textContent="";
        let good = true;
        if (firstName ==="" || lastName === "" || password === "" || email==="" || password === "" || againPassword === ""){
            err.current.textContent="Please fill out all fields"
            good=false;
        }
        else{
            
            if(email.indexOf("@") === -1){
                err.current.textContent="Email not valid";
                good=false;
            }

            if ( password !== againPassword ){
                err2.current.textContent="Passwords do not match";
                good=false;
            }
    }
    if (good){
        setView("dataShow")
    }

}

  return (
    <div className="container">
        <h1>Application</h1>
        {view === "begin" ?
        <div className="form-group">
            <label ref={err} style={{ marginBottom:"10px",color:"red" }}></label>
            <label ref={err2} style={{ marginBottom:"10px", color:"red" }}></label>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            <input type="text" className="mt" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name"></input>
            <input type="text" className="mt"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
            
            <input type="password" className="mt" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
            <input type="password" className="mt" value={againPassword} onChange={(e)=>setAgainPassword(e.target.value)} placeholder="Re-Enter Password"></input>

            <button onClick={()=>validateFormData()}>Submit</button>
        </div>
    :
        <div className="form-group-show">
            <span>
                <strong>First Name </strong>
                  : {firstName}
                </span>

                <span>
                <strong>Last Name </strong>
                  : {lastName}
                </span>

                <span>
                <strong>Email </strong>
                  : {email}
                </span>

                <span>
                <strong>Password </strong>
                  : {password}
                </span>

                <span>
                <strong>Repeated Password </strong>
                  : {againPassword}
                </span>
          <button onClick={()=>setView("begin")}>Go Back</button>
        </div>
        }
    </div>
  );
}

export default FormData;
