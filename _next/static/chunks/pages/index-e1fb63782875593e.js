(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(8181)}])},8702:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentCard:function(){return ContentCard},content:function(){return content},default:function(){return Content}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var Box=__webpack_require__(120),Button=__webpack_require__(5084),Card=__webpack_require__(9837),CardContent=__webpack_require__(1359),Chip=__webpack_require__(1448),Typography=__webpack_require__(9630),CardActions=__webpack_require__(2026),Link=__webpack_require__(8346),PageTitle=__webpack_require__(2866),Masonry=__webpack_require__(8672),Paragraph=__webpack_require__(5894),ExportedImage=__webpack_require__(1058),PageHead=__webpack_require__(9779),MicExternalOn=__webpack_require__(349),HistoryEdu=__webpack_require__(6679),Code=__webpack_require__(6214),Stack=__webpack_require__(7274),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link);function Content(param){let{category,title="Content"}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHead.Z,{title:"Content by Axel Goblet | ML engineer @ BigData Republic",description:"Axel produces free content for tech community. Topics are often ML related and range from articles to code and talks"}),(0,jsx_runtime.jsx)(PageTitle.Z,{title:title}),void 0!==category&&(0,jsx_runtime.jsx)(Box.Z,{display:"flex",justifyContent:"center",mb:6,children:(0,jsx_runtime.jsx)(link_default(),{href:"/content",style:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Button.Z,{children:"View all content"})})}),(0,jsx_runtime.jsx)(Masonry.ZP,{columns:{xs:1,md:2},spacing:0,children:content.filter(c=>void 0===category||c.category.id===category).map((c,i)=>(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsx)(ContentCard,{content:c,sx:{ml:{sm:2},mr:{sm:2},mb:4}})},i))})]})}function ContentCard(param){let{content,sx}=param;return(0,jsx_runtime.jsxs)(Card.Z,{sx:sx,children:[(0,jsx_runtime.jsx)(ExportedImage.Z,{src:content.imagePath,alt:content.title,style:{width:"100%",height:"auto"},priority:content.priority}),(0,jsx_runtime.jsx)(CardContent.Z,{children:(0,jsx_runtime.jsxs)(Stack.Z,{children:[(0,jsx_runtime.jsx)(Box.Z,{children:(0,jsx_runtime.jsx)(link_default(),{href:"/content/".concat(content.category.id),style:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Chip.Z,{onClick(){},icon:content.category.icon,label:content.category.label})})}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"overline",children:content.date}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"h3",component:"h2",children:content.title}),(0,jsx_runtime.jsx)(Box.Z,{mb:4,mt:6,children:content.text})]})}),(0,jsx_runtime.jsx)(CardActions.Z,{children:(0,jsx_runtime.jsx)(Button.Z,{children:(0,jsx_runtime.jsx)(Link.Z,{variant:"inherit",underline:"none",href:content.link,"aria-label":content.linkText,children:content.linkText})})})]})}let categories={article:{icon:(0,jsx_runtime.jsx)(HistoryEdu.Z,{}),label:"Article",id:"articles"},talk:{icon:(0,jsx_runtime.jsx)(MicExternalOn.Z,{}),label:"Talk",id:"talks"},code:{icon:(0,jsx_runtime.jsx)(Code.Z,{}),label:"Code",id:"code"}},content=[{title:"This website is open source",category:categories.code,imagePath:{src:"/_next/static/media/website.a98a0657.png",height:630,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUiIiI5ZXFKCwZ0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAEUlEQVR4nGNgQAKMjOgMMAAAAGwABa6H6+kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},imageWidth:1200,imageHeight:630,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"I open sourced the code of this website. It is built with React and deployed on Github Pages. It might be a bit overengineered for a simple website without a backend, but it was a nice opportunity to get to know the Material UI package. Github Pages is free for open source projects. Feel free to fork the project and adapt it for your own purposes."}),link:"https://github.com/agoblet/agoblet.github.io",date:"5 Jan 2022",linkText:"View the code",priority:!0},{title:"Next-level ML with Model Serving Platforms",category:categories.article,imagePath:{src:"/_next/static/media/whitepaper.b5c3f2f6.png",height:1171,width:1625,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEUcpqIMUWIUnpseOHM7laVEhKEafYVIbZJKd6k8YI8cMVuIs8Pg7u260doWZXzr+fYXUnnK1t////9ZjbpiqdKer7yAn6mhsr6DrLW+N1cyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nAXBhQHAMAzAMBeTMo3+v3QSEL2PgDUSQjKWJ+t1Uv6o4lSdVO4+S5n9Za82Rlv7ByY3Aee9A9eKAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},imageWidth:1625,imageHeight:1171,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"I wrote a whitepaper on machine learning model serving. It explains how model serving platforms can help organizations scale their machine learning capabilities efficiently. The whitepaper contains a conceptual description of what I think a model serving platform should look like. I deliberately kept out implementation details. These differ from company to company. Therefore, they are not useful to all readers. You can download the whitepaper for free from BigData Republic's website."}),link:"https://www.bigdatarepublic.nl/articles/whitepaper-next-level-ml-model-serving-platforms/",date:"30 Nov 2021",linkText:"Read the whitepaper",priority:!0},{title:"Scaling machine learning capabilities in large organizations",category:categories.talk,imagePath:{src:"/_next/static/media/mlops-community.b8726765.jpg",height:900,width:900,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAACAQMFAAAAAAAAAAAAAAAAARICAxETFSFRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCtqq9uDbpuacYpcR7z4AAP/9k=",blurWidth:8,blurHeight:8},imageWidth:900,imageHeight:900,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"My colleague Bertjan Broeksema and I were invited to Demetrios Brinkmann's MLOps Community Podcast. We talked about the hurdles large organizations face when scaling their machine learning capabilities. We also discussed how these hurdles can be tackled. We had a great time. Not only could we share our vision on the topic with the MLOps community, but also the questions from the community helped us polish this vision. The podcast recording is available on various platforms."}),link:"https://mlops.community/watch/scaling-machine-learning-capabilities-in-large-organizations-scaling-machine-learning-capabilities-in-large-organizations_5UFTbMh2QR3eSe/",date:"Aug 10 2020",linkText:"Listen to the podcast"},{title:"A Review of Netflix's Metaflow",category:categories.article,imagePath:{src:"/_next/static/media/metaflow.165e234e.jpg",height:337,width:1081,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAEAAgMAAAAAAAAAAAAAAAAAAQI0c7L/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABMQL/2gAMAwEAAhEDEQA/AKbfNnZHQBdJzEf/2Q==",blurWidth:8,blurHeight:2},imageWidth:1081,imageHeight:337,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"Netflix open sourced their internal machine learning platform Metaflow. Due to my interest in MLOps, I wanted to dive into the tool right away. Thus, I wrote a review on it. Check it out on Medium."}),link:"https://medium.com/bigdatarepublic/a-review-of-netflixs-metaflow-65c6956e168d",date:"20 Dec 2019",linkText:"Read the blog"},{title:"Scheduling machine learning pipelines using Apache Airflow",category:categories.talk,imagePath:{src:"/_next/static/media/airflow.45dac9ed.png",height:533,width:1260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAKlBMVEX69PP+/v7u7u7a5v/T3uKQ4K3h4eFsxbb5mZPf9vjQzcxMh5nU1NSb3tM+nDbfAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAI0lEQVR4nGNg4GDhZGBkZGRg5mZn4eJhY2Bg5mVlYGJiYgQABcoAasPRooYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},imageWidth:1260,imageHeight:533,text:(0,jsx_runtime.jsxs)(Paragraph.Z,{center:!1,gutterBottom:!1,children:["At PyData Eindhoven 2019 I gave a workshop on scheduling machine learning pipelines using Apache Airflow. In the first plenary part of the workshop I explained what Airflow is and why I love the tool. In the second part, attendees worked on some exercises in their own Airflow cluster, which we deployed for them on AWS. My colleague Dick Abma also wrote a"," ",(0,jsx_runtime.jsx)(Link.Z,{href:"https://www.bigdatarepublic.nl/articles/hosting-workshops-aws-using-ecs-ec2-and-terraform/","aria-label":"Read the blog about workshop setup",children:"blog"})," ","on this setup. The plenary session recording is available on Youtube."]}),link:"https://www.youtube.com/watch?v=bkZ3HAQYEEg",date:"20 nov 2019",linkText:"Watch the recording"},{title:"On a Fixed Haplotype Variant of the Minimum Error Correction Problem",category:categories.article,imagePath:{src:"/_next/static/media/haplotype.2f1ca91f.png",height:1284,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEXn6e3g5Oju8PLY3OGrbEzkAAAABHRSTlP+/v7+ukpK/AAAAAlwSFlzAAAD6AAAA+gBtXtSawAAABhJREFUeJwFwQEBAAAIwyB2+3cWXJhxpfYAqAASt+YbLgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},imageWidth:5e3,imageHeight:1284,text:(0,jsx_runtime.jsx)(Paragraph.Z,{center:!1,gutterBottom:!1,children:"During my research internship, we studied the Minimum Error Correction problem. This problem has been intensively studied in the computational biology literature and is also known in the clustering literature: essentially we are required to find two cluster centres such that the sum of distances to the nearest centre, is minimized. The paper contains proofs about the computational complexity of a variant of the Minimum Error Correction problem. It was published in COCOON, the journal of computing and combinatorics."}),link:"https://www.researchgate.net/publication/326064707_On_a_Fixed_Haplotype_Variant_of_the_Minimum_Error_Correction_Problem",date:"29 Jun 2018",linkText:"Read the paper"}]},8181:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),Grid=__webpack_require__(9072),Stack=__webpack_require__(9144),Typography=__webpack_require__(9630),Box=__webpack_require__(120),Button=__webpack_require__(5084);__webpack_require__(7294);var ContactButtons=__webpack_require__(4989),me={src:"/_next/static/media/me.99a17798.jpg",height:3883,width:2912,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAADAAECBAYRBSMyQZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACA//aAAwDAQACEQMRAD8AhuQxqvXxSiQVoRLBSvMvU7SjuPjv2za+uiIneeRjNrf/2Q==",blurWidth:6,blurHeight:8},useBreakpoint=__webpack_require__(5862),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),ExportedImage=__webpack_require__(1058),projects=__webpack_require__(5119),content=__webpack_require__(8702),PageHead=__webpack_require__(9779);function Home(){let isBigScreen=(0,useBreakpoint.Z)("md");return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(PageHead.Z,{title:"Axel Goblet | Machine learning engineer @ BigData Republic",description:"Axel Goblet is a machine learning engineer and consultant at BigData Republic. Learn more about the projects he has done and check out his content."}),(0,jsx_runtime.jsxs)(Grid.ZP,{container:!0,children:[(0,jsx_runtime.jsx)(Grid.ZP,{item:!0,container:!0,md:7,xs:12,sx:{alignItems:"center"},children:(0,jsx_runtime.jsxs)(Stack.Z,{children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h2",component:"h1",children:"Hi, I'm Axel! \uD83D\uDC4B"}),(0,jsx_runtime.jsx)(Typography.Z,{variant:"subtitle1",children:"Machine learning engineer @ BigData Republic"}),(0,jsx_runtime.jsx)(Typography.Z,{mb:4,variant:"subtitle2",children:"Valkenburg aan de Geul, Netherlands \uD83C\uDDF3\uD83C\uDDF1"}),(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[isBigScreen&&(0,jsx_runtime.jsx)(Typography.Z,{variant:"overline",children:"Get in touch"}),(0,jsx_runtime.jsx)(ContactButtons.a,{}),(0,jsx_runtime.jsx)(link_default(),{href:"/about",style:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Button.Z,{children:"more about me"})})]})]})}),(0,jsx_runtime.jsx)(Grid.ZP,{container:!0,item:!0,position:"relative",md:5,xs:12,height:"400px",sx:{justifyContent:"center"},children:(0,jsx_runtime.jsx)(ExportedImage.Z,{src:me,alt:"me",fill:!0,style:{objectFit:"scale-down"},priority:!0})}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,md:6,xs:12,pr:{md:2},children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{textAlign:"center"},children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h2",mt:20,mb:3,children:"Current Project"}),(0,jsx_runtime.jsx)(link_default(),{href:"/projects",style:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Button.Z,{sx:{mb:3},children:"more projects"})})]}),(0,jsx_runtime.jsx)(projects.ProjectCard,{project:projects.projects[0]})]}),(0,jsx_runtime.jsxs)(Grid.ZP,{item:!0,md:6,xs:12,pl:{md:2},children:[(0,jsx_runtime.jsxs)(Box.Z,{sx:{textAlign:"center"},children:[(0,jsx_runtime.jsx)(Typography.Z,{variant:"h2",mt:20,mb:3,children:"Latest Content"}),(0,jsx_runtime.jsx)(link_default(),{href:"/content",style:{textDecoration:"none"},children:(0,jsx_runtime.jsx)(Button.Z,{sx:{mb:3},children:"more content"})})]}),(0,jsx_runtime.jsx)(content.ContentCard,{content:content.content[0]})]})]})]})}}},function(__webpack_require__){__webpack_require__.O(0,[366,182,72,119,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);