(this["webpackJsonpreact-countdown-customizable"]=this["webpackJsonpreact-countdown-customizable"]||[]).push([[0],{13:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),i=s.n(r),l=s(4),c=s.n(l),o=s(5),a=s(3),d=s(7),h=s(6),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).defaultDate=new Date((new Date).setDate((new Date).getDate()+1)),n.state={days:0,hours:0,minutes:0,seconds:0,deadline:n.props.date?n.props.date:n.defaultDate},n}return Object(a.a)(s,[{key:"leadingZero",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date);if(t<0)this.setState({days:0,hours:0,minutes:0,seconds:0});else{var s=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),i=Math.floor(t/864e5);this.setState({days:i,hours:r,minutes:n,seconds:s})}}}]),Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.state.deadline)}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.days,s=e.hours,r=e.minutes,i=e.seconds,l=this.props.counterStyle?this.props.counterStyle:{},c=this.props.timerStyle?this.props.timerStyle:{},o=this.props.labelStyle?this.props.labelStyle:{};return Object(n.jsx)("div",{style:c,children:Object(n.jsxs)("div",{style:{padding:"0px",textAlign:"center",height:"100%",background:"none"},children:[Object(n.jsx)("p",{style:{color:o.color?o.color:"grey",marginBottom:"0px"},children:"STARTS IN"}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsxs)("div",{style:{flex:1},children:[Object(n.jsx)("h1",{className:"timer-counter",style:l,children:this.leadingZero(t)}),Object(n.jsx)("p",{style:o,children:"Days"})]}),Object(n.jsxs)("div",{style:{flex:1},children:[Object(n.jsx)("h1",{className:"timer-counter",style:l,children:this.leadingZero(s)}),Object(n.jsx)("p",{style:o,children:"Hours"})]}),Object(n.jsxs)("div",{style:{flex:1},children:[Object(n.jsx)("h1",{className:"timer-counter",style:l,children:this.leadingZero(r)}),Object(n.jsx)("p",{style:o,children:"Minutes"})]}),Object(n.jsxs)("div",{style:{flex:1},children:[Object(n.jsx)("h1",{className:"timer-counter",style:l,children:this.leadingZero(i)}),Object(n.jsx)("p",{style:o,children:"Seconds"})]})]})]})})}}]),s}(r.Component);var j=function(e){return Object(n.jsx)(u,{date:"2021-01-10T14:48:00",timerStyle:{marginTop:"10px",width:"20%"},counterStyle:{fontSize:"15px",color:"white",border:"1px solid red",padding:"10px",margin:"5px",backgroundColor:"red"},labelStyle:{color:"grey",fontSize:"12px",textTransform:"uppercase"}})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;s(e),n(e),r(e),i(e),l(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),p()}},[[13,1,2]]]);
//# sourceMappingURL=main.2358e3ad.chunk.js.map