const edit = () =>{
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = document.getElementById('css-code').value;
    let jsCode = document.getElementById('js-code').value;
    let frame = document.getElementById('iframe');
    frame.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    frame.contentWindow.eval(jsCode)
}