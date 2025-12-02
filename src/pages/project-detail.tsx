import { Button } from "@/components/ui/button"
import { FileText, Github, Youtube, Share2 } from "lucide-react"
import { useParams } from "react-router-dom"

export function ProjectDetail() {
	const { slug } = useParams()

	// In reality, fetch data based on slug here
	const projectTitle = "Neural Rendering in the Wild: 3D Reconstruction from Uncontrolled Images"

	return (
		<article className="max-w-4xl mx-auto space-y-12 pb-12">
			{/* Header */}
			<div className="text-center space-y-6">
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
					{projectTitle}
				</h1>

				{/* Authors */}
				<div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg text-slate-600">
					<span className="cursor-pointer hover:text-primary underline decoration-dotted">Alex Sperid</span>
					<span className="cursor-pointer hover:text-primary underline decoration-dotted">Sarah Chen</span>
					<span className="cursor-pointer hover:text-primary underline decoration-dotted">David Wu</span>
				</div>

				<div className="text-slate-500 font-medium">
					CVPR 2024 (Oral Presentation)
				</div>

				{/* Links */}
				<div className="flex flex-wrap justify-center gap-4">
					<Button className="rounded-full" size="lg">
						<FileText className="mr-2 h-4 w-4" /> Paper
					</Button>
					<Button variant="outline" className="rounded-full" size="lg">
						<Github className="mr-2 h-4 w-4" /> Code
					</Button>
					<Button variant="outline" className="rounded-full" size="lg">
						<Youtube className="mr-2 h-4 w-4" /> Video
					</Button>
					<Button variant="ghost" className="rounded-full" size="lg">
						<Share2 className="mr-2 h-4 w-4" /> BibTeX
					</Button>
				</div>
			</div>

			{/* Teaser */}
			<figure className="rounded-xl border bg-slate-100 overflow-hidden shadow-sm">
				<img
					src="https://placehold.co/1200x600/png?text=Teaser+Result+Image"
					alt="Teaser"
					className="w-full h-auto"
				/>
				<figcaption className="p-4 text-center text-sm text-muted-foreground bg-white/50">
					Figure 1: Our method reconstructs high-fidelity 3D scenes from uncalibrated image collections.
				</figcaption>
			</figure>

			{/* Abstract */}
			<section className="bg-slate-50 p-6 md:p-8 rounded-2xl border">
				<h2 className="text-2xl font-bold mb-4 text-center">Abstract</h2>
				<p className="text-justify text-slate-700 leading-relaxed">
					We present a novel approach for reconstructing 3D scenes from uncontrolled image collections.
					Unlike previous methods that rely on accurate camera poses, our method jointly optimizes for
					geometry, appearance, and camera parameters. We introduce a robust initialization strategy
					based on Gaussian Splatting priors and a diffusion-based regularization term that ensures
					plausible geometry in unseen regions. Experiments on standard benchmarks demonstrate that
					our method outperforms state-of-the-art techniques in both rendering quality and geometric accuracy.
				</p>
			</section>

			{/* Main Content - Markdown style */}
			<div className="prose prose-slate max-w-none">
				<h2 className="text-center">Methodology</h2>
				<p>
					Our pipeline consists of three main stages. First, we estimate initial camera poses using
					Structure-from-Motion (SfM). Second, we train a coarse Gaussian Splatting model to capture
					the scene geometry. Finally, we refine the model using our proposed diffusion regularization.
				</p>
				<div className="my-8 rounded-lg border bg-white p-4 flex items-center justify-center min-h-[300px]">
					[ Architecture Diagram Placeholder ]
				</div>

				<h2 className="text-center">Results</h2>
				<p>
					We compare our method against NeRF-W and Gaussian Splatting. As shown in the video below,
					our approach achieves significantly better temporal stability and fewer artifacts in
					occluded regions.
				</p>
			</div>

			{/* Citation */}
			<section>
				<h3 className="text-xl font-bold mb-4">Citation</h3>
				<pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm font-mono">
					{`@inproceedings{sperid2024neural,
  title={Neural Rendering in the Wild},
  author={Sperid, Alex and Chen, Sarah and Wu, David},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2024}
}`}
				</pre>
			</section>
		</article>
	)
}
