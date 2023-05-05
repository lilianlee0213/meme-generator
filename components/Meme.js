import React from 'react';
import memesData from '../memesData';

export default function Meme() {
	function getMemeImage() {
		const memesArray = memesData.data.memes;
		const randomNumbner = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumbner].url;
		console.log(url);
	}
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<main>
			<form className="form" onSubmit={onSubmit}>
				<input type="text" placeholder="Top text" className="form--input" />
				<input type="text" placeholder="Bottom text" className="form--input" />
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image
				</button>
			</form>
		</main>
	);
}
