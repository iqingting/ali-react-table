(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||a;return r?o.a.createElement(m,i(i({ref:t},p),{},{components:r})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(121)),c={title:"\u4ece 0.14 \u5347\u7ea7\u5230 1.0"},i={permalink:"/beta/blog/2020/08/13/from-0.14-to-1.0",editUrl:"https://github.com/alibaba/ali-react-table/edit/dev/packages/blog/blog/2020-08-13-from-0.14-to-1.0.md",source:"@site/blog/2020-08-13-from-0.14-to-1.0.md",description:"1.0 \u91c7\u7528\u4e86 sticky position \u6765\u5b9e\u73b0\u5de6\u53f3\u9501\u5217\u529f\u80fd\uff0c\u8868\u683c border-collapse \u5c5e\u6027\u4ece collapse \u5207\u6362\u5230\u4e86 seperate\uff0c\u6574\u4f53 DOM \u7ed3\u6784\u53d8\u5316\u8f83\u5927\uff0c\u6b64\u5916\u5bf9\u539f\u6709\u7684 css variables \u8fdb\u884c\u4e86\u7b80\u5316\u3002 \u5347\u7ea7\u65f6\u6ce8\u610f\u539f\u6709\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f \u548c\u4f9d\u8d56 DOM \u7ed3\u6784\u7684\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u6ce8\u610f\u56de\u5f52\u9a8c\u8bc1\u3002",date:"2020-08-13T00:00:00.000Z",tags:[],title:"\u4ece 0.14 \u5347\u7ea7\u5230 1.0",readingTime:.13,truncated:!0,nextItem:{title:"\u4ece 0.13 \u5347\u7ea7\u5230 0.14",permalink:"/beta/blog/2020/08/10/from-0.13-to-0.14"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"1.0 \u91c7\u7528\u4e86 sticky position \u6765\u5b9e\u73b0\u5de6\u53f3\u9501\u5217\u529f\u80fd\uff0c\u8868\u683c border-collapse \u5c5e\u6027\u4ece ",Object(a.b)("inlineCode",{parentName:"p"},"collapse")," \u5207\u6362\u5230\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"seperate"),"\uff0c\u6574\u4f53 DOM \u7ed3\u6784\u53d8\u5316\u8f83\u5927\uff0c\u6b64\u5916\u5bf9\u539f\u6709\u7684 css variables \u8fdb\u884c\u4e86\u7b80\u5316\u3002 \u5347\u7ea7\u65f6\u6ce8\u610f\u539f\u6709\u7684\u81ea\u5b9a\u4e49\u6837\u5f0f \u548c\u4f9d\u8d56 DOM \u7ed3\u6784\u7684\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u6ce8\u610f\u56de\u5f52\u9a8c\u8bc1\u3002"),Object(a.b)("p",null,"1.0 \u79fb\u9664\u4e86 ",Object(a.b)("inlineCode",{parentName:"p"},"ali-react-table/biz")," \u7684\u5bfc\u5165\u5165\u53e3\u3002\u5728 0.14 \u4e2d\u5f15\u7528\u8be5\u5165\u53e3\u5df2\u7ecf\u8fdb\u884c\u4e86\u8b66\u544a\uff0c\u8bf7\u6309\u7167\u8b66\u544a\u4fe1\u606f\u5bf9\u4ee3\u7801\u8fdb\u884c\u76f8\u5e94\u4fee\u6539\u3002"))}u.isMDXComponent=!0}}]);