(this.webpackJsonpcms=this.webpackJsonpcms||[]).push([[0],{28:function(e,t,a){e.exports=a(59)},33:function(e,t,a){},34:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(33),a(6)),s=a(7),d=a(10),u=a(8),i=a(11),m=(a(34),a(9)),p="FETCH_PRODUCTS",g="FETCH_BRANDS",h="FETCH_CATEGORIES";var E=a(12),f=a.n(E),b="http://127.0.0.1:2001";a(57);var v=function(e){var t=e.list;return console.log("item",t),t&&t.length>0?t.map((function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",null,r.a.createElement("h1",null,"".concat(e.productName))),r.a.createElement("div",{className:"card-content"},r.a.createElement("table",{border:1,cellPadding:5,cellSpacing:5,width:600},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"table-data"},"Category"),r.a.createElement("td",null,e.categoryName)),r.a.createElement("tr",null,r.a.createElement("td",{className:"table-data"},"Brand"),r.a.createElement("td",null,e.brandName)),r.a.createElement("tr",null,r.a.createElement("td",{className:"table-data"},"Specification"),r.a.createElement("td",null,e.specification))))))})):null},y=(a(58),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){a.setState({openModal:!0})},a.handleChange=function(e){console.log(e.target.name),"category"===e.target.name&&a.setState({selectedCategory:e.target.value})},a.modal=function(){var e=a.props,t=e.category,n=e.brand,c=a.state,o=c.openModal,l=c.selectedCategory,s=c.selectedBrand;return r.a.createElement("div",{id:"myModal",className:"modal",style:{display:o?"block":"none"}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:function(){return a.setState({openModal:!1})}},"X"),r.a.createElement("div",null,r.a.createElement("h3",null,"select category"),r.a.createElement("select",{value:l,onChange:a.handleChange,name:"category"},t&&t.map((function(e){return r.a.createElement("option",{value:e.id},e.categoryName)}))),r.a.createElement("span",{style:{margin:"4px"}},r.a.createElement("button",{onClick:function(){return a.setState({showAddCategory:!0})}},"+")),a.addCategory()),r.a.createElement("div",null,r.a.createElement("h3",null,"select brand"),r.a.createElement("select",{value:s,onChange:a.handleChange,name:"brand"},n&&n.map((function(e){return r.a.createElement("option",{value:e.id},e.brandName)}))))))},a.addCategory=function(){var e=a.props,t=e.category,n=e.selectedParentCategory,c=a.state.showAddCategory;return r.a.createElement("div",null,c&&r.a.createElement("div",{style:{margin:"4px"}},r.a.createElement("span",null,"category name "),r.a.createElement("input",{type:"text"}),r.a.createElement("div",null,r.a.createElement("span",null,"select parent category"),r.a.createElement("select",{value:n,onChange:a.handleChange,name:"category"},r.a.createElement("option",{value:null},"null"),t&&t.map((function(e){return r.a.createElement("option",{value:e.id},e.categoryName)}))))))},a.state={openModal:!1,selectedCategory:0,selectedBrand:0,selectedParentCategory:null},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("select",this.state.selectedCategory),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:this.handleClick},"Add Product"),this.modal())}}]),t}(r.a.Component)),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={productList:[]},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getProducts(),this.props.getBrands(),this.props.getCategories()}},{key:"mapProductData",value:function(){var e=this.state.productList,t=this.props,a=t.products,n=t.categories,r=t.brands,c={};a&&a.data&&a.data.length&&n&&n.data&&r&&r.data&&a.data.forEach((function(e){c.productName=e.productName;var t=n.data.filter((function(t){return t.id===e.categoryID}));c.categoryName=t[0].categoryName;var a=r.data.filter((function(t){return t.id===e.brandID}));c.brandName=a[0].brandName})),Object.keys(c).length>0&&e.push(c),this.setState({productList:e}),console.log("prdc",c)}},{key:"componentDidUpdate",value:function(e){this.props.products===e.products&&this.props.categories===e.categories||this.mapProductData()}},{key:"render",value:function(){var e=this.state.productList,t=this.props,a=t.categories,n=t.brands;return console.log("prp",this.props),r.a.createElement("div",{className:"app"},r.a.createElement(y,{category:a&&a.data,brand:n&&n.data}),r.a.createElement(v,{list:e}))}}]),t}(r.a.Component),N={getProducts:function(){return function(e){return f.a.get("".concat(b,"/products")).then((function(t){return e((a=t.data,{type:p,data:a}));var a}))}},getCategories:function(){return function(e){return f.a.get("".concat(b,"/categories")).then((function(t){return e((a=t.data,{type:h,data:a}));var a}))}},getBrands:function(){return function(e){return f.a.get("".concat(b,"/brands")).then((function(t){return e((a=t.data,{type:g,data:a}));var a}))}}},O=Object(m.b)((function(e){return{products:e.productsReducer.products,brands:e.productsReducer.brands,categories:e.productsReducer.categories}}),N)(C),j=a(3),k=a(27),S=a(13);var P=Object(j.c)({productsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(S.a)({},e,{products:t.data});case h:return Object(S.a)({},e,{categories:t.data});case g:return Object(S.a)({},e,{brands:t.data});default:return e}}});function D(){return Object(j.d)(P,Object(j.a)(k.a))}a.d(t,"default",(function(){return D}));var B=D();o.a.render(r.a.createElement(m.a,{store:B},r.a.createElement(O,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.95a45cb4.chunk.js.map