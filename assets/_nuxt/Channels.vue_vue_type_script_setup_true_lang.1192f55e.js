import z from"./InputText.95e7607b.js";import B from"./ActionButtons.cbc93356.js";import{a as D,v as V,y as F,a2 as H,f as N,b as Q,o as c,h as m,i as t,m as y,u as l,j as s,w as o,F as U,s as x,H as I,a3 as O,r as h,M as $,t as u}from"./entry.ac81eb43.js";const K={class:"grid-nogutter grid col-12 p-3"},E=t("div",{class:"flex justify-content-start align-items-center border-bottom-2 border-light-grey pb-2"},[t("span",{class:"material-icons-outlined text-grey text-4xl"},"subject"),t("span",{class:"text-grey font-bold text-2xl font-bold ml-2"},"Channels")],-1),M=[E],G={class:"col-12 md:12"},J={class:"flex align-items-end mb-2 mt-2 justify-content-between border-bottom-1 border-light-grey pt-2 pb-3"},W={class:"flex"},X={class:"flex align-items-end mb-1 field-checkbox ml-2"},Y={class:"flex align-items-end mb-1 field-checkbox ml-2"},Z={class:"flex align-items-end mb-1 field-checkbox ml-2"},ee={class:"col-12 md:12"},te={key:0,class:"min-h-0 mt-3"},se=t("div",{class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},[t("span",{class:"font-italic font-medium text-grey"},"No Channels Found")],-1),le={class:"flex ml-2"},oe={key:0,class:"material-symbols-outlined text-cqrs text-lg"},ne={key:1,class:"material-symbols-outlined text-grey text-center text-lg"},ae=t("div",{class:"px-3 pt-0 pb-3 text-center font-bold"},"Customized Buttons",-1),ie={class:"white-space-nowrap overflow-hidden text-overflow-ellipsis"},de={key:0,class:"min-h-0 mt-3"},re={class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},ce={key:0,class:"font-italic font-medium text-grey"},me={key:2,class:"col-12 md:12"},ue={class:"flex justify-content-center align-items-center bg-white",style:{"min-height":"42vh"}},ge=D({__name:"Channels",props:{modelValue:{type:Object,default:()=>[]}},setup(g){const S=g,C=V(),d=F("cqrs-channels-filters",{onlyActive:!1,showCommands:!0,showQueries:!0}),p=V(""),b=H();N();const{isStreamReady:i,setCQRSSelectedChannel:P}=Q(),A=a=>{P(a.data.name,a.data.type),I(()=>{const n=b.fullPath==="/cqrs/"?b.fullPath+"channel":b.fullPath+"/channel";O(n)})},w=a=>p.value.length>0?a.name.toLowerCase().includes(p.value.toLowerCase()):!0,_=()=>S.modelValue.filter(a=>d.value.onlyActive&&!a.isActive?!1:d.value.showCommands&&a.type==="commands"||d.value.showQueries&&a.type==="queries"?w(a):!1);return(a,n)=>{const T=z,f=h("Checkbox"),r=h("Column"),L=h("Tag"),j=h("InputText"),k=h("Button"),R=h("DataTable"),q=B;return c(),m("div",K,[t("div",{class:y(["col-12 md:12",l(i)?"":"div-disabled"])},M,2),t("div",G,[t("div",J,[t("div",W,[s(T,{modelValue:p.value,"onUpdate:modelValue":n[0]||(n[0]=e=>p.value=e),disabled:!l(i),placeholder:"Search by channel name",styleProp:"min-width: 20rem",iconClass:"pi pi-search"},null,8,["modelValue","disabled"]),t("div",X,[s(f,{inputId:"binary",modelValue:l(d).showCommands,"onUpdate:modelValue":n[1]||(n[1]=e=>l(d).showCommands=e),binary:!0,class:"ml-2",disabled:!l(i)},null,8,["modelValue","disabled"]),t("label",{class:y(l(i)?"text-grey":"text-light-grey"),for:"binary"},"Commands",2)]),t("div",Y,[s(f,{inputId:"binary",modelValue:l(d).showQueries,"onUpdate:modelValue":n[2]||(n[2]=e=>l(d).showQueries=e),binary:!0,class:"ml-2",disabled:!l(i)},null,8,["modelValue","disabled"]),t("label",{class:y(l(i)?"text-grey":"text-light-grey"),for:"binary"},"Queries",2)]),t("div",Z,[s(f,{inputId:"binary",modelValue:l(d).onlyActive,"onUpdate:modelValue":n[3]||(n[3]=e=>l(d).onlyActive=e),binary:!0,class:"ml-2",disabled:!l(i)},null,8,["modelValue","disabled"]),t("label",{class:y(l(i)?"text-grey":"text-light-grey"),for:"binary"},"Only Active",2)])])])]),t("div",ee,[l(i)&&_().length>0?(c(),m("div",te,[s(R,{value:_(),paginator:_().length>25,rows:25,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[25,50,100],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Channels",responsiveLayout:"scroll",class:"p-datatable-sm",selection:C.value,"onUpdate:selection":n[4]||(n[4]=e=>C.value=e),selectionMode:"single",dataKey:"channelKey",onRowSelect:A},{empty:o(()=>[se]),default:o(()=>[s(r,{header:"#",headerStyle:"width: 1rem"},{body:o(({index:e})=>[$(u(e+1),1)]),_:1}),s(r,{field:"isActive",header:"Active",headerStyle:"width: 1rem"},{body:o(({data:e})=>[t("div",le,[e.isActive?(c(),m("span",oe,"radio_button_checked")):(c(),m("span",ne,"radio_button_unchecked"))])]),_:1}),s(r,{field:"type",header:"Type",headerStyle:"width: 8rem"},{body:o(({data:e})=>[t("div",null,[s(L,{class:"font-light pt-0 pb-0 pl-2 pr-2 bg-white border-1 text-cqrs border-cqrs",value:e.type==="commands"?"Commands":"Queries",rounded:!0},null,8,["value"])])]),filter:o(({filterModel:e})=>[s(j,{type:"text",modelValue:e.value,"onUpdate:modelValue":v=>e.value=v,class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:o(({filterCallback:e})=>[s(k,{type:"button",icon:"pi pi-times",onClick:v=>e(),class:"p-button-secondary"},null,8,["onClick"])]),filterapply:o(({filterCallback:e})=>[s(k,{type:"button",icon:"pi pi-check",onClick:v=>e(),class:"p-button-success"},null,8,["onClick"])]),filterfooter:o(()=>[ae]),_:1}),s(r,{field:"channel",header:"Channel",headerStyle:"width: 30rem"},{body:o(({data:e})=>[t("div",ie,u(e.name),1)]),_:1}),s(r,{field:"lastActivity",header:"Last Activity",sortable:"",headerStyle:"width:10rem"},{body:o(({data:e})=>[t("div",null,u(e.lastActivityHuman),1)]),_:1}),s(r,{field:"incoming.messages",header:"Sent",sortable:"",headerStyle:"width:11rem"},{body:o(({data:e})=>[t("div",null,u(e.incoming.messagesHumanized)+"/"+u(e.incoming.volumeHumanized),1)]),_:1}),s(r,{field:"outgoing.messages",header:"Delivered",sortable:"",headerStyle:"width:11rem"},{body:o(({data:e})=>[t("div",null,u(e.outgoing.messagesHumanized)+"/"+u(e.outgoing.volumeHumanized),1)]),_:1}),s(r,{field:"total.clients",header:"Clients",sortable:"",headerStyle:"width:5rem"},{body:o(({data:e})=>[t("div",null,u(e.total.clientsHumanized),1)]),_:1})]),_:1},8,["value","paginator","selection"])])):(c(),m(U,{key:1},[g.modelValue.length>0?(c(),m("div",de,[t("div",re,[l(i)?(c(),m("span",ce,"No Channels found")):x("",!0)])])):x("",!0)],64)),g.modelValue.length===0?(c(),m("div",me,[t("div",ue,[s(q)])])):x("",!0)])])}}});export{ge as _};
