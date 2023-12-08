import { ChangeEvent } from 'react';
// import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

// const name: string = 'Hello World 123'
// let nr: number = 123
// console.log(`String: ${name}, Numbers: ${nr}`)
// const myFunc1: (a: string, b: number, c: boolean) => boolean = (a,b,c) => {return true}
// const myFunc2: (a: string, b: number, c: boolean) => void = (a,b,c) => {console.log('nothing to return')}
// myFunc1('Hello', 123, false)
// myFunc2('Hello', 123, false)

// // interface IsearchBoxProps extends IChangeHandlerProps {
// interface ISearchBoxProps {
// 	classNamex: string;
// 	placeholderx?: string;
// }
// // interface IChangeHandlerProps {
// interface ISearchBoxProps {
// 	onSearchx: (a: string) => void
// }

// type CanadianAddress = {
// 	street: string;
// 	province: string;
// }
// type USAAddress = {
// 	street: string;
// 	state: string;
// }
// type NorthAmericanAddress = CanadianAddress | USAAddress
// type ItalianAddress = {
// 	street: string;
// 	region: string;
// }
// type WesternAddress = NorthAmericanAddress | ItalianAddress
// const Address: WesternAddress = {
// 	street: '123 sdfasfa',
// 	// state: 'XY';
// 	// region: 'Tuscany';
// 	province: 'XX'
// }

type SearchBoxProps = {
	classNamex: string;
	placeholderx?: string;
	// onSearchx: (event: ChangeEventHandlerH<HTMLInputElement>);
	onSearchx: (event: ChangeEvent<HTMLInputElement>) =>void;
}

const SearchBox = ({ onSearchx, placeholderx, classNamex }: SearchBoxProps) => (
	<input placeholder={placeholderx} type="search" onChange={onSearchx} className={`search-box ${classNamex}`} />
);

export default SearchBox;