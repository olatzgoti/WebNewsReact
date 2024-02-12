import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


const AddNew = () => {
	const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
	const { addNew } = useContext(GlobalContext)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log('title', title, 'body', body)
		addNew({ title, body })
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={(e) => setTitle(e.target.value)} name="title"/>
			<input type="text" onChange={(e) => setBody(e.target.value)} name="body"/>
			<button type="submit">Add new</button>
		</form>
	)
}
export default AddNew