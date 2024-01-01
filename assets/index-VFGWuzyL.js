import{s as Ue,a as Ne,m as qe,t as D,i as h,c,S as T,b as U,d as C,e as X,f as ge,g as _,h as je,j as v,k as d,l as Ae,n as Fe,r as ze,o as Re,p as Z,u as pe,q as H,v as Be,w as O,x as he,y as He,z as Oe,A as z,B as We,I as Ve,C as K,F as J,D as G,E as Xe,G as Ze,H as Ge,J as Je,K as Ee,L as Qe,M as Ke,N as Ye,O as et,P as tt,Q as nt,R as st,T as at,U as $,V as ot,W as rt,X as N,Y as it,Z as lt,_ as ct,$ as ut,a0 as dt}from"./vendor-a3Xa1DsI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const gt="modulepreload",pt=function(e,t){return new URL(e,t).href},ee={},q=function(t,a,n){let s=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");s=Promise.all(a.map(r=>{if(r=pt(r,n),r in ee)return;ee[r]=!0;const g=r.endsWith(".css"),l=g?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const m=o[p];if(m.href===r&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const u=document.createElement("link");if(u.rel=g?"stylesheet":gt,g||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),g)return new Promise((p,m)=>{u.addEventListener("load",p),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},ht=C('<div class="loading loading-spinner">'),mt=C('<button><span class="truncate rounded-none">'),me=e=>{const[t,a]=Ue(e,["class","loading","icon"]);return(()=>{const n=mt(),s=n.firstChild;return Ne(n,qe({get class(){return D("btn flex items-center",t.loading?"btn-disabled":t.class)}},a),!1,!0),h(n,c(T,{get when(){return t.loading},get children(){return ht()}}),s),h(s,()=>e.icon||e.children),U(()=>s.classList.toggle("flex-1",!t.icon)),n})()},ft=C('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>'),Xn=e=>{const{title:t,onCollapse:a}=e,n=()=>{const o="collapse-open",r="collapse-close";return e.isOpen?o:r},s=()=>{const o="opacity-100",r="opacity-0";return e.isOpen?o:r};return(()=>{const o=ft(),r=o.firstChild,g=r.nextSibling;return r.$$click=()=>a(!e.isOpen),h(r,t),h(g,c(T,{get when(){return e.isOpen},get children(){return ge(()=>e.children)()}})),U(l=>{const i=D(n(),"collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md"),u=D(s(),"collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5");return i!==l._v$&&_(o,l._v$=i),u!==l._v$2&&_(g,l._v$2=u),l},{_v$:void 0,_v$2:void 0}),o})()};X(["click"]);const vt=["acid","aqua","autumn","black","bumblebee","business","cmyk","coffee","corporate","cupcake","cyberpunk","dark","dim","dracula","emerald","fantasy","forest","garden","halloween","lemonade","light","lofi","luxury","night","nord","pastel","retro","sunset","synthwave","valentine","winter","wireframe"];var P=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(P||{});const yt=10,Zn={title:{align:"center",style:{color:"gray",fontSize:"16px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"16px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:yt,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"13px"},formatter:e=>je(e).toString()}}};var Y=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Y||{}),fe=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(fe||{}),ve=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ve||{}),k=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(k||{}),F=(e=>(e.EN="en-US",e.ZH="zh-CN",e.VI="vi-VN",e))(F||{}),ye=(e=>(e.Details="details",e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.SniffHost="sniffHost",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.SourceIP="sourceIP",e.SourcePort="sourcePort",e.Destination="destination",e.InboundUser="inboundUser",e))(ye||{});const te=200,be=Object.values(ye),bt={...Object.fromEntries(be.map(e=>[e,!0])),ID:!1};var I=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(I||{}),wt=(e=>(e.Global="global",e.Rule="rule",e.Direct="direct",e))(wt||{}),we=(e=>(e.Info="info",e.Error="error",e.Warning="warning",e.Debug="debug",e.Silent="silent",e))(we||{});const xt=[200,300,500,800,1e3],Pt=xt[0],Ct={add:"Add",overview:"Overview",proxies:"Proxies",proxiesSettings:"Proxies Settings",rules:"Rules",connections:"Connections",connectionsSettings:"Connections Settings",connectionsDetails:"Connections Details",logs:"Logs",logsSettings:"Logs Settings",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",sniffHost:"Sniff Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",sourceIP:"Source IP",sourcePort:"Source Port",destination:"Destination",inboundUser:"Inbound User",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForIPv6SupportTest:"URL for IPv6 support test",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically Close connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",tableSize:"Table size",logLevel:"Log Level",info:"info",silent:"silent",debug:"debug",warning:"warning",error:"error",logMaxRows:"Log Maximum Reserved Rows",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",latencyTestTimeoutDuration:"Latency Test Timeout Duration",all:"All",sequence:"Sequence",payload:"Payload",details:"Details",endpointURL:"Endpoint URL",secret:"Secret",global:"Global",rule:"Rule",direct:"Direct",active:"Active",closed:"Closed",sort:"Sort",hideUnAvailableProxies:"Hide UnAvailable Proxies",reloadConfig:"Reload Config",flushFakeIP:"Flush Fake-IP",tagClientSourceIPWithName:"Tag Client Source IP With Name",tag:"Tag",coreConfig:"Core Config",xdConfig:"XD Config",version:"Version",expire:"Expire",noExpire:"Null",allowLan:"Allow Lan",enableTunDevice:"Enable TUN Device",tunModeStack:"TUN Mode Stack",tunDeviceName:"TUN Device Name",interfaceName:"Interface Name",en:"English",zh:"Chinese",vi:"Vietnamese",port:"{{ name }} Port"},Tt={add:"添加",overview:"概览",proxies:"代理",proxiesSettings:"代理设置",rules:"规则",connections:"连接",connectionsSettings:"连接设置",connectionsDetails:"连接详情",logs:"日志",logsSettings:"日志设置",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",sniffHost:"嗅探域名",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",sourceIP:"源地址",sourcePort:"源端口",destination:"目标地址",inboundUser:"入站用户",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForIPv6SupportTest:"测试 IPv6 支持链接",urlForLatencyTest:"测速链接",autoCloseConns:"自动断开连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"双列渲染",updateGEODatabases:"更新 GEO 数据库",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",tableSize:"表格大小",logLevel:"日志等级",info:"信息",silent:"静默",debug:"调试",warning:"警告",error:"错误",logMaxRows:"日志最大保留行数",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",latencyTestTimeoutDuration:"测速超时时间",all:"全部",sequence:"序列号",payload:"内容",details:"详情",endpointURL:"后端地址",secret:"密钥",global:"全局",rule:"规则",direct:"直连",active:"活动",closed:"已关闭",sort:"排序",hideUnAvailableProxies:"隐藏不可用节点",reloadConfig:"重载配置",flushFakeIP:"清空 Fake-IP",tagClientSourceIPWithName:"为客户端源 IP 地址添加名称标记",tag:"标记",coreConfig:"核心配置",xdConfig:"XD 配置",version:"版本",expire:"到期时间",noExpire:"不限时",allowLan:"允许局域网访问",enableTunDevice:"开启 TUN 转发",tunModeStack:"TUN 模式堆栈",tunDeviceName:"TUN 设备名称",interfaceName:"接口名称",en:"英文",zh:"中文",vi:"越南",port:"{{ name }} 端口"},St={add:"Thêm",overview:"Tổng quan",proxies:"Proxies",proxiesSettings:"Cài đặt Proxies",rules:"Quy tắc",connections:"Kết nối",connectionsSettings:"Cài đặt kết nối",connectionsDetails:"Chi tiết kết nối",logs:"Nhật Ký",logsSettings:"Cài đặt Nhật ký",config:"Cấu hình",upload:"Tải lên",download:"Tải xuống",uploadTotal:"Tổng tải lên",downloadTotal:"Tổng tải xuống",activeConnections:"Kết nối đang hoạt động",memoryUsage:"Sử dụng bộ nhớ",traffic:"Lưu lượng",memory:"Bộ nhớ",down:"Xuống",up:"Lên",proxyProviders:"Nhà cung cấp Proxy",ruleProviders:"Nhà cung cấp Quy tắc",search:"Tìm kiếm",ID:"ID",type:"Loại",name:"Tên",process:"Quy trình",host:"Máy chủ",sniffHost:"Sniff Host",chains:"Chuỗi",connectTime:"Thời gian kết nối",dlSpeed:"Tốc độ tải xuống",ulSpeed:"Tốc độ tải lên",dl:"Tải xuống",ul:"Tải lên",sourceIP:"IP nguồn",sourcePort:"Cổng nguồn",destination:"Đích",inboundUser:"Người dùng đến",close:"Đóng",reset:"Đặt lại",dnsQuery:"Truy vấn DNS",dots:"Dots",bar:"Bar",auto:"Tự động",off:"Tắt",proxiesPreviewType:"Loại xem trước Proxies",urlForIPv6SupportTest:"URL kiểm tra hỗ trợ IPv6",urlForLatencyTest:"URL kiểm tra độ trễ",autoCloseConns:"Tự động đóng kết nối",useTwemoji:"Sử dụng Twemoji Mozilla Font",autoSwitchTheme:"Tự động chuyển đổi chủ đề",favDayTheme:"Chủ đề sáng yêu thích",favNightTheme:"Chủ đề tối yêu thích",renderInTwoColumns:"Hiển thị trong hai cột",updateGEODatabases:"Cập nhật Cơ sở dữ liệu GEO",restartCore:"Khởi động lại lõi",upgradeCore:"Nâng cấp lõi",proxiesSorting:"Sắp xếp Proxies",orderNatural:"Thứ tự ban đầu trong tệp cấu hình",orderLatency_asc:"Theo độ trễ từ thấp đến cao",orderLatency_desc:"Theo độ trễ từ cao đến thấp",orderName_asc:"Theo tên theo thứ tự bảng chữ cái (A-Z)",orderName_desc:"Theo tên theo thứ tự bảng chữ cái (Z-A)",ms:"ms",updated:"Đã cập nhật",tableSize:"Kích thước bảng",logLevel:"Mức độ Log",info:"Thông tin",silent:"Im lặng",debug:"Gỡ lỗi",warning:"Cảnh báo",error:"Lỗi",logMaxRows:"Số hàng tối đa của Log",xs:"Kích thước rất nhỏ",sm:"Kích thước nhỏ",md:"Kích thước bình thường",lg:"Kích thước lớn",switchEndpoint:"Chuyển đổi Điểm cuối",switchLanguage:"Chuyển đổi Ngôn ngữ",latencyTestTimeoutDuration:"Thời gian chờ kiểm tra độ trễ",all:"Tất cả",sequence:"Chuỗi",payload:"Payload",details:"Chi tiết",endpointURL:"URL điểm cuối",secret:"Bí mật",global:"Toàn cầu",rule:"Quy tắc",direct:"Trực tiếp",active:"Hoạt động",closed:"Đã đóng",sort:"Sắp xếp",hideUnAvailableProxies:"Ẩn Proxies không khả dụng",reloadConfig:"Tải lại Cấu hình",flushFakeIP:"Xóa Fake-IP",tagClientSourceIPWithName:"Đặt tên cho IP nguồn của máy khách",tag:"Tag",coreConfig:"Cấu hình lõi",xdConfig:"Cấu hình OHB",version:"Phiên bản",expire:"Hết hạn",noExpire:"Không hết hạn",allowLan:"Cho phép LAN",enableTunDevice:"Bật thiết bị TUN",tunModeStack:"TUN Mode Stack",tunDeviceName:"Tên thiết bị TUN",interfaceName:"Tên giao diện",en:"Tiếng Anh",zh:"Tiếng Trung",vi:"Tiếng Việt",port:"{{ name }} Cổng"},xe={[F.EN]:Ct,[F.ZH]:Tt,[F.VI]:St},[$t,Gn]=v(d(Reflect.has(xe,navigator.language)?navigator.language:F.VI),{name:"lang",storage:localStorage}),[Lt,Dt]=Ae(e=>[Fe(()=>Re(xe[e.locale]),ze)]),Pe=()=>Dt(),[Jn,En]=v(d(ve.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Qn,Kn]=v(d(k.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[Yn,es]=v(d(!1),{name:"hideUnAvailableProxies",storage:localStorage}),[ts,ns]=v(d(!0),{name:"renderProxiesInTwoColumns",storage:localStorage}),[W,ss]=v(d("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[E,as]=v(d("https://api-ipv6.ip.sb/ip"),{name:"urlForIPv6SupportTest",storage:localStorage}),[kt,os]=v(d(!1),{name:"autoCloseConns",storage:localStorage}),[It,rs]=v(d(!0),{name:"useTwemoji",storage:localStorage}),[Mt,is]=v(d(!1),{name:"autoSwitchTheme",storage:localStorage}),[_t,ls]=v(d("nord"),{name:"favDayTheme",storage:localStorage}),[Ut,cs]=v(d("sunset"),{name:"favNightTheme",storage:localStorage}),[us,ds]=v(d(I.XS),{name:"connectionsTableSize",storage:localStorage}),[gs,ps]=v(d(bt),{name:"connectionsTableColumnVisibility",storage:localStorage}),[hs,ms]=v(d(be),{name:"connectionsTableColumnOrder",storage:localStorage}),[fs,vs]=v(d([]),{name:"clientSourceIPTags",storage:localStorage}),[ys,bs]=v(d(I.XS),{name:"logsTableSize",storage:localStorage}),[ws,xs]=v(d(we.Info),{name:"logLevel",storage:localStorage}),[Ps,Cs]=v(d(Pt),{name:"logMaxRows",storage:localStorage}),Ts=e=>{let t="table-xs";switch(e){case I.XS:t="table-xs";break;case I.SM:t="table-sm";break;case I.MD:t="table-md";break;case I.LG:t="table-lg";break}return t},[B,Ss]=v(d(5e3),{name:"latencyTestTimeoutDuration",storage:localStorage}),Nt=()=>W().startsWith("https"),L=()=>Nt()?fe:Y,[qt,Ce]=d([]),[Te,jt]=d(null),$s=()=>{const[e,t]=d([]),[a,n]=d([]),[s,o]=d(!1);return Z(()=>{var g;const r=(g=Te())==null?void 0:g.connections;r&&pe(()=>{const l=Se(r,a());if(At(a()),!s()){const i=Ft(l,qt());n(l),t(i.slice(-te))}Ce(i=>i.slice(-(l.length+te)))})}),{closedConnections:e,activeConnections:a,paused:s,setPaused:o}},Se=(e,t)=>{const a=new Map;return t.forEach(n=>a.set(n.id,n)),e.map(n=>{const s=a.get(n.id);return!s||!H.isNumber(s.download)||!H.isNumber(s.upload)?{...n,downloadSpeed:0,uploadSpeed:0}:{...n,downloadSpeed:n.download-s.download,uploadSpeed:n.upload-s.upload}})},At=e=>{Ce(t=>H.unionWith(t,e,(a,n)=>a.id===n.id))},Ft=(e,t)=>H.differenceWith(t,e,(a,n)=>a.id===n.id),Ls=()=>w().delete("connections"),zt=e=>w().delete(`connections/${e}`),[Ds,ne]=d(!1),[ks,se]=d(!1),[Is,ae]=d(!1),[Ms,oe]=d(!1),[_s,re]=d(!1),Us=async()=>{const e=w();ne(!0);try{await e.put("configs",{searchParams:{force:!0},json:{path:"",payload:""}})}catch{}ne(!1)},Ns=async()=>{const e=w();ae(!0);try{await e.post("cache/fakeip/flush")}catch{}ae(!1)},qs=async()=>{const e=w();se(!0);try{await e.post("configs/geo")}catch{}se(!1)},js=async()=>{const e=w();oe(!0);try{await e.post("upgrade")}catch{}oe(!1)},As=async()=>{const e=w();re(!0);try{await e.post("restart")}catch{}re(!1)},Fs=()=>w().get("configs").json(),zs=async(e,t,a)=>{try{await w().patch("configs",{json:{[e]:t}}).json(),await a()}catch(n){Be.error(n.message)}},Rs=async()=>{const e=w(),{version:t}=await e.get("version").json();return t},Rt=()=>w().get("providers/proxies").json(),Bt=()=>w().get("proxies").json(),ie=e=>w().put(`providers/proxies/${e}`),$e=e=>w().get(`providers/proxies/${e}/healthcheck`,{timeout:5*1e3}).json(),Ht=(e,t)=>w().put(`proxies/${e}`,{body:JSON.stringify({name:t})}),le=(e,t,a,n)=>{const s=w();return t!==""?$e(t).then(o=>({delay:o[e]})):s.get(`proxies/${e}/delay`,{searchParams:{url:a,timeout:n}}).json()},ce=(e,t,a)=>w().get(`group/${e}/delay`,{searchParams:{url:t,timeout:a}}).json(),Bs=()=>w().get("rules").json(),Hs=()=>w().get("providers/rules").json(),Os=e=>w().put(`providers/rules/${e}`),Ws=async e=>{const t="https://api.github.com/repos/MetaCubeX/mihomo",a=/(alpha|beta|meta)-?(\w+)/.exec(e);if(!a)return!1;const n=a[1],s=a[2];if(n==="meta"){const{assets:o}=await O.get(`${t}/releases/latest`).json();return!o.some(({name:g})=>g.includes(s))}if(n==="alpha"){const{assets:o}=await O.get(`${t}/releases/tags/Prerelease-Alpha`).json();return!o.some(({name:g})=>g.includes(s))}return!1},Vs=e=>e.includes("sing-box"),Xs=e=>/^https?/.test(e)?e:`${window.location.protocol}//${e}`,R=()=>{const[e,t]=d({}),a=(s,o)=>{t({...e(),[s]:o})};return{map:e,set:a,setWithCallback:async(s,o)=>{a(s,!0);try{await o()}catch{}a(s,!1)}}},Ot=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t==="hysteria"?"hy":t==="wireguard"?"wg":t},Wt=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},Zs=(e,t,a,n)=>a===k.NATURAL?e:e.sort((s,o)=>{if(n!=null&&n.has(s)&&!(n!=null&&n.has(o)))return-1;if(n!=null&&n.has(o)&&!(n!=null&&n.has(s)))return 1;const r=t[s],g=t[o];switch(a){case k.LATENCY_ASC:return r===L().NOT_CONNECTED?1:g===L().NOT_CONNECTED?-1:r-g;case k.LATENCY_DESC:return r===L().NOT_CONNECTED?1:g===L().NOT_CONNECTED?-1:g-r;case k.NAME_ASC:return s.localeCompare(o);case k.NAME_DESC:return o.localeCompare(s);default:return 0}}),Gs=(e,t,a,n)=>n?e.filter(s=>a!=null&&a.has(s)?!0:t[s]!==L().NOT_CONNECTED):e,{map:Vt,set:Xt}=R(),{map:Zt,setWithCallback:Gt}=R(),{map:Jt,setWithCallback:Et}=R(),{map:Qt,setWithCallback:Kt}=R(),{map:Yt,setWithCallback:en}=R(),[tn,ue]=d(!1),[nn,sn]=d([]),[an,on]=d(new Set),[de,rn]=d([]),[Le,Q]=d({}),[De,A]=d({}),[ke,ln]=d({}),cn=e=>{var g;const t={...ke()},a={...Le()},n={...De()},s=(l,i,u=!0)=>{var m,y,x,b;const p=(m=l.extra)==null?void 0:m[i];if(Array.isArray(p)){const f=(y=p.at(-1))==null?void 0:y.delay;if(f)return f}if(u)return(b=(x=l.history)==null?void 0:x.at(-1))==null?void 0:b.delay},o={};e.forEach(l=>{const{udp:i,xudp:u,type:p,now:m,name:y,provider:x=""}=l;if(t[l.name]={udp:i,xudp:u,type:p,now:m,name:y,provider:x},!m)a[l.name]=s(l,W())||L().NOT_CONNECTED;else if(a[m]!==void 0)a[l.name]=a[m];else{const f=o[m]??new Set;f.add(l.name),o[m]=f}const b=(s(l,E(),!1)??0)>0;n[l.name]=b});const r=Object.keys(o).filter(l=>a[l]!==void 0);for(;r.length>0;){const l=r.shift(),i=a[l];for(const u of((g=o[l])==null?void 0:g.values())??[])a[u]=i,r.push(u)}he(()=>{ln(t),Q(a),A(n)})},V=()=>{const e=async()=>{const[{providers:i},{proxies:u}]=await Promise.all([Rt(),Bt()]),p=[...u.GLOBAL.all??[],"GLOBAL"],m=Object.values(u).filter(b=>{var f;return(f=b.all)==null?void 0:f.length}).sort((b,f)=>p.indexOf(b.name)-p.indexOf(f.name)),y=Object.values(i).filter(b=>b.name!=="default"&&b.vehicleType!=="Compatible"),x=[...Object.values(u),...y.flatMap(b=>b.proxies.filter(f=>!(f.name in u)).map(f=>({...f,provider:b.name})))];he(()=>{sn(m),on(new Set(["DIRECT","REJECT",...m.map(b=>b.name)])),rn(y),cn(x)})},t=async(i,u)=>{await Ht(i.name,u),await e(),kt()&&pe(()=>{var m;const p=Se(((m=Te())==null?void 0:m.connections)??[],[]);p.length>0&&p.forEach(({id:y,chains:x})=>{x.includes(i.name)&&zt(y)})})},a=async(i,u)=>{const p=E();if(!p||p.length===0){A({});return}let m=!1;try{const{delay:y}=await le(i,u,p,B());m=y>0}catch{m=!1}A(y=>({...y,[i]:m}))},n=async i=>{const u=E();if(!u||u.length===0){A({});return}const p=await ce(i,u,B()),m=Object.fromEntries(Object.entries(p).map(([y,x])=>[y,x>0]));A(y=>({...y,...m}))};return{collapsedMap:Vt,setCollapsedMap:Xt,proxyIPv6SupportMap:De,proxyLatencyTestingMap:Zt,proxyGroupLatencyTestingMap:Jt,proxyProviderLatencyTestingMap:Qt,updatingMap:Yt,isAllProviderUpdating:tn,proxies:nn,proxyGroupNames:an,proxyProviders:de,proxyLatencyTest:async(i,u)=>{Gt(i,async()=>{const{delay:p}=await le(i,u,W(),B());Q(m=>({...m,[i]:p}))}),await a(i,u)},proxyGroupLatencyTest:async i=>{Et(i,async()=>{const u=await ce(i,W(),B());Q(p=>({...p,...u})),await e()}),await n(i)},latencyMap:Le,proxyNodeMap:ke,fetchProxies:e,selectProxyInGroup:t,updateProviderByProviderName:i=>en(i,async()=>{try{await ie(i)}catch{}await e()}),updateAllProvider:async()=>{ue(!0);try{await Promise.allSettled(de().map(i=>ie(i.name))),await e()}finally{ue(!1)}},proxyProviderLatencyTest:i=>Kt(i,async()=>{await $e(i),await e()})}},[un,Js]=v(d(""),{name:"selectedEndpoint",storage:localStorage}),[dn,Es]=v(d([]),{name:"endpointList",storage:localStorage}),w=()=>{const e=M();if(!e)return O.create({});const t=new Headers;return e.secret&&t.set("Authorization",`Bearer ${e.secret}`),O.create({prefixUrl:e.url,headers:t})},M=()=>dn().find(({id:e})=>e===un()),gn=()=>{var e;return(e=M())==null?void 0:e.secret},pn=()=>{var e;return new URL(((e=M())==null?void 0:e.url)??"").origin.replace("http","ws")},hn=(e,t={})=>{const a=new URLSearchParams(t);a.set("token",gn()??"");const n=He(`${pn()}/${e}?${a.toString()}`),s=Oe(n,"message");return z(()=>{var r;return s()?JSON.parse((r=s())==null?void 0:r.data):null})},[mn,Ie]=v(d("sunset"),{name:"theme",storage:localStorage}),fn=C('<li class="tooltip tooltip-bottom">'),vn=C('<div class="drawer drawer-end w-auto sm:ml-auto"><input id=themes type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=themes class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side overflow-x-hidden"><label for=themes class=drawer-overlay></label><ul class="menu gap-2 rounded-l-box bg-base-300 p-2">'),yn=C('<li class="btn btn-xs">'),bn=C('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),wn=C('<ul class="navbar z-50 flex w-auto items-center justify-center bg-base-300 px-4 shadow-lg"><div class="navbar-start gap-4"><div class="drawer w-auto lg:hidden"><input id=navs type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=navs class="btn btn-circle drawer-button btn-sm"></label></div><div class=drawer-side><label for=navs class=drawer-overlay></label><ul class="menu min-h-full w-2/5 gap-2 rounded-r-box bg-base-300 pt-20"></ul></div></div></div><div class=navbar-end><div class="flex items-center gap-2">'),xn=C("<li>"),Pn=({href:e,tooltip:t,children:a})=>(()=>{const n=fn();return G(n,"data-tip",t),h(n,c(K,{class:"rounded-box",href:e,children:a})),n})(),Cn=()=>(()=>{const e=vn(),t=e.firstChild,a=t.nextSibling,n=a.firstChild,s=a.nextSibling,o=s.firstChild,r=o.nextSibling;return h(n,c(Xe,{})),h(r,c(J,{each:vt,children:g=>(()=>{const l=yn();return l.$$click=()=>Ie(g),G(l,"data-theme",g),h(l,g),l})()})),e})(),Tn=()=>{const[e]=Pe(),t=()=>[{href:P.Overview,name:e("overview"),icon:c(Ze,{})},{href:P.Proxies,name:e("proxies"),icon:c(Ge,{})},{href:P.Rules,name:e("rules"),icon:c(Je,{})},{href:P.Conns,name:e("connections"),icon:c(Ee,{})},{href:P.Log,name:e("logs"),icon:c(Qe,{})},{href:P.Config,name:e("config"),icon:c(Ke,{})}],a=We(),[n,s]=d(!1);return(()=>{const o=wn(),r=o.firstChild,g=r.firstChild,l=g.firstChild,i=l.nextSibling,u=i.firstChild,p=i.nextSibling,m=p.firstChild,y=m.nextSibling,x=r.nextSibling,b=x.firstChild;return l.addEventListener("change",f=>s(f.target.checked)),h(u,c(Ve,{})),h(y,c(J,{get each(){return t()},children:({href:f,name:j})=>(()=>{const S=xn();return S.$$click=()=>s(!1),h(S,c(K,{href:f,children:j})),S})()})),h(r,c(In,{}),null),h(o,c(T,{get when(){return a.pathname!==P.Setup},get children(){const f=bn(),j=f.firstChild;return h(j,c(J,{get each(){return t()},children:({href:S,name:Me,icon:_e})=>c(Pn,{href:S,tooltip:Me,children:_e})})),f}}),x),h(b,c(Cn,{})),U(()=>l.checked=n()),o})()};X(["click"]);const Sn=C('<span class="badge badge-sm p-px"><span class=scale-75>IPv6'),$n=e=>{const{proxyIPv6SupportMap:t}=V(),a=z(()=>t()[e.name]===!0);return c(T,{get when(){return a()},get children(){return Sn()}})},Ln=C("<span>"),Dn=e=>{const[t]=Pe(),{latencyMap:a}=V(),[n,s]=d(""),o=z(()=>a()[e.name]);return Z(()=>{s("text-success"),o()>L().HIGH?s("text-error"):o()>L().MEDIUM&&s("text-warning")}),c(T,{get when(){return z(()=>typeof o()=="number")()&&o()!==Y.NOT_CONNECTED},get children(){const r=Ln();return h(r,o,null),h(r,()=>t("ms"),null),U(()=>_(r,`whitespace-nowrap text-xs ${n()}`)),r}})},kn=C('<div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl"><span>(</span><a class="text-primary transition-transform hover:rotate-90 hover:scale-125"href=https://m.facebook.com/onghoangbay07 target=_blank>ohb</a><span>)'),In=()=>(()=>{const e=kn(),t=e.firstChild;return h(e,c(K,{class:"bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",get href(){return M()?"/":"/setup"},children:"Vương2023"}),t),e})(),Mn=C('<div class="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur"><div class="flex justify-end gap-2">'),_n=C('<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box p-0"><div><div class="flex items-center gap-4 text-xl font-bold"><span></span></div></div><div class=p-4></div></div><form method=dialog class=modal-backdrop><button>'),Un="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur",Qs=e=>{let t;return(()=>{const a=_n(),n=a.firstChild,s=n.firstChild,o=s.firstChild,r=o.firstChild,g=s.nextSibling;return Ye(l=>{var i;return(t=l)&&((i=e.ref)==null?void 0:i.call(e,l))},a),n.$$contextmenu=l=>l.preventDefault(),h(o,()=>e.icon,r),h(r,()=>e.title),h(s,c(me,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.close(),get icon(){return c(et,{size:20})}}),null),h(g,ge(()=>e.children)),h(n,c(T,{get when(){return e.action},get children(){const l=Mn(),i=l.firstChild;return h(i,()=>e.action),l}}),null),U(()=>_(s,D(Un,"top-0 justify-between"))),a})()};X(["contextmenu"]);const Nn=C('<div><div class="flex items-center justify-between gap-2"><span class="break-all text-left text-sm"></span><span class="flex items-center gap-1"></span></div><div class="flex items-center justify-between gap-1"><div></div><div class=text-xs>'),Ks=e=>{const{proxyLatencyTest:t,proxyLatencyTestingMap:a}=V(),{proxyName:n,isSelected:s,onClick:o}=e,{proxyNodeMap:r}=V(),g=z(()=>r()[n]),l=()=>{var i,u,p;return Wt((i=g())==null?void 0:i.type)?(u=g())!=null&&u.xudp?"xudp":(p=g())!=null&&p.udp?"udp":null:null};return(()=>{const i=Nn(),u=i.firstChild,p=u.firstChild,m=p.nextSibling,y=u.nextSibling,x=y.firstChild,b=x.nextSibling;return tt(i,"click",o,!0),G(i,"title",n),h(p,n),h(m,c($n,{get name(){return e.proxyName}}),null),h(m,c(me,{class:"btn-circle btn-ghost h-auto min-h-0 w-auto",get icon(){return c(nt,{size:20,get class(){return D(a()[n]&&"animate-pulse text-success")}})},onClick:f=>{f.stopPropagation(),t(n,g().provider)}}),null),h(x,()=>{var f;return Ot((f=g())==null?void 0:f.type)},null),h(x,c(T,{get when(){return l()},get children(){return` :: ${l()}`}}),null),h(b,c(Dn,{get name(){return e.proxyName}})),U(f=>{const j=D("card card-bordered tooltip-bottom flex flex-col justify-between gap-1 border-neutral-focus bg-neutral p-2 text-neutral-content",s&&"border-primary bg-primary-content text-primary",o&&"cursor-pointer"),S=D("text-xs text-slate-500",s&&"text-primary");return j!==f._v$&&_(i,f._v$=j),S!==f._v$2&&_(x,f._v$2=S),f},{_v$:void 0,_v$2:void 0}),i})()};X(["click"]);const qn=C('<div><div class="flex-1 overflow-y-auto p-2 sm:p-4"><div class=pb-8>'),jn=N(()=>q(()=>import("./Setup-8F0AjULT.js"),__vite__mapDeps([0,1]),import.meta.url)),An=N(()=>q(()=>import("./Overview-emOfLpiK.js"),__vite__mapDeps([2,1]),import.meta.url)),Fn=N(()=>q(()=>import("./Connections-97oGTBBA.js"),__vite__mapDeps([3,1,4,5,6]),import.meta.url)),zn=N(()=>q(()=>import("./Logs-1nZunrq1.js"),__vite__mapDeps([7,1,4,5]),import.meta.url)),Rn=N(()=>q(()=>import("./Proxies-xF_zBTGh.js"),__vite__mapDeps([8,1,6,5]),import.meta.url)),Bn=N(()=>q(()=>import("./Rules-vfxA8uI6.js"),__vite__mapDeps([9,1,6]),import.meta.url)),Hn=N(()=>q(()=>import("./Config-ncvh-m6I.js"),__vite__mapDeps([10,1,5]),import.meta.url)),On=()=>{const e=hn("connections");return Z(()=>jt(e())),null},Wn=()=>{const e=st();return Z(()=>{Mt()&&Ie(e()?Ut():_t())}),c(Lt,{get locale(){return $t()},get children(){const t=qn(),a=t.firstChild,n=a.firstChild;return h(t,c(Tn,{}),a),h(n,c(at,{get children(){return[c(T,{get when(){return M()},get children(){return[c($,{get path(){return P.Overview},component:An}),c($,{get path(){return P.Proxies},component:Rn}),c($,{get path(){return P.Rules},component:Bn}),c($,{get path(){return P.Conns},component:Fn}),c($,{get path(){return P.Log},component:zn}),c($,{get path(){return P.Config},component:Hn}),c($,{path:"*",get element(){return c(ot,{get href(){return P.Overview}})}})]}}),c($,{get path(){return M()?P.Setup:"*"},component:jn})]}}),null),h(n,c(T,{get when(){return M()},get children(){return c(On,{})}}),null),h(t,c(rt,{position:"bottom-center"}),null),U(s=>{const o=D("relative flex h-screen flex-col overscroll-y-none subpixel-antialiased",It()?"font-twemoji":"font-no-twemoji"),r=mn();return o!==s._v$&&_(t,s._v$=o),r!==s._v$2&&G(t,"data-theme",s._v$2=r),s},{_v$:void 0,_v$2:void 0}),t}})};it.extend(lt);ct(()=>c(dt,{get source(){return ut()},get children(){return c(Wn,{})}}),document.getElementById("root"));export{Yn as $,xs as A,me as B,yt as C,Zn as D,Cs as E,xt as F,ys as G,ws as H,Ps as I,os as J,ss as K,we as L,Qs as M,Ss as N,as as O,Kn as P,k as Q,es as R,ns as S,I as T,En as U,ve as V,kt as W,W as X,B as Y,E as Z,Qn as _,un as a,ts as a0,Jn as a1,L as a2,Dn as a3,V as a4,Gs as a5,Zs as a6,Xn as a7,Ks as a8,Bs as a9,vt as aA,cs as aB,_t as aC,Ut as aD,It as aE,Ws as aF,Fs as aG,Hs as aa,Os as ab,R as ac,$t as ad,Rs as ae,Vs as af,w as ag,zs as ah,Ds as ai,Us as aj,ks as ak,qs as al,Is as am,Ns as an,Ms as ao,js as ap,_s as aq,As as ar,P as as,wt as at,F as au,rs as av,Gn as aw,is as ax,Mt as ay,ls as az,Js as b,hn as c,M as d,dn as e,be as f,bt as g,ds as h,fs as i,vs as j,us as k,Te as l,qt as m,$s as n,ye as o,zt as p,hs as q,gs as r,Es as s,Xs as t,Pe as u,Ls as v,ms as w,ps as x,Ts as y,bs as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Setup-8F0AjULT.js","./vendor-a3Xa1DsI.js","./Overview-emOfLpiK.js","./Connections-97oGTBBA.js","./index-Kbkq_4Lj.js","./ConfigTitle-16Ckjtoe.js","./global-RseCksaL.js","./Logs-1nZunrq1.js","./Proxies-xF_zBTGh.js","./Rules-vfxA8uI6.js","./Config-ncvh-m6I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}