import React from 'react'

interface inputProps {
    name?: string,
    placeholder?: string,
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
    value?: string
    required?: boolean
    className?: string
    id?: string
    autoComplete?: string
    autoFocus?: boolean
    maxLength?: number
    minLength?: number
    pattern?: string
    readOnly?: boolean
    size?: number
    step?: number
    tabIndex?: number
    title?: string
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    radioName?: string[]
}

const Input = (props: inputProps) => {
    if (props?.type === 'radio') {
        return (
            <>
                <div className='flex flex-wrap gap-4 items-center'>
                    {props?.name}:
                    {props?.radioName && props?.radioName.map((name, index) => (
                        <div className="form-control" key={index}>

                            <label className=" flex items-center gap-2 cursor-pointer">
                                <span className="label-text">{name}</span>
                                <input 
                                checked={props?.value === name}
                                 id={name} 
                                 type="radio" 
                                 onChange={props?.onChange} 
                                 value={name} name={props?.name} 
                                 className="radio checked:bg-blue-500 checked:outline-none" 
                                 readOnly={props?.readOnly}
                               
                                  />
                            </label>
                        </div>
                    ))}
                </div>
            </>
        )
    } else {
        return (
            <label className="flex justify-between items-center gap-4 w-full text-black">
                <span className="text-gray-500">{props?.name}:</span>
                <input
                    type={props?.type}
                    className='rounded-md p-2 text-black bg-gray-200  w-full focus-within:outline-primaryColor'
                    // onChange={(e)=>console.log(e.target.value)}
                    onChange={props?.onChange}
                    onBlur={props?.onBlur}
                    placeholder={props?.placeholder}
                    id={props?.id}
                    value={props?.value} // Add the value prop here
                    readOnly={props?.readOnly}
                    autoFocus={props?.autoFocus}
                />
            </label>
        )
    }
}

export default Input