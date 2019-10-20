class IndexController { 

    static renderIndex(req, res) {
        const Res = res;
        Res.redirect('/index');
    }
}

module.exports = IndexController;