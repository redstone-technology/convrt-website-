// Serves the Arabic site at ar.convrt.qa from the same Vercel deployment.
// Runs after `astro build` and adds host-based routes to the Vercel output:
//   ar.convrt.qa/        -> /ar        (Arabic home)
//   ar.convrt.qa/start   -> /ar/start  (Arabic qualify form)
//   convrt.qa/ar[/start] -> redirect to ar.convrt.qa[/start]
// Everything else (assets, /api/lead) is shared by both hosts.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'

const file = '.vercel/output/config.json'
if (!existsSync(file)) {
  console.log('ar-subdomain: no Vercel output, skipped')
  process.exit(0)
}
const AR = 'ar.convrt.qa'
const config = JSON.parse(readFileSync(file, 'utf8'))
const routes = [
  { src: '^/ar(/start)?/?$', missing: [{ type: 'host', value: AR }], status: 308, headers: { Location: `https://${AR}$1` } },
  { src: '^/start/?$', has: [{ type: 'host', value: AR }], dest: '/ar/start/index.html' },
  { src: '^/$', has: [{ type: 'host', value: AR }], dest: '/ar/index.html' },
]
config.routes = [...routes, ...config.routes.filter((r) => !routes.some((x) => x.src === r.src && JSON.stringify(x) === JSON.stringify(r)))]
writeFileSync(file, JSON.stringify(config, null, 2))
console.log(`ar-subdomain: ${AR} routes added`)
