import React, { useState } from 'react'
import { Product } from './components'
import data from './data.json'

import './App.css'

function App() {
	const [itemsBought, setItemsBought] = useState(0)

	const onBuyItem = (clicks: number) => {
		const totalItemsBought: number = itemsBought + clicks
		setItemsBought(totalItemsBought)
	}

	return (
		<div className="App">
			<h2>My React ts app</h2>

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				{data.map((item) => (
					<Product
						name={item.name}
						imgSrc={item.imgSrc}
						description={item.description}
						buttonText="Buy"
						functionToRun={onBuyItem}
					/>
				))}
			</div>
			<h2>Items bought: {itemsBought}</h2>
		</div>
	)
}

export default App
