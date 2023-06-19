"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{2377:function(n,o,t){t.r(o),t.d(o,{default:function(){return W}});var r,e,i,a,l,c=t(7689),p=t(2791),s=t(5048),d=t(9176),u=t(168),x=t(225),g=t(1087),f=(0,x.Z)(g.OL)(r||(r=(0,u.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 700;\n  color: #1976d2;\n  font-size: 18px;\n  &:not(:last-child) {\n    margin-right: 30px;\n  }\n  &.active {\n    text-decoration: underline;\n  }\n"]))),h=x.Z.nav(e||(e=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Z=t(184),b=function(){var n=(0,s.v9)(d.M7);return(0,Z.jsxs)(h,{children:[(0,Z.jsx)(f,{to:"/",children:"Home"}),n&&(0,Z.jsx)(f,{to:"/contacts",children:"Contacts"})]})},m=function(){var n=(0,s.I0)();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(f,{to:"/register",onClick:function(){return n((0,d.q$)())},children:"Register"}),(0,Z.jsx)(f,{to:"/login",onClick:function(){return n((0,d.q$)())},children:"Log In"})]})},v=t(9952),k=t(5047),j=x.Z.div(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  color: #1976d2;\n"]))),y=x.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 4px;\n"]))),w=x.Z.span(l||(l=(0,u.Z)(["\n  margin-right: 12px;\n"]))),C=t(1263),B=function(){var n=(0,s.v9)(d.vW),o=(0,s.I0)();return(0,Z.jsxs)(j,{children:[(0,Z.jsx)(y,{children:(0,Z.jsx)(v.Z,{})}),(0,Z.jsx)(w,{children:"Hello, ".concat(n.toUpperCase())}),(0,Z.jsx)(C.un,{variant:"contained",type:"button",onClick:function(){o((0,k.kS)())},children:"Log Out"})]})},z=t(266),A=t(3366),I=t(7462),S=t(8182),D=t(4419),O=t(6934),M=t(1402),_=t(4036),T=t(5527),N=t(5878),P=t(1217);function R(n){return(0,P.Z)("MuiAppBar",n)}(0,N.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var q,L,$=["className","color","enableColorOnDark","position"],F=function(n,o){return n?"".concat(null==n?void 0:n.replace(")",""),", ").concat(o,")"):o},H=(0,O.ZP)(T.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(n,o){var t=n.ownerState;return[o.root,o["position".concat((0,_.Z)(t.position))],o["color".concat((0,_.Z)(t.color))]]}})((function(n){var o=n.theme,t=n.ownerState,r="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,I.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!o.vars&&(0,I.Z)({},"default"===t.color&&{backgroundColor:r,color:o.palette.getContrastText(r)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===o.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,I.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"})),o.vars&&(0,I.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette.AppBar.defaultBg:F(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?o.vars.palette.text.primary:F(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?o.vars.palette[t.color].main:F(o.vars.palette.AppBar.darkBg,o.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?o.vars.palette[t.color].contrastText:F(o.vars.palette.AppBar.darkColor,o.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),J=p.forwardRef((function(n,o){var t=(0,M.Z)({props:n,name:"MuiAppBar"}),r=t.className,e=t.color,i=void 0===e?"primary":e,a=t.enableColorOnDark,l=void 0!==a&&a,c=t.position,p=void 0===c?"fixed":c,s=(0,A.Z)(t,$),d=(0,I.Z)({},t,{color:i,position:p,enableColorOnDark:l}),u=function(n){var o=n.color,t=n.position,r=n.classes,e={root:["root","color".concat((0,_.Z)(o)),"position".concat((0,_.Z)(t))]};return(0,D.Z)(e,R,r)}(d);return(0,Z.jsx)(H,(0,I.Z)({square:!0,component:"header",ownerState:d,elevation:4,className:(0,S.Z)(u.root,r,"fixed"===p&&"mui-fixed"),ref:o},s))})),U=(0,x.Z)(J)(q||(q=(0,u.Z)(["\n  background-color: #d6e4ee;\n"]))),E=(0,x.Z)(z.Z)(L||(L=(0,u.Z)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 15px 0;\n"])));function W(){var n=(0,s.v9)(d.M7);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(U,{position:"static",children:(0,Z.jsxs)(E,{children:[(0,Z.jsx)(b,{}),n?(0,Z.jsx)(B,{}):(0,Z.jsx)(m,{})]})}),(0,Z.jsx)(c.j3,{})]})}},1598:function(n,o,t){t.d(o,{Ey:function(){return u},Jn:function(){return h},UP:function(){return x},__:function(){return g},jj:function(){return f}});var r,e,i,a,l,c=t(168),p=t(225),s=t(5527),d=t(6151),u=(0,p.Z)(s.Z)(r||(r=(0,c.Z)(["\n  max-width: 500px;\n  padding: 30px 20px;\n  text-align: center;\n  background-color: #d6e4ee;\n  max-height: 250px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n"]))),x=p.Z.input(e||(e=(0,c.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  width: 300px;\n  padding: 10px;\n  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.2);\n  border: 1px solid #ccc;\n  color: black;\n  font-size: 16px;\n  padding-left: 30px;\n"]))),g=p.Z.label(i||(i=(0,c.Z)(["\n  width: 100px;\n  text-align: right;\n  float: left;\n  margin-right: 10px;\n  line-height: 30px;\n  color: hsl(210deg 8% 20%);\n  font-weight: 900;\n"]))),f=p.Z.p(a||(a=(0,c.Z)(["\n  margin: 0;\n  color: tomato;\n  font-size: 16px;\n  text-align: center;\n"]))),h=(0,p.Z)(d.Z)(l||(l=(0,c.Z)(["\n  margin-top: 30px;\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 10px 10px;\n  border-radius: 50px;\n  background-image: linear-gradient(\n    45deg,\n    #6ab1d7 0%,\n    #33d9de 50%,\n    #002878 100%\n  );\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);\n  transition: 0.5s;\n  cursor: pointer;\n"])))},156:function(n,o,t){t.r(o),t.d(o,{default:function(){return g}});var r,e,i,a,l=t(6598),c=t(168),p=t(225),s=p.Z.section(r||(r=(0,c.Z)(["\n  position: relative;\n  text-align: center;\n  padding-top: 65px;\n  padding-bottom: 50px;\n  height: 700px;\n  overflow: hidden;\n"]))),d=(p.Z.img(e||(e=(0,c.Z)(["\n  position: absolute;\n  z-index: 0;\n  right: -2vw;\n"]))),p.Z.h1(i||(i=(0,c.Z)(["\n  position: relative;\n  top: 20px;\n  color: #1565c0;\n  font-family: 'Poppins', sans-serif;\n  line-height: 1em;\n  letter-spacing: -0.02em;\n  text-shadow: 0px 0px 10px rgb(0 0 0 / 35%);\n  font-weight: 700;\n"])))),u=p.Z.span(a||(a=(0,c.Z)(["\n  position: absolute;\n  z-index: 1;\n  top: 230px;\n  left: 15vw;\n  display: block;\n  font-size: 130px;\n"]))),x=t(184);function g(){return(0,x.jsx)(s,{children:(0,x.jsx)(l.Z,{children:(0,x.jsx)(d,{children:(0,x.jsx)(u,{children:"Phonebook"})})})})}},1263:function(n,o,t){t.d(o,{Yb:function(){return h},_B:function(){return b},eN:function(){return y},gN:function(){return m},un:function(){return v},vw:function(){return j},xu:function(){return Z},yT:function(){return k}});var r,e,i,a,l,c,p,s,d=t(168),u=t(225),x=t(8096),g=t(6598),f=t(1598),h=(0,u.Z)(g.Z)(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: flex-start;\n"]))),Z=u.Z.div(e||(e=(0,d.Z)(["\n  width: 50%;\n"]))),b=u.Z.form(i||(i=(0,d.Z)(["\n  padding: 30px 15px;\n  /* margin-bottom:30px; */\n  border: 1px solid #6d6d6c;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  background-color: #f0f8ff;\n  border: none;\n"]))),m=(0,u.Z)(x.Z)(a||(a=(0,d.Z)(["\n  margin-bottom: 10px;\n"]))),v=(0,u.Z)(f.Jn)(l||(l=(0,d.Z)(["\n  align-self: center;\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 10px 10px;\n  border-radius: 50px;\n  background-image: linear-gradient(\n    45deg,\n    #6ab1d7 0%,\n    #33d9de 50%,\n    #002878 100%\n  );\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);\n  transition: 0.5s;\n  cursor: pointer;\n"]))),k=u.Z.div(c||(c=(0,d.Z)(["\n  background-color: #1565c0;\n  color: white;\n  border-radius: 50%;\n  padding: 17px;\n"]))),j=u.Z.div(p||(p=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 80px 0 20px 0;\n"]))),y=u.Z.h1(s||(s=(0,d.Z)(["\n  margin: 3px 0 0 0;\n  color: #1565c0;\n"])))},9952:function(n,o,t){var r=t(4836);o.Z=void 0;var e=r(t(5649)),i=t(184),a=(0,e.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");o.Z=a},6598:function(n,o,t){var r=(0,t(5950).Z)();o.Z=r}}]);
//# sourceMappingURL=HomePage.f48ad822.chunk.js.map