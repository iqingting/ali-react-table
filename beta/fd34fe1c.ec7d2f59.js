(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{105:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(121)),c={id:"column-hover",title:"\u5217\u9ad8\u4eae"},i={unversionedId:"pipeline/features/column-hover",id:"pipeline/features/column-hover",isDocsHomePage:!1,title:"\u5217\u9ad8\u4eae",description:"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u3002",source:"@site/docs/pipeline/features/column-hover.mdx",slug:"/pipeline/features/column-hover",permalink:"/beta/docs/pipeline/features/column-hover",editUrl:"https://github.com/alibaba/ali-react-table/edit/dev/packages/website/docs/pipeline/features/column-hover.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u6811\u5f62\u9009\u62e9",permalink:"/beta/docs/pipeline/features/tree-select"},next:{title:"\u5217\u8303\u56f4\u9ad8\u4eae",permalink:"/beta/docs/pipeline/features/column-range-hover"}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],u={rightToc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u3002"),Object(a.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function \u5217\u9ad8\u4eae() {\n  const dataSource = assets.biz.dataSource6\n  const columns = assets.biz.columns6\n  const pipeline = useTablePipeline({ components: fusion }).input({ dataSource, columns }).use(features.columnHover())\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(a.b)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"pipeline.use(features.columnHover(options))\n")),Object(a.b)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export interface ColumnHoverFeatureOptions {\n  /** \u9f20\u6807\u60ac\u505c\u7684\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a 'var(--hover-bgcolor)' */\n  hoverColor?: string\n\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u7684 colIndex */\n  defaultHoverColIndex?: number\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u9f20\u6807\u60ac\u505c\u5217\u7684\u4e0b\u6807\uff08colIndex) */\n  hoverColIndex?: number\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1acolIndex \u6539\u53d8\u7684\u56de\u8c03 */\n  onChangeHoverColIndex?(nextColIndex: number): void\n}\n")),Object(a.b)("p",null,"options \u4e5f\u53ef\u4ee5\u4f20\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u5f00\u542f\u6216\u5173\u95ed\u8be5\u529f\u80fd\u3002"))}p.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return t?o.a.createElement(f,i(i({ref:n},u),{},{components:t})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);