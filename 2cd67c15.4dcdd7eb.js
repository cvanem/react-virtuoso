(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(137)),c={id:"customize-structure",title:"Customize Rendering",sidebar_label:"Customize Rendering",slug:"/customize-structure/"},a={unversionedId:"customize-structure",id:"customize-structure",isDocsHomePage:!1,title:"Customize Rendering",description:'The React Virtuoso component renders as several nested DIV elements. The default values in the component prop entries are "div".',source:"@site/docs/customize-structure.md",slug:"/customize-structure/",permalink:"/customize-structure/",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/customize-structure.md",version:"current",sidebar_label:"Customize Rendering",sidebar:"someSidebar",previous:{title:"Customize Root Element",permalink:"/custom-scroll-container/"},next:{title:"Grid with Responsive Columns",permalink:"/grid-responsive-columns/"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React Virtuoso component renders as several nested ",Object(i.b)("inlineCode",{parentName:"p"},"DIV")," elements. The default values in the ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop entries are ",Object(i.b)("inlineCode",{parentName:"p"},'"div"'),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-txt"}),"components.Scroller (div)\n  |-viewport (div)  \n    |-header(div* headerFooterTag)\n      |-components.Header\n    |-components.List (div)\n      |-components.Group (div+)\n        |-groupItemContent\n      |-components.Item (div+)\n        |-itemContent\n      |-components.EmptyPlaceholder\n    |-footer(div*, headerFooterTag)\n      |-components.Footer\n    |-components.List (Top Items) (div)\n      |-components.Item (div+)\n        |-itemContent\n      |-components.Group (div+)\n        |-groupItemContent\n    \n")),Object(i.b)("p",null,"To change what's rendered, pass your component to the specified key in ",Object(i.b)("inlineCode",{parentName:"p"},"components"),". Notice that the ",Object(i.b)("inlineCode",{parentName:"p"},"List")," component needs to accept and pass its ref to the actual DOM element.\nThe example below adds borders to each customizable element."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"() => {\n  const Item = styled.div`border: 2px solid red`\n  const ListEl = styled.div`border: 1px solid blue`\n  const Header = () => 'Header'\n  const Footer = () => 'Footer'\n\n  const List = React.forwardRef((props, ref) => {\n    return <ListEl {...props} ref={ref} />\n  })\n\n  return <Virtuoso\n    components={{ Item, List, Header, Footer }}\n    totalCount={30}\n    itemContent={(idx) => `Item ${idx}`}\n  />\n}\n")))}p.isMDXComponent=!0}}]);