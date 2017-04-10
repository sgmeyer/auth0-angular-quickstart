"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var login_component_1 = require("./login.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: '' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map