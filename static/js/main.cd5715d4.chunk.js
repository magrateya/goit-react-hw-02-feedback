(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),r=n(3),s=n.n(r),o=(n(17),n(4)),l=n(5),d=n(6),u=n(11),b=n(10),j=n(7),h=n.n(j);var f=function(e){var t=e.options,n=e.onLeaveFeedback,a=Object.keys(t);return Object(c.jsx)("div",{className:h.a.container,children:a.map((function(e){return Object(c.jsx)("button",{onClick:function(){return n(e)},children:e},e)}))})},O=n(8),v=n.n(O),k=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,r=e.positivePercentage;return Object(c.jsxs)("ul",{className:v.a.list,children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",i]}),Object(c.jsxs)("li",{children:["Positive feedback: ",r," %"]})]})},x=n(9),p=n.n(x);var g=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:p.a.section,children:[Object(c.jsx)("h2",{children:t}),n]})};function F(e){var t=e.message;return Object(c.jsx)("p",{children:t})}var m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,n){return t+e.state[n]}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t&&Math.round(100*e.state.good/t)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{title:"Please leave feedback",children:Object(c.jsx)(f,{options:this.state,onLeaveFeedback:this.handleClick})}),Object(c.jsx)(g,{title:"Statistics",children:0===this.countTotalFeedback()?Object(c.jsx)(F,{message:"No feedback given"}):Object(c.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Feedbackoption_container__2r8fF"}},8:function(e,t,n){e.exports={list:"Statistics_list__1VQuS"}},9:function(e,t,n){e.exports={section:"Section_section__38hZS"}}},[[18,1,2]]]);
//# sourceMappingURL=main.cd5715d4.chunk.js.map