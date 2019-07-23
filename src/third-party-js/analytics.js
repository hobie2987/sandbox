// window.alert('Im here!');

$.ajax({
    type: 'POST',
    url: '/sandbox/log',
    contentType : 'application/json',
    data: JSON.stringify({message: 'Test of log endpoint', 'log-code': 100}),
    success: function(result) {
        console.log(result)
    }
});
