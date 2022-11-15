import B from"./InputNumber.f5d5af79.js";import{u as E}from"./request.95ba5b66.js";import{u as Y}from"./useToastMessage.dd22ad89.js";import{a as A,b as H}from"./queues_request.a2dc7f2e.js";import{a as Q,b as U,v as b,f as F,y as x,I as O,o as n,h as r,i as s,m as C,u as l,j as o,A as P,a5 as q,s as y,w as c,H as j,r as M,t as p,L as z,p as G,k as K,l as W}from"./entry.ac81eb43.js";import{_ as $}from"./ReceivedMessage.vue_vue_type_script_setup_true_lang.d1f9dcab.js";import"./Field.vue_vue_type_script_setup_true_lang.a9d10359.js";import"./DataField.vue_vue_type_script_setup_true_lang.6b0a27ba.js";const R=u=>(G("data-v-9293d516"),u=u(),K(),u),J={class:"grid-nogutter grid col-12 p-0"},X={key:0,class:"col-12 md:12 border-bottom-1 border-light-grey"},Z={class:"flex align-items-end grid p-fluid col-3 pb-0 mb-1"},ee={class:"col-12 md:col-6"},se={key:1,class:"col-12 md:12 border-bottom-1 border-light-grey"},te={class:"flex align-items-end grid p-fluid col-3 pb-0 mb-1"},oe={class:"col-12 md:col-6 pt-0"},ae={key:2,class:"col-12 md:12"},le={class:"white-space-nowrap overflow-hidden text-overflow-ellipsis",style:{width:"15em"}},de={key:0,class:"white-space-nowrap overflow-hidden text-overflow-ellipsis",style:{width:"10em"}},ie={key:1},ne=R(()=>s("code",{class:"text-grey font-italic"},"N/A",-1)),re=[ne],ce={key:0,class:"white-space-nowrap overflow-hidden text-overflow-ellipsis",style:{width:"35em"}},ue={class:"text-overflow-ellipsis"},me={key:1},pe=R(()=>s("code",{class:"text-grey font-italic"},"No Body",-1)),ve=[pe],ge=Q({__name:"ChannelReceive",props:{modelValue:{type:String,default:()=>""},mode:{type:String,default:()=>"waiting"}},setup(u){const _=u,{isStreamReady:f}=U();let d=b([]);const V=E(),D=F(),m=b(!1),k=Y(),v=x("queue-channel-receive-pull-count",1),g=x("queue-channel-receive-peek-count",1024),w=b();O(()=>{d.value=[],w.value=null});const I=a=>{L(a.data.sequence)},S=()=>{m.value=!0,j(()=>{m.value=!0});let a;_.mode==="waiting"?a=new A(_.modelValue,g.value):a=new H(_.modelValue,v.value),V.sendRequest(a).then(t=>{d.value=t.data,d.value?d.value.forEach((h,i)=>{h.index=i+1}):d.value=[]}).catch(t=>{t.isCanceled?k.showWarn("Request Canceled"):k.showError("Error getting queue messages",t.messages)}).finally(()=>{m.value=!1})},L=a=>{D.open($,{props:{header:"View a Queue Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{message:d.value.find(t=>t.sequence===a)}})},N=a=>z(a).format("YYYY-MM-DD HH:mm:ss");return(a,t)=>{const h=B,i=M("Column"),T=M("DataTable");return n(),r("div",J,[u.mode==="waiting"?(n(),r("div",X,[s("div",Z,[s("div",{class:C(["col-12 md:col-6 pt-0",!l(f)||m.value?"div-disabled":""])},[o(h,{label:"Number of Messages",modelValue:l(g),"onUpdate:modelValue":t[0]||(t[0]=e=>P(g)?g.value=e:null),min:1,max:1024},null,8,["modelValue"])],2),s("div",ee,[o(l(q),{label:"Peek",class:"button-queue",onClick:S,icon:"pi pi-clock",loading:m.value,disabled:!l(f)},null,8,["loading","disabled"])])])])):y("",!0),u.mode==="pull"?(n(),r("div",se,[s("div",te,[s("div",{class:C(["col-12 md:col-6 pt-0",!l(f)||m.value?"div-disabled":""])},[o(h,{label:"Number of Messages",modelValue:l(v),"onUpdate:modelValue":t[1]||(t[1]=e=>P(v)?v.value=e:null),min:1,max:1024},null,8,["modelValue"])],2),s("div",oe,[o(l(q),{label:"Pull",class:"button-queue",onClick:S,icon:"pi pi-download",loading:m.value},null,8,["loading"])])])])):y("",!0),l(d).length>0?(n(),r("div",ae,[o(T,{value:l(d),paginator:l(d).length>25,rows:25,responsiveLayout:"scroll",class:"p-datatable-sm",dataKey:"messageId",onRowSelect:I,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[25,50,100],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Messages",selection:w.value,"onUpdate:selection":t[2]||(t[2]=e=>w.value=e),selectionMode:"single"},{empty:c(()=>[]),default:c(()=>[o(i,{header:"#",headerStyle:"width: 1em"},{body:c(({index:e})=>[s("div",null,p(e+1),1)]),_:1}),o(i,{header:"Sequence",field:"sequence",sortable:"",headerStyle:"width: 4em"},{body:c(({data:e})=>[s("div",null,p(e.sequence),1)]),_:1}),o(i,{field:"timestamp",header:"Timestamp",sortable:"",headerStyle:"width: 10em"},{body:c(({data:e})=>[s("div",null,p(N(e.timestamp)),1)]),_:1}),o(i,{header:"Message Id",field:"messageId",sortable:"",headerStyle:"width: 10em"},{body:c(({data:e})=>[s("div",le,p(e.messageId),1)]),_:1}),o(i,{header:"Metadata",field:"metadata",headerStyle:"width: 10em"},{body:c(({data:e})=>[e.metadata?(n(),r("div",de,[s("code",null,p(e.metadata),1)])):(n(),r("div",ie,re))]),_:1}),o(i,{header:"Body",field:"body",headerStyle:"width: 35em"},{body:c(({data:e})=>[e.body?(n(),r("div",ce,[s("code",ue,p(e.body),1)])):(n(),r("div",me,ve))]),_:1})]),_:1},8,["value","paginator","selection"])])):y("",!0)])}}}),xe=W(ge,[["__scopeId","data-v-9293d516"]]);export{xe as default};
