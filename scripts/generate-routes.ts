import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import { projects } from '../src/data/projects'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DIST_DIR = path.resolve(__dirname, '../dist')

async function generate() {
	console.log('Generating static routes for GitHub Pages...')

	if (!await fs.pathExists(DIST_DIR)) {
		console.error('dist/ directory not found. Run "pnpm build" first.')
		process.exit(1)
	}

	const template = await fs.readFile(path.join(DIST_DIR, 'index.html'), 'utf-8')

	const routes = [
		'/projects',
		...projects.map((p) => `/projects/${p.slug}`)
	]

	for (const route of routes) {
		const relativePath = route.startsWith('/') ? route.substring(1) : route
		const dir = path.join(DIST_DIR, relativePath)
		await fs.ensureDir(dir)
		await fs.writeFile(path.join(dir, 'index.html'), template)
		console.log(`Created: ${route}/index.html`)
	}

	// Fallback 404
	await fs.copyFile(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, '404.html'))
	console.log('Created: 404.html (Fallback)')

	// .nojekyll
	await fs.writeFile(path.join(DIST_DIR, '.nojekyll'), '')
	console.log('Created: .nojekyll')

	console.log('Static generation complete!')
}

generate().catch((err) => {
	console.error('Generation failed:', err)
	process.exit(1)
})
