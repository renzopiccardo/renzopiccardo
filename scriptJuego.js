    var url = "http://www.example.com/index.php?myParam=384&login=admin"; // or window.location.href for current url
    var captured = /myParam=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'myDefaultValue';