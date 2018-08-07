// css: markdown
// need npm github-markdown-css
import "github-markdown-css";
// css: highlight
import "highlightjs/styles/default.css";
// css: fit for Chinese
import "./style.less";

/**
 * 代码高亮插件
 * need npm highlightjs
 */
import hljs from "highlightjs";
/**
 * md转换插件
 * need npm remarkable
 */
import Remarkable from "remarkable/dist/remarkable.min.js";

import tpl from "./tpl";

let options = {
  linkify: false,
  langPrefix: "language-",
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}
    return "";
  }
};

let remarkable = new Remarkable(options);

/**
 *
 * @param {DOM} dom
 * @param {String} str
 * @param {Function} cb
 */
function md(dom, str = "", cb = () => {}) {
  if (!dom) return;
  dom.innerHTML = `<article class="markdown-body">${remarkable.render(
    str
  )}</article>`;
  cb(str);
}
/**
 *
 * @param {DOM} dom
 * @param {URL} file
 * @param {Function} cb
 */
function file(dom, file = "", cb = () => {}) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (dom) md(dom, xhr.responseText);
      cb(xhr.responseText);
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}
/**
 *
 */
function auto(options) {
  let root = document.querySelector("body");
  let lists, section;
  let cache = [];
  let current = null;

  // 写入模板
  root.innerHTML = tpl(options);
  // 绑定事件
  lists = root.querySelectorAll("nav a");
  section = root.querySelector("section");

  [...lists].forEach((el, i) => {
    el.addEventListener("click", e => {
      if (current === i) return;

      if (current) lists[current].classList.remove("on");
      lists[i].classList.add("on");
      current = i;

      if (cache[i]) {
        md(section, cache[i]);
      } else {
        cache[i] = true;
        file("", options.docs[i].file, str => {
          cache[i] = str;
          md(section, cache[i]);
        });
      }
    });
  });
}

export { md, file, auto };
