import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const port=4173;
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
createServer(async(req,res)=>{try{const requested=req.url==='/'?'index.html':req.url.split('?')[0].replace(/^\//,'');const safe=normalize(requested).replace(/^(\.\.[/\\])+/, '');const body=await readFile(join(process.cwd(),safe));res.writeHead(200,{'content-type':types[extname(safe)]||'application/octet-stream','cache-control':'no-store'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/`));

