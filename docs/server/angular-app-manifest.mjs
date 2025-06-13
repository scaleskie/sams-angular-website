
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sams-angular-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sams-angular-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 523, hash: 'fd96e81e4151909743f0fa46a9f75acb9176fba674a1c35252f257a0f3d920c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1036, hash: '3c319b66f7d9e3a0474a43e34a2f819e20d3ab3c9fd1d0c9b2df0708082fb52d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20875, hash: '0989c5a12ae3ebbefae18ea4544cd320c5c0ef6ab845764b2c4387c8d320a414', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
