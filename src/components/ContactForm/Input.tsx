import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

interface InputProps {
    id: string
    value: string
    onChange: any
    type?: string
    error?: string | boolean
    placeholder?: string
    label?: string
    className?: string
}

const Input: FunctionComponent<InputProps> = ({
    id,
    value,
    label,
    className = '',
    error = '',
    type = 'text',
    placeholder= '',
    onChange,
}) => {
    const inputClassName = classnames(
        "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
        className,
        {
            "border-red-500": error
        }

    )
    return (<>
        {label && <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
            {label}
        </label>}
        {type !== 'textarea' && <input
            value={value}
            onChange={onChange}
            className={inputClassName}
            id={id}
            type={type}
            placeholder={placeholder}/>}
        {type === 'textarea' && <textarea
            value={value}
            onChange={onChange}
            className={inputClassName}
            id={id}
            placeholder={placeholder}/>
        }
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </>)
}

export default Input;