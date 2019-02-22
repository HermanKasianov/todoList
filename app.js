window.onload = function() {
//доделать LS    
    document.getElementById('add').onclick = function () {
        
        var d = document.getElementById('in').value;
        if (d == '') {
            alert('Write something');
        } else { 
            out();   
        }
    }

    function out() {
        var div = document.createElement('div');
        $(div).attr('id', 'TaskDiv');
        
        var closeBtn = document.createElement('span');
        var x = document.createTextNode('X');
        $(closeBtn).attr('id', 'closeBtn');
        closeBtn.appendChild(x);

        var li = document.createElement('li');
        var inElement = document.getElementById('in').value;
        var t = document.createTextNode(inElement);
        li.appendChild(t);
        li.appendChild(closeBtn);

        if (inElement != '') {
        document.getElementById('list').appendChild(div);
        div.appendChild(li);
        document.getElementById('in').value = "";
        }    
    }

    list.addEventListener('click', function (e) {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle('checked');
        } else if(e.target.tagName === "SPAN") {
           var div = e.target.parentNode;
           div.remove();
        }
    }, false);
    
}