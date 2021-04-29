import React, { useRef, useState } from 'react';

const Display =({data})=>{
    const myRef = useRef()
    const [search, setSearch]=useState('');
    const [result, setResult]=useState([])
    const array = data.map(item=><li>{item.name}</li>);
    const handleChange =(e)=>{
        let value = e.target.value;
        console.log(value.length)
        setSearch(value)
        if(search.length >=2){
            let filtered = data.filter(item=> item.name.toLowerCase().includes(search.toLocaleLowerCase()));
            setResult(filtered)
        }
    }
    const clearSearch =()=>{
        myRef.current.value ='';
    }
    return(
        <>
        <ul className="mylist">
            <li className="mylist"><input name="search" placeholder="Search..." onChange={handleChange} ref={myRef}/></li>
            {result.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
        <button onClick={clearSearch}>Clear</button>
        
        </>
    )
}
export default Display