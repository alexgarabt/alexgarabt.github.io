import { Link } from "react-router-dom";

// Mock Data - move to src/data/projects.ts later
const projects = [
	{
		slug: "neural-rendering-3d",
		title: "Neural Rendering in the Wild: 3D Reconstruction from Uncontrolled Images",
		authors: "Alex Sperid, Sarah Chen, David Wu",
		venue: "CVPR 2024 (Oral)",
		thumbnail: "https://placehold.co/600x400/png",
		description: "A novel method for reconstructing 3D scenes from internet photo collections using gaussian splatting priors."
	},
	{
		slug: "diffusion-video",
		title: "Consistent Video Generation with Latent Diffusion Models",
		authors: "Sarah Chen, Alex Sperid",
		venue: "ICCV 2023",
		thumbnail: "https://placehold.co/600x400/png",
		description: "Temporal consistency in video generation using guided diffusion and optical flow constraints."
	}
]

export function ProjectsPage() {
	return (
		<div className="space-y-12">
			<div>
				<h1 className="text-3xl font-bold mb-4">Projects & Publications</h1>
				<p className="text-muted-foreground text-lg">
					Selected research papers and open source investigations.
				</p>
			</div>

			<div className="grid gap-12">
				{projects.map((project) => (
					<div key={project.slug} className="flex flex-col md:flex-row gap-6 items-start">
						{/* Thumbnail */}
						<Link to={`/projects/${project.slug}`} className="w-full md:w-64 shrink-0 overflow-hidden rounded-lg border shadow-sm transition hover:shadow-md">
							<img
								src={project.thumbnail}
								alt={project.title}
								className="w-full h-40 md:h-36 object-cover bg-muted"
							/>
						</Link>

						{/* Content */}
						<div className="space-y-2">
							<Link to={`/projects/${project.slug}`} className="hover:underline">
								<h2 className="text-xl font-semibold leading-tight">{project.title}</h2>
							</Link>
							<div className="text-sm text-muted-foreground">
								{project.authors}
							</div>
							<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
								{project.venue}
							</div>
							<p className="text-muted-foreground leading-relaxed pt-2">
								{project.description}
							</p>
							<div className="flex gap-4 pt-1 text-sm font-medium text-primary">
								<Link to={`/projects/${project.slug}`} className="hover:underline">Project Page</Link>
								<a href="#" className="hover:underline">Paper</a>
								<a href="#" className="hover:underline">Code</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
