import u from"./ActionButtons.cbc93356.js";import f from"./StatStripCard.4a3e0b45.js";import{_ as h}from"./Channels.vue_vue_type_script_setup_true_lang.1192f55e.js";import{a as x,b,f as v,o,h as n,i as t,u as e,j as r,t as y,s as g,r as k,p as S,k as C,l as q}from"./entry.ac81eb43.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.ee05719a.js";import"./InputText.95e7607b.js";import"./index.esm.108bfc55.js";import"./request.95ba5b66.js";import"./useToastMessage.dd22ad89.js";import"./SendMessage.e7485725.js";import"./InputNumber.f5d5af79.js";import"./CodeEditor.f3e0f57e.js";import"./Field.vue_vue_type_script_setup_true_lang.a9d10359.js";import"./DataField.vue_vue_type_script_setup_true_lang.6b0a27ba.js";import"./cqrs_request.99b5023f.js";import"./StatStripCardBox.e5c41b15.js";const w=a=>(S("data-v-f2d4ba2f"),a=a(),C(),a),V={class:"flex flex-column container"},I={class:"flex justify-content-between"},B={class:"flex flex-column header-row"},D=w(()=>t("div",{class:"flex align-items-center mb-1"},[t("span",{class:"material-symbols-outlined mr-1 text-4xl"},"repartition"),t("span",{class:"text-4xl"},"Commands & Queries")],-1)),L={key:0},j={key:1,class:"flex"},A={key:0,class:"material-symbols-outlined text-cqrs mr-1 text-lg"},N={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},R={class:"ml-1"},E={key:0,class:"flex justify-content-end align-items-center"},Q={class:"stats-row"},U={class:"flex-grow-1 channels-parent"},$={class:"bg-white border-round-2xl border-1 border-cqrs"},z=x({__name:"index",setup(a){const{cqrsData:s,isStreamReady:c}=b();return v(),(F,i)=>{const l=k("Skeleton"),_=u,d=f,m=h;return o(),n("div",V,[t("div",I,[t("div",B,[D,e(c)?(o(),n("div",j,[e(s).isActive?(o(),n("span",A,"radio_button_checked")):(o(),n("span",N,"radio_button_unchecked")),t("span",R,"Last Activity: "+y(e(s).lastSeen),1)])):(o(),n("div",L,[r(l,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),e(s).channelsList.length>0?(o(),n("div",E,[r(_)])):g("",!0)]),t("div",Q,[r(d,{items:e(s).stats.Items,"background-color":"bg-cqrs","border-color":"border-cqrs"},null,8,["items"])]),t("div",U,[t("div",$,[r(m,{modelValue:e(s).channelsList,"onUpdate:modelValue":i[0]||(i[0]=p=>e(s).channelsList=p)},null,8,["modelValue"])])])])}}});const nt=q(z,[["__scopeId","data-v-f2d4ba2f"]]);export{nt as default};
