import { useState } from 'react'
import Header from './components/Header/header'
import Todolist from './components/Todolist/todolist'

const filters = ['진행예정', '진행완료']
function App() {
	const [filter, setFilter] = useState(filters[0])

	return (
		<>
			<Header filters={filters} filter={filter} setFilter={setFilter} />
			<Todolist filter={filter} />
		</>
	)
}

export default App
