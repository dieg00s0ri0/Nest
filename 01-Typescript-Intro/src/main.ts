import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { objeto } from './bases/03-clases.ts'
// importo mi archivo y entre las llaves declaro que importo del archivo
//import { name,templateString } from "./bases/01-types";
// import { arreglo_objetos } from "./bases/02-objects.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<h1>${objeto.name}</h1>
</div>
`
 


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
