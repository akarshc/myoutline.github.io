
var open_s = 0;

window.addEventListener('click', (e) => {   
	if(open_s) {
		if (document.getElementById('menu').contains(e.target)){
			// event triggered
		}
		else {
			closeMenu();
		}
	}
});

var openMenu = () => {
	document.getElementById('menu').style.animation = "popIn .20s ease-in-out forwards";
	document.getElementById('menu_icon_child_1').style.animation = "rotateAdd_1 .2s ease-in-out forwards";
	document.getElementById('menu_icon_child_2').style.animation = "rotateAdd_2 .2s ease-in-out forwards";
	setTimeout(function(){ open_s = 1; }, 100);
}

var closeMenu = (e) => {
	document.getElementById('menu').style.animation = "popOut .20s ease-in-out forwards";
	document.getElementById('menu_icon_child_1').style.animation = "rotateRemove_1 .2s ease-in-out forwards";
	document.getElementById('menu_icon_child_2').style.animation = "rotateRemove_2 .2s ease-in-out forwards";
	setTimeout(function(){ open_s = 0; }, 100);
}

function darkMode(){
	currentvalue = document.getElementById('onoff').value;
	if(currentvalue == "dark"){
		var element = document.getElementById("container");
		element.classList.add("dark");
		document.getElementById("onoff").value="light";   
		document.getElementById("onoff").innerHTML="Light Mode";
		document.getElementById("menu_icon_child_1").classList.add("dark-menu-ico");
		document.getElementById("menu_icon_child_2").classList.add("dark-menu-ico");
		document.getElementById("menu_icon").classList.add("dark-menu-dark");		
	}else{
		document.getElementById("menu_icon_child_1").classList.remove("dark-menu-ico");
		document.getElementById("menu_icon_child_2").classList.remove("dark-menu-ico");
		var element = document.getElementById("container");
		element.classList.remove("dark");
		document.getElementById("onoff").value="dark"; 
		document.getElementById("onoff").innerHTML="Dark Mode";
	}
		
}