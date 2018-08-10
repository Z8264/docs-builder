// css: markdown
// need npm github-markdown-css
import "github-markdown-css";
// css: highlight
import "highlightjs/styles/default.css";
// css: fit for Chinese
import "./less/md-polyfill.less";
import "./less/style.less";

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
 * DOC.md()
 * 将md转换为html
 * @param {DOM} dom
 * @param {String} str
 * @param {Function} cb
 */
function md(dom, str = "", cb = () => {}) {
  let res = remarkable.render(str);
  if (dom) {
    dom.innerHTML = `
      <article class="markdown-body">
        ${res}
      </article>
    `;
  }
  cb(res);
}
/**
 * DOC.file()
 * 读取文件，获取md并转换为html
 * @param {DOM} dom
 * @param {URL} file
 * @param {Function} cb
 */
function file(dom, file = "", cb = () => {}) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      let res;
      if (xhr.status == 200) {
        res = xhr.responseText ? xhr.responseText : "!! 这个文档没有内容";
      } else {
        res = "error";
      }
      if (dom) md(dom, res);
      cb(res);
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}
/**
 * DOC.auto
 * 自动构建文档
 * @param {Object} options
 */
let isAuto = false;
function auto(options) {
  if (isAuto) return;
  isAuto = true;

  let root = document.querySelector("body");
  let title = document.querySelector("title");
  let lists, section;
  let cache = [];
  let current = null;

  // 写入模板
  title.innerHTML = options.title;
  root.innerHTML = tpl(options);
  // 绑定事件
  lists = root.querySelectorAll("nav a");
  section = root.querySelector("section");

  [...lists].forEach((el, i) => {
    el.addEventListener("click", e => {
      if (current === i) return;
      _setCurrent(i);
    });
  });

  if (options.current === 0 || options.current) {
    _setCurrent(options.current);
  }

  function _setCurrent(i) {
    // current
    if (current != null) lists[current].classList.remove("on");
    lists[i].classList.add("on");
    current = i;

    // loading...
    section.innerHTML = "<p>文档加载中...</p>";

    // setTimeout(function() {
    // 加载文件流程
    if (options.docs[i].file) {
      if (cache[i]) {
        md(section, cache[i]);
      } else {
        cache[i] = true;
        file("", options.docs[i].file, res => {
          if (res == "error") {
            cache[i] = false;
            md(section, "!! 文档加载失败");
          } else {
            cache[i] = res;
            md(section, cache[i]);
          }
        });
      }
    }
    // }, 2000);
  }
}

export { md, file, auto };
