(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,O=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),l=(n(0),n(121)),o={id:"advanced-usage",title:"\u8fdb\u9636\u7528\u6cd5"},i={unversionedId:"table/advanced-usage",id:"table/advanced-usage",isDocsHomePage:!1,title:"\u8fdb\u9636\u7528\u6cd5",description:"\u865a\u62df\u6eda\u52a8",source:"@site/docs/table/advanced-usage.mdx",slug:"/table/advanced-usage",permalink:"/beta/docs/table/advanced-usage",editUrl:"https://github.com/alibaba/ali-react-table/edit/dev/packages/website/docs/table/advanced-usage.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u8868\u683c\u793a\u4f8b",permalink:"/beta/docs/table/examples"},next:{title:"\u8868\u683c\u4e3b\u9898",permalink:"/beta/docs/table/theming"}},c=[{value:"\u865a\u62df\u6eda\u52a8",id:"\u865a\u62df\u6eda\u52a8",children:[]},{value:"\u9501\u5217\u4e0e\u5d4c\u5957\u7684\u5217\u7ed3\u6784",id:"\u9501\u5217\u4e0e\u5d4c\u5957\u7684\u5217\u7ed3\u6784",children:[]},{value:"todo getValue \u4e0e render",id:"todo-getvalue-\u4e0e-render",children:[]},{value:"todo \u8868\u683c\u6837\u5f0f\u8986\u76d6",id:"todo-\u8868\u683c\u6837\u5f0f\u8986\u76d6",children:[]},{value:"todo components \u66ff\u6362",id:"todo-components-\u66ff\u6362",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u865a\u62df\u6eda\u52a8"},"\u865a\u62df\u6eda\u52a8"),Object(l.b)("p",null,"\u6570\u636e\u91cf\u8f83\u5927\u65f6\uff0c\u8868\u683c\u4f1a\u81ea\u52a8\u5f00\u542f\u865a\u62df\u6eda\u52a8\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8868\u683c\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"useVirtual")," \u5c5e\u6027\u6765\u8c03\u6574\u865a\u62df\u6eda\u52a8\u529f\u80fd\uff0c\u76ee\u524d ",Object(l.b)("inlineCode",{parentName:"p"},"useVirtual")," \u652f\u6301\u4ee5\u4e0b\u51e0\u4e2a\u503c\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'auto'")," \uff08\u9ed8\u8ba4\u503c\uff09\u8868\u793a\u6839\u636e\u8868\u683c\u7684\u884c\u6570\u6216\u5217\u6570\u81ea\u52a8\u8c03\u6574\u662f\u5426\u5f00\u542f\u865a\u62df\u6eda\u52a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u884c\u6570\u91cf\u8d85\u8fc7 100 \u65f6\uff0c\u81ea\u52a8\u5f00\u542f\u7eb5\u5411\u865a\u62df\u6eda\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u5217\u6570\u91cf\u8d85\u8fc7 100 \u65f6\uff0c\u81ea\u52a8\u5f00\u542f\u6a2a\u5411\u865a\u62df\u6eda\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u8868\u5934\u7684\u6a2a\u5411\u865a\u62df\u6eda\u52a8\u9ed8\u8ba4\u5173\u95ed"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"true")," \u5f00\u542f\u6240\u6709\u865a\u62df\u6eda\u52a8"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"false")," \u5173\u95ed\u6240\u6709\u865a\u62df\u6eda\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u5206\u522b\u6307\u5b9a \u6a2a\u5411/\u7eb5\u5411/\u8868\u5934 \u662f\u5426\u5f00\u542f\u865a\u62df\u6eda\u52a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5bf9\u8c61\u7684\u7ed3\u6784\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"{ horizontal?: boolean | 'auto', vertical?: boolean | 'auto', header?: boolean | 'auto' }"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u865a\u62df\u6eda\u52a8\u6ce8\u610f\u4e8b\u9879\uff1a")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6c34\u5e73\u65b9\u5411\u7684\u865a\u62df\u6eda\u52a8 \u8981\u6c42\u300c\u6240\u6709\u7684\u5217\u90fd\u6709\u4e00\u4e2a\u6307\u5b9a\u7684\u5bbd\u5ea6\u300d\uff0c\u63a8\u8350\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"defaultColumnWidth"),"\uff0c\u907f\u514d\u90e8\u5206\u5217\u7f3a\u5931\u5bbd\u5ea6"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u8868\u683c\u7684\u9ad8\u5ea6\u6216\u6700\u5927\u9ad8\u5ea6\uff0c\u6ce8\u610f\u8981",Object(l.b)("strong",{parentName:"li"},"\u5c06 height/maxHeight \u8bbe\u7f6e\u5728\u8868\u683c\u4e0a"),"\uff0c\u4e0d\u8981\u8bbe\u7f6e\u5728\u7236\u8282\u70b9\u4e0a"),Object(l.b)("li",{parentName:"ul"},"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"li"},"style.overflow = 'auto'")," \u65f6\uff0c\u5fc5\u987b\u4e3a\u8868\u683c\u8bbe\u7f6e\u9ad8\u5ea6\u6216\u6700\u5927\u9ad8\u5ea6\uff1b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6b64\u65f6\u8868\u683c\u7684\u5916\u5c42 div \u4f1a\u88ab\u8ba4\u4e3a\u662f\u8868\u683c\u6240\u5904\u7684 BFC\uff0c\u8be5 div \u7684\u9ad8\u5ea6\u5c06\u51b3\u5b9a\u8868\u683c\u6e32\u67d3\u591a\u5c11\u884c\uff0c\u6545\u8fd9\u4e2a div \u7684\u6700\u5927\u9ad8\u5ea6\u5fc5\u987b\u662f\u786e\u5b9a\u7684"))),Object(l.b)("li",{parentName:"ul"},"\u5728\u865a\u62df\u6eda\u52a8\u5f00\u542f\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u60f3\u8981\u8fdb\u884c\u5355\u5143\u683c\u5408\u5e76\uff0c\u5219\u8981\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"column.getSpanRect")," \u6765\u8fdb\u884c\u8bbe\u5b9a\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"column.getSpanRect")," \u8fd4\u56de\u4e00\u4e2a ",Object(l.b)("inlineCode",{parentName:"li"},"SpanRect")," \u7684\u5bf9\u8c61\u6765\u8868\u793a\u5bf9\u5e94\u5355\u5143\u6240\u5904\u7684\u5408\u5e76\u540e\u7684\u4f4d\u7f6e\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"SpanRect")," \u7684\u5177\u4f53\u7c7b\u578b\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"{ left: number, right: number, top: number, bottom: number }"),"\uff0c\u6ce8\u610f\u5176\u4e2d left/top \u662f inclusive \u7684\uff0cright/bottom \u662f exclusive \u7684\u3002")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"todo estimatedRowHeight")),Object(l.b)("h2",{id:"\u9501\u5217\u4e0e\u5d4c\u5957\u7684\u5217\u7ed3\u6784"},"\u9501\u5217\u4e0e\u5d4c\u5957\u7684\u5217\u7ed3\u6784"),Object(l.b)("p",null,"todo \u9501\u5217\u7684\u65b9\u5411\uff1a\u5de6\u4fa7\u9501\u5217 or \u53f3\u4fa7\u9501\u5217\uff1f"),Object(l.b)("p",null,"\u5728\u6709\u5217\u5d4c\u5957\u7684\u60c5\u51b5\u4e0b\uff08\u901a\u8fc7 column.children \u8bbe\u7f6e\u5217\u7684\u5b50\u8282\u70b9\uff0c\u5f62\u6210\u5217\u7684\u5d4c\u5957\u7ed3\u6784\uff09\uff0c\u9501\u5217\u5177\u6709\u4f20\u9012\u6027\uff0c\u4ece\u800c\u907f\u514d\u4e86\u9501\u5b9a\u5217\u4e0e\u975e\u9501\u5b9a\u5217\u51fa\u73b0\u5728\u540c\u4e00\u4e2a\u7236\u8282\u70b9\u4e0b\u7684\u60c5\u51b5\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u7236\u8282\u70b9\u8bbe\u7f6e\u4e86\u9501\u5217 lock=true\uff0c\u5219\u5176\u6240\u6709\u5b50\u8282\u70b9\u5c06\u81ea\u52a8\u88ab\u8bbe\u7f6e\u4e3a lock=true"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u8bbe\u7f6e\u4e86\u9501\u5217 lock=true\uff0c\u5219\u5176\u7236\u8282\u70b9\u548c\u6240\u6709\u7956\u5148\u8282\u70b9\u5c06\u88ab\u8bbe\u7f6e\u4e3a lock=true")),Object(l.b)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u6240\u6709\u7684\u5217\u90fd\u8bbe\u7f6e\u4e86 lock=true\uff0c\u5219\u6574\u4e2a\u8868\u683c\u7684\u9501\u5217\u5c06\u4e0d\u751f\u6548\u3002"),Object(l.b)("h2",{id:"todo-getvalue-\u4e0e-render"},"todo getValue \u4e0e render"),Object(l.b)("p",null,"todo \u4ecb\u7ecd\u4e00\u4e0b\u4e24\u8005\u7684\u5dee\u522b\uff0c\u8bf4\u660e\u4e24\u8005\u7684\u7528\u9014"),Object(l.b)("h2",{id:"todo-\u8868\u683c\u6837\u5f0f\u8986\u76d6"},"todo \u8868\u683c\u6837\u5f0f\u8986\u76d6"),Object(l.b)("p",null,"todo \u4ecb\u7ecd\u5982\u4f55\u8986\u76d6\u8868\u683c\u7684\u9ed8\u8ba4\u6837\u5f0f\uff0c\u4ecb\u7ecd --bgcolor, --hover-bgcolor, --highlight-bgcolor \u7684\u542b\u4e49\u4e0e\u4f5c\u7528"),Object(l.b)("h2",{id:"todo-components-\u66ff\u6362"},"todo components \u66ff\u6362"),Object(l.b)("p",null,"todo \u4ecb\u7ecd\u8868\u683c\u7684\u53ef\u5b9a\u5236\u80fd\u529b"))}u.isMDXComponent=!0}}]);