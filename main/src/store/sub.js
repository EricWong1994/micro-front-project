// name
// app
// activeWhen
// customProps
import { loading } from '../store'

function createScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const first = document.getElementsByTagName('script')[0];
    console.log(first)
    first.parentNode.insertBefore(script, first);
  })
}

async function createCss(url) {
  const res = await fetch(url);
  const cssText = await res.text();
  const style = document.createElement('style')
  style.innerHTML = cssText;
  document.body.appendChild(style);
}

async function loadApp(urls, name, csslist) {
  console.log(csslist)
  // await Promise.all(urls.map(async url => await createScript(url)))

  await createScript(urls[0])
  await createScript(urls[1])

  if (csslist.length) {
    await createCss(csslist[0]);
  }
  // 取消loading
  loading.changeLoading(false)
  return window[name];
}

export const subNavList = [
  {
    name: 'react15',
    app: () => {}, // 通过此函数获取到子应用的所有资源 js css
    activeWhen: () => {},
    customProps: {},
  },
  {
    name: 'react16',
    app: loadApp([
      'http://localhost:9003/react16.js'
    ], 'react16', [
      'http://localhost:9003/path.css'
    ]),
    activeWhen: location => location.pathname.startsWith('/react16'),
    customProps: {},
  },
  {
    name: 'vue2',
    app: loadApp([
      'http://localhost:9004/static/js/chunk-vendors.js',
      'http://localhost:9004/static/js/app.js'
    ], 'vue2'),
    activeWhen: location => location.pathname.startsWith('/vue2'),
    customProps: {},
  },
  {
    name: 'vue3',
    app: loadApp([
      'http://localhost:9005/static/js/chunk-vendors.js',
      'http://localhost:9005/vue3.js',
    ], 'vue3'),
    activeWhen: location => location.pathname.startsWith('/vue3'),
    customProps: {},
  },
]
