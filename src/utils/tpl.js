const IF = (condition, done = ``, fail = ``) => {
  return condition ? done : fail;
};
const FOR = (data, tpl = () => {}) => {
  if (!data) return;
  return data
    .map((val, i) => {
      return tpl(val, i);
    })
    .join("");
};

export default data => `
  <header class="docs-header">
    <div>
      <strong>${data.title}</strong>
      <span>${data.des}</span>
    </div>
  </header>
  <nav class="docs-nav">
    <div>
      <strong>Document</strong>
      <ul>
      ${FOR(
        data.docs,
        (val, i) => `
        <li>
          <a href="javascript:void(0)">${val.title}</a>
        </li>
      `
      )}
      </ul>
      <!-- 
      <strong>Link</strong>
      <a href="" target="_blank">GIT</a>
      <a href="" target="_blank">NPM</a>
      -->
    </div>
  </nav>
  <section class="docs-section"></section>
`;
