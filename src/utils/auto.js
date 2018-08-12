import md from './md';
import file from './file';
import tpl from "./tpl";

/**
 * DOC.auto
 * 自动构建文档
 * @param {Object} options
 */
let options;
let isAuto = false;
let root;
let title;
let lists, section;
let cache = [];
let current = null;

function _setCurrent(i) {
  // current
  if (current != null) lists[current].classList.remove("on");
  lists[i].classList.add("on");
  current = i;

  // 清空页面
  window.scrollTo(0, 0);

  // 加载文件流程
  let doc = options.docs[i];
  let cb = doc.cb || (() => { });
  if (doc.file) {
    if (cache[i]) {
      md(section, cache[i], cb);
    } else {
      cache[i] = true;
      // loading...
      section.innerHTML = "<p>文档加载中...</p>";
      file("", doc.file, res => {
        if (res == "error") {
          cache[i] = false;
          md(section, "!! 文档加载失败");
        } else {
          cache[i] = res;
          md(section, cache[i], cb);
        }
      });
    }
  }
}

export default function auto(config) {
  if (isAuto) return;
  isAuto = true;

  options = config;

  title = document.querySelector("title");
  root = document.querySelector('body');

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


}