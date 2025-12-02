export function Footer() {
	return (
		<footer className="border-t py-6 md:py-0">
			<div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row text-sm text-muted-foreground">
				<p>© {new Date().getFullYear()} SperidLabs. AI Research.</p>
				<div className="flex gap-4">
					<a href="https://github.com/speridlabs" target="_blank" className="hover:text-foreground">GitHub</a>
					<a href="mailto:contact@speridlabs.com" className="hover:text-foreground">Contact</a>
				</div>
			</div>
		</footer>
	)
}
