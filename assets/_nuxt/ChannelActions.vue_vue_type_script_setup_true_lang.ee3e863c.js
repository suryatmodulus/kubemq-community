import h from"./ChannelReceive.d315d2d9.js";import f from"./ChannelStream.b7759fb3.js";import x from"./Monitor.7260d8d6.js";import{_ as C}from"./Clients.vue_vue_type_script_setup_true_lang.7a4885ae.js";import{a as V,b as g,o as v,h as y,j as e,w as n,m as b,u as w,r as i,i as l,A as u}from"./entry.ac81eb43.js";const S=l("i",{class:"pi pi-clock mr-2"},null,-1),T=l("span",{class:"text-lg"},"Waiting",-1),k=l("i",{class:"pi pi-download mr-2"},null,-1),A=l("span",{class:"text-lg"},"Pull",-1),B=l("i",{class:"pi pi-play mr-2"},null,-1),P=l("span",{class:"text-lg"},"Stream",-1),R=l("i",{class:"pi pi-eye mr-2"},null,-1),N=l("span",{class:"text-lg"},"Watch",-1),Q=l("i",{class:"pi pi-users mr-2"},null,-1),U=l("span",{class:"text-lg"},"Clients",-1),M=V({__name:"ChannelActions",props:{channel:{type:String,default:()=>""},clients:{type:Array,default:()=>[]}},setup(t){const{isStreamReady:m}=g();return(W,o)=>{const c=h,a=i("TabPanel"),_=f,d=x,r=C,p=i("TabView");return v(),y("div",{class:b(["col-12 md:col-12",w(m)?"":"div-disabled"])},[e(p,null,{default:n(()=>[e(a,null,{header:n(()=>[S,T]),default:n(()=>[l("div",null,[e(c,{modelValue:t.channel,"onUpdate:modelValue":o[0]||(o[0]=s=>u(channel)?channel.value=s:null),mode:"waiting"},null,8,["modelValue"])])]),_:1}),e(a,null,{header:n(()=>[k,A]),default:n(()=>[e(c,{modelValue:t.channel,"onUpdate:modelValue":o[1]||(o[1]=s=>u(channel)?channel.value=s:null),mode:"pull"},null,8,["modelValue"])]),_:1}),e(a,null,{header:n(()=>[B,P]),default:n(()=>[e(_,{channel:t.channel},null,8,["channel"])]),_:1}),e(a,null,{header:n(()=>[R,N]),default:n(()=>[e(d,{channel:t.channel,type:"queue"},null,8,["channel"])]),_:1}),e(a,null,{header:n(()=>[Q,U]),default:n(()=>[e(r,{clients:t.clients},null,8,["clients"])]),_:1})]),_:1})],2)}}});export{M as _};
