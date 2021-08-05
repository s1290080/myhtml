function flexTextarea(el) {
    const dummy = el.querySelector('.FlexTextarea__dummy')
    el.querySelector('.FlexTextarea__textarea').addEventListener('input', e => {
      dummy.textContent = e.target.value + '\u200b'
  })
}

document.querySelectorAll('.FlexTextarea').forEach(flexTextarea)

var matome=[概要]
var code=[コード]
var comment=[評価・コメント]
var matomeme=document.getElementById("1")
var codede=document.getElementById("2")
var commentt=document.getElementById("3")
var jikko=document.getElementById("4")
jikko.addEventListenner("click",detcli)
function detcli(){
    matome.push(matomeme.value);
    code.push(codede.value);
    comment.push(commentt.value);
    location.href=index.html
}
