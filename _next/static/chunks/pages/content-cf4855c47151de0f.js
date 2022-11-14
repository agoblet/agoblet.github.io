(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{8672:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ZP:function(){return Masonry_Masonry}});var objectWithoutPropertiesLoose=__webpack_require__(3366),esm_extends=__webpack_require__(7462),composeClasses=__webpack_require__(4780),react_dom=__webpack_require__(3935),styled=__webpack_require__(1719),useThemeProps=__webpack_require__(8884),breakpoints=__webpack_require__(5408),esm_spacing=__webpack_require__(8700),deepmerge=__webpack_require__(9766),useForkRef=__webpack_require__(432),clsx_m=__webpack_require__(6010),react=__webpack_require__(7294),generateUtilityClass=__webpack_require__(4867);function getMasonryUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiMasonry",slot)}(0,__webpack_require__(1588).Z)("MuiMasonry",["root"]);var jsx_runtime=__webpack_require__(5893);let _excluded=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],parseToNumber=val=>Number(val.replace("px","")),lineBreakStyle={flexBasis:"100%",width:0,margin:0,padding:0},useUtilityClasses=ownerState=>{let{classes}=ownerState;return(0,composeClasses.Z)({root:["root"]},getMasonryUtilityClass,classes)},getStyle=({ownerState,theme})=>{let styles={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},stylesSSR={};if(ownerState.isSSR){let orderStyleSSR={},defaultSpacing=parseToNumber(theme.spacing(ownerState.defaultSpacing));for(let i=1;i<=ownerState.defaultColumns;i+=1)orderStyleSSR[`&:nth-of-type(${ownerState.defaultColumns}n+${i%ownerState.defaultColumns})`]={order:i};return stylesSSR.height=ownerState.defaultHeight,stylesSSR.margin=-(defaultSpacing/2),stylesSSR["& > *"]=(0,esm_extends.Z)({},styles["& > *"],orderStyleSSR,{margin:defaultSpacing/2,width:`calc(${(100/ownerState.defaultColumns).toFixed(2)}% - ${defaultSpacing}px)`}),(0,esm_extends.Z)({},styles,stylesSSR)}let spacingValues=(0,breakpoints.P$)({values:ownerState.spacing,breakpoints:theme.breakpoints.values}),transformer=(0,esm_spacing.hB)(theme),spacingStyleFromPropValue=propValue=>{let spacing;if(("string"!=typeof propValue||Number.isNaN(Number(propValue)))&&"number"!=typeof propValue)spacing=propValue;else{let themeSpacingValue=Number(propValue);spacing=(0,esm_spacing.NA)(transformer,themeSpacingValue)}return(0,esm_extends.Z)({margin:`calc(0px - (${spacing} / 2))`,"& > *":{margin:`calc(${spacing} / 2)`}},ownerState.maxColumnHeight&&{height:"number"==typeof spacing?Math.ceil(ownerState.maxColumnHeight+parseToNumber(spacing)):`calc(${ownerState.maxColumnHeight}px + ${spacing})`})};styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,spacingStyleFromPropValue));let columnValues=(0,breakpoints.P$)({values:ownerState.columns,breakpoints:theme.breakpoints.values}),columnStyleFromPropValue=propValue=>{let columnValue=Number(propValue),width=`${(100/columnValue).toFixed(2)}%`,spacing=("string"!=typeof spacingValues||Number.isNaN(Number(spacingValues)))&&"number"!=typeof spacingValues?"0px":(0,esm_spacing.NA)(transformer,Number(spacingValues));return{"& > *":{width:`calc(${width} - ${spacing})`}}};return styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},columnValues,columnStyleFromPropValue)),"object"==typeof spacingValues&&(styles=(0,deepmerge.Z)(styles,(0,breakpoints.k9)({theme},spacingValues,(propValue,breakpoint)=>{if(breakpoint){let themeSpacingValue=Number(propValue),lastBreakpoint=Object.keys(columnValues).pop(),spacing=(0,esm_spacing.NA)(transformer,themeSpacingValue),column="object"==typeof columnValues?columnValues[breakpoint]||columnValues[lastBreakpoint]:columnValues,width=`${(100/column).toFixed(2)}%`;return{"& > *":{width:`calc(${width} - ${spacing})`}}}return null}))),styles},MasonryRoot=(0,styled.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(props,styles)=>[styles.root]})(getStyle),Masonry=react.forwardRef(function(inProps,ref){let props=(0,useThemeProps.Z)({props:inProps,name:"MuiMasonry"}),{children,className,component="div",columns=4,spacing=1,defaultColumns,defaultHeight,defaultSpacing}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),masonryRef=react.useRef(),[maxColumnHeight,setMaxColumnHeight]=react.useState(),isSSR=!maxColumnHeight&&defaultHeight&&void 0!==defaultColumns&&void 0!==defaultSpacing,[numberOfLineBreaks,setNumberOfLineBreaks]=react.useState(isSSR?defaultColumns-1:0),ownerState=(0,esm_extends.Z)({},props,{spacing,columns,maxColumnHeight,defaultColumns,defaultHeight,defaultSpacing,isSSR}),classes=useUtilityClasses(ownerState),handleResize=masonryChildren=>{if(!masonryRef.current||!masonryChildren||0===masonryChildren.length)return;let masonry=masonryRef.current,masonryFirstChild=masonryRef.current.firstChild,parentWidth=masonry.clientWidth,firstChildWidth=masonryFirstChild.clientWidth;if(0===parentWidth||0===firstChildWidth)return;let firstChildComputedStyle=window.getComputedStyle(masonryFirstChild),firstChildMarginLeft=parseToNumber(firstChildComputedStyle.marginLeft),firstChildMarginRight=parseToNumber(firstChildComputedStyle.marginRight),currentNumberOfColumns=Math.round(parentWidth/(firstChildWidth+firstChildMarginLeft+firstChildMarginRight)),columnHeights=Array(currentNumberOfColumns).fill(0),skip=!1;masonry.childNodes.forEach(child=>{if(child.nodeType!==Node.ELEMENT_NODE||"line-break"===child.dataset.class||skip)return;let childComputedStyle=window.getComputedStyle(child),childMarginTop=parseToNumber(childComputedStyle.marginTop),childMarginBottom=parseToNumber(childComputedStyle.marginBottom),childHeight=parseToNumber(childComputedStyle.height)?Math.ceil(parseToNumber(childComputedStyle.height))+childMarginTop+childMarginBottom:0;if(0===childHeight){skip=!0;return}for(let i=0;i<child.childNodes.length;i+=1){let nestedChild=child.childNodes[i];if("IMG"===nestedChild.tagName&&0===nestedChild.clientHeight){skip=!0;break}}if(!skip){let currentMinColumnIndex=columnHeights.indexOf(Math.min(...columnHeights));columnHeights[currentMinColumnIndex]+=childHeight,child.style.order=currentMinColumnIndex+1}}),skip||(0,react_dom.flushSync)(()=>{setMaxColumnHeight(Math.max(...columnHeights)),setNumberOfLineBreaks(currentNumberOfColumns>0?currentNumberOfColumns-1:0)})},observer=react.useRef("undefined"==typeof ResizeObserver?void 0:new ResizeObserver(handleResize));react.useEffect(()=>{let resizeObserver=observer.current;if(void 0!==resizeObserver)return masonryRef.current&&masonryRef.current.childNodes.forEach(childNode=>{resizeObserver.observe(childNode)}),()=>resizeObserver?resizeObserver.disconnect():{}},[columns,spacing,children]);let handleRef=(0,useForkRef.Z)(ref,masonryRef),lineBreaks=Array(numberOfLineBreaks).fill("").map((_,index)=>(0,jsx_runtime.jsx)("span",{"data-class":"line-break",style:(0,esm_extends.Z)({},lineBreakStyle,{order:index+1})},index));return(0,jsx_runtime.jsxs)(MasonryRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),ref:handleRef,ownerState:ownerState},other,{children:[children,lineBreaks]}))});var Masonry_Masonry=Masonry},4215:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content",function(){return __webpack_require__(2087)}])},9779:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PageHead}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893);__webpack_require__(7294);var next_head__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);function PageHead(param){let{title,description}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_2___default(),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title",{children:title},"title"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:title",content:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{property:"og:description",content:description}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta",{name:"description",content:description})]})}},2866:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return PageTitle}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9630),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4373);function PageTitle(param){let{title}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z,{variant:"h1",sx:{textAlign:"center",mb:8},children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z,{sx:{mt:8,mb:8}})]})}},2087:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentCard:function(){return ContentCard},content:function(){return content},default:function(){return Content}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var Box=__webpack_require__(120),Card=__webpack_require__(9837),CardContent=__webpack_require__(1359),Typography=__webpack_require__(9630),CardActions=__webpack_require__(2026),Button=__webpack_require__(5084),Link=__webpack_require__(8346),PageTitle=__webpack_require__(2866),Masonry=__webpack_require__(8672),Paragraph=__webpack_require__(5894),ExportedImage=__webpack_require__(1058),PageHead=__webpack_require__(9779);function Content(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHead.Z,{title:"Content by Axel Goblet | ML engineer @ BigData Republic",description:"Axel produces free content for tech community. Topics are often ML related and range from blogs and whitepapers to open source projects and conference talks"}),(0,jsx_runtime.jsx)(PageTitle.Z,{title:"Content"}),(0,jsx_runtime.jsx)(Masonry.ZP,{columns:{xs:1,md:2},spacing:0,children:content.map((c,i)=>(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsx)(ContentCard,{content:c,sx:{ml:{sm:2},mr:{sm:2},mb:4}})},i))})]})}function ContentCard(param){let{content,sx}=param;return(0,jsx_runtime.jsxs)(Card.Z,{sx:sx,children:[(0,jsx_runtime.jsx)(ExportedImage.Z,{src:content.imagePath,alt:content.title,layout:"responsive",style:{width:"100%",height:"auto"},priority:content.priority}),(0,jsx_runtime.jsxs)(CardContent.Z,{children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"overline",children:content.date}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"h3",component:"h2",children:content.title}),(0,jsx_runtime.jsx)(Box.Z,{mb:4,mt:6,children:content.text})]}),(0,jsx_runtime.jsx)(CardActions.Z,{children:(0,jsx_runtime.jsx)(Button.Z,{children:(0,jsx_runtime.jsx)(Link.Z,{variant:"inherit",underline:"none",href:content.link,"aria-label":content.linkText,children:content.linkText})})})]})}let content=[{title:"This website is open source",imagePath:{src:"/_next/static/media/website.a98a0657.png",height:630,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUiIiI5ZXFKCwZ0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAEUlEQVR4nGNgQAKMjOgMMAAAAGwABa6H6+kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},imageWidth:1200,imageHeight:630,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"I open sourced the code of this website. It is built with React and deployed on Github Pages. It might be a bit overengineered for a simple website without a backend, but it was a nice opportunity to get to know the Material UI package. Github Pages is free for open source projects. Feel free to fork the project and adapt it for your own purposes."}),link:"https://github.com/agoblet/agoblet.github.io",date:"5 Jan 2022",linkText:"View the code",priority:!0},{title:"Whitepaper: Next-level ML with Model Serving Platforms",imagePath:{src:"/_next/static/media/whitepaper.b5c3f2f6.png",height:1171,width:1625,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEUcpqIMUWIUnpseOHM7laVEhKEafYVIbZJKd6k8YI8cMVuIs8Pg7u260doWZXzr+fYXUnnK1t////9ZjbpiqdKer7yAn6mhsr6DrLW+N1cyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nAXBhQHAMAzAMBeTMo3+v3QSEL2PgDUSQjKWJ+t1Uv6o4lSdVO4+S5n9Za82Rlv7ByY3Aee9A9eKAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},imageWidth:1625,imageHeight:1171,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"I wrote a whitepaper on machine learning model serving. It explains how model serving platforms can help organizations scale their machine learning capabilities efficiently. The whitepaper contains a conceptual description of what I think a model serving platform should look like. I deliberately kept out implementation details. These differ from company to company. Therefore, they are not useful to all readers. You can download the whitepaper for free from BigData Republic's website."}),link:"https://www.bigdatarepublic.nl/articles/whitepaper-next-level-ml-model-serving-platforms/",date:"30 Nov 2021",linkText:"Read the whitepaper",priority:!0},{title:"Podcast: Scaling machine learning capabilities in large organizations",imagePath:{src:"/_next/static/media/mlops-community.b8726765.jpg",height:900,width:900,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAACAQMFAAAAAAAAAAAAAAAAARICAxETFSFRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCtqq9uDbpuacYpcR7z4AAP/9k=",blurWidth:8,blurHeight:8},imageWidth:900,imageHeight:900,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"My colleague Bertjan Broeksema and I were invited to Demetrios Brinkmann's MLOps Community Podcast. We talked about the hurdles large organizations face when scaling their machine learning capabilities. We also discussed how these hurdles can be tackled. We had a great time. Not only could we share our vision on the topic with the MLOps community, but also the questions from the community helped us polish this vision. The podcast recording is available on various platforms."}),link:"https://mlops.community/watch/scaling-machine-learning-capabilities-in-large-organizations-scaling-machine-learning-capabilities-in-large-organizations_5UFTbMh2QR3eSe/",date:"Aug 10 2020",linkText:"Listen to the podcast"},{title:"Blog: A Review of Netflix's Metaflow",imagePath:{src:"/_next/static/media/metaflow.165e234e.jpg",height:337,width:1081,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAEAAgMAAAAAAAAAAAAAAAAAAQI0c7L/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABMQL/2gAMAwEAAhEDEQA/AKbfNnZHQBdJzEf/2Q==",blurWidth:8,blurHeight:2},imageWidth:1081,imageHeight:337,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"Netflix open sourced their internal machine learning platform Metaflow. Due to my interest in MLOps, I wanted to dive into the tool right away. Thus, I wrote a review on it. Check it out on Medium."}),link:"https://medium.com/bigdatarepublic/a-review-of-netflixs-metaflow-65c6956e168d",date:"20 Dec 2019",linkText:"Read the blog"},{title:"Workshop: Scheduling machine learning pipelines using Apache Airflow",imagePath:{src:"/_next/static/media/airflow.45dac9ed.png",height:533,width:1260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEX69PP+/v7u7u7a5v/T3uKQ4K3h4eFsxbb5mZPf9vjQzcxMh5nU1NSb3tM+nDbfAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGNg4GDhZGBkZGRg5mZn4eJhY2Bg5mVlYGJiYgQABcoAasPRooYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},imageWidth:1260,imageHeight:533,text:(0,jsx_runtime.jsxs)(Paragraph.Z,{center:!1,gutterBottom:!1,children:["At PyData Eindhoven 2019 I gave a workshop on scheduling machine learning pipelines using Apache Airflow. In the first plenary part of the workshop I explained what Airflow is and why I love the tool. In the second part, attendees worked on some exercises in their own Airflow cluster, which we deployed for them on AWS. My colleague Dick Abma also wrote a"," ",(0,jsx_runtime.jsx)(Link.Z,{href:"https://www.bigdatarepublic.nl/articles/hosting-workshops-aws-using-ecs-ec2-and-terraform/","aria-label":"Read the blog about workshop setup",children:"blog"})," ","on this setup. The plenary session recording is available on Youtube."]}),link:"https://www.youtube.com/watch?v=bkZ3HAQYEEg",date:"20 nov 2019",linkText:"Watch the recording"},{title:"Paper: On a Fixed Haplotype Variant of the Minimum Error Correction Problem",imagePath:{src:"/_next/static/media/haplotype.2f1ca91f.png",height:1284,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXn6e3g5Oju8PLY3OGrbEzkAAAABHRSTlP+/v7+ukpK/AAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABhJREFUeJwFwQEBAAAIwyB2+3cWXJhxpfYAqAASt+YbLgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},imageWidth:5e3,imageHeight:1284,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"During my research internship, we studied the Minimum Error Correction problem. This problem has been intensively studied in the computational biology literature and is also known in the clustering literature: essentially we are required to find two cluster centres such that the sum of distances to the nearest centre, is minimized. The paper contains proofs about the computational complexity of a variant of the Minimum Error Correction problem. It was published in COCOON, the journal of computing and combinatorics."}),link:"https://www.researchgate.net/publication/326064707_On_a_Fixed_Haplotype_Variant_of_the_Minimum_Error_Correction_Problem",date:"29 Jun 2018",linkText:"Read the paper"}]}},function(__webpack_require__){__webpack_require__.O(0,[611,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4215)}),_N_E=__webpack_require__.O()}]);