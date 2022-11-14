(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4373:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(3366),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7462),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),clsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(6010),_mui_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4780),_mui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1796),_styles_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1719),_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8884),_dividerClasses__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5741),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5893);let _excluded=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],useUtilityClasses=ownerState=>{let{absolute,children,classes,flexItem,light,orientation,textAlign,variant}=ownerState;return(0,_mui_base__WEBPACK_IMPORTED_MODULE_2__.Z)({root:["root",absolute&&"absolute",variant,light&&"light","vertical"===orientation&&"vertical",flexItem&&"flexItem",children&&"withChildren",children&&"vertical"===orientation&&"withChildrenVertical","right"===textAlign&&"vertical"!==orientation&&"textAlignRight","left"===textAlign&&"vertical"!==orientation&&"textAlignLeft"],wrapper:["wrapper","vertical"===orientation&&"wrapperVertical"]},_dividerClasses__WEBPACK_IMPORTED_MODULE_3__.V,classes)},DividerRoot=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(props,styles){let{ownerState}=props;return[styles.root,ownerState.absolute&&styles.absolute,styles[ownerState.variant],ownerState.light&&styles.light,"vertical"===ownerState.orientation&&styles.vertical,ownerState.flexItem&&styles.flexItem,ownerState.children&&styles.withChildren,ownerState.children&&"vertical"===ownerState.orientation&&styles.withChildrenVertical,"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignRight,"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&styles.textAlignLeft]}})(({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(theme.vars||theme).palette.divider,borderBottomWidth:"thin"},ownerState.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},ownerState.light&&{borderColor:theme.vars?`rgba(${theme.vars.palette.dividerChannel} / 0.08)`:(0,_mui_system__WEBPACK_IMPORTED_MODULE_6__.Fq)(theme.palette.divider,.08)},"inset"===ownerState.variant&&{marginLeft:72},"middle"===ownerState.variant&&"horizontal"===ownerState.orientation&&{marginLeft:theme.spacing(2),marginRight:theme.spacing(2)},"middle"===ownerState.variant&&"vertical"===ownerState.orientation&&{marginTop:theme.spacing(1),marginBottom:theme.spacing(1)},"vertical"===ownerState.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},ownerState.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(theme.vars||theme).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},ownerState.children&&"vertical"===ownerState.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(theme.vars||theme).palette.divider}`,transform:"translateX(0%)"}}),({ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},"right"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===ownerState.textAlign&&"vertical"!==ownerState.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),DividerWrapper=(0,_styles_styled__WEBPACK_IMPORTED_MODULE_4__.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(props,styles){let{ownerState}=props;return[styles.wrapper,"vertical"===ownerState.orientation&&styles.wrapperVertical]}})(({theme,ownerState})=>(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({display:"inline-block",paddingLeft:`calc(${theme.spacing(1)} * 1.2)`,paddingRight:`calc(${theme.spacing(1)} * 1.2)`},"vertical"===ownerState.orientation&&{paddingTop:`calc(${theme.spacing(1)} * 1.2)`,paddingBottom:`calc(${theme.spacing(1)} * 1.2)`})),Divider=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function(inProps,ref){let props=(0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_7__.Z)({props:inProps,name:"MuiDivider"}),{absolute=!1,children,className,component=children?"div":"hr",flexItem=!1,light=!1,orientation="horizontal",role="hr"!==component?"separator":void 0,textAlign="center",variant="fullWidth"}=props,other=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_8__.Z)(props,_excluded),ownerState=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{absolute,component,flexItem,light,orientation,role,textAlign,variant}),classes=useUtilityClasses(ownerState);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerRoot,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({as:component,className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__.Z)(classes.root,className),role:role,ref:ref,ownerState:ownerState},other,{children:children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DividerWrapper,{className:classes.wrapper,ownerState:ownerState,children:children}):null}))});__webpack_exports__.Z=Divider},9212:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return __webpack_require__(1473)}])},9779:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PageHead}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var next_head__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);function PageHead(param){let{title,description}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_2___default(),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title},"title"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:title",content:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:description",content:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"description",content:description})]})}},2866:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PageTitle}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9630),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4373);function PageTitle(param){let{title}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"h1",sx:{textAlign:"center",mb:8},children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{mt:8,mb:8}})]})}},1473:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return About}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2866),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8346),_components_Paragraph__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5894),next_link__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1664),next_link__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__),_components_PageHead__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9779);function About(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PageHead__WEBPACK_IMPORTED_MODULE_5__.Z,{title:"About Axel Goblet | ML engineer @ BigData Republic",description:"Axel Goblet is a machine learning engineer and consultant at BigData Republic. Learn more about the projects he has done and check out his content."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__.Z,{title:"About"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Paragraph__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"My name is Axel Goblet. I am a machine learning engineer at BigData Republic. My passion for machine learning engineering was born at Mediaan. I did an extensive internship there during my Bachelor's. While working on software engineering and data science projects for customers, I discovered that a machine learning model alone does not provide any value. A model only comes alive once it is integrated with client systems that can actually leverage its power. I loved end-to-end machine learning projects, where I develop a model and then integrate it with the customer's cloud services. After my internship, I continued working at Mediaan to gain more industry experience while doing my Master's."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Paragraph__WEBPACK_IMPORTED_MODULE_3__.Z,{children:["After graduating from Maastricht University in 2018, I joined BigData Republic. I found a great employer to continue my growth as a machine learning engineer. The challenging customer projects and great colleagues brought my knowledge to the current level. Aside from helping my current customer bol.com, I coach colleagues and help with internal and external knowledge sharing. I love researching and working on MLOps topics. Check out my"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4___default(),{href:"/content",legacyBehavior:!0,passHref:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{children:"content"})})," ","page if you are interested in my work."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Paragraph__WEBPACK_IMPORTED_MODULE_3__.Z,{gutterBottom:!1,children:"I spend much of my free time outside enjoying nature. I love hiking through the beautiful area around my hometown Valkenburg. When the weather allows it, you can find me on the water windsurfing. I also love meeting up with friends for board games. My favourite game? Probably Terra Mystica."})]})}},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=9212)}),_N_E=__webpack_require__.O()}]);