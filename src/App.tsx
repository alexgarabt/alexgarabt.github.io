import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

import { Button } from "@/components/ui/button"

export default function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-50 p-8">
			{/* Logos */}
			<div className="flex gap-8">
				<a href="https://vite.dev" target="_blank">
					<img
						src={viteLogo}
						className="h-20 hover:drop-shadow-lg transition"
						alt="Vite logo"
					/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="h-20 hover:drop-shadow-lg transition"
						alt="React logo"
					/>
				</a>
			</div>

			{/* Title */}
			<h1 className="text-4xl font-bold text-gray-800">Vite + React</h1>

			{/* Card */}
			<div className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow">
				<Button onClick={() => setCount((count) => count + 1)}>
					Count is {count}
				</Button>

				<p className="text-gray-600">
					Edit <code className="font-mono text-sm">src/App.tsx</code> and save to{" "}
					test HMR
				</p>
			</div>

			{/* Footer text */}
			<p className="text-gray-500 text-sm">
				Click on the Vite and React logos to learn more
			</p>

			{/* Your Tailwind test */}
			<p className="text-3xl text-slate-600">Hola con tailwind</p>
		</div>
	)
}

