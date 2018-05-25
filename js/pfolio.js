$.getJSON('https://spreadsheets.google.com/feeds/cells/1kalWS1OK_WVXvg8RzOfllSlLdDR8VPruXwch9Mz4Zgc/1/public/values?alt=json', function(data) {
    var text = Math.floor(`${data.feed.entry[data.feed.entry.length -1 ].content.$t}`).toLocaleString();
    $(".pfvalue").html(text);
});
