// Variablen
var sidebarbox = document.getElementById("sidebar");
var sidebar = document.getElementById("sidebarinnline");
var height = window.innerHeight;
var menustatus = false;
var x, y;
var path =
	"M 0 0 L 100 0 Q 100 " +
	height / 100 * 25 +
	" 100 " +
	height / 2 +
	" Q 100 " +
	height / 100 * 75 +
	" 100 " +
	height +
	" L 0 " +
	height +
	" z";

// Übergabe unseres Path an die Grafik
sidebar.setAttribute("d", path);

// Mouse Move
document.onmousemove = function() {
	x = event.clientX;
	y = event.clientY;
	if (x <= 300) {
		path =
			"M 0 0 L 100 0 Q 130 " +
			(y - 150) +
			" 130 " +
			y +
			" Q 130 " +
			(y + 150) +
			" 100 " +
			height +
			" L 0 " +
			height +
			" z";
	} else {
		path =
			"M 0 0 L 100 0 Q 100 " +
			(y - 150) +
			" 100 " +
			y +
			" Q 100 " +
			(y + 150) +
			" 100 " +
			height +
			" L 0 " +
			height +
			" z";
	}
	if (menustatus == false) {
		sidebar.setAttribute("d", path);
	}
};

sidebarbox.addEventListener("click", function() {
	if (menustatus == false) {
		open();
	} else {
		close();
	}
});

function open() {
	path =
		"M 0 0 L 450 0 Q 450 " +
		height / 100 * 25 +
		" 450 " +
		height / 2 +
		" Q 450 " +
		height / 100 * 75 +
		" 450 " +
		height +
		" L 0 " +
		height +
		" z";
	sidebar.setAttribute("d", path);
	sidebarbox.classList.add("open-sidebar");
	menustatus = true;
}

function close() {
	path =
		"M 0 0 L 100 0 Q 100 " +
		height / 100 * 25 +
		" 100 " +
		height / 2 +
		" Q 100 " +
		height / 100 * 75 +
		" 100 " +
		height +
		" L 0 " +
		height +
		" z";
	sidebar.setAttribute("d", path);
	sidebarbox.classList.remove("open-sidebar");
	menustatus = false;
}
