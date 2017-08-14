(function () {
    var text = document.getElementById('text');
    var str = 'w3resource';

    function rotate(str) {
        for (var i = 0; i < str.length; i++) {
            var tmp = str.split('');
            setInterval(tmp.push(tmp.shift(i)), 1000);
            str = tmp.join('');
            text.innerHTML= str;
        }        
    }
    
})();


