var form = $('#loginFo');

form.submit(function(e) {
	e.preventDefault();

	$.ajax({
		type: form.attr('method'),
		url: form.attr('action'),
		data: form.serialize(),
		success: function(data) {
			sessionStorage.setItem('token', JSON.stringify(data));
			window.location.href = 'portal.html';
		},
		error: function(data) {
			console.log(data);
			if (data.statusText === 'error') {
			}
			if (data.responseText === 'incorrect') {
				alert('Incorrect password or pin');
			}
		}
	});
});
