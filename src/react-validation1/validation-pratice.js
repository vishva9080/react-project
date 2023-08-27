import { useState } from 'react';
import './react-validartion.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Validation() {

    const [form, setForm] = useState(
        {
            name: "",
            age: "",
            email: "",
            password: ""
        }
    )

    const [error, setError] = useState(
        {
            nameErr: "",
            ageErr: "",
            emailErr: "",
            passwordErr: ""
        }
    )

    const [data, setData] = useState([])

 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show,setShow] = useState(false)
  
    function getInputHandel(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        setForm({ ...form, ...obj })
    }


    function Submit() {
        let obj = {}

        for (let key in form) {
            if (form[key].trim().length == 0) {
                obj[key + "Err"] = "manditory"
            }
            else if (key == "email") {
                let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                if (emailRegex.test(form[key])) {
                    obj[key + "Err"] = "";
                } else {
                    obj[key + "Err"] = "invalid email";
                }
            }
            else if (key == "password") {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (passwordRegex.test(form[key])) {
                    obj[key + "Err"] = "";
                } else {
                    obj[key + "Err"] = "Weak Password";
                }
            }

            else {
                obj[key + "Err"] = ""


            }
        }

        setError({ ...error, ...obj })

        console.log(Object.values(obj));

        if (Object.values(obj).filter((val) => Boolean(val)).length == 0) {
            let check = data.findIndex((val) => val.name == form.name)
           
            (check == -1) ? data.push(form) : handleShow()
        }

    }
    function showPass(e) {

let change = e.target.parentElement.parentElement.children[3].children[0]
if(change.getAttribute("type") == "password")
{
    change.setAttribute("type",'text')
}
else
{
    change.setAttribute("type",'password')
}


    }




    return (
        <div>
            <div className='input-main'>
                <label htmlFor='name' className='mt-2'>Name</label>
                <input
                    type='text'
                    name="name"
                    // id='name'
                    className='form-control'
                    onChange={getInputHandel}
                ></input>
                <small className='text-danger'>{error.nameErr}</small>
                <label htmlFor='email' className='mt-2'>Email</label>
                <input
                    type='email'
                    name="email"
                    // id='email'
                    className='form-control'
                    onChange={getInputHandel}
                ></input>
                <small className='text-danger'>{error.emailErr}</small>
                <label htmlFor='age' className='mt-2'>Age</label>
                <input
                    type='number'
                    name="age"
                    // id='age'
                    className='form-control'
                   onChange={getInputHandel}
                ></input>
                <small className='text-danger'>{error.ageErr}</small>
                <label htmlFor='password' className='mt-2'>Password</label>
                <input
                    type='text'
                    name="password"
                    // id='password'
                    className='form-control'
                    onChange={getInputHandel}
                ></input>
                <small className='text-danger'>{error.passwordErr}</small>
                <div className='btn-validation mt-4'>
                    <button className='btn btn-primary' onClick={Submit}>Add</button>
                </div>
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>email</th>
                        <th>Password</th>
                        <th>Show Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val) => {
                            return (<tr>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.email}</td>
                                <td>
                                    <input type='password' value={val.password} className='pass' />
                                </td>
                                <td><span class="material-symbols-outlined" onClick={showPass} style={{'cursor':'pointer'}}>visibility</span></td>
                            </tr>)

                        })
                    }
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>User Exist</Modal.Body>
      </Modal>
        </div>
    );
}

export default Validation;