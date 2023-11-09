import { useState } from "react"

function App() {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)

	return (
		<div>
			<input onChange={(e) => setName(e.target.value)} />
			<br />
			<br />
			<button onClick={() => setAge((currentAge) => currentAge - 1)}>
				-
			</button>
			<span>0</span>
			<button onClick={() => setAge((currentAge) => currentAge + 1)}>
				+
			</button>
			<br />
			<br />
			<span>
				My name is {name} and I am {age} years old
			</span>
		</div>
	)
}

export default App
