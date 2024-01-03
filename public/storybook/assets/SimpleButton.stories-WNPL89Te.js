import{d as j,e as d,f as E,g as I,o as L,j as O,k as P,t as R,n as T,l as V}from"./vue.esm-bundler-Q1-M_KO1.js";const w=["disabled"],z=j({__name:"SimpleButton",props:{label:{},maxWidth:{},minWidth:{},rounded:{type:Boolean},primary:{type:Boolean,default:!1},disabled:{type:Boolean},size:{},color:{},backgroundColor:{},borderColor:{},onClick:{}},emits:["click"],setup(a,{emit:l}){const e=a,i=d(()=>({"lc-simple-button":!0,"lc-simple-button--primary":e.primary,"lc-simple-button--secondary":!e.primary,"lc-simple-button--rounded":e.rounded,[`lc-simple-button--${e.size||"medium"}`]:!0})),m=d(()=>({maxWidth:e.maxWidth,minWidth:e.minWidth,borderColor:e.borderColor,backgroundColor:e.backgroundColor,color:e.color})),q=l,D=()=>{q("click",1)};return(c,A)=>{const N=E("ripple");return I((L(),O("button",{onClick:D,style:T(m.value),class:V(["lc-simple-button",i.value]),"data-test":"lc-simple-button",disabled:c.disabled},[P(R(c.label),1)],14,w)),[[N]])}}}),F=(a,l)=>{const e=a.__vccOpts||a;for(const[i,m]of l)e[i]=m;return e},$=F(z,[["__scopeId","data-v-33900036"]]);z.__docgenInfo={exportName:"default",displayName:"SimpleButton",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"maxWidth",required:!1,type:{name:"string"}},{name:"minWidth",required:!1,type:{name:"string"}},{name:"rounded",required:!1,type:{name:"boolean"}},{name:"primary",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"color",required:!1,type:{name:"string"}},{name:"backgroundColor",required:!1,type:{name:"string"}},{name:"borderColor",required:!1,type:{name:"string"}},{name:"onClick",required:!1,type:{name:"union",elements:[{name:"any"},{name:"undefined"}]}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["C:/projetos/github/vue-ui-kit/src/components/SimpleButton/SimpleButton.vue"]};const H={title:"SimpleButton",component:$,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]},backgroundColor:{control:"color"},color:{control:"color"},borderColor:{control:"color"},onClick:{action:"clicked"}}},r={args:{primary:!0,label:"Button",maxWidth:"300px"}},o={args:{label:"Button",maxWidth:"300px"}},t={args:{size:"medium",label:"Button",maxWidth:"300px",rounded:!0}},n={args:{size:"small",label:"Button",maxWidth:"300px"}},s={args:{size:"large",label:"Button",maxWidth:"300px"}};var u,p,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    maxWidth: '300px'
  }
}`,...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    maxWidth: '300px'
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,h,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Button',
    maxWidth: '300px',
    rounded: true
  }
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var k,W,_;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button',
    maxWidth: '300px'
  }
}`,...(_=(W=n.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var C,S,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button',
    maxWidth: '300px'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const J=["Primary","Secondary","Rounded","Small","Large"];export{s as Large,r as Primary,t as Rounded,o as Secondary,n as Small,J as __namedExportsOrder,H as default};
