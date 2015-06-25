
	// 	cookies.js
	//
	// 	set, expire, read, replace cookies
	//
	// 	adapted from animateMessage.js


        function setCookie(name) {

                if (getCookie(name) == "") {

			document.cookie=name+"=true";
                        return true;

                } else {

                        return false;
                }
        }


        function expireCookie(name) {

                if (getCookie(name) != "") {

			document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                        return true;

                } else {

                        return false;
                }
        }


        function getCookie(name) {

                var cname = name + "=";
                var ca = document.cookie.split(';');

                for(var i = 0; i < ca.length; i++) {

                        var c = ca[i];
                        while (c.charAt(0)==' ') c = c.substring(1);
                        if (c.indexOf(cname) != -1) return c.substring(cname.length,c.length);
                }
                return "";
        }


        function checkCookie(name) {

                if (getCookie(name) != "") {

                        return true;

                } else {

                        return false;
                }
        }
