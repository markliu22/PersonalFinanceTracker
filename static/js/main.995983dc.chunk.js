(this.webpackJsonpreact_finance=this.webpackJsonpreact_finance||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),o=a.n(r),c=a(8),l=a(1),i=a(2),m=a(4),p=a(3);function u(){return s.a.createElement("div",null,s.a.createElement("header",{className:"header"},"Finance Tracker"))}var d=a(5),h=a.n(d),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={name:"",cost:0,category:"Food & Drinks",date:h()().format("MMMM Do YYYY, h:mm:ss a")},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleCostChange=function(t){e.setState({cost:t.target.value})},e.handleCatChange=function(t){e.setState({category:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.name&&0!==e.state.cost?(e.setState({name:e.state.name,cost:e.state.cost,category:e.state.category,date:h()().format("MMMM Do YYYY, h:mm:ss a")}),alert("New Expense Added: ".concat(e.state.name," $").concat(e.state.cost," ").concat(e.state.category," ").concat(e.state.date)),e.props.addExpense(e.state.name,e.state.cost,e.state.category,e.state.date),e.setState({name:"",cost:0,category:"Food & Drinks",date:h()().format("MMMM Do YYYY, h:mm:ss a")})):alert("Missing Information!")},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"addExpenseDiv"},s.a.createElement("form",{onSubmit:this.handleSubmit,action:"",method:""},s.a.createElement("label",null,"Name:"),s.a.createElement("input",{type:"text",title:"name",placeholder:"Add Expense Name...",value:this.state.name,onChange:this.handleNameChange}),s.a.createElement("label",null,"Cost:"),s.a.createElement("input",{type:"number",title:"cost",value:this.state.cost,onChange:this.handleCostChange}),s.a.createElement("label",null,"Category:"),s.a.createElement("select",{value:this.state.category,onChange:this.handleCatChange,style:{flex:"1"}},s.a.createElement("option",{value:"Food & Drinks"},"Food & Drinks"),s.a.createElement("option",{value:"Transportation"},"Transportation"),s.a.createElement("option",{value:"Utilities"},"Utilities"),s.a.createElement("option",{value:"Personal"},"Personal")),s.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}})))}}]),a}(n.Component);function v(){return s.a.createElement("ul",{className:"legend"},s.a.createElement("li",{className:"FoodLegendIcon"},s.a.createElement("span",{class:"Fooddot"}),"Food & Drinks"),s.a.createElement("li",{className:"TransportLegendIcon"},s.a.createElement("span",{class:"Transportdot"}),"Transportation"),s.a.createElement("li",{className:"UtilLegendIcon"},s.a.createElement("span",{class:"Utildot"}),"Utilities"),s.a.createElement("li",{className:"PersonalLegendIcon"},s.a.createElement("span",{class:"Personaldot"}),"Personal"))}var f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"sortingDiv"},s.a.createElement("button",{className:"sortBtn",onClick:this.props.reverseSort},"Toggle Sort"))}}]),a}(n.Component),x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleDelete=function(t){e.props.delExpense(e.props.expense.date)},e}return Object(i.a)(a,[{key:"_setIdName",value:function(){return"Food & Drinks"===this.props.expense.category?"FoodexpenseItem":"Transportation"===this.props.expense.category?"TransportexpenseItem":"Utilities"===this.props.expense.category?"UtilexpenseItem":"PersonalexpenseItem"}},{key:"render",value:function(){return s.a.createElement("div",{className:"expenseItem"},s.a.createElement("div",null,s.a.createElement("p",{className:"colourStripe",id:this._setIdName()})),s.a.createElement("div",{className:"ExpenseMainSection"},s.a.createElement("p",{className:"ExpenseItemText"},this.props.expense.date," ","    ","  ",this.props.expense.name," $",this.props.expense.cost)),s.a.createElement("div",{className:"ExpenseButtonSection"},s.a.createElement("button",{className:"deleteBtn",onClick:this.handleDelete}," X ")))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.expenses.map((function(t){return s.a.createElement(x,{expense:t,delExpense:e.props.delExpense})}))}}]),a}(n.Component),b=(a(15),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={expenses:[]},e.addExpense=function(t,a,n,s){var r={name:t,cost:a,category:n,date:s};e.setState({expenses:[].concat(Object(c.a)(e.state.expenses),[r])})},e.delExpense=function(t){e.setState({expenses:e.state.expenses.filter((function(e){return e.date!==t}))})},e.reverseSort=function(){var t=e.state.expenses.reverse();e.setState({expenses:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"topSection"},s.a.createElement(u,null),s.a.createElement(E,{addExpense:this.addExpense})),s.a.createElement("div",{className:"bottomSection"},s.a.createElement(f,{reverseSort:this.reverseSort}),s.a.createElement(v,null),s.a.createElement(g,{expenses:this.state.expenses,delExpense:this.delExpense})))}}]),a}(s.a.Component));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.995983dc.chunk.js.map