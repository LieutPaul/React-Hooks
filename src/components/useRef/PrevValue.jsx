import React from 'react'

export default function PrevValue() {
    const [name,setName] = React.useState('');
    const prevName = React.useRef('');
    React.useEffect(()=>{
        prevName.current = name;
    },[name])
    return (
        <div>
            <input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <div>My name is {name} and used to be {prevName.current}</div>
        </div>
    )
}
