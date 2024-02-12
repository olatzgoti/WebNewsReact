import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListNews } from '../../components/listNews/ListNews'
import { GlobalContext } from '../../context/GlobalState'

const NewsView = () => {
	// const [characters, setCharacters] = useState([])
	const { ListNews, getNews } = useContext(GlobalContext)

	useEffect(() => {
		getCharacters()
	}, [])

	// const getCharacters = async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			'https://rickandmortyapi.com/api/character'
	// 		)
	// 		setCharacters(response.data.results)
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	return (
		<>
			<h1>home view</h1>
			{characters.map((character) => (
				<Character
					key={character.id}
					nombre={character.name}
					image={character.image}
				/>
			))}
		</>
	)
}

export default NewsView