import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Microscope, Terminal } from "lucide-react"

export function HomePage() {
	return (
		<div className="space-y-16">
			{/* Hero Section */}
			<section className="space-y-6 pt-12 pb-8 md:pb-12 md:pt-16 lg:py-24">
				<div className="flex flex-col gap-4">
					<h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
						Advancing Computer Vision <br className="hidden sm:inline" />
						Through Deep Learning
					</h1>
					<p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
						Sperid Labs is an AI research group focused on 3D reconstruction,
						generative models, and visual understanding. We build open-source tools
						for the next generation of spatial computing.
					</p>
					<div className="flex gap-4 mt-4">
						<Button asChild size="lg">
							<Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
						</Button>
						<Button variant="outline" size="lg" asChild>
							<a href="https://github.com/speridlabs" target="_blank">GitHub</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Focus Areas */}
			<section className="grid md:grid-cols-2 gap-8">
				<div className="p-6 border rounded-xl bg-card shadow-sm">
					<Microscope className="h-10 w-10 text-primary mb-4" />
					<h3 className="text-xl font-bold mb-2">Research</h3>
					<p className="text-muted-foreground">
						Publishing novel architectures in top-tier conferences (CVPR, ICCV).
						Focusing on NeRFs, Gaussian Splatting, and Diffusion Models.
					</p>
				</div>
				<div className="p-6 border rounded-xl bg-card shadow-sm">
					<Terminal className="h-10 w-10 text-primary mb-4" />
					<h3 className="text-xl font-bold mb-2">Engineering</h3>
					<p className="text-muted-foreground">
						We believe in open science. Our code is released as robust,
						reusable libraries to accelerate the community's progress.
					</p>
				</div>
			</section>

			{/* News Section (Optional) */}
			<section>
				<h2 className="text-2xl font-bold mb-6 border-b pb-2">News</h2>
				<ul className="space-y-4">
					<li className="flex gap-4 text-sm">
						<span className="font-mono text-muted-foreground whitespace-nowrap">Dec 2024</span>
						<span>Our paper on 4D Gaussian Splatting was accepted to CVPR 2025!</span>
					</li>
					<li className="flex gap-4 text-sm">
						<span className="font-mono text-muted-foreground whitespace-nowrap">Nov 2024</span>
						<span>Released SperidEngine v1.0 open source.</span>
					</li>
				</ul>
			</section>
		</div>
	)
}
