
module.exports = function(router) {
    //render homepage
    router.get("/", function(req, res) {
        res.render("home");
    });
    // render saved handlebars page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}