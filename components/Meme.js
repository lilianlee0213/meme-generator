import React, {useEffect, useState} from 'react';

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/30b1gx.jpg',
	});
	const [allMemes, setAllMemes] = useState([]);
	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	}
	const handleChange = (event) => {
		const {name, value} = event.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};
	const onSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<main>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Top text"
					className="form--input"
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Bottom text"
					className="form--input"
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image
				</button>
			</form>
			<div className="meme">
				<img src={meme.randomImage} className="meme-image" />
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
