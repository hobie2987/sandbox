const data = {
    message: 'Test of log endpoint',
    'log-code': 100,
    level: 'info'
};

$.ajax({
    type: 'POST',
    url: '/sandbox/log',
    contentType : 'application/json',
    data: JSON.stringify(data),
    success: function(result) {
        console.log(result)
    }
});
