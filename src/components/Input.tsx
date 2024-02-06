import {InputHTMLAttributes} from "react";


export type InputProps= InputHTMLAttributes<any>;
export function Input(props:InputProps){
    const {className, ...restProps}=props;
    return (
        <div>
            <input {...restProps} className="w-50 border p-1 bg-gray-100 mb-2 border-r-8 flex items-center justify-center" />
        </div>
    )
}

