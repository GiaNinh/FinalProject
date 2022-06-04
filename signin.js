let psi = document.getElementById("signin");
let psu = document.getElementById("signup");
let mdi = document.getElementById("md_si");
let mdu = document.getElementById("md_su");

psi.onclick = function () {
	mdi.style.display = "block";
}
psu.onclick = function () {
	mdu.style.display = "block";
}

window.onclick = function (event) {
	if (event.target == mdi || event.target == mdu) {
		mdi.style.display = "none";
		mdu.style.display = "none";
	}
}