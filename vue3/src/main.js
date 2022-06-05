// import { createApp, h } from 'vue';
// import App from './App.vue';
//
// import router from './router'
// import singSpaVue from 'single-spa-vue';
//
// const render = () => {
//   createApp(App).use(router).mount('#app');
// }
//
// if (!window.singleSpaNavigate) {
//   render()
// }
//
// const vueLifecycles = singSpaVue({
//   createApp,
//   appOptions: {
//     render() {
//       return h(App, {
//         props: {},
//       })
//     }
//   },
//   handleInstance(instance, props) {
//     instance.use(router);
//   }
// })
//
// export const bootstrap = vueLifecycles.bootstrap;
//
// export const mount = vueLifecycles.mount;
//
// export const unmount = vueLifecycles.unmount;


import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router'
import singleSpaVue from 'single-spa-vue';

const render = () => {
  createApp(App).use(router).mount('#app');
}

if (!window.singleSpaNavigate) {
  render()
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
        },
      })
    },
  },
  handleInstance: (app) => {
    app.use(router);
  }
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
