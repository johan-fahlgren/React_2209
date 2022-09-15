import React from 'react'
import './styles.css'

interface IProduct {
	name: string
	imgSrc: string
	description: string[]
	buttonText?: string | number
	functionToRun?: (param: number) => void
}

const Product = ({
	name,
	imgSrc,
	description,
	buttonText,
	functionToRun,
}: IProduct) => {
	const onButtonClick = () => {
		if (functionToRun !== undefined) {
			functionToRun(1)
		}
	}

	return (
		<div className="wrapper">
			<img src={imgSrc} className="product-img" />
			<h2>{name}</h2>
			<p>{description[0]}</p>
			<b>{description[1]}</b>

			<button
				onClick={onButtonClick}
				style={{
					margin: '10px',
					backgroundColor: 'white',
					width: '50px',
					cursor: 'pointer',
				}}
			>
				{buttonText}
			</button>
		</div>
	)
}

export default Product
