setTimeout(addButtons, 1000);

function addButtons() {
	document.addEventListener("keydown", e => {
		if(e.altKey && e.ctrlKey){
			let container = document.getElementById("shortcutsContainer");

			if(container){
				document.body.removeChild(container);
			}else {
				let div = document.createElement("div");
				div.setAttribute("id","shortcutsContainer");
				div.style.position = 'absolute';
				div.style.display= "flex";
  				div.style.justifyContent= "center";
				div.style.width = "100%";
				div.style.height = "92px";
				div.style.top = '0';
				div.style.zIndex = '9998';
				div.style.backgroundColor = "white";
				div.style.borderBottom = "1px solid #888";
				div.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)";

				const shortcutsList = [
				  {appName:"John", logo:"https://avramiulian.github.io/iulian.github.io/custom.png", href:"https://www.google.ro/", positionTop:"25px", paddingRight:"100px"},
				  {appName:"John", logo:"https://avramiulian.github.io/iulian.github.io/custom.png", href:"https://www.facebook.com/", positionTop:"25px", paddingRight:null},
				  {appName:"John", logo:"https://avramiulian.github.io/iulian.github.io/custom.png", href:"https://www.youtube.com/", positionTop:"25px", paddingRight:"50px"},
				  {appName:"John", logo:"https://avramiulian.github.io/iulian.github.io/custom.png", href:"https://www.facebook.com/", positionTop:"25px", paddingRight:null}
				];

				for (let i = 0; i < shortcutsList.length; i++) {
				  	let link = document.createElement('a');
					let img = document.createElement("img");
					img.src = shortcutsList[i].logo;
					link.appendChild(img);
					link.href = shortcutsList[i].href;
					link.style.top = shortcutsList[i].positionTop;
					link.style.position = 'relative';
					if(shortcutsList[i].paddingRight){
						link.style.paddingRight = shortcutsList[i].paddingRight;
					}
					link.style.zIndex = '9999';
					div.appendChild(link);
				}
				document.body.appendChild(div);
			}
		}
	});
}
