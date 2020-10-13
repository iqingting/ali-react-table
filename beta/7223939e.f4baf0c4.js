(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),s=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(f,p(p({ref:n},c),{},{components:t})):i.a.createElement(f,p({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),i=t(6),a=(t(0),t(121)),o={id:"pipeline",title:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd",slug:"/pipeline/"},p={unversionedId:"pipeline/pipeline",id:"pipeline/pipeline",isDocsHomePage:!1,title:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd",description:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd",source:"@site/docs/pipeline/pipeline.mdx",slug:"/pipeline/",permalink:"/beta/docs/pipeline/",editUrl:"https://github.com/alibaba/ali-react-table/edit/dev/packages/website/docs/pipeline/pipeline.mdx",version:"current",sidebar:"sidebar",previous:{title:"BaseTable API",permalink:"/beta/docs/table/api"},next:{title:"\u884c\u591a\u9009",permalink:"/beta/docs/pipeline/features/multi-select"}},l=[{value:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd",id:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd",children:[]},{value:"\u4f7f\u7528 pipeline",id:"\u4f7f\u7528-pipeline",children:[{value:"hooks \u7528\u6cd5",id:"hooks-\u7528\u6cd5",children:[]},{value:"\u5728 class component \u4e2d\u4f7f\u7528 pipeline",id:"\u5728-class-component-\u4e2d\u4f7f\u7528-pipeline",children:[]}]}],c={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd"},"\u62d3\u5c55\u673a\u5236\u4ecb\u7ecd"),Object(a.b)("p",null,"\u7279\u70b9\uff1a"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u540c\u65f6\u652f\u6301\u53d7\u63a7\u7528\u6cd5 \u548c \u975e\u53d7\u63a7\u7528\u6cd5"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 tree shaking")),Object(a.b)("p",null,"TODO \u8be6\u7ec6\u4ecb\u7ecd"),Object(a.b)("h2",{id:"\u4f7f\u7528-pipeline"},"\u4f7f\u7528 pipeline"),Object(a.b)("h3",{id:"hooks-\u7528\u6cd5"},"hooks \u7528\u6cd5"),Object(a.b)("p",null,"\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u4e2d\u5f15\u5165 hooks ",Object(a.b)("inlineCode",{parentName:"p"},"useTablePipeline")," \u6765\u521b\u5efa pipeline\u3002"),Object(a.b)("p",null,"\u521b\u5efa\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ali-react-table \u63d0\u4f9b\u7684 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"features/multi-select"}),"\u9ed8\u8ba4\u62d3\u5c55\u529f\u80fd"),"\uff0c\u6216\u662f ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"extends"}),"\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u8868\u683c\u62d3\u5c55"),"\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { useTablePipeline, features, BaseTable } from 'ali-react-table'\nimport { Checkbox } from '@alifd/next'\n// or...  import { Checkbox } from 'antd'\n\nfunction SomeFunctionComponent() {\n  const pipeline = useTablePipeline({ components: { Checkbox } })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(features.sort(sortOptions))\n    .use(features.multiSelect(selectOptions))\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(a.b)("p",null,"\u521b\u5efa pipeline \u65f6\uff0c\u8981\u6839\u636e\u540e\u7eed\u7528\u5230\u7684\u8868\u683c\u62d3\u5c55\u4e3a pipeline \u63d0\u4f9b components\u3002\u6bcf\u4e2a\u62d3\u5c55\u6240\u9700\u6c42\u7684\u7ec4\u4ef6\u53ef\u80fd\u4e0d\u540c\uff0c\u4f8b\u5982 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"features/multi-select"}),"\u884c\u591a\u9009")," \u9700\u8981 Checkbox \u7ec4\u4ef6\uff0c",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"features/single-select"}),"\u884c\u5355\u9009")," \u5219\u9700\u8981 Radio \u7ec4\u4ef6\u3002"),Object(a.b)("p",null,"\u5982\u679c\u5bf9\u6253\u5305\u4f53\u79ef\u8981\u6c42\u4e0d\u9ad8\uff0c\u53ef\u4ee5\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// \u5bf9\u4e8e fusion \u7528\u6237...\nimport * as fusion from '@alifd/next'\nuseTablePipeline({ components: fusion })\n\n// \u5bf9\u4e8e antd \u7528\u6237...\nimport * as antd from 'antd'\nuseTablePipeline({ components: antd })\n")),Object(a.b)("h3",{id:"\u5728-class-component-\u4e2d\u4f7f\u7528-pipeline"},"\u5728 class component \u4e2d\u4f7f\u7528 pipeline"),Object(a.b)("p",null,"todo"))}s.isMDXComponent=!0}}]);