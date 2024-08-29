import fs = require('fs');
import { Cssville } from './cssville';

// Get the path from the command-line arguments or use the default path
const args = process.argv.slice(2); // The first two elements are node and script name
const path = args[0] || 'cssville.css';
let css = Cssville.getCss();
fs.writeFile(path, css, () => { console.log("Done: " + path); });
