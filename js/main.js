var v = document.getElementsByClassName('myVideo');
        function classToggle(id) {
            v[id].classList.toggle('hide');
            v[id].classList.toggle('active');
        }

        function closeOtherVideo(id) {
            var c = document.getElementsByClassName('myVideo');
            for(var i=0; i<c.length; i++){
                if(i != id) {
                    v[i].pause();
                    c[i].classList.remove('active')
                    c[i].classList.add('hide')
                }
            }
        }

    document.getElementById('toVideo1').addEventListener('click', function() { classToggle(0),closeOtherVideo(0)});