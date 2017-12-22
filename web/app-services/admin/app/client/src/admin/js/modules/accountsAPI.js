export let checkLogin = () => {
    var user_data = {};
    $.ajax({
        'async': false,
        'type': "GET",
        'url': "/api/current_user",
        'success': (data) => {
        	user_data.id = data._id,
        	user_data.name = data.googleName
        }
    });
    return user_data;
};



// let socket = io();

// socket.on('userSocket', function(val){
// 	console.log(val);
// });