sap.ui.define(["sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,r){"use strict";return{filterItems:function(t){switch(t){case"0":return new e({path:"Sap_workitem_id",operator:r.LT,value1:100});case"1":return new e({filters:[new e({path:"Sap_workitem_id",operator:r.GT,value1:100}),new e({path:"Sap_workitem_id",operator:r.LT,value1:500})],and:true});case"2":return new e({path:"Sap_workitem_id",operator:r.GT,value1:500})}}}});