import React, { useState } from 'react'
import './home.css'
import img from './monu.png'
import search from './search.png'
import mic from './mic.png'

function Home() {
    
    const [data,setData]=useState('')
    const [url ,setUrl]= useState("")
    
    const x = (e)=>{
        e.preventDefault();
        const val = "https://www.google.com/search?q=" + data
        
        window.open(val, "_self");
        
    }

    const xx = (e)=>{
        setData(e.target.value)
        setUrl( e.target.val)
    }

  return (
    <div className='home'>
        <div className='h-nav'>
            <div className='elements'>
                <p>About</p>
                <p>Store</p>
            </div>
            <div className='elements2'>
                <p>Gmail</p>
                <p>Images</p>
                <img src={img} alt="yes"  className='img'/>
                <button className='btn'>Sign in</button>
            </div>
        </div>

        <form >
            <div className='body'>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            </div>
            <div className='search' >
                <img src={search} alt="" className='icons'/>
                <input type="text" value={data} onChange={xx}/>
                <img src={mic} alt="" className='icons' />
            </div>
            <div className='google-search'>
                 <button type=" submit" onClick={x} className='gss'>Google Search</button> 
               
                <button className='gss'>I'm Feeling Lucky</button>
            </div>
            
        </form>
    </div>
  )
}

export default Home

