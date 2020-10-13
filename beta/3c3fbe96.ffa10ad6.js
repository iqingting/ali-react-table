(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{121:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,s=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?a.a.createElement(s,c(c({ref:n},i),{},{components:t})):a.a.createElement(s,c({ref:n},i))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),l=(t(0),t(121)),o={id:"utils",title:"\u901a\u7528\u5de5\u5177\u51fd\u6570"},c={unversionedId:"tools/utils",id:"tools/utils",isDocsHomePage:!1,title:"\u901a\u7528\u5de5\u5177\u51fd\u6570",description:"ali-react-table \u5bfc\u51fa\u7684\u901a\u7528\u5de5\u5177\u51fd\u6570",source:"@site/docs/tools/utils.mdx",slug:"/tools/utils",permalink:"/beta/docs/tools/utils",editUrl:"https://github.com/alibaba/ali-react-table/edit/dev/packages/website/docs/tools/utils.mdx",version:"current",sidebar:"sidebar",previous:{title:"proto",permalink:"/beta/docs/tools/proto"},next:{title:"\u4ea4\u53c9\u8868",permalink:"/beta/docs/pivot/cross-table"}},b=[{value:"<code>applyTransforms</code>",id:"applytransforms",children:[]},{value:"<code>buildTree</code>",id:"buildtree",children:[]},{value:"<code>collectNodes</code>",id:"collectnodes",children:[]},{value:"<code>exportTableAsExcel</code>",id:"exporttableasexcel",children:[]},{value:"<code>getTreeDepth</code>",id:"gettreedepth",children:[]},{value:"<code>groupBy</code>",id:"groupby",children:[]},{value:"<code>isLeafNode</code>",id:"isleafnode",children:[]},{value:"<code>layeredSort</code>",id:"layeredsort",children:[]},{value:"<code>mergeCellProps</code>",id:"mergecellprops",children:[]},{value:"<code>proto</code>",id:"proto",children:[]},{value:"<code>smartCompare</code>",id:"smartcompare",children:[]},{value:"<code>traverseColumn</code>",id:"traversecolumn",children:[]}],i={rightToc:b};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"ali-react-table")," \u5bfc\u51fa\u7684\u901a\u7528\u5de5\u5177\u51fd\u6570"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"applytransforms"},Object(l.b)("inlineCode",{parentName:"h3"},"applyTransforms")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function applyTransforms<T>(input: T, ...transforms: Transform<T>[]): T")),Object(l.b)("p",null,"\u4ee5 input \u4f5c\u4e3a\u8f93\u5165\uff0c\u6309\u5e8f\u4f7f\u7528 transform\u3002transform \u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7eaf\u51fd\u6570\uff0ctransform \u7684\u53c2\u6570\u7c7b\u578b\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\u76f8\u540c"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"applyTransform(input, f1, f2, f3)")," \u7b49\u4ef7\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"f3(f2(f1(input)))"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// \u76f8\u5173\u6e90\u7801\u53c2\u8003\ntype Transform<T> = (input: T) => T\n\nfunction applyTransforms<T>(input: T, ...transforms: Transform<T>[]) {\n  return transforms.reduce((v, fn) => fn(v), input)\n}\n")),Object(l.b)("h3",{id:"buildtree"},Object(l.b)("inlineCode",{parentName:"h3"},"buildTree")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function buildTree<T>(idProp: string, parentIdProp: string, items: T[]): WithChildren<T>[]")),Object(l.b)("p",null,"\u6839\u636e ",Object(l.b)("inlineCode",{parentName:"p"},"idProp")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"parentIdProp")," \u4ece",Object(l.b)("strong",{parentName:"p"},"\u5e73\u94fa\u7684\u5bf9\u8c61\u6570\u7ec4"),"\u4e2d\u6784\u5efa\u5bf9\u5e94\u7684",Object(l.b)("strong",{parentName:"p"},"\u6811"),"\uff1b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5f53 ",Object(l.b)("inlineCode",{parentName:"li"},"A[parentIdProp] === B[idProp]")," \u65f6\uff0c\u5bf9\u8c61 A \u4f1a\u88ab\u79fb\u52a8\u5230\u5bf9\u8c61 B \u7684 children \u5b57\u6bb5\u4e2d\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5f53\u4e00\u4e2a\u5bf9\u8c61\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"parentIdProp")," \u4e0d\u4e0e\u5176\u4ed6\u5bf9\u8c61\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"idProp")," \u5b57\u6bb5\u76f8\u7b49\u65f6\uff0c\u8be5\u5bf9\u8c61\u88ab\u4f5c\u4e3a\u6811\u7684\u9876\u5c42\u8282\u70b9\u3002")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const array = [\n  { id: 'node-1', parent: 'root', name: '\u6211\u662f\u8282\u70b91' },\n  { id: 'node-2', parent: 'root', name: '\u6211\u662f\u8282\u70b92' },\n  { id: 'node-3', parent: 'node-2', name: '\u6211\u662f\u8282\u70b93' },\n  { id: 'node-4', parent: 'node-2', name: '\u6211\u662f\u8282\u70b94' },\n  { id: 'node-5', parent: 'node-4', name: '\u6211\u662f\u8282\u70b95' },\n]\n\nconst tree = buildTree('id', 'parent', array)\n\nexpect(tree).toEqual([\n  { id: 'node-1', parent: 'root', name: '\u6211\u662f\u8282\u70b91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662f\u8282\u70b92',\n    children: [\n      { id: 'node-3', parent: 'node-2', name: '\u6211\u662f\u8282\u70b93' },\n      {\n        id: 'node-4',\n        parent: 'node-2',\n        name: '\u6211\u662f\u8282\u70b94',\n        children: [{ id: 'node-5', parent: 'node-3', name: '\u6211\u662f\u8282\u70b95' }],\n      },\n    ],\n  },\n])\n")),Object(l.b)("h3",{id:"collectnodes"},Object(l.b)("inlineCode",{parentName:"h3"},"collectNodes")),Object(l.b)("p",null,"\u6536\u96c6\u4e00\u68f5\u6811\u4e0a\u7684\u8282\u70b9"),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function collectNodes<T extends AbstractTreeNode>(nodes: T[], order: 'pre' | 'post' | 'leaf-only'): T[]")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"pre: \u524d\u5e8f\u904d\u5386"),Object(l.b)("li",{parentName:"ul"},"post: \u540e\u7eed\u904d\u5386"),Object(l.b)("li",{parentName:"ul"},"leaf-only: \u4ec5\u6536\u96c6\u53f6\u5b50\u8282\u70b9")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const tree = [\n  { id: 'node-1', parent: 'root', name: '\u6211\u662f\u8282\u70b91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662f\u8282\u70b92',\n    children: [\n      { id: 'node-3', parent: 'node-2', name: '\u6211\u662f\u8282\u70b93' },\n      {\n        id: 'node-4',\n        parent: 'node-2',\n        name: '\u6211\u662f\u8282\u70b94',\n        children: [{ id: 'node-5', parent: 'node-3', name: '\u6211\u662f\u8282\u70b95' }],\n      },\n    ],\n  },\n]\n\nconst result = collectNodes(tree, 'pre')\n\nexpect(result).toEqual([\n  { id: 'node-1', parent: 'root', name: '\u6211\u662f\u8282\u70b91' },\n  {\n    id: 'node-2',\n    parent: 'root',\n    name: '\u6211\u662f\u8282\u70b92',\n    children: [\n      { id: 'node-3', ...others },\n      { id: 'node-4', ...others },\n    ],\n  },\n  { id: 'node-3', parent: 'node-2', name: '\u6211\u662f\u8282\u70b93' },\n  { id: 'node-4', parent: 'node-2', name: '\u6211\u662f\u8282\u70b94', ...others },\n  { id: 'node-5', parent: 'node-3', name: '\u6211\u662f\u8282\u70b95' },\n])\n")),Object(l.b)("h3",{id:"exporttableasexcel"},Object(l.b)("inlineCode",{parentName:"h3"},"exportTableAsExcel")),Object(l.b)("p",null,"\u5c06\u8868\u683c\u6570\u636e\u5bfc\u51fa\u4e3a Excel \u6587\u4ef6\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"function exportTableAsExcel(\n  // \u4e00\u822c\u60c5\u51b5\u4e0b\u4e3a xlsxPackage \u53c2\u6570\u4f20\u5165 require('xlsx') \u5373\u53ef\n  xlsxPackage: typeof XLSX_NS,\n  dataSource: any[],\n  columns: ArtColumn[],\n  filename: string,\n): void\n")),Object(l.b)("p",null,"\u300c\u8868\u683c\u5bfc\u51fa\u300d\u4e0e\u300c\u8868\u683c\u6e32\u67d3\u300d\u7684\u4e0d\u540c\u70b9\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5355\u5143\u683c\u5185\u5bb9\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BaseTable \u6e32\u67d3\u65f6\uff0c\u4f1a\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"column.render")," \u6765\u6e32\u67d3\u5355\u5143\u683c\u4e2d\u7684\u5185\u5bb9"),Object(l.b)("li",{parentName:"ul"},"exportTableAsExcel \u53ea\u4f1a\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"column.code")," \u6216\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"column.getValue")," \u6765\u83b7\u53d6\u8868\u683c\u4e2d\u6bcf\u4e2a\u5355\u5143\u683c\u7684\u5185\u5bb9"))),Object(l.b)("li",{parentName:"ul"},"\u5217\u9690\u85cf\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f53 ",Object(l.b)("inlineCode",{parentName:"li"},"column.hidden")," \u4e3a true \u65f6\uff0cBaseTable \u4f1a\u9690\u85cf\u76f8\u5e94\u7684\u5217"),Object(l.b)("li",{parentName:"ul"},"exportTableAsExcel \u603b\u662f\u4f1a\u5bfc\u51fa\u6240\u6709\u7684\u5217"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u8868\u683c\u7279\u6027\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"BaseTable \u652f\u6301\u6240\u6709\u8868\u683c\u7279\u6027"),Object(l.b)("li",{parentName:"ul"},"\u8868\u683c\u5bfc\u51fa\u4ec5\u652f\u6301\u4e00\u90e8\u5206\u8868\u683c\u7279\u6027\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 \u8868\u5934\u5206\u7ec4"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 \u5355\u5143\u683c\u5408\u5e76"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u4e0d\u652f\u6301")," \u5355\u5143\u683c\u6837\u5f0f")))))),Object(l.b)("h3",{id:"gettreedepth"},Object(l.b)("inlineCode",{parentName:"h3"},"getTreeDepth")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function getTreeDepth(nodes: AbstractTreeNode[]): number")),Object(l.b)("p",null,"\u83b7\u53d6\u4e00\u68f5\u6811\u7684\u9ad8\u5ea6/\u6df1\u5ea6"),Object(l.b)("h3",{id:"groupby"},Object(l.b)("inlineCode",{parentName:"h3"},"groupBy")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function groupBy<T, K extends string>(list: T[], iteratee: (t: T) => K): { [key in K]: T[] }")),Object(l.b)("p",null,"\u5bf9 list \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u5206\u7ec4\uff0citeratee \u7684\u8fd4\u56de\u503c\u76f8\u540c\u7684\u5143\u7d20\u5c06\u88ab\u5206\u5230\u540c\u4e00\u4e2a\u5206\u7ec4\u3002"),Object(l.b)("h3",{id:"isleafnode"},Object(l.b)("inlineCode",{parentName:"h3"},"isLeafNode")),Object(l.b)("p",null,"\u5224\u65ad\u4e00\u4e2a\u8282\u70b9\u662f\u5426\u4e3a\u53f6\u5b50\u8282\u70b9"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// \u76f8\u5173\u6e90\u7801\u53c2\u8003\ninterface AbstractTreeNode {\n  children?: AbstractTreeNode[]\n}\n\nfunction isLeafNode<N extends AbstractTreeNode>(node: N) {\n  return node.children == null || node.children.length === 0\n}\n")),Object(l.b)("h3",{id:"layeredsort"},Object(l.b)("inlineCode",{parentName:"h3"},"layeredSort")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function layeredSort<T extends AbstractTreeNode>(array: T[], compare: (x: T, y: T) => number): T[]")),Object(l.b)("p",null,"\u5bf9\u6811\u72b6\u7ed3\u6784\u7684\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3002"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"layeredSort")," \u4e0e ",Object(l.b)("inlineCode",{parentName:"p"},"Array#sort")," \u7c7b\u4f3c\u3002\u4f46 layeredSort \u662f\u4e00\u4e2a\u9012\u5f52\u7684\u8fc7\u7a0b\uff0c\u9488\u5bf9\u6811\u4e0a\u7684\u6bcf\u4e00\u4e2a\u7236\u8282\u70b9\uff0c\u8be5\u51fd\u6570\u90fd\u4f1a\u5bf9\u5176\u5b50\u8282\u70b9\u6570\u7ec4\uff08children) \u8fdb\u884c\u6392\u5e8f."),Object(l.b)("h3",{id:"mergecellprops"},Object(l.b)("inlineCode",{parentName:"h3"},"mergeCellProps")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"function mergeCellProps(base: CellProps, extra: CellProps): CellProps")),Object(l.b)("p",null,"\u5408\u5e76\u4e24\u4e2a cellProps\uff08\u5355\u5143\u683c\u5c5e\u6027\uff09\u5bf9\u8c61\uff0c\u8fd4\u56de\u4e00\u4e2a\u5408\u5e76\u540e\u7684\u5168\u65b0\u5bf9\u8c61"),Object(l.b)("p",null,"mergeCellProps \u4f1a\u6309\u7167\u4ee5\u4e0b\u89c4\u5219\u6765\u5408\u5e76\u4e24\u4e2a\u5bf9\u8c61\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e \u6570\u5b57\u3001\u5b57\u7b26\u4e32\u3001\u5e03\u5c14\u503c\u7c7b\u578b\u7684\u5b57\u6bb5\uff0cextra \u4e2d\u7684\u5b57\u6bb5\u503c\u5c06\u76f4\u63a5\u8986\u76d6 base \u4e2d\u7684\u5b57\u6bb5\u503c\uff08className \u662f\u4e2a\u7279\u4f8b\uff0c\u4f1a\u8fdb\u884c\u5b57\u7b26\u4e32\u62fc\u63a5\uff09",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f\u5728 v1.2 \u4e4b\u524d className \u4f1a\u88ab\u8986\u76d6"))),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u51fd\u6570/\u65b9\u6cd5\u7c7b\u578b\u7684\u5b57\u6bb5\uff08\u5bf9\u5e94\u5355\u5143\u683c\u7684\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\uff09\uff0cmergeCellProps \u5c06\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u65b0\u51fd\u6570\u5c06\u6309\u5e8f\u8c03\u7528 base \u548c extra \u4e2d\u7684\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u666e\u901a\u5bf9\u8c61\u7c7b\u578b\u7684\u5b57\u6bb5\uff08\u4e00\u822c\u5bf9\u5e94\u5355\u5143\u683c\u7684\u6837\u5f0f\uff09\uff0cmergeCellProps \u5c06\u8c03\u7528 lodash.merge \u6765\u5408\u5e76\u5b57\u6bb5\u503c")),Object(l.b)("h3",{id:"proto"},Object(l.b)("inlineCode",{parentName:"h3"},"proto")),Object(l.b)("p",null,"\u8be6\u89c1 ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"proto"}),"proto")),Object(l.b)("h3",{id:"smartcompare"},Object(l.b)("inlineCode",{parentName:"h3"},"smartCompare")),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"(x: any, y: any) => number")),Object(l.b)("p",null,"\u6bd4\u8f83\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001null \u6216\u662f\u6570\u7ec4\uff0c\u8fd4\u56de\u4e00\u4e2a\u8d1f\u6570\u8868\u793a\u300cx \u5c0f\u4e8e y\u300d\uff0c\u8fd4\u56de 0 \u8868\u793a\u300cx \u7b49\u4e8e y\u300d\uff0c\u8fd4\u56de\u4e00\u4e2a\u6b63\u6570\u8868\u793a\u300cx \u5927\u4e8e y\u300d\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5c06\u6bd4\u8f83\u4e24\u8005\u7684\u5b57\u5178\u5e8f\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u6570\u5b57\u5c06\u6bd4\u8f83\u4e24\u8005\u5927\u5c0f\uff1b"),Object(l.b)("li",{parentName:"ul"},"null \u503c\u5728\u6bd4\u8f83\u65f6\u603b\u662f\u5c0f\u4e8e\u53e6\u4e00\u4e2a\u503c\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6570\u7ec4\u6765\u8bf4\uff0c\u5c06\u9010\u4e2a\u6bd4\u8f83\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u7b2c\u4e00\u4e2a\u4e0d\u76f8\u7b49\u7684\u6bd4\u8f83\u7ed3\u679c\u5c06\u4f5c\u4e3a\u6574\u4e2a\u6570\u7ec4\u7684\u6bd4\u8f83\u7ed3\u679c",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6570\u7ec4\u7684\u6bd4\u8f83\u53ef\u53c2\u8003 python \u4e2d\u7684\u5143\u7956\u6bd4\u8f83\uff1a",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/5292303/how-does-tuple-comparison-work-in-python"}),"https://stackoverflow.com/questions/5292303/how-does-tuple-comparison-work-in-python"))))),Object(l.b)("h3",{id:"traversecolumn"},Object(l.b)("inlineCode",{parentName:"h3"},"traverseColumn")),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"deprecated")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"\u8be5 API \u5df2\u7ecf\u8fc7\u65f6\uff0c\u8bf7\u4f7f\u7528 xxx"))),Object(l.b)("p",null,"API: ",Object(l.b)("inlineCode",{parentName:"p"},"(fn: (column, ctx) => NormalizeAsArrayInput<ArtColumn>) => TableTransform")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"traverseColumn")," \u65b9\u6cd5\u53ef\u7528\u6765\u7b80\u5316\u300c\u521b\u5efa\u9488\u5bf9\u5217\u7684 transform\u300d\u3002\u63d0\u4f9b\u4e00\u4e2a\u9488\u5bf9\u5355\u4e2a column \u914d\u7f6e\u7684\u8f6c\u6362\u51fd\u6570\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u751f\u6210\u5bf9\u5e94\u7684 TableTransform\u3002fn \u7684\u8868\u73b0\u5982\u4e0b\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"fn \u88ab\u8c03\u7528\u65f6\u7684\u53c2\u6570\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"column \u53c2\u6570\uff1a\u8868\u683c\u7684\u5217\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"ctx\uff1a\u4e0e column \u5bf9\u5e94\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ctx.range\uff1a\u5217\u7684\u4e0b\u6807\uff0c\u5305\u542b ctx.range.start, ctx.range.end \u4e24\u4e2a\u4e0b\u6807"),Object(l.b)("li",{parentName:"ul"},"ctx.dataSource\uff1a\u8868\u683c\u7684\u6570\u636e\u6e90"))))),Object(l.b)("li",{parentName:"ul"},"fn \u7684\u8fd4\u56de\u7ed3\u679c\uff1a",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"li"},"null")," \u65f6\uff0c\u5bf9\u5e94\u7684\u5217\u5c06\u88ab\u79fb\u9664\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u8fd4\u56de ",Object(l.b)("inlineCode",{parentName:"li"},"ArtColumn")," \u6216\u4e00\u4e2a\u6570\u7ec4\u65f6\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u4f1a\u66ff\u6362\u5bf9\u5e94\u7684\u5217\u3002")))))}p.isMDXComponent=!0}}]);