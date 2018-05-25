$.getJSON('http://gsx2json.com/api?id=1kalWS1OK_WVXvg8RzOfllSlLdDR8VPruXwch9Mz4Zgc&sheet=1&q=USD&columns=false', function(data) {
    var text = Math.floor(`${data.rows[0].btcvalue}`).toLocaleString();
    $(".pfvalue").html(text);
});
