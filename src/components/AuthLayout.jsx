import { useState, useEffect} from "react"
import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector( state => state.auth.status)

    useEffect(() => {
        //TODO: learning easier way later
      if(authentication && authStatus !== authentication){
        navigate("/login")
      }
      else if(!authentication && authStatus !== authentication){
        navigate("/")
      }
    
      return () => {
        second
      }
    }, [authStatus, navigate, authentication])
    
  return (
    <div>AuthLayout</div>
  )
}

