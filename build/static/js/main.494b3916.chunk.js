(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var t=c(1),n=c(4),a=c.n(n),r=(c(15),c(8)),i=(c(16),c(17),c(18),c(0));var j=function(){return Object(i.jsx)("div",{className:"vmario-content",children:Object(i.jsx)("div",{className:"container-image"})})},l=c(5),o=c(6),d=c(7),b=c(10),h=c(9),m=c(3),x=c.n(m),O=(c(21),function(e){Object(b.a)(c,e);var s=Object(h.a)(c);function c(){var e;Object(o.a)(this,c);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=s.call.apply(s,[this].concat(n))).state={renderedResponse:""},e.getResponse=Object(l.a)(x.a.mark((function e(){var s,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/hello");case 2:return s=e.sent,e.next=5,s.json();case 5:if(c=e.sent,200===s.status){e.next=8;break}throw Error(c.message);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)}))),e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.getResponse().then((function(s){var c=s;e.setState({renderedResponse:c})}))}},{key:"render",value:function(){var e=this.state.renderedResponse;return Object(i.jsx)("div",{className:"info-vmario-content",children:Object(i.jsxs)("div",{className:"container-content-vmario",children:[Object(i.jsxs)("div",{className:"name-heading",children:[Object(i.jsx)("h1",{children:"vMario"}),Object(i.jsx)("h1",{})]}),Object(i.jsxs)("div",{className:"subs-count",children:[Object(i.jsx)("h4",{children:"Ya somos"}),Object(i.jsx)("div",{className:"subs-number",children:Object(i.jsx)("div",{className:"num-container",children:Object(i.jsx)("h2",{className:"yt-count",children:e.express})})})]})]})})}}]),c}(t.Component)),v=O,u=(c(22),c.p+"static/media/instagram.5eca5a1c.svg"),N=c.p+"static/media/tiktok.3cbbaf8d.svg",g=c.p+"static/media/twitter.e7b0931d.svg",f=function(){return Object(i.jsx)("div",{className:"rrss-content",children:Object(i.jsxs)("div",{className:"rrss-ig",children:[Object(i.jsxs)("div",{className:"text-content-rrss",children:[Object(i.jsx)("h1",{className:"rrss-user",children:"@vmario"}),Object(i.jsx)("h1",{className:"rrss",children:"Instagram"})]}),Object(i.jsx)("div",{className:"rrss-logo-container",children:Object(i.jsx)("img",{className:"rss-logo",src:u})})]})})},p=function(){return Object(i.jsx)("div",{className:"rrss-content",children:Object(i.jsxs)("div",{className:"rrss-twitch",children:[Object(i.jsxs)("div",{className:"text-content-rrss",children:[Object(i.jsx)("h1",{className:"rrss-user",children:"@vmario"}),Object(i.jsx)("h1",{className:"rrss",children:"Twitch"})]}),Object(i.jsx)("div",{className:"rrss-logo-container",children:Object(i.jsx)("img",{className:"rss-logo",src:u})})]})})},k=function(){return Object(i.jsx)("div",{className:"rrss-content",children:Object(i.jsxs)("div",{className:"rrss-twitter",children:[Object(i.jsxs)("div",{className:"text-content-rrss",children:[Object(i.jsx)("h1",{className:"rrss-user",children:"@vmario"}),Object(i.jsx)("h1",{className:"rrss",children:"Twitter"})]}),Object(i.jsx)("div",{className:"rrss-logo-container",children:Object(i.jsx)("img",{className:"rss-logo",src:g})})]})})},y=function(){return Object(i.jsx)("div",{className:"rrss-content",children:Object(i.jsxs)("div",{className:"rrss-tiktok",children:[Object(i.jsxs)("div",{className:"text-content-rrss",children:[Object(i.jsx)("h1",{className:"rrss-user",children:"@vmario"}),Object(i.jsx)("h1",{className:"rrss",children:"Tiktok"})]}),Object(i.jsx)("div",{className:"rrss-logo-container",children:Object(i.jsx)("img",{className:"rss-logo",src:N})})]})})},w=(c(23),c.p+"static/media/youtube.7d94341a.svg"),C=function(){return Object(i.jsx)("div",{className:"channel-content",children:Object(i.jsxs)("div",{className:"info-yt-content",children:[Object(i.jsx)("div",{className:"logo-yt-container",children:Object(i.jsx)("img",{className:"yt-logo",src:w})}),Object(i.jsx)("div",{className:"text-container",children:Object(i.jsx)("h1",{children:"Canal principal"})})]})})},R=function(){return Object(i.jsx)("div",{className:"channel-content",children:Object(i.jsxs)("div",{className:"info-yt-content",children:[Object(i.jsx)("div",{className:"logo-yt-container",children:Object(i.jsx)("img",{className:"yt-logo",src:w})}),Object(i.jsx)("div",{className:"text-container",children:Object(i.jsx)("h1",{children:"Canal secundario"})})]})})},M=(c(24),c.p+"static/media/NauticMC_logo.e92fedbb.png");var T=function(){return Object(i.jsx)("div",{className:"nauticmc-content",children:Object(i.jsx)("div",{className:"nautic-back",children:Object(i.jsx)("div",{className:"nautic-logo-container",children:Object(i.jsx)("img",{className:"nautic-logo",src:M})})})})};var A=function(){return Object(i.jsx)("div",{className:"grid-container",children:Object(i.jsxs)("div",{className:"info-content",children:[Object(i.jsx)("div",{className:"vmario-container",children:Object(i.jsx)(j,{})}),Object(i.jsx)("div",{className:"info-vmario-container",children:Object(i.jsx)(v,{})}),Object(i.jsx)("div",{className:"first-channel-container",children:Object(i.jsx)(C,{})}),Object(i.jsx)("div",{className:"second-channel-container",children:Object(i.jsx)(R,{})}),Object(i.jsx)("div",{className:"instagram-container",children:Object(i.jsx)(f,{})}),Object(i.jsx)("div",{className:"twitch-container",children:Object(i.jsx)(p,{})}),Object(i.jsx)("div",{className:"twitter-container",children:Object(i.jsx)(k,{})}),Object(i.jsx)("div",{className:"nauticmc-container",children:Object(i.jsx)(T,{})}),Object(i.jsx)("div",{className:"tiktok-container",children:Object(i.jsx)(y,{})})]})})};c(25);var E=function(){return Object(i.jsxs)("div",{className:"footer-container",children:[Object(i.jsx)("div",{className:"contact-container",children:Object(i.jsx)("div",{className:"contact",children:Object(i.jsx)("h3",{children:"Cont\xe1ctame"})})}),Object(i.jsx)("div",{className:"copyright-container",children:Object(i.jsx)("div",{className:"copyright",children:Object(i.jsx)("h3",{children:"2022 - vMario"})})})]})};c(26);var I=function(){return Object(i.jsxs)("div",{className:"all-content",children:[Object(i.jsx)(A,{}),Object(i.jsx)(E,{})]})};c(27);var J=function(){return Object(i.jsxs)("div",{class:"toggle-btn",id:"_1st-toggle-btn",children:[Object(i.jsx)("input",{type:"checkbox"}),Object(i.jsx)("span",{})]})};var S=function(){var e=Object(t.useState)("light"),s=Object(r.a)(e,2),c=s[0],n=s[1],a=function(){n("light"===c?"dark":"light")};return Object(i.jsx)("body",{children:Object(i.jsxs)("div",{className:"App","data-theme":c,children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"toggle",onClick:a,children:[" ",Object(i.jsx)(J,{onClick:a})]})}),Object(i.jsx)(I,{})]})})};a.a.render(Object(i.jsx)(S,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.494b3916.chunk.js.map