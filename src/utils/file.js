
import md from './md';
/**
 * DOC.file()
 * 读取文件，获取md并转换为html
 * @param {DOM} dom
 * @param {URL} file
 * @param {Function} cb
 */
export default function file(dom, file = "", cb = () => {}) {
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