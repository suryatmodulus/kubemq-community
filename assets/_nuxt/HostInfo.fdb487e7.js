import{a as v,o as f,c as p,w as o,r as a,i as e,t as s,j as i,m as c,C as r,p as g,k as b,l as x}from"./entry.ac81eb43.js";const n=t=>(g("data-v-54e5501e"),t=t(),b(),t),y={class:"line-container"},V={class:"flex justify-content-start align-items-center"},C=n(()=>e("span",{class:"material-icons text-grey text-3xl"},"dns",-1)),U={class:"ml-1"},w={class:"text-grey font-bold text-2xl font-bold"},z={class:"flex justify-content-end align-items-center"},S={class:"line-container mb-2 text-lg font-medium"},k=n(()=>e("span",null,"Uptime:",-1)),I={class:"line-container mb-2 text-lg font-medium"},j=n(()=>e("span",null,"Role:",-1)),B={class:"line-container mb-2 text-lg font-medium"},T=n(()=>e("span",null,"Version:",-1)),A={class:"line-container mb-2 text-lg font-medium"},D=n(()=>e("span",null,"Connected Active Clients:",-1)),H={class:"line-container text-lg font-medium"},N=n(()=>e("span",null,"Last Seen:",-1)),O={class:"flex justify-content-between align-items-center"},L={class:"col-12 md:col-6 pl-0 pr-3"},M={class:"line-container mb-2"},R=n(()=>e("span",null,"CPU CORS: ",-1)),$={class:"line-container mb-2 ml-0"},q=n(()=>e("span",null,"OS Threads: ",-1)),P={class:"line-container ml-0"},E=n(()=>e("span",null,"Utilization: ",-1)),F={class:"line-container"},G={class:"surface-300 w-full mt-2",style:{height:"7px","border-radius":"4px"}},J={class:"col-12 md:col-6 pl-3 pr-0"},K={class:"line-container mb-2"},Q=n(()=>e("span",null,"Memory Used: ",-1)),W={class:"line-container mb-2"},X=n(()=>e("span",null,"Memory Allocated: ",-1)),Y={class:"line-container"},Z=n(()=>e("span",null,"Utilization: ",-1)),ee={class:"line-container"},te={class:"surface-300 w-full mt-2",style:{height:"7px","border-radius":"4px"}},se=v({__name:"HostInfo",props:{modelValue:{type:Object,default:()=>({host:"Unknown Host"})},showSkeleton:{type:Boolean,default:!1}},setup(t){const d=l=>l<50?"bg-green-500":l<75?"bg-orange-500":"bg-red-500",m=l=>{switch(l.toLowerCase()){case"unknown":return"bg-gray-500";case"running":return"status-running";default:return"status-not-running"}};return(l,ne)=>{const h=a("Tag"),u=a("Divider"),_=a("Card");return f(),p(_,{class:"shadow-none border-round-xl border-1 kubemq-border-color"},{title:o(()=>[e("div",y,[e("div",V,[C,e("div",U,[e("span",w,s(t.modelValue.host),1)])]),e("div",z,[i(h,{class:c(m(t.modelValue.status)),value:t.modelValue.status,rounded:!0},null,8,["class","value"])])])]),subtitle:o(()=>[i(u,{class:"my-3"}),e("div",S,[k,e("span",null,s(t.modelValue.uptime),1)]),e("div",I,[j,e("span",null,s(t.modelValue.role),1)]),e("div",B,[T,e("span",null,s(t.modelValue.version),1)]),e("div",A,[D,e("span",null,s(t.modelValue.activeClients),1)]),e("div",H,[N,e("span",null,s(t.modelValue.lastUpdate),1)]),i(u,{class:"my-3"})]),content:o(()=>[e("div",O,[e("div",L,[e("div",M,[R,e("span",null,s(t.modelValue.cpuCores),1)]),e("div",$,[q,e("span",null,s(t.modelValue.osThreads),1)]),e("div",P,[E,e("span",null,s(t.modelValue.cpuUtilization)+"%",1)]),e("div",F,[e("div",G,[e("div",{class:c([d(t.modelValue.cpuUtilization),"h-full"]),style:r([{"border-radius":"4px"},`width:${t.modelValue.cpuUtilization}%;`])},null,6)])])]),e("div",J,[e("div",K,[Q,e("span",null,s(t.modelValue.memoryUsed),1)]),e("div",W,[X,e("span",null,s(t.modelValue.memoryAllocated),1)]),e("div",Y,[Z,e("span",null,s(t.modelValue.memoryUtilization)+"%",1)]),e("div",ee,[e("div",te,[e("div",{class:c([d(t.modelValue.memoryUtilization),"h-full"]),style:r([{"border-radius":"4px"},`width:${t.modelValue.memoryUtilization}%;`])},null,6)])])])])]),_:1})}}}),oe=x(se,[["__scopeId","data-v-54e5501e"]]);export{oe as default};
