function login(router) {
    // use passport authentication module 
    // http://www.passportjs.org/
    router.get('/login', function(req, res) {
        res.render('login', {
            title: 'Login for BPMS App'
        });
   });
}

module.exports = login;