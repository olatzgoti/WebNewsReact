import { useContext, useEffect } from 'react'
import React from 'react'
import { GlobalContext } from '../../context/GlobalState'

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext)
  const localData = JSON.parse(localStorage.getItem('data'))
  let myNews

  useEffect(() => { getNews() }, [])

  const newsList = news.map((newL) => {
   /*  return (
        <div>
          <newL key={newL.id} data={newL.title}/>
        </div>
    ) */
<p>{newL.title}</p>
  })
/* 
  if (localData === null) {
    myNews = () =>{ return ( <></>  ) }
  } 
  else {
    myNews = localData.map((data) => {
      {data.url = 'http://' + data.url}
        return (
          <div>
            <newL key={data.name} data={data}/>
          </div>
        )
        })
  } */

return (

  { news } 
  //<h1>hola q tal </h1>

)}

export default ListNews
/*{news}
{myNews}*/