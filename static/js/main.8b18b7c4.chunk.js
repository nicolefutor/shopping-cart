(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{34:function(n,t,e){},35:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var r=e(2),i=e(1),c=e.n(i),a=e(23),o=e.n(a),u=(e(34),e(10)),s=e(3),d=e(13),l=e(5),j=(e(35),e(28)),b=e(27),m=e(4);function p(){var n=Object(s.a)(["\n    border: 1px solid transparent;\n    text-decoration: none;\n    color: black;\n    &:hover {\n        border-bottom-color: black;\n    }\n"]);return p=function(){return n},n}var h=Object(m.a)(d.b)(p());function x(){var n=Object(s.a)(["\n    font-size: 64px;\n    list-style-type: none;\n    padding: 5px;\n"]);return x=function(){return n},n}function f(){var n=Object(s.a)(["\n    color: white;\n    font-size: 20px;\n    padding-right: 5px;\n    padding-left: 5px;\n"]);return f=function(){return n},n}function O(){var n=Object(s.a)(["\n    color: white;\n    &:hover {\n        border-bottom-color: white;\n    }\n"]);return O=function(){return n},n}function g(){var n=Object(s.a)(["\n    background-color: teal;\n    margin: 0;\n\n"]);return g=function(){return n},n}function v(){var n=Object(s.a)(["\n    list-style-type: none;\n    display: flex;\n    padding: 5px;\n    margin: 0;\n    float: right;\n    position: relative;\n    bottom: 57px;\n"]);return v=function(){return n},n}var w=m.a.ul(v()),k=m.a.nav(g()),y=Object(m.a)(h)(O()),S=m.a.li(f()),C=Object(m.a)(S)(x()),I=function(n){return Object(r.jsxs)(k,{children:[Object(r.jsx)(C,{children:Object(r.jsx)(b.a,{})},1),Object(r.jsxs)(w,{children:[Object(r.jsx)(S,{children:Object(r.jsx)(y,{to:"/",children:"Home"})},2),Object(r.jsx)(S,{children:Object(r.jsx)(y,{to:"/shop",children:"Shop"})},3),Object(r.jsxs)(S,{children:[n.numItems,Object(r.jsx)(y,{to:"/cart",children:Object(r.jsx)(j.a,{})})]},4)]})]})},z=e(16),q=e.n(z);function _(){var n=Object(s.a)(["\n    display: inline;\n    margin-right: 10px;\n"]);return _=function(){return n},n}function N(){var n=Object(s.a)(["\n    border-radius: 0;\n    text-align: center;\n    border: 2px solid black;\n    border-right-width: 1px;\n    border-left-width: 1px;\n    width: 75px;\n"]);return N=function(){return n},n}function P(){var n=Object(s.a)(["\n    border-radius: 0;\n    background-color: white;\n    border: 2px solid black;\n    cursor: pointer;\n"]);return P=function(){return n},n}var M=m.a.button(P()),B=m.a.input(N()),V=m.a.div(_()),A=function(n){var t=Object(i.useState)(n.quantity),e=Object(u.a)(t,2),c=e[0],a=e[1];return Object(r.jsxs)(V,{children:[Object(r.jsx)(M,{onClick:function(){n.setParentNum(c-1),a(c-1)},children:"-"}),Object(r.jsx)(B,{type:"number",value:c,onChange:function(t){n.setParentNum(t.target.value),a(t.target.value)}}),Object(r.jsx)(M,{onClick:function(){n.setParentNum(c+1),a(c+1)},children:"+"})]})};function D(){var n=Object(s.a)(["\n    display: inline;\n    margin-right: 10px;\n"]);return D=function(){return n},n}function R(){var n=Object(s.a)(["\n    font-size: 1.25em;\n    font-weight: 700;\n    display: block;\n    margin: 0 10px;\n"]);return R=function(){return n},n}function $(){var n=Object(s.a)(["\n    position: relative;\n    left: 40%;\n"]);return $=function(){return n},n}function E(){var n=Object(s.a)(["\n    border-radius: 0;\n    background-color: white;\n    border: 2px solid black;\n    font-size: 20px;\n    padding: 5px 10px;\n    margin: 10px 0;\n    cursor: pointer;\n"]);return E=function(){return n},n}function G(){var n=Object(s.a)(["\n    text-align: center;\n    display: inline-block;\n    border: 2px solid black;\n    margin: 5px;\n    width: 350px;\n    height: 575px;\n    vertical-align: middle;\n"]);return G=function(){return n},n}function J(){var n=Object(s.a)(["\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    margin: 15px;\n"]);return J=function(){return n},n}var H=m.a.img(J()),T=m.a.div(G()),F=m.a.button(E()),L=Object(m.a)(F)($()),U=m.a.h4(R()),K=Object(m.a)(A)(D()),Q=function(n){var t=Object(i.useState)(n.item.quantity),e=Object(u.a)(t,2),c=e[0],a=e[1];return Object(r.jsxs)(T,{children:[Object(r.jsx)(L,{onClick:function(){return n.handleDelete(n.item)},children:"x"}),Object(r.jsx)(U,{children:n.item.name}),Object(r.jsx)(H,{src:n.item.img,alt:"product"}),Object(r.jsx)("p",{children:"$".concat(n.item.price)}),Object(r.jsx)(K,{setParentNum:a,quantity:c}),Object(r.jsx)(F,{onClick:function(){n.setItem(Object.assign({},n.item,{quantity:c}))},children:"Set"})]})};function W(){var n=Object(s.a)(["\n    font-size: 24px;\n    margin: 10px;\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n    text-align: center;\n    width: max-content;\n    margin: 10px auto;\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n    text-align: center;\n"]);return Y=function(){return n},n}var Z=m.a.div(Y()),nn=m.a.h1(X()),tn=m.a.p(W()),en=function(n){var t=n.items.map((function(t){return Object(r.jsx)(Q,{item:t,handleDelete:function(t){return n.deleteItem(t)},setItem:function(t){return n.setItem(t)}},q()())}));return Object(r.jsxs)("div",{children:[Object(r.jsxs)(Z,{children:[Object(r.jsx)(nn,{children:"Cart"}),t]}),Object(r.jsxs)(tn,{children:["Grand Total: ","$".concat(n.items.map((function(n){return n.price*n.quantity})).reduce((function(n,t){return n+t}),0))]}),Object(r.jsx)(tn,{children:Object(r.jsx)(h,{to:"/under-construction",children:"Check Out"})})]})},rn=e.p+"static/media/homepage.00dbb877.jpg";function cn(){var n=Object(s.a)(["\n    background-color: white;\n    padding: 15px 20px;\n    border: 1px white solid;\n    top: 50%;\n    position: absolute;\n"]);return cn=function(){return n},n}function an(){var n=Object(s.a)(["\n    overflow: hidden;\n    text-align: center;\n    width: 100%;\n    position: absolute;\n"]);return an=function(){return n},n}function on(){var n=Object(s.a)(["\n    display: block;\n    height: 100vh;\n    margin: 0 auto;\n"]);return on=function(){return n},n}var un=m.a.img(on()),sn=m.a.div(an()),dn=Object(m.a)(h)(cn()),ln=function(n){return Object(r.jsxs)(sn,{children:[Object(r.jsx)(un,{src:rn,alt:"violin"}),Object(r.jsx)(dn,{to:"/shop",children:"Shop Now"})]})};function jn(){var n=Object(s.a)(["\n    text-align: center;\n    display: inline-block;\n    border: 2px solid black;\n    margin: 5px;\n    width: 350px;\n    height: 425px;\n    vertical-align: middle;\n"]);return jn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    font-size: 1.25em;\n    font-weight: 700;\n    display: block;\n    margin: 0 10px;\n"]);return bn=function(){return n},n}function mn(){var n=Object(s.a)(["\n    height: 300px;\n    width: 300px;\n    object-fit: cover;\n    margin: 15px;\n"]);return mn=function(){return n},n}var pn=m.a.img(mn()),hn=Object(m.a)(h)(bn()),xn=m.a.div(jn()),fn=function(n){return Object(r.jsxs)(xn,{children:[Object(r.jsx)(pn,{src:n.item.img,alt:"product"}),Object(r.jsx)(hn,{to:"items/".concat(n.item.id),children:n.item.name}),Object(r.jsx)("p",{children:"$".concat(n.item.price)})]})};function On(){var n=Object(s.a)(["\n    text-align: center;\n    width: max-content;\n    margin: 10px auto;\n"]);return On=function(){return n},n}function gn(){var n=Object(s.a)(["\n    text-align: center;\n"]);return gn=function(){return n},n}var vn=m.a.div(gn()),wn=m.a.h1(On()),kn=function(n){var t=n.items.map((function(n){return Object(r.jsx)(fn,{item:n},q()())}));return Object(r.jsxs)(vn,{children:[Object(r.jsx)(wn,{children:"Shop"}),t]})};function yn(){var n=Object(s.a)(["\n    font-size: 18px;\n    margin: 10px;\n    display: inline-block;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n    width: 50%;\n    float: left;\n    display: inline;\n    text-align: center;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(s.a)(["\n    height: 100%;\n"]);return Cn=function(){return n},n}function In(){var n=Object(s.a)(["\n    text-align: center;\n    margin-right: 25px;\n"]);return In=function(){return n},n}function zn(){var n=Object(s.a)(["\n    border-radius: 0;\n    background-color: white;\n    border: 2px solid black;\n    font-size: 20px;\n    padding: 5px 10px;\n    margin: 10px 0;\n    cursor: pointer;\n"]);return zn=function(){return n},n}var qn=m.a.button(zn()),_n=m.a.div(In()),Nn=m.a.img(Cn()),Pn=m.a.div(Sn()),Mn=Object(m.a)(h)(yn()),Bn=function(n){var t=Object(l.f)().id,e=n.cartItems.find((function(n){return n.id===t}))||n.shopItems.find((function(n){return n.id===t})),c=Object(i.useState)(e.quantity||1),a=Object(u.a)(c,2),o=a[0],s=a[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(Mn,{to:"/shop",children:"<Go Back"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Pn,{children:Object(r.jsx)(Nn,{src:e.img,alt:"product"})}),Object(r.jsxs)(_n,{children:[Object(r.jsx)("h1",{children:e.name}),Object(r.jsx)("p",{children:"$".concat(e.price)}),Object(r.jsx)(A,{setParentNum:s,quantity:o}),Object(r.jsx)(qn,{onClick:function(){n.setItem(Object.assign({},e,{quantity:o}))},children:"Add to Cart"})]})]})]})},Vn=[{id:"violin-1",name:"Carlo Lamberti Master Series Guarneri Violin",price:1500,img:"https://www.sharmusic.com/productimages/image.axd/i.lv20/w.890/h.600/carlo+lamberti+master+series+guarneri+violin_.jpg"},{id:"violin-2",name:"Franz Hoffmann Maestro Violin ",price:369,img:"https://www.sharmusic.com/productimages/image.axd/i.svb/w.350/h.350/franz+hoffmann+%23174%3b+maestro+violin+-+instrument+only_.jpg"},{id:"cello",name:"John Cheng Stradivari Cello",price:3e3,img:"https://www.sharmusic.com/productimages/image.axd/i.jcs73c/w.350/h.350/john+cheng+%23174%3b+stradivari+cello+-+4+4+size_.jpg"},{id:"violin-bow",name:"Marco Raposo Nickel-Mounted Violin Bow",price:400,img:"https://www.sharmusic.com/productimages/image.axd/i.rv40/w.350/h.350/marco+raposo+nickel-mounted+violin+bow_.jpg"},{id:"cello-bow",name:"R. A. Meinel Pernambuco Cello Bow",price:299,img:"https://www.sharmusic.com/productimages/image.axd/i.cb6/w.350/h.350/r++a++meinel+pernambuco+cello+bow+-+4+4+size_.jpg"},{id:"rosin",name:"Bernardel Rosin",price:8.99,img:"https://www.sharmusic.com/productimages/image.axd/i.1197/w.350/h.350/bernardel+rosin+for+violin+viola+or+cello_.jpg"},{id:"violin-strings",name:"Thomastik Dominant Violin String Set",price:67,img:"https://www.sharmusic.com/productimages/image.axd/i.d129s+44+m/w.350/h.350/thomastik+infeld+dominant+violin+string+set+with+steel+e+string+loop+end+-+medium+gauge_.jpg"},{id:"cello-strings",name:"D'Addario Prelude Cello Set",price:54.99,img:"https://www.sharmusic.com/productimages/image.axd/i.745s/w.350/h.350/d%27addario+prelude+cello+set_.jpg"},{id:"shoulder-rest",name:"Everest Violin Shoulder Rest",price:13.99,img:"https://www.sharmusic.com/productimages/image.axd/i.1338/w.350/h.350/everest+ez+violin+shoulder+rest_.jpg"}];function An(){var n=Object(s.a)(["\n    width: 100%;\n"]);return An=function(){return n},n}function Dn(){var n=Object(s.a)(["\n    width: max-content;\n    margin: 15px auto;\n"]);return Dn=function(){return n},n}var Rn=m.a.h1(Dn()),$n=m.a.img(An()),En=function(n){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Rn,{children:"Under Construction"}),Object(r.jsx)($n,{src:rn,alt:"violin"})]})};function Gn(){var n=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  font-family: sans-serif;\n\n"]);return Gn=function(){return n},n}var Jn=m.a.div(Gn());var Hn=function(){var n=Vn,t=Object(i.useState)([]),e=Object(u.a)(t,2),c=e[0],a=e[1],o=function(n){var t=c.find((function(t){return t.id===n.id}));a(t?function(n,t,e){var r=Array.from(n);return r[n.indexOf(t)]=e,r}(c,t,n):c.concat(n))},s=Object(i.useState)(c.map((function(n){return n.quantity})).reduce((function(n,t){return n+t}),0)),j=Object(u.a)(s,2),b=j[0],m=j[1];return Object(i.useEffect)((function(){m(c.map((function(n){return n.quantity})).reduce((function(n,t){return n+t}),0))}),[c]),Object(r.jsx)(d.a,{children:Object(r.jsxs)(Jn,{children:[Object(r.jsx)(I,{numItems:b}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/shop",children:Object(r.jsx)(kn,{items:n})}),Object(r.jsx)(l.a,{path:"/cart",children:Object(r.jsx)(en,{items:c,deleteItem:function(n){a(c.filter((function(t){return t!==n})))},setItem:o})}),Object(r.jsx)(l.a,{path:"/under-construction",children:Object(r.jsx)(En,{})}),Object(r.jsx)(l.a,{path:"/items/:id",children:Object(r.jsx)(Bn,{shopItems:n,cartItems:c,setItem:o})}),Object(r.jsx)(l.a,{path:"/",children:Object(r.jsx)(ln,{})})]})]})})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Hn,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8b18b7c4.chunk.js.map