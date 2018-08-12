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


let options = {
  html: true,
  linkify: false,
  langPrefix: "language-",
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) { }
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) { }
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
export default function md(dom, str = "", cb = () => { }) {
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