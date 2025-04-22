import React from "react"

type InputUserDataProps = {
    label: string;
    value: string;
    placeholder?: string;
    className?: string;
    valueIsVisable: boolean;
}

export default function InputUserData({
    label,
    value,
    placeholder = '',
    className = '',
    valueIsVisable,
}: InputUserDataProps){
    return(
        <div>
            <input type="text" placeholder=""/>
        </div>
    )
}