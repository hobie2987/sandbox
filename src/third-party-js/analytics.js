// window.alert('Im here!');


const data = {
    message: 'Test of log endpoint',
    'log-code': 100,
    level: 'info',
    data: [
        { name: 'Eric', employer: 'Vanguard' },
        { name: 'Colin', employer: 'Chic-fil-A Inc.' }
    ]
};

$.ajax({
    type: 'POST',
    url: '/sandbox/log',
    contentType : 'application/json',
    data: JSON.stringify(data),
    headers: {
        'X-XSRF-TOKEN': $.cookie('XSRF-TOKEN')
    },
    success: function(result) {
        console.log(result)
    }
});
