import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Navbar() {
	const location = useLocation()

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Projects", path: "/projects" },
	]

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-2">
					<Link to="/" className="flex flex-row items-center gap-2">
						<img src="/logo-black.svg" className="w-10" />
						<span className="text-xl font-bold tracking-tight">Sperid<span className="text-primary">Labs</span></span>
					</Link>
				</div>
				<nav className="flex gap-6">
					{navItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							className={cn(
								"text-sm font-medium transition-colors hover:text-primary",
								location.pathname === item.path
									? "text-foreground"
									: "text-muted-foreground"
							)}
						>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}
