import React from 'react'
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'



export default function Login() {
    // const {handleEditSubmit}= React.useForm()
    const [data, setData] = React.useState(
        {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            Phoneno: '',
            address: ''
        }
    )
    const [items, setItems] = React.useState( []);
    const [editForm, setEditForm] = React.useState(false);
    // const [todoValue, setTodoValue] = React.useState('');
    const nav = useNavigate();

    React.useEffect(() => {
        const items1 = JSON.parse(localStorage.getItem('data1'));
        if (items1) {
            setItems(items1);
        }
    }, []);

    const { firstName, lastName, email, address, id, Phoneno } = data
    const handlechange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        // e.prevent.default();

        var data1 = JSON.parse(localStorage.getItem("data1") || "[]")

        let course = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            Phoneno: Phoneno
        }

        data1.push(course)
        localStorage.setItem('data1', JSON.stringify(data1))
        // setItems()
    }

    // console.log(items); 

    const handleedit = (item, index) => {
        setEditForm(true);
        console.log(item);
        setData(item);
    }

    const handleEditSubmit = (item, e) => {
        // e.preventDefault();
        console.log(items);
        const user = [{ firstName, lastName, email, address, id, Phoneno }]
        var yesArray = [];
        // localStorage.setItem('yesArray', JSON.stringify(yesArray));
        localStorage.setItem("data1", JSON.stringify(yesArray))
        yesArray = JSON.parse(localStorage.getItem('data1'));
        // yesArray.push(user);



        
        localStorage.setItem('data1', JSON.stringify(yesArray));
        // JSON.parse(localStorage.getItem('data1')); // Returns ["yes"]

    }
    // console.log(item);  
    const handledelete1 = (item) => {
        var data1 = JSON.parse(localStorage.getItem("data1") || "[]")
        console.log(item);
        let index = data1.findIndex(items => items.id == item)
        console.log(index)
        const resultingarray = [...data1.slice(0, index), ...data1.slice(index + 1)]
        console.log(resultingarray);
        let a = localStorage.setItem('data1', JSON.stringify(resultingarray));
        console.log(a);

    }

    return (
        <>
            <div className='loginpage'>
                <div className='card1'>

                    <form >
                        <legend><h1>Employee Management</h1></legend>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Empid </label>
                                    <input id='id' type="number" name='id' className="form-control" required value={id} onChange={handlechange} />
                                </div>
                                <div className="col">
                                    <label className="form-label">Firstname </label>
                                    <input id='firstName' name='firstName' className="form-control" required value={firstName} onChange={handlechange} />

                                </div>
                                <div className="col">
                                    <label className="form-label">Lastname </label>
                                    <input name='lastName' className="form-control" value={lastName} required onChange={handlechange} />
                                </div>
                                <div className="col">
                                    <label className="form-label">Phoneno </label>
                                    <input name='Phoneno' type="number" className="form-control" required value={Phoneno} onChange={handlechange} />
                                </div>

                            </div>
                        </div>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" required value={email} id="email" name='email' aria-describedby="emailHelp" onChange={handlechange} />

                                </div>
                                <div className="col">
                                    <label className="form-label">Address</label>
                                    <textarea className="form-control" name="address" required id="exampleFormControlTextarea1" rows="3" value={address} onChange={handlechange}></textarea>

                                </div>
                                <div className="col">

                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary"  >ADD</button>
                                </div>

                            </div>

                        </div>



                    </form>


                </div>
            </div>
            <br></br>
            <div>
                {editForm === false && (
                    <table className="table table-striped-columns">
                        <tbody>
                            <tr>
                                <th>Empid</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phoneno</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {items.map((item, index) =>
                            (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.Phoneno}</td>
                                    <td>

                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { handleedit(item) }}><BiEditAlt /></button>

                                    </td>
                                    <td>

                                        <button onClick={() => { handledelete1(item.id) }}><AiOutlineDelete /></button>
                                    </td>
                                    <td>
                                        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                )}
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* {editForm === true && ( */}

                                <form >
                                    <legend><h1>Employee Management</h1></legend>
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col">
                                                <label className="form-label">Empid </label>
                                                <input id='id' type="number" name='id' disabled className="form-control" value={id} onChange={handlechange} />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">Firstname </label>
                                                <input id='firstName' name='firstName' className="form-control" value={firstName} required onChange={handlechange} />

                                            </div>
                                            <div className="col">
                                                <label className="form-label">Lastname </label>
                                                <input name='lastName' className="form-control" required value={lastName} onChange={handlechange} />
                                            </div>
                                            <div className="col">
                                                <label className="form-label">Phoneno </label>
                                                <input name='Phoneno' type="number" required className="form-control" value={Phoneno} onChange={handlechange} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" required value={email} id="email" name='email' aria-describedby="emailHelp" onChange={handlechange} />

                                        </div>
                                        <div className="col">
                                            <label className="form-label">Address</label>
                                            <textarea className="form-control" name="address" required id="exampleFormControlTextarea1" rows="3" value={address} onChange={handlechange}></textarea>

                                        </div>


                                    </div>




                                </form>
                                {/* )} */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                <button type="submit" className="btn btn-secondary" onClick={handleEditSubmit}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
