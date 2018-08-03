function show(id){
	console.log(id);
	document.getElementById("parapop").innerHTML = "<p>Nom : " + list[id].nom + "</p><p>Prénom : " + list[id].prénom + "</p><p>Age : " + list[id].age + "ans</p><p>Ville : " + list[id].ville + "</p><p>Javascript : " + list[id].javascript + "</p><p>Fav Web : " + list[id].fav_web + "</p><p>Fav Web Why : " + list[id].fav_web_why + "</p><p>Fav App : " + list[id].fav_app + "</p><p>Fav App Why : " + list[id].fav_app_why + "</p><p>Before IFA : " + list[id].before_ifa + "</p><p>Why IFA : " + list[id].why_ifa + "</p><p>Contact Mail : " + list[id].contact_mail + "</p>";
	document.getElementById("popup").style.display = "block";
}

function hide(){
	document.getElementById("popup").style.display = "none";
}

for (var i=0; i<list.length; i++){
	var para = document.createElement("p");
	para.id = i;
	para.className = "noms";
	para.addEventListener("click", function(){show(this.id)});
	document.getElementById("container").appendChild(para).innerHTML = list[i].nom.toUpperCase();
}