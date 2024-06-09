import React, { useState } from "react";
import { BASE_API_URL}  from "../../utils/services";
import Swal from "sweetalert2";
import { useNavigate }  from "react-router-dom";


const Login = () => {

const nav = useNavigate();
const[formData, setFormData] = useState({
    username: "",
    password:""
})



const handleChange = (e) => {

const { name, value} = e.target;

setFormData({

    ...formData, 
    [name]:value,

})

};

const handleSubmit = async (e) => {
    e.preventDefault();

    let data = await fetch (`${BASE_API_URL}/auth/login`, {
        method:"POST",
        headers: { "Content-type" : "application/json" },
        body: JSON.stringify(formData),
    });

let res= await data.json();
if (res.message) {
    Swal({
        title:"Invalid credentials!!",
        icon:"error"
    });
} 
else {
    localStorage.setItem(
        "ecc-auth-user",
       JSON.stringify({ ...res, auth: true })
    );

    Swal.fire({
        title:`Welcome ${res.firstName}!!`,
        icon:"success"
    })
    nav("/products");
    window.location.reload();
}

};

return (
   <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input value={formData.username}  onChange={handleChange} type="text" className="form-control" id="username" placeholder="Enter Username" required />
                </div>
                
                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input value={formData.password} onChange={handleChange} type="password" className="form-control" name="password" placeholder="Enter Password" id="password" required />
                </div>
                <button  type="submit" className="btn btn-primary costum-btn">
                    Login
                </button>
            </form>
        </div>
    </div>
   </div>
    
)




};


export default Login;