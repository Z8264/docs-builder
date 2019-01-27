// css: markdown
// need npm github-markdown-css
import "github-markdown-css";
// css: highlight
import 'highlight.js/styles/default.css';
// css: fit for Chinese
import "./less/md-polyfill.less";
import "./less/style.less";


import md from './utils/md.js';
import file from './utils/file.js';
import auto from './utils/auto.js';


export { md, file, auto };
