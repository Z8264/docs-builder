
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import diff from 'highlight.js/lib/languages/diff';
import bash from 'highlight.js/lib/languages/bash';

import marked from "marked";

// 语言
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('bash', bash);

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code,lang) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

/**
 * DOC.md()
 * 将md转换为html
 * @param {DOM} dom
 * @param {String} str
 * @param {Function} cb
 */
export default function md(dom, str = "", cb = () => { }) {
  let res = marked(str);
  if (dom) {
    dom.innerHTML = `
      <article class="markdown-body">
        ${res}
      </article>
    `;
  }
  cb(res);
}