// css: markdown
// need npm github-markdown-css
import "github-markdown-css";
// css: highlight
import "highlightjs/styles/default.css";
// css: fit for Chinese
import "./style.less";

// need npm highlightjs
import hljs from "highlightjs";
// need npm remarkable
import Remarkable from "remarkable/dist/remarkable.min.js";

let options = {
  linkify: false,
  langPrefix: 'language-',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) { }
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) { }
    return '';
  }
}

let remarkable = new Remarkable(options);

function md(dom, str = "", cb = () => { }) {
  if (!dom) return;
  dom.innerHTML = `<article class="markdown-body">${remarkable.render(str)}</article>`;
  cb();
}

function file(dom, file = "", cb = () => { }) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      md(dom, xhr.responseText, cb);
    }
  }
  xhr.open("GET", file, true);
  xhr.send();
}

function files() {

}

export { md, file, files };
