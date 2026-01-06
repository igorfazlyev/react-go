import { useEffect, useRef, useState } from 'react'
import Input from './Input.jsx'
import people from './data.js'
import './App.css'
const HelloWorld = ({msg})=>{
    const [isTrue, setIsTrue] = useState(false)
    const [crowd, setCrowd] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    const toggleIsTrue = ()=> setIsTrue(!isTrue)
    //refs
    //const firstNameRef =useRef()
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const dobRef = useRef(null)
    
    useEffect(()=>{
        people.getData().then(ppl=>setCrowd(ppl))
    },[])

    const handleSubmit=evnt=>{
        evnt.preventDefault()
        if (firstName === "") {
            alert("You need to supply a first name")
            return
        }
        if (lastName === "") {
            alert("You need to supply a last name")
            return
        }
        if (dob === "") {
            alert("You need to supply a date of birth")
            return
        }
      
        setCrowd([...crowd, {id:(crowd.length+1), firstName, lastName, dob}].toSorted((a,b)=>a.lastName.localeCompare(b.lastName)))
        setFirstName("")
        setLastName("")
        setDob("")
        firstNameRef.current.value = ""
        lastNameRef.current.value = ""
        dobRef.current.value = ""
    }
    return (<>
     
     <h2 className="h2-green pt-5">{msg}</h2>
     <hr />
     {isTrue && <p>It's true</p>}
     {!isTrue && <p>It's not true, it's false</p>}
     <hr />
     <a href="#!" className="btn btn-outline-secondary" onClick={toggleIsTrue}>Toggle IsTrue</a>
     <hr />
     <h3>People</h3>
     <form autoComplete='off' onSubmit={handleSubmit}>
        <Input 
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="first-name-new"
            className="form-control"
            onChange={evnt=>setFirstName(evnt.target.value)}
            title="First name:"
            ref = {firstNameRef}
        />
        <Input 
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="last-name-new"
            className="form-control"
            onChange={evnt=>setLastName(evnt.target.value)}
            title="Last name:"
            ref = {lastNameRef}
        />
        <Input 
            type="date"
            name="dob"
            id="dob"
            autoComplete="dob-new"
            className="form-control"
            onChange={evnt=>setDob(evnt.target.value)}
            title="Date of birth:"
            ref = {dobRef}
        />
        <input type="submit" value="submit" className="btn btn-primary" />
     </form>
     <div>
        First Name: {firstName}
     </div>
     <div>
        Last Name: {lastName}
     </div>
     <div>
        Date of Birth: {dob}
     </div>
     <ul className="list-group">
        {crowd.map(person=><li key={person.id} className="list-group-item">{person.firstName} {person.lastName} born on {person.dob}</li>)}
     </ul>
     
    </>)
}

export default HelloWorld