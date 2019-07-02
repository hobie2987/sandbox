// window.alert('Im here!');

$.ajax({
    type: 'POST',
    url: '/log',
    contentType : 'application/json',
    data: JSON.stringify({message: 'Test of log endpoint', 'log-code': 100}),
    success: function(result) {
        console.log(result)
    }
});
