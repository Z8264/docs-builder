// css: markdown
import "github-markdown-css";
// css: highlight
import "highlightjs/styles/default.css";
// css: fit for Chinese
import "./style.less";

import marked from "marked";
import hljs from "highlightjs";

function html(dom, md = "") {
  if (!dom) return;
  let options = {
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  }
  dom.innerHTML = `<article class="markdown-body">${marked(md, options)}</article>`;
}

export { html };
