sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    ],
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("ch.novobc.sapui5.controller.List", {
            // handleSearch: function (evt) {
            //     // create model filter
            //     var filters = [];
            //     var query = evt.getParameter("query");
            //     if (query && query.length > 0) {
            //         filters.push(new Filter({
            //             path: "lastName",
            //             operator: FilterOperator.Contains,
            //             value1: query
            //         }));
            //     }
    
            //     // update list binding
            //     var list = this.getView().byId("list");
            //     var binding = list.getBinding("items");
            //     binding.filter(filters);
            // },
    
            onPressGo: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedParticipantId = this.getView().byId("inputMail").getValue(); //oEvent.getSource().getBindingContext().getProperty("participantId");
                oRouter.navTo("detail", {
                    participantId: encodeURIComponent(selectedParticipantId)
                });
            }
        });
    });
