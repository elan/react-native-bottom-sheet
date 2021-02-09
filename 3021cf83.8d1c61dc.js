(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(89)),o=a(92),c=a(95),b={id:"getting-started",title:"Getting Started",description:"A performant interactive bottom sheet with fully configurable options \ud83d\ude80",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",hide_title:!0,slug:"/",hide_table_of_contents:!0},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"A performant interactive bottom sheet with fully configurable options \ud83d\ude80",source:"@site/docs/getting-started.mdx",slug:"/",permalink:"/react-native-bottom-sheet/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.mdx",version:"current",sidebar:"packages",next:{title:"Usage",permalink:"/react-native-bottom-sheet/usage"}},l=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[{value:"Version 2",id:"version-2",children:[]},{value:"Version 3",id:"version-3",children:[]}]},{value:"Built With \u2764\ufe0f",id:"built-with-\ufe0f",children:[]},{value:"Liked the library? \ud83d\ude07",id:"liked-the-library-",children:[]}],p={rightToc:l};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"react-native-bottom-sheet"},"React Native Bottom Sheet"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/package-json/v/gorhom/react-native-bottom-sheet/master?label=Reanimated%20v1&style=flat-square",alt:"Reanimated v1 version"})))," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/package-json/v/gorhom/react-native-bottom-sheet/v3?label=Reanimated%20v2&style=flat-square",alt:"Reanimated v2 version"})))," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/l/@gorhom/bottom-sheet?style=flat-square",alt:"npm"})))," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@gorhom/bottom-sheet"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/types-included-blue?style=flat-square",alt:"npm"})))," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"runs with expo"})))),Object(r.b)("p",null,"A performant interactive bottom sheet with fully configurable options \ud83d\ude80"),Object(r.b)(c.a,{title:"React Native Bottom Sheet",url:Object(o.a)("video/bottom-sheet-preview.mp4"),img:Object(o.a)("img/bottom-sheet-preview.gif"),mdxType:"Video"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Initially, this project was a cloned of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-scroll-bottom-sheet")," by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rgommezz"}),"@rgommezz")," \u2764\ufe0f. However, it is been fully re-written to add extra functionalities and simplify the approach.")),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83c\udf1f Modal presentation view, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"./modal"}),"Bottom Sheet Modal"),"."),Object(r.b)("li",{parentName:"ul"},"Smooth gesture interactions & snapping animations."),Object(r.b)("li",{parentName:"ul"},"Support ",Object(r.b)("inlineCode",{parentName:"li"},"FlatList"),", ",Object(r.b)("inlineCode",{parentName:"li"},"SectionList"),", ",Object(r.b)("inlineCode",{parentName:"li"},"ScrollView")," & ",Object(r.b)("inlineCode",{parentName:"li"},"View")," scrolling interactions, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"./scrollables"}),"read more"),"."),Object(r.b)("li",{parentName:"ul"},"Support ",Object(r.b)("inlineCode",{parentName:"li"},"React Navigation")," Integration, ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"./react-navigation-integration"}),"read more"),"."),Object(r.b)("li",{parentName:"ul"},"Compatible with ",Object(r.b)("inlineCode",{parentName:"li"},"Reanimated v1 & v2"),"."),Object(r.b)("li",{parentName:"ul"},"Compatible with ",Object(r.b)("inlineCode",{parentName:"li"},"Expo"),"."),Object(r.b)("li",{parentName:"ul"},"Accessibility support."),Object(r.b)("li",{parentName:"ul"},"Written in ",Object(r.b)("inlineCode",{parentName:"li"},"TypeScript"),".")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"This library provides two versions that are align with ",Object(r.b)("inlineCode",{parentName:"p"},"Reanimated v1 & v2")),Object(r.b)("h3",{id:"version-2"},"Version 2"),Object(r.b)("p",null,"This version is written with ",Object(r.b)("inlineCode",{parentName:"p"},"Reanimated v1")," & compatible with ",Object(r.b)("inlineCode",{parentName:"p"},"Reanimated v2"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @gorhom/bottom-sheet@^2\n")),Object(r.b)("h4",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated react-native-gesture-handler\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"React Native Gesture Handler")," needs extra steps to finalize its installation, please follow their ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),"installation instructions"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"React Native Reanimated v1")," needs extra steps to finalize its installation, please follow their ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/getting_started"}),"installation instructions"),"."))),Object(r.b)("h3",{id:"version-3"},"Version 3"),Object(r.b)("p",null,"This version is written with ",Object(r.b)("inlineCode",{parentName:"p"},"Reanimated v2")," and ",Object(r.b)("strong",{parentName:"p"},"CAN NOT RUN")," with ",Object(r.b)("inlineCode",{parentName:"p"},"Reanimated v1"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @gorhom/bottom-sheet@^3\n")),Object(r.b)("h4",{id:"dependencies-1"},"Dependencies"),Object(r.b)("p",null,"This library needs these dependencies to be installed in your project before you can use it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated@2.0.0-rc.1 react-native-gesture-handler\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"React Native Gesture Handler")," needs extra steps to finalize its installation, please follow their ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),"installation instructions"),"."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"React Native Reanimated v2")," needs extra steps to finalize its installation, please follow their ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/installation"}),"installation instructions"),"."))),Object(r.b)("h2",{id:"built-with-\ufe0f"},"Built With \u2764\ufe0f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-reanimated"}),"react-native-reanimated")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),"react-native-gesture-handler")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wcandillon/react-native-redash"}),"react-native-redash")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/bob"}),"@react-native-community/bob"))),Object(r.b)("h2",{id:"liked-the-library-"},"Liked the library? \ud83d\ude07"),Object(r.b)("a",{rel:"nofollow",href:"https://www.buymeacoffee.com/gorhom",target:"_blank"},Object(r.b)("img",{src:"https://cdn.buymeacoffee.com/buttons/default-red.png",alt:"Buy Me A Coffee",height:"50"})))}m.isMDXComponent=!0},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return a?i.a.createElement(u,c(c({ref:t},s),{},{components:a})):i.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},92:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a(22),i=a(91);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(n)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+o:o}(t,e,a,n)}}function o(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),i=a.n(n);var r=({title:e,url:t})=>i.a.createElement("video",{muted:!0,loop:!0,autoPlay:!0,controls:!1,playsInline:!0,title:e,width:"100%"},i.a.createElement("source",{src:t,type:"video/mp4"}))}}]);