import "github-markdown-css";
import "highlightjs/styles/default.css";
import "./style.less";

import marked from "marked";
import hljs from "highlightjs";

function html(dom, md = "") {
  if (!dom) return;
  dom.innerHTML = marked(md);
  hljs.initHighlightingOnLoad();
}

export { html };
