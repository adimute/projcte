(this.webpackJsonpprojcte=this.webpackJsonpprojcte||[]).push([[0],{13:function(e,t,a){e.exports={Block:"Daydiv_Block__yBC9A",Temp:"Daydiv_Temp__1HsD-",Date:"Daydiv_Date__3ya7K",Detail:"Daydiv_Detail__uDzm6",Name:"Daydiv_Name__2i3jb",Counntry:"Daydiv_Counntry__2e-fE",Button:"Daydiv_Button__3Ungz"}},15:function(e,t,a){e.exports={Button:"SelectedCity_Button__OrZs1",Button1:"SelectedCity_Button1__3C4EG",Headr:"SelectedCity_Headr__trfan",Country:"SelectedCity_Country__15jWo",Tempc:"SelectedCity_Tempc__2TRd1",Weather:"SelectedCity_Weather__1C8uV",Img:"SelectedCity_Img__1EArT"}},16:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3iI3P",Open:"SideDrawer_Open__2gOwP",Close:"SideDrawer_Close__1uMna",Logo:"SideDrawer_Logo__2j5yc"}},18:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__rZOsK",Disp:"Toolbar_Disp__bd7hl",DesktopOnly:"Toolbar_DesktopOnly__YOdfc"}},19:function(e,t,a){e.exports={Favoritediv:"Favorite_Favoritediv__28Ywo",ResponsiveContent:"Favorite_ResponsiveContent__13a2r"}},21:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2ARdY",active:"NavigationItem_active__1HvUW"}},36:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__38PVC"}},39:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3rf3P"}},40:function(e,t,a){e.exports={Content:"Layout_Content__19y59"}},42:function(e,t,a){e.exports={ResponsiveContent:"Homepage_ResponsiveContent__2cIJu"}},43:function(e,t,a){e.exports={Loader:"Spinner_Loader__16Gzt",load2:"Spinner_load2__3unhv"}},44:function(e,t,a){e.exports=a(75)},49:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(34),s=a.n(c),l=(a(49),a(35)),i=a(2),o=a(3),u=a(5),m=a(4),d=a(6),p=a(9),h=a(12),f=(a(50),a(18)),g=a.n(f),v=a(36),y=a.n(v),E=a(21),b=a.n(E),w=function(e){return n.a.createElement("li",{className:b.a.NavigationItem},n.a.createElement("a",{className:e.active?b.a.active:null,href:e.link},e.children))},_=function(){return n.a.createElement("ul",{className:y.a.NavigationItems},n.a.createElement(p.b,{to:"/"},n.a.createElement(w,{link:"/"},"Home")),n.a.createElement(p.b,{to:"/favorite"},n.a.createElement(w,{link:"/favorite"},"Favotire")))},C=function(e){return n.a.createElement("header",{className:g.a.Toolbar},n.a.createElement(p.b,{to:"/"},n.a.createElement("h2",{style:{textDecoration:"none"}},"Herolo Weather App")),n.a.createElement("div",{onClick:e.openSideDrawer},n.a.createElement("span",{className:g.a.Disp},"\u2630")),n.a.createElement("nav",{className:g.a.DesktopOnly},n.a.createElement(_,null)))},D=a(16),N=a.n(D),k=a(39),I=a.n(k),O=function(e){return e.show?n.a.createElement("div",{className:I.a.Backdrop,onClick:e.back}):null},x=function(e){var t=[N.a.SideDrawer,N.a.Close];return e.open&&(t=[N.a.SideDrawer,N.a.Open]),n.a.createElement("div",null,n.a.createElement(O,{show:e.open,back:e.closed}),n.a.createElement("div",{className:t.join(" ")},n.a.createElement("div",{className:N.a.Logo}),n.a.createElement("nav",null,n.a.createElement(_,null))))},W=a(40),j=a.n(W),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).sideDrowerHandler=function(){a.setState({sideDrawerShow:!a.state.sideDrawerShow})},a.state={sideDrawerShow:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(C,{openSideDrawer:this.sideDrowerHandler}),n.a.createElement(x,{open:this.state.sideDrawerShow,closed:this.sideDrowerHandler}),n.a.createElement("main",{className:j.a.Content},this.props.children))}}]),t}(r.Component),T=a(13),F=a.n(T),B=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderSwitch",value:function(e){switch(e){case 1:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/01-s.png",alt:"WeatherIcon",class:"img-fluid"});case 2:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/02-s.png",alt:"WeatherIcon",class:"img-fluid"});case 3:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/03-s.png",alt:"WeatherIcon",class:"img-fluid"});case 4:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/04-s.png",alt:"WeatherIcon",class:"img-fluid"});case 5:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/05-s.png",alt:"WeatherIcon",class:"img-fluid"});case 6:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/06-s.png",alt:"WeatherIcon",class:"img-fluid"});case 7:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/07-s.png",alt:"WeatherIcon",class:"img-fluid"});case 8:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/08-s.png",alt:"WeatherIcon",class:"img-fluid"});case 9:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/09-s.png",alt:"WeatherIcon",class:"img-fluid"});case 11:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/11-s.png",alt:"WeatherIcon",class:"img-fluid"});case 12:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/12-s.png",alt:"WeatherIcon",class:"img-fluid"});case 13:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/13-s.png",alt:"WeatherIcon",class:"img-fluid"});case 14:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/14-s.png",alt:"WeatherIcon",class:"img-fluid"});case 15:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/15-s.png",alt:"WeatherIcon",class:"img-fluid"});case 16:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/16-s.png",alt:"WeatherIcon",class:"img-fluid"});case 17:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/17-s.png",alt:"WeatherIcon",class:"img-fluid"});case 18:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/18-s.png",alt:"WeatherIcon",class:"img-fluid"});case 19:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/19-s.png",alt:"WeatherIcon",class:"img-fluid"});case 20:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/20-s.png",alt:"WeatherIcon",class:"img-fluid"});case 21:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/21-s.png",alt:"WeatherIcon",class:"img-fluid"});case 22:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/22-s.png",alt:"WeatherIcon",class:"img-fluid"});case 23:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/23-s.png",alt:"WeatherIcon",class:"img-fluid"});case 24:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/24-s.png",alt:"WeatherIcon",class:"img-fluid"});case 25:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/25-s.png",alt:"WeatherIcon",class:"img-fluid"});case 26:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/26-s.png",alt:"WeatherIcon",class:"img-fluid"});case 29:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/29-s.png",alt:"WeatherIcon",class:"img-fluid"});case 30:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/30-s.png",alt:"WeatherIcon",class:"img-fluid"});case 31:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/31-s.png",alt:"WeatherIcon",class:"img-fluid"});case 32:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/32-s.png",alt:"WeatherIcon",class:"img-fluid"});case 33:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/33-s.png",alt:"WeatherIcon",class:"img-fluid"});case 34:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/34-s.png",alt:"WeatherIcon",class:"img-fluid"});case 35:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/35-s.png",alt:"WeatherIcon",class:"img-fluid"});case 36:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/36-s.png",alt:"WeatherIcon",class:"img-fluid"});case 37:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/37-s.png",alt:"WeatherIcon",class:"img-fluid"});case 38:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/38-s.png",alt:"WeatherIcon",class:"img-fluid"});case 39:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/39-s.png",alt:"WeatherIcon",class:"img-fluid"});case 40:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/40-s.png",alt:"WeatherIcon",class:"img-fluid"});case 41:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/41-s.png",alt:"WeatherIcon",class:"img-fluid"});case 42:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/42-s.png",alt:"WeatherIcon",class:"img-fluid"});case 43:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/43-s.png",alt:"WeatherIcon",class:"img-fluid"});case 44:return n.a.createElement("img",{src:"https://developer.accuweather.com/sites/default/files/44-s.png",alt:"WeatherIcon",class:"img-fluid"});default:return null}}},{key:"render",value:function(){return n.a.createElement("div",{style:{display:"block",margin:"auto"}},this.renderSwitch(this.props.iconNum))}}]),t}(r.Component),H=function(e){return n.a.createElement("div",{className:F.a.Block},e.favorite?n.a.createElement("button",{class:"btn btn-link",className:F.a.Button,onClick:function(){return e.removeFavoriteCity(e.numCityIndex)}},"X"):null,n.a.createElement("p",{className:F.a.Name},e.name),e.favorite?n.a.createElement("p",{className:F.a.Counntry},e.country):null,n.a.createElement("h3",{className:F.a.Date},e.date),n.a.createElement("p",{className:F.a.Temp},e.temp),n.a.createElement(B,{iconNum:e.iconNum}),n.a.createElement("p",{className:F.a.Detail},e.detail))},P=a(19),L=a.n(P),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={citysData:a.props.citysData},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this,t=[],a=this.state.citysData,r=0;r<a.length;r++)a[r].favorite&&t.push(a[r]);var c;return c=n.a.createElement("div",null,t.map((function(t,a){return n.a.createElement(H,{iconNum:t.WeatherIcon,numCityIndex:t.index,removeFavoriteCity:e.props.removeFavoriteCity,key:a,favorite:!0,country:t.Country.EnglishName,name:t.EnglishName,detail:t.WeatherText,temp:t.Temperature.Metric.Value.toFixed(0)+"\xb0c"})}))),n.a.createElement("div",null,n.a.createElement("div",{className:L.a.Favoritediv},n.a.createElement("h1",{className:L.a.H1},"Favorite citys")),n.a.createElement("div",{className:L.a.ResponsiveContent},c))}}]),t}(r.Component),R=a(41),M=a.n(R).a.create({baseURL:"https://adi-wather-app.firebaseio.com/"}),U=(a(73),a(74),function(e){return n.a.createElement("div",null,n.a.createElement(O,{back:e.back,show:e.show}),n.a.createElement("div",{className:"Model",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={suggestions:[],text:"",citysName:a.props.citysName,selectedCity:{},error:!1},a.onTextChange=function(e){var t=a.props.citysName,r=e.target.value,n=[];if(r.length>0){var c=new RegExp("".concat(r),"i");n=t.sort().filter((function(e){return c.test(e)}))}a.setState((function(){return{suggestions:n,text:r}}))},a.checkSearchContent=function(){a.setState({error:!0,text:""})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"suggestionsSelected",value:function(e){for(var t=this.props.citysData,a=0;a<t.length;a++)e===t[a].EnglishName&&(console.log(t[a].EnglishName),this.props.selectedCityHandler(t[a]));this.setState((function(){return{text:e,suggestions:[]}}))}},{key:"renderSuggestion",value:function(){var e=this,t=this.state.suggestions;return 0===t.length?null:n.a.createElement("ul",null,t.map((function(t){return n.a.createElement(p.b,{to:"/selectedCity"},n.a.createElement("li",{onClick:function(){return e.suggestionsSelected(t)}},t))})),"            ")}},{key:"render",value:function(){var e=this,t=this.state.text,a={display:"block",border:"none",color:"#5eb7b7",outline:"none",outlineStyle:"none",float:"right",marginTop:"-35px"},r=n.a.createElement("div",null,n.a.createElement("h6",null,"Somethig went worng :[ "),n.a.createElement("p",null,n.a.createElement("b",null,"Hint")," - Use autocomplete for better resultes"),n.a.createElement("button",{style:{boxSizing:"border-box",display:"block",border:"none",width:"100%",textDecoration:"none",color:"red",fontFamily:"'Courier New', Courier, monospace",outline:"none",outlineStyle:"none",fontWeight:"bold"},onClick:function(){return e.setState({error:!1})}},"Let's try again...")),c=null;c=n.a.createElement("button",{class:"btn btn-link",style:a,onClick:this.checkSearchContent},n.a.createElement("span",null,"\ud83d\udd0d"));for(var s=this.state.text,l=this.props.citysData,i=function(t){if(s===l[t].EnglishName)return c=n.a.createElement(p.b,{to:"/selectedCity"},n.a.createElement("button",{style:a,onClick:function(){return e.props.selectedCityHandler(l[t])}})),"break"},o=0;o<l.length;o++){if("break"===i(o))break}return n.a.createElement("div",{className:"autocomplete"},n.a.createElement(U,{show:this.state.error},r),n.a.createElement("input",{style:{display:"flex",alignItems:"center",color:"black",height:"40px",fontWeight:"700"},value:t,onChange:this.onTextChange,type:"text",placeholder:"  Tal Aviv..."}),this.renderSuggestion(),c)}}]),t}(r.Component),J=a(42),Y=a.n(J),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:[],maxTemp:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;M.get("/telavivdefault/-LrZKUJJaUAfvB7yfZ6d/DailyForecasts.json").then((function(t){e.setState({data:t.data,maxTemp:(5*(Number(t.data[0].Temperature.Maximum.Value)-32)/9).toFixed(0)+"\xb0c"})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e,t){var a="";switch(new Date(e.Date).getDay()){case 0:a="Sun";break;case 1:a="Mon";break;case 2:a="Tue";break;case 3:a="Wed";break;case 4:a="Thu";break;case 5:a="Fri";break;case 6:a="Sat";break;default:a=""}var r=(5*(Number(e.Temperature.Maximum.Value)-32)/9).toFixed(0)+"\xb0c";return n.a.createElement(H,{key:t,iconNum:e.Day.Icon,date:a,temp:r,detail:e.Day.IconPhrase})}));return n.a.createElement("div",null,n.a.createElement(V,{citysName:this.props.citysName,selectedCityHandler:this.props.selectedCityHandler,citysData:this.props.citysData}),n.a.createElement("h1",{style:{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"center",marginTop:"40px",color:"#5eb7b7",fontFamily:"'Courier New', Courier, monospace",fontWeight:"bold"}},"Tal Aviv "),n.a.createElement("h3",{style:{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"center",marginTop:"2px",color:"#ffafb0"}},this.state.maxTemp),n.a.createElement("div",{style:{display:"flex",flexFlow:"row",alignItems:"center",marginTop:"60px"}},n.a.createElement("div",{style:{margin:"auto"}},n.a.createElement("div",{className:Y.a.ResponsiveContent},e))))}}]),t}(r.Component),K=a(15),Z=a.n(K),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t="Add to favorite";return this.state.data.favorite&&(t="Remove from favorite"),n.a.createElement("div",null,n.a.createElement("h1",{className:Z.a.Headr},this.state.data.EnglishName),n.a.createElement("h2",{className:Z.a.Country},this.state.data.Country.EnglishName),n.a.createElement("div",{style:{display:"block",width:"100%",textAlign:"center"}},n.a.createElement(B,{iconNum:this.state.data.WeatherIcon})),n.a.createElement("h1",{className:Z.a.Tempc},this.state.data.Temperature.Metric.Value.toFixed(0),"\xb0c"),n.a.createElement("h3",{className:Z.a.Weather},this.state.data.WeatherText),n.a.createElement("button",{className:Z.a.Button,onClick:function(){return e.props.addFavorite(e.state.data.index)}},n.a.createElement("span",null,"\u2661"),t),n.a.createElement(p.b,{to:"/"},n.a.createElement("button",{className:Z.a.Button1},n.a.createElement("span",null,"\u21a9"))))}}]),t}(r.Component),X=a(43),$=a.n(X),q=function(){return n.a.createElement("div",{className:$.a.Loader},"Loading...")};function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={selectedCity:!1,tempCityData:{},citysName:[],citysData:[],loading:!1,error:!1},a.selectedCityHandler=function(e){var t=e;a.setState({tempCityData:t})},a.backToDefaultPage=function(){a.setState({selectedCity:!1})},a.addFavorite=function(e){var t=a.state.tempCityData,r=t.favorite;r=!r,t.favorite=r;var n=a.state.citysData;n[e]=t,a.setState({cityData:n})},a.removeFavoriteCity=function(e){var t=a.state.citysData[e];t.favorite;t.favorite=!1;var r=a.state.citysData;r[e]=t,a.setState({cityData:r})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),M.get("https://adi-wather-app.firebaseio.com/allCitys/-Lr_25BIL0fiK8ink3li.json").then((function(t){var a=[];t.data.map((function(e,t){a.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{favorite:!1,index:t}))}));var r=[];t.data.map((function(e){return r.push(e.EnglishName),null})),e.setState({citysData:a,citysName:r,loading:!1})})).catch((function(t){console.log(t),e.setState({error:!0})}))}},{key:"render",value:function(){var e=this,t=n.a.createElement(q,null);return this.state.error&&(t=n.a.createElement("p",null,"Somethig went worng :[ ")),n.a.createElement("div",null,n.a.createElement(p.a,null,n.a.createElement(S,null,this.state.loading?n.a.createElement(U,{show:this.state.loading},t):null,n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/favorite",component:function(){return n.a.createElement(A,{removeFavoriteCity:e.removeFavoriteCity,citysData:e.state.citysData})}}),n.a.createElement(h.a,{exact:!0,path:"/",component:function(){return n.a.createElement(z,{citysName:e.state.citysName,selectedCityHandler:e.selectedCityHandler,citysData:e.state.citysData})}}),n.a.createElement(h.a,{exact:!0,path:"/selectedCity",component:function(){return n.a.createElement(G,{backToDefaultPage:e.backToDefaultPage,data:e.state.tempCityData,addFavorite:e.addFavorite})}})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.df7f6cea.chunk.js.map