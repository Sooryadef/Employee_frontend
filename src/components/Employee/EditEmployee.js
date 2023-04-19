import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom'

function EditEmployee() {

    let history = useHistory();
    const { id } = useParams();
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website:""
    });

    const{ name, username, email, phone, website } =user;

    const  onInputChange = e =>{
        setUser({ ...user, [e.target.name]: e.target.value})
    };

    useEffect(() => {
        loadUser();
    }, []);

    const  onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
  return (
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit an Employee</h2>
            <form onSubmit={e => onSubmit(e)}>

            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Enter Your Name"
                    name="name" 
                    value={name}
                    onChange={e => onInputChange(e)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Enter Your Emploee Name"
                    name="username"
                    value={username}
                    onChange={e => onInputChange(e)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Enter Your Email Id"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Enter Your Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Enter Your Website Name"
                    name="website"
                    value={website}
                    onChange={e => onInputChange(e)}
                />
            </div>
            <br></br>
                <button className="btn btn-warning btn-block">Update Employee</button>
            </form>
        </div>
    </div>
    
    
  )
}

export default EditEmployee