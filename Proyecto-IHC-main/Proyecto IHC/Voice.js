<script>
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString()
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text
    }
    return text;
}

$(document).ready(function() {
    $(document).mouseup(function(e) {
        setTimeout(function() {
            responsiveVoice.cancel();
            responsiveVoice.speak(getSelectionText());
        }, 1);
    })
});
</script>

