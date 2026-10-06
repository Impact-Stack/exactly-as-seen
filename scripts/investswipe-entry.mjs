import { readFile, mkdir, writeFile } from 'node:fs/promises';
// Give non-JavaScript crawlers route-specific metadata without changing the agency homepage.
const title = 'InvestSwipe | Learn Investing Before Using Real Money';
const description = 'Learn investing through bite-sized stories and practise with simulated credits. Join the InvestSwipe waitlist for the upcoming private beta in South Africa.';
const url = 'https://impactstack.africa/investswipe';
let html = await readFile('dist/index.html', 'utf8');
html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
  .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
  .replace(/(<meta (?:property|name)="(?:og:title|twitter:title)" content=")[^"]*("\s*\/?>)/g, `$1${title}$2`)
  .replace(/(<meta (?:property|name)="(?:og:description|twitter:description)" content=")[^"]*("\s*\/?>)/g, `$1${description}$2`)
  .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${url}$2`);
await mkdir('dist/investswipe', { recursive: true });
await writeFile('dist/investswipe/index.html', html);
