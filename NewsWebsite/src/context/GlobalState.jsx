import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
//const apiKey= 'pUMj54kDEMZ3nEYjLrzm4cB1Al94ReDi'

const initialState = {
	news: [],
	
}

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	const getNews = async () => {
		const res = await axios.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=pUMj54kDEMZ3nEYjLrzm4cB1Al94ReDi')
		console.log(res.data)
		

		dispatch({
			type: 'GET_NEWS',
			payload: res.data.results,
			
//			res.results.map((new) =>{ new.title})
		})
	}

	return (
		<GlobalContext.Provider value={{
				news: state.news,
				getNews, }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const GlobalContext = createContext(initialState)