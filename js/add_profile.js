function myFunction() {
    const profile=  ' <div class="container-profile" style="display: inline-block;">'+
                        ' <div class="circle">'+
                            ' <a href="#">'+
                                ' <img class="icon-profile" src="./asset/download.jpg">'+
                            ' </a>'+
                        ' </div>'+
                    ' </div>';
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    var d1 = document.getElementById("horizontal-scroll_id");
    d1.insertAdjacentHTML('beforeend', profile);
}