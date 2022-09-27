import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
	const [ searchString, setSearchString ] = useState(''); // [value, setValue]
	const [ monsters, setMonsters ] = useState([]);
	const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

	console.log('render');
	useEffect(() => {
		// console.log('fetch fired');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(
		() => {
			// console.log('filteredmonsters fired');
			const filteredMonsters = monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchString);
			});
			setFilteredMonsters(filteredMonsters);
		},
		[ monsters, searchString ]
	);

	const onSearchChange = (event) => {
		const searchStringValue = event.target.value.toLocaleLowerCase();
		setSearchString(searchStringValue);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox onChangeHandler={onSearchChange} placeholder="search monsters" className="monsters-search-box" />
			<CardList filteredMonsters={filteredMonsters} />
		</div>
	);
};

export default App;
