// async function getComponent() {
//   var element = document.createElement('div');

//   // 动态地加载模块。调用 import() 之处，被作为分离的模块起点，意思是，被请求的模块和它引用的所有子模块，会分离到一个单独的 chunk 中。
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

//   element.innerHTML = _.join(['Hello', 'webpack'], '~');

//   return element;
// }


// if (process.env.NODE_ENV === 'development') {
//   getComponent().then(component => {
//     document.body.appendChild(component);
//   })
// } else {
// }


import React, { Suspense } from 'react'
import reactDOM from 'react-dom'
// import OtherComponent from './components/OtherComponent.jsx'

// 懒加载
const OtherComponent = React.lazy(() => import('./components/OtherComponent'))

reactDOM.render(
  <Suspense fallback={<div style={{ fontSize: '99px' }}>loading...</div>}>
    <OtherComponent />
  </Suspense>
  ,
  document.getElementById('app')
);