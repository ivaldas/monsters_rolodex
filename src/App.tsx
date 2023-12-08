import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export type Monster = {
	id: string;
	name: string;
	email: string;
}

const App = () => {
	const [ searchInput, setSearchInput ] = useState(''); // [value, setValue]
	const [ title, setTitle ] = useState('');
	const [ monsters, setMonsters ] = useState<Monster[]>([]);
	const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

	useEffect(
		() => {
			const newFilteredMonsters = monsters.filter((monster) => {
				return monster.name.toLowerCase().includes(searchInput);
			});
			setFilteredMonsters(newFilteredMonsters);
		},
		[ monsters, searchInput ]
	);

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => response.json())
		// 	.then((users) => setMonsters(users));
		const fetchUsers = async () => {
			const users = await getData<Array<Monster>>('https://jsonplaceholder.typicode.com/users');
			setMonsters(users)
		}
		fetchUsers();
	}, []);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchInputString = event.target.value.toLowerCase();
		setSearchInput(searchInputString);
	};
	const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchInputString = event.target.value.toLowerCase();
		setTitle(searchInputString);
	};

	return (
		<div className="App">
			<h1 className="app-title">{title} Rolodex Functional-Components</h1>
			<SearchBox onSearchx={onSearchChange} placeholderx="search monsters" classNamex="monsters-search-box" />
			<br />
			<SearchBox onSearchx={onTitleChange} placeholderx="set title" classNamex="title-search-box" />
			<CardList monstersx={filteredMonsters} />
		</div>
	);
};

export default App;
