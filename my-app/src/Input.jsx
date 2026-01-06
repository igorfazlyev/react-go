import { forwardRef } from "react"
const  Input = forwardRef((props, ref) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.title}</label>
            <input 
                type={props.type} 
                name={props.name}
                id={props.id}
                autoComplete={props.autoComplete}
                className={props.className}
                onChange={props.onChange}
                ref ={ref}
            />
        </div>
    )
})

export default Input