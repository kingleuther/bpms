/* GET home page /callback */
function home(router){
	router.get('/', function(req, res) {
		res.render('index', { 
		title: 'Test App',
		desc: 'A sample test for webhooks'
		});
	});
}

module.exports = home;


