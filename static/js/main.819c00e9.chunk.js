(this["webpackJsonplights-out"]=this["webpackJsonplights-out"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(7),a=t.n(s),c=(t(14),t(2)),i=t(3),o=t(5),l=t(4),u=t(1),h=t(8),d=(t(15),function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).handleClick=function(n){e.props.flipCellsAroundMe()},e}return Object(i.a)(t,[{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return Object(r.jsx)("td",{className:e,onClick:this.handleClick})}}]),t}(u.Component)),j=(t(16),function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=n.call(this,e)).renderBoard=function(){return Object(r.jsx)("table",{className:"Board-table",children:Object(r.jsx)("tbody",{children:s.state.board.map((function(e,n){return Object(r.jsx)("tr",{children:e.map((function(e,t){var a="".concat(n,"-").concat(t);return Object(r.jsx)(d,{isLit:e,flipCellsAroundMe:s.flipCellsAround(a)},a)}))},n)}))})})},s.state={hasWon:!1,allLightsOn:!1,board:s.createBoard()},s}return Object(i.a)(t,[{key:"createBoard",value:function(){for(var e=[],n=0;n<this.props.nrows;n++){for(var t=[],r=0;r<this.props.ncols;r++){var s=Math.random()<this.props.chanceLightsOn?0:1;t.push(s)}e.push(t)}return e}},{key:"flipCellsAround",value:function(e){var n=this,t=this.props,r=t.ncols,s=t.nrows,a=this.state.board,c=e.split("-").map(Number),i=Object(h.a)(c,2),o=i[0],l=i[1];return function(){function e(e,n){n>=0&&n<r&&e>=0&&e<s&&(a[e][n]=0===a[e][n]?1:0)}e(o,l),e(o,l-1),e(o,l+1),e(o-1,l),e(o+1,l);var t=a.every((function(e){return e.every((function(e){return 0===e}))})),c=a.every((function(e){return e.every((function(e){return 1===e}))}));n.setState({hasWon:t,allLightsOn:c,board:a})}}},{key:"renderWinMsg",value:function(){return Object(r.jsxs)("div",{className:"Board-title win-msg",children:[Object(r.jsx)("span",{className:"neon-orange",children:"Congrats, "}),Object(r.jsx)("span",{className:"neon-blue",children:" you won!"})]})}},{key:"renderLightsOn",value:function(){return Object(r.jsxs)("div",{className:"Board-title win-msg",children:[Object(r.jsx)("span",{className:"neon-orange",children:"Great, but"}),Object(r.jsx)("span",{className:"neon-blue",children:" you should turn off the lights!"})]})}},{key:"render",value:function(){var e=this.state,n=e.hasWon,t=e.allLightsOn;return Object(r.jsxs)("div",{className:"Board",children:[Object(r.jsxs)("div",{className:"Board-title",children:[Object(r.jsx)("span",{className:"neon-orange ".concat((t||n)&&"dimmed"),children:"Lights"}),Object(r.jsx)("span",{className:"neon-blue ".concat((t||n)&&"dimmed"),children:"Out"})]}),this.renderBoard(),this.state.hasWon?this.renderWinMsg():null,this.state.allLightsOn?this.renderLightsOn():null]})}}]),t}(u.Component));j.defaultProps={nrows:3,ncols:6,chanceLightsOn:.3};var b=j,p=(t(17),function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(b,{})})}}]),t}(u.Component));a.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.819c00e9.chunk.js.map