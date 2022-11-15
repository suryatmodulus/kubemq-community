import I from"./InputText.95e7607b.js";import{a as U,x as A,E as Q,v as b,y as q,o as C,h as y,i as e,j as c,u as i,A as h,s as R,B as j,D as M,r as S}from"./entry.ac81eb43.js";import{u as G,r as D}from"./index.esm.108bfc55.js";import{G as m,u as F}from"./request.95ba5b66.js";import{u as P}from"./useToastMessage.dd22ad89.js";class z extends m{constructor(l){super("create_channel",{type:"queues",name:l})}}class H extends m{constructor(l){super("create_channel",{type:"events",name:l})}}class J extends m{constructor(l){super("create_channel",{type:"events_store",name:l})}}class K extends m{constructor(l){super("create_channel",{type:"commands",name:l})}}class L extends m{constructor(l){super("create_channel",{type:"queries",name:l})}}const O={class:"grid-nogutter grid col-12 mt-2"},W={class:"flex align-items-end grid p-fluid col-6 pb-0 mb-1"},X={class:"col-12 md:col-12 pt-0"},Y={key:0,class:"flex grid p-fluid col-6 ml-2"},Z=e("div",{class:"col-12 md:col-12 pt-0"},[e("label",{class:"text-sm ml-1 font-medium"},"Select Channel Type")],-1),ee={class:"col-12 md:col-12 pt-0 mt-1"},se={class:"flex ml-1"},le={class:"mr-2"},te=e("label",{class:"ml-1",for:"events"},"Events",-1),ne={class:"ml-2"},oe=e("label",{class:"ml-1",for:"events_store"},"Events Store",-1),ae={key:1,class:"flex grid p-fluid flex grid p-fluid col-6 ml-2"},ue=e("div",{class:"col-12 md:col-12 pt-0"},[e("label",{class:"text-sm ml-1 font-medium"},"Select Channel Type")],-1),de={class:"col-12 md:col-12 pt-0 mt-1"},ce={class:"flex ml-1"},ie={class:"mr-2"},re=e("label",{class:"ml-1",for:"events"},"Commands",-1),me={class:"ml-2"},ve=e("label",{class:"ml-1",for:"events_store"},"Queries",-1),pe={class:"flex align-items-end grid justify-content-end p-fluid col-12 pb-0 mb-1 mt-3"},_e={class:"mr-2"},he={class:"ml-2"},ge=U({__name:"AddChannel",setup(r){A(()=>{v.value=l.value.data.channelType});const l=Q("dialogRef"),n=b(""),v=b(1),a=q("add-channel-pub-sub-radio-button","events"),u=q("add-channel-cqrs-radio-button","commands"),p=b(!1),w={channelName:{required:D}},B=M("system-connection"),E=d=>{d==="disconnected"&&f()};B.on(E);const V=G(w,{channelName:n}),k=F(),g=P();let o=null;const N=d=>{d&&T()},f=()=>{o!==null&&o.abort(),l.value.close()},T=()=>{switch(v.value){case 1:o=new z(n.value);break;case 2:a.value==="events"?o=new H(n.value):o=new J(n.value);break;case 3:u.value==="commands"?o=new K(n.value):o=new L(n.value);break}p.value=!0,k.sendRequest(o).then(d=>{g.showSuccess(`Channel '${n.value}' created successfully`),f()}).catch(d=>{g.showError("Error creating a new channel",d)}).finally(()=>{p.value=!1,o=null})};return(d,s)=>{const $=I,_=S("RadioButton"),x=S("Button");return C(),y("form",{onSubmit:s[6]||(s[6]=j(t=>N(!i(V).$invalid),["prevent"]))},[e("div",O,[e("div",W,[e("div",X,[c($,{label:"Set Channel Name*",modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=t=>n.value=t),placeholder:"Channel name",disabled:p.value},null,8,["modelValue","disabled"])])]),v.value===2?(C(),y("div",Y,[Z,e("div",ee,[e("div",se,[e("div",le,[c(_,{inputId:"events",name:"pubsub",value:"events",modelValue:i(a),"onUpdate:modelValue":s[1]||(s[1]=t=>h(a)?a.value=t:null)},null,8,["modelValue"]),te]),e("div",ne,[c(_,{inputId:"events_store",name:"pubsub",value:"events_store",modelValue:i(a),"onUpdate:modelValue":s[2]||(s[2]=t=>h(a)?a.value=t:null)},null,8,["modelValue"]),oe])])])])):R("",!0),v.value===3?(C(),y("div",ae,[ue,e("div",de,[e("div",ce,[e("div",ie,[c(_,{inputId:"commands",name:"cqrs",value:"commands",modelValue:i(u),"onUpdate:modelValue":s[3]||(s[3]=t=>h(u)?u.value=t:null)},null,8,["modelValue"]),re]),e("div",me,[c(_,{inputId:"queries",name:"cqrs",value:"queries",modelValue:i(u),"onUpdate:modelValue":s[4]||(s[4]=t=>h(u)?u.value=t:null)},null,8,["modelValue"]),ve])])])])):R("",!0),e("div",pe,[e("div",_e,[c(x,{label:"Cancel",onClick:s[5]||(s[5]=t=>f()),icon:"pi pi-times",class:"button-grey",style:{width:"8rem"}})]),e("div",he,[c(x,{label:"Add",disabled:i(V).$invalid,type:"submit",icon:"pi pi-plus",class:"button-grey",loading:p.value,style:{width:"8rem"}},null,8,["disabled","loading"])])])])],32)}}});export{ge as _};
