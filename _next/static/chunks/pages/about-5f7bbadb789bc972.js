(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4373:function(e,t,i){"use strict";var r=i(3366),n=i(7462),a=i(7294),o=i(6010),l=i(4780),c=i(1796),s=i(1719),d=i(8884),h=i(5741),g=i(5893);let u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=e=>{let{absolute:t,children:i,classes:r,flexItem:n,light:a,orientation:o,textAlign:c,variant:s}=e;return(0,l.Z)({root:["root",t&&"absolute",s,a&&"light","vertical"===o&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===c&&"vertical"!==o&&"textAlignRight","left"===c&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]},h.V,r)},m=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver(e,t){let{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}}),({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(e.vars||e).palette.divider}`,transform:"translateX(0%)"}}),({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),f=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver(e,t){let{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),v=a.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:l,className:c,component:s=l?"div":"hr",flexItem:h=!1,light:v=!1,orientation:w="horizontal",role:b="hr"!==s?"separator":void 0,textAlign:x="center",variant:y="fullWidth"}=i,j=(0,r.Z)(i,u),Z=(0,n.Z)({},i,{absolute:a,component:s,flexItem:h,light:v,orientation:w,role:b,textAlign:x,variant:y}),A=p(Z);return(0,g.jsx)(m,(0,n.Z)({as:s,className:(0,o.Z)(A.root,c),role:b,ref:t,ownerState:Z},j,{children:l?(0,g.jsx)(f,{className:A.wrapper,ownerState:Z,children:l}):null}))});t.Z=v},9212:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(1473)}])},9779:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var r=i(5893);i(7294);var n=i(9008),a=i.n(n);function o(e){let{title:t,description:i}=e;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:t},"title"),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{name:"description",content:i})]})}},2866:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var r=i(5893),n=i(7294),a=i(9630),o=i(4373);function l(e){let{title:t}=e;return(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"h1",sx:{textAlign:"center",mb:8},children:t}),(0,r.jsx)(o.Z,{sx:{mt:8,mb:8}})]})}},1473:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var r=i(5893);i(7294);var n=i(2866),a=i(8346),o=i(5894),l=i(1664),c=i.n(l),s=i(9779);function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{title:"About Axel Goblet | ML engineer @ BigData Republic",description:"Axel Goblet is a machine learning engineer and consultant at BigData Republic. Learn more about the projects he has done and check out his content."}),(0,r.jsx)(n.Z,{title:"About"}),(0,r.jsx)(o.Z,{children:"My name is Axel Goblet. I am a machine learning engineer at BigData Republic. My passion for machine learning engineering was born at Mediaan. I did an extensive internship there during my Bachelor's. While working on software engineering and data science projects for customers, I discovered that a machine learning model alone does not provide any value. A model only comes alive once it is integrated with client systems that can actually leverage its power. I loved end-to-end machine learning projects, where I develop a model and then integrate it with the customer's cloud services. After my internship, I continued working at Mediaan to gain more industry experience while doing my Master's."}),(0,r.jsxs)(o.Z,{children:["After graduating from Maastricht University in 2018, I joined BigData Republic. I found a great employer to continue my growth as a machine learning engineer. The challenging customer projects and great colleagues brought my knowledge to the current level. Aside from helping my current customer bol.com, I coach colleagues and help with internal and external knowledge sharing. I love researching and working on MLOps topics. Check out my"," ",(0,r.jsx)(c(),{href:"/content",legacyBehavior:!0,passHref:!0,children:(0,r.jsx)(a.Z,{children:"content"})})," ","page if you are interested in my work."]}),(0,r.jsx)(o.Z,{gutterBottom:!1,children:"I spend much of my free time outside enjoying nature. I love hiking through the beautiful area around my hometown Valkenburg. When the weather allows it, you can find me on the water windsurfing. I also love meeting up with friends for board games. My favourite game? Probably Terra Mystica."})]})}},9008:function(e,t,i){e.exports=i(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);