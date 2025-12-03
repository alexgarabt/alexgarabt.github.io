export interface Project {
	slug: string;
	title: string;
	authors: string;
	venue: string;
	thumbnail: string;
	description: string;
	abstract: string;
	bibtex: string;
	links: {
		paper?: string;
		code?: string;
		video?: string;
	};
}

export const projects: Project[] = [
	{
		slug: "neural-rendering-3d",
		title: "Neural Rendering in the Wild: 3D Reconstruction from Uncontrolled Images",
		authors: "Alex Sperid, Sarah Chen, David Wu",
		venue: "CVPR 2024 (Oral)",
		thumbnail: "https://placehold.co/600x400/png",
		description: "A novel method for reconstructing 3D scenes from internet photo collections using gaussian splatting priors.",
		links: {
			paper: "#",
			code: "https://github.com/speridlabs/neural-rendering",
			video: "#"
		},
		abstract: "We present a novel approach for reconstructing 3D scenes from uncontrolled image collections. Unlike previous methods that rely on accurate camera poses, our method jointly optimizes for geometry, appearance, and camera parameters. We introduce a robust initialization strategy based on Gaussian Splatting priors and a diffusion-based regularization term that ensures plausible geometry in unseen regions. Experiments on standard benchmarks demonstrate that our method outperforms state-of-the-art techniques in both rendering quality and geometric accuracy.",
		bibtex: `@inproceedings{sperid2024neural,
  title={Neural Rendering in the Wild},
  author={Sperid, Alex and Chen, Sarah and Wu, David},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2024}
}`
	},
	{
		slug: "diffusion-video",
		title: "Consistent Video Generation with Latent Diffusion Models",
		authors: "Sarah Chen, Alex Sperid",
		venue: "ICCV 2023",
		thumbnail: "https://placehold.co/600x400/png",
		description: "Temporal consistency in video generation using guided diffusion and optical flow constraints.",
		links: {
			paper: "#",
			code: "#"
		},
		abstract: "Generating temporally consistent video remains a challenge for latent diffusion models. We propose a new attention mechanism that attends to previous frames in the latent space, enforcing strictly consistent flow. Our method achieves state-of-the-art FVD scores on the UCF-101 benchmark.",
		bibtex: `@inproceedings{chen2023consistent,
  title={Consistent Video Generation with Latent Diffusion Models},
  author={Chen, Sarah and Sperid, Alex},
  booktitle={Proceedings of the International Conference on Computer Vision},
  year={2023}
}`
	}
]
