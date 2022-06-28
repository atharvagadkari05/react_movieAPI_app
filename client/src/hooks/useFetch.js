import React, { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = ()  =>{

const [data , setData] = useState(null)
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)

const fetchData = (api_url) =>{
    const request = await axios.get(testURl);
    
    setmovies(request.data.results);
    return request;
}


useEffect(()=>{
    setLoading(true);
    fetchData();

})


} 