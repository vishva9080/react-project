import { useState } from "react"
import './validation-pratise1.css'
import Modal from 'react-bootstrap/Modal';
function Validation1() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })

    const [Error, seterror] = useState({
        nameERROR: "",
        emailERROR: "",
        numberERROR: "",
        passwordERROR: ""
    })

    const [details, setdetails] = useState([])

    function getInputHandel(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        setForm({ ...form, ...obj })
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show, setShow] = useState(false)

    function submit() {
        let obj = {}
        for (let key in form) {
            if (form[key].trim().length == 0) {
                obj[key + "ERROR"] = "fill the form"
            }
            else if (key == "email") {
                let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (emailRegex.test(form[key])) {
                    obj[key + "ERROR"] = ""
                }
                else {
                    obj[key + "ERROR"] = "invalid email adress"
                }
            }

            else if (key == "password") {
                let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?#&]{8,}$/;
                if (passwordRegex.test(form[key])) {
                    obj[key + 'ERROR'] = ""
                }
                else {
                    obj[key + 'ERROR'] = "weak password"
                }
            }
            else {
                obj[key + "ERROR"] = ""
            }
        }
        seterror({ ...Error, ...obj })

        if (Object.values(obj).filter((val) => Boolean(val).length == 0)) {
            let check = details.findIndex((val) => val.name == form.name)

            if (check == -1) {
                details.push(form)
            }
            else {
                handleShow()
            }
        }

    }

    return (
        <div>
            <div className="input-main">

                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={getInputHandel}></input>
                <small>{Error.nameERROR}</small>

                <label htmlFor='email'>Email</label>
                <input type="email"
                    name="email"
                    id="email"
                    onChange={getInputHandel}></input>
                <small>{Error.emailERROR}</small>
                <label htmlFor="number">Phone Number</label>
                <input type="number"
                    name="number"
                    id="number"
                    onChange={getInputHandel}></input>
                <small>{Error.numberERROR}</small>
                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    id="password"
                    onChange={getInputHandel}></input>
                <small>{Error.passwordERROR}</small>
                <button className="button1" onClick={submit}>submit</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>phone number</td>
                        <td>password</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        details.map((val) => {
                            return (
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.number}</td>
                                    <td>
                                        <input type="password" value={val.password} className="pass"></input>
                                    </td>

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
    )
}

export default Validation1