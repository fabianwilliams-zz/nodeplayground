(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            //res.send("<html><body><h1> Welcome to Fabian Expess </h1></body></html>");
            //res.render("jade/index", { title: "Express + Jade by Fabian" });
            //res.render("index", { title: "Express and Vash" });

            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "Fabian Express Vash Solution with Data", error: err, categories: results });
            });

        });
    };
})(module.exports);