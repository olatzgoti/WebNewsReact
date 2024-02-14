import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'



const NewsList = () => {
    const { news, getNews } = useContext(GlobalContext)

    useEffect(() => { getNews() }, [])


  return (
    news && news.map(item => {<p>{item.title}</p>, <p>{item.section}</p>, <p>{item.source}</p>})


   )
}




export default NewsList