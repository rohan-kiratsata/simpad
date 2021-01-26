var cnt;
function wordcount(count) {
    var words = count.split(/\s/);
    cnt = words.length;
    var ele = document.getElementById('wordcnt');
    ele.value = cnt;
}
document.write(getElementById("wordcnt"));