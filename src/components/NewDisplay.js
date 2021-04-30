import React, { useEffect, useRef, useState } from 'react';
import chevronDown from '../chevron-down.png'

const NewDisplay =({data})=>{
    const myRef = useRef()
    const navRef = useRef()
    const [search, setSearch]=useState('');
    const [result, setResult]=useState([])
    const [toggle, setToggle]=useState(true)
    const [visible, setVisible]=useState(false)
    useEffect(()=>{
        setResult(data);
    },[data])
    useEffect(()=>{
        window.addEventListener('keydown',getKey);
        return ()=> window.removeEventListener('keydown', getKey);
    },[])
    const handleChange =(e)=>{
        let value = e.target.value;
        setSearch(value)
        if(search.length >1){
            let filtered = result.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
            setResult(filtered)
        }else if(value==''){
            setResult(data)
        }
    }
    const getKey = (e)=>{
        const active = document.activeElement;
        if(e.keyCode === 40 && active.nextSibling) {
            active.nextSibling.focus();
            setVisible(false)
        }
          if(e.keyCode === 38 && active.previousSibling) {
            active.previousSibling.focus();
        }
    }
    const clearSearch =()=>{
        myRef.current.value ='';
        setResult(data)
        setVisible(false)
    }
    const handleSelect =()=>{
        setVisible(true)
    }
    return(
        <div className="container">
            <div className="mydiv">Select a character <img className="chevron" src={chevronDown} onClick={()=>setToggle(!toggle)}/>
                {toggle ?
                <>
                    <ul className="mylist">
                        <li className="first-li" ref={navRef} tabIndex="0" onClick={()=>handleSelect()} value="typing">Start Typing...</li>
                        {result.length>0 ? result.map((item, index)=><li tabIndex={String(index+1)} key={item.id}>{item.name}{index+1}</li>) : <li>Loading...</li>}
                    </ul>
                    <input className={!visible ?"my-input":"visible"} name="search" placeholder="Start Typing..." onChange={handleChange} ref={myRef}/>
                    <button className="clear-button" onClick={clearSearch}>Clear</button>
                </>
                :
                null}
            </div>
        </div>
    )
}
export default NewDisplay