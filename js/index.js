function setRem(){
    var ui_w=375;
    var client_w=document.documentElement.clientWidth || document.body.clientWidth;
    var html=document.getElementsByTagName('html')[0];
    html.style.fontSize=(client_w/ui_w)*10+'px';
}
window.onresize=setRem;