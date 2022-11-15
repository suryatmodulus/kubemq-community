import B from"./InputText.95e7607b.js";import D from"./ActionButtons.e5fc7668.js";import{a as F,v as S,y as H,a2 as N,f as R,b as U,o as r,h as c,i as t,m as b,u as n,j as l,w as o,F as I,s as x,H as O,a3 as $,r as h,M as K,t as u}from"./entry.ac81eb43.js";const M={class:"grid-nogutter grid col-12 p-3"},q=t("div",{class:"flex justify-content-start align-items-center border-bottom-2 border-light-grey pb-2"},[t("span",{class:"material-icons-outlined text-grey text-4xl"},"subject"),t("span",{class:"text-grey font-bold text-2xl font-bold ml-2"},"Channels")],-1),G=[q],J={class:"col-12 md:12"},Q={class:"flex align-items-end mb-2 mt-2 justify-content-between border-bottom-1 border-light-grey pt-2 pb-3"},W={class:"flex"},X={class:"flex align-items-end mb-1 field-checkbox ml-2"},Y={class:"flex align-items-end mb-1 field-checkbox ml-2"},Z={class:"flex align-items-end mb-1 field-checkbox ml-2"},ee={class:"col-12 md:12"},te={key:0,class:"min-h-0 mt-3"},se=t("div",{class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},[t("span",{class:"font-italic font-medium text-grey"},"No Channels Found")],-1),le={class:"flex ml-2"},ne={key:0,class:"material-symbols-outlined text-pubsub text-lg"},oe={key:1,class:"material-symbols-outlined text-grey text-center text-lg"},ae=t("div",{class:"px-3 pt-0 pb-3 text-center font-bold"},"Customized Buttons",-1),ie={class:"white-space-nowrap overflow-hidden text-overflow-ellipsis"},de={key:0,class:"min-h-0 mt-3"},re={class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},ce={key:0,class:"font-italic font-medium text-grey"},ue={key:2,class:"col-12 md:12"},me={class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},ye=F({__name:"Channels",props:{modelValue:{type:Object,default:()=>[]}},setup(y){const V=y,w=S(),i=H("pubsub-channels-filters",{onlyActive:!1,showEvents:!0,showEventsStore:!0}),p=S(""),v=N();R();const{isStreamReady:a,setPubSubSelectedChannel:P}=U(),A=m=>{P(m.data.name,m.data.type),O(()=>{const s=v.fullPath==="/pubsub/"?v.fullPath+"channel":v.fullPath+"/channel";$(s)})},k=m=>p.value.length>0?m.name.toLowerCase().includes(p.value.toLowerCase()):!0,g=()=>V.modelValue.filter(s=>i.value.onlyActive&&!s.isActive?!1:i.value.showEvents&&s.type==="events"||i.value.showEventsStore&&s.type==="events_store"?k(s):!1);return(m,s)=>{const E=B,_=h("Checkbox"),d=h("Column"),T=h("Tag"),L=h("InputText"),C=h("Button"),j=h("DataTable"),z=D;return r(),c("div",M,[t("div",{class:b([n(a)?"":"div-disabled","col-12 md:12"])},G,2),t("div",J,[t("div",Q,[t("div",W,[l(E,{modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=e=>p.value=e),disabled:!n(a),placeholder:"Search by channel name",styleProp:"min-width: 20rem",iconClass:"pi pi-search"},null,8,["modelValue","disabled"]),t("div",X,[l(_,{inputId:"binary",modelValue:n(i).showEvents,"onUpdate:modelValue":s[1]||(s[1]=e=>n(i).showEvents=e),binary:!0,class:"ml-2",disabled:!n(a)},null,8,["modelValue","disabled"]),t("label",{class:b(n(a)?"text-grey":"text-light-grey"),for:"binary"},"Events",2)]),t("div",Y,[l(_,{inputId:"binary",modelValue:n(i).showEventsStore,"onUpdate:modelValue":s[2]||(s[2]=e=>n(i).showEventsStore=e),binary:!0,class:"ml-2",disabled:!n(a)},null,8,["modelValue","disabled"]),t("label",{class:b(n(a)?"text-grey":"text-light-grey"),for:"binary"},"Events-Store",2)]),t("div",Z,[l(_,{inputId:"binary",modelValue:n(i).onlyActive,"onUpdate:modelValue":s[3]||(s[3]=e=>n(i).onlyActive=e),binary:!0,class:"ml-2",disabled:!n(a)},null,8,["modelValue","disabled"]),t("label",{class:b(n(a)?"text-grey":"text-light-grey"),for:"binary"},"Only Active",2)])])])]),t("div",ee,[n(a)&&g().length>0?(r(),c("div",te,[l(j,{value:g(),paginator:g().length>25,rows:25,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[25,50,100],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Channels",responsiveLayout:"scroll",class:"p-datatable-sm",selection:w.value,"onUpdate:selection":s[4]||(s[4]=e=>w.value=e),selectionMode:"single",dataKey:"channelKey",onRowSelect:A},{empty:o(()=>[se]),default:o(()=>[l(d,{header:"#",headerStyle:"width: 1rem"},{body:o(({index:e})=>[K(u(e+1),1)]),_:1}),l(d,{field:"isActive",header:"Active",headerStyle:"width: 1rem"},{body:o(({data:e})=>[t("div",le,[e.isActive?(r(),c("span",ne,"radio_button_checked")):(r(),c("span",oe,"radio_button_unchecked"))])]),_:1}),l(d,{field:"type",header:"Type",headerStyle:"width: 8rem"},{body:o(({data:e})=>[t("div",null,[l(T,{class:"font-light pt-0 pb-0 pl-2 pr-2 bg-white border-1 text-pubsub border-pubsub",value:e.type==="events"?"Events":"Events-Store",rounded:!0},null,8,["value"])])]),filter:o(({filterModel:e})=>[l(L,{type:"text",modelValue:e.value,"onUpdate:modelValue":f=>e.value=f,class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:o(({filterCallback:e})=>[l(C,{type:"button",icon:"pi pi-times",onClick:f=>e(),class:"p-button-secondary"},null,8,["onClick"])]),filterapply:o(({filterCallback:e})=>[l(C,{type:"button",icon:"pi pi-check",onClick:f=>e(),class:"p-button-success"},null,8,["onClick"])]),filterfooter:o(()=>[ae]),_:1}),l(d,{field:"channel",header:"Channel",headerStyle:"width: 30rem"},{body:o(({data:e})=>[t("div",ie,u(e.name),1)]),_:1}),l(d,{field:"lastActivity",header:"Last Activity",sortable:"",headerStyle:"width:10rem"},{body:o(({data:e})=>[t("div",null,u(e.lastActivityHuman),1)]),_:1}),l(d,{field:"incoming.messages",header:"Sent",sortable:"",headerStyle:"width:11rem"},{body:o(({data:e})=>[t("div",null,u(e.incoming.messagesHumanized)+"/"+u(e.incoming.volumeHumanized),1)]),_:1}),l(d,{field:"outgoing.messages",header:"Delivered",sortable:"",headerStyle:"width:11rem"},{body:o(({data:e})=>[t("div",null,u(e.outgoing.messagesHumanized)+"/"+u(e.outgoing.volumeHumanized),1)]),_:1}),l(d,{field:"total.clients",header:"Clients",sortable:"",headerStyle:"width:5rem"},{body:o(({data:e})=>[t("div",null,u(e.total.clientsHumanized),1)]),_:1})]),_:1},8,["value","paginator","selection"])])):(r(),c(I,{key:1},[y.modelValue.length>0?(r(),c("div",de,[t("div",re,[n(a)?(r(),c("span",ce,"No Channels found")):x("",!0)])])):x("",!0)],64)),y.modelValue.length===0?(r(),c("div",ue,[t("div",me,[l(z)])])):x("",!0)])])}}});export{ye as _};
