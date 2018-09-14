window.addEventListener('load',init);
	
	function init(){
		
		getDataFDB(); 
		//sparar data som skrivs in och skickar till databasen, gör ett anrop till getDataFDB som uppdaterar sidan. Sparar via id input och text, gör om till json och skickar
	var APIurl = "http://localhost:8888/php/API/uppgift3/posts/?key=123CloWn";

	document.getElementById("submit").addEventListener('click', function(){
		
	
	var text1 = document.getElementById('message').value;
		
	var text2 = document.getElementById('head').value;
		

	 var data1 = JSON.stringify({'message': text1});
	 var data2 = JSON.stringify({'head': text2});
	
	 var xhr = new XMLHttpRequest();
        xhr.open('POST', APIurl, true);
        xhr.addEventListener("readystatechange", xmlGetdata);       
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        xhr.send("data2=" + data2 + "&data1=" + data1);
     


     function xmlGetdata(e){
     	if (this.readyState === 4 && this.status === 200) {
     		var xml = this.responseText;
     		
     		getDataFDB();
     		
     	}
     }
  

});
	
	
		


		
//skickar inläggets id som GET till servern och raderar inlägget från databasen, gör ett anrop till getDataFDB som uppdaterar sidan
function removeFDB(e) {
	
	var delTDB = this.id;
	
	
		
		
		var APIurl = "http://localhost:8888/php/API/uppgift3/post/"+delTDB+"?key=123CloWn";
		
	   	var xhr = new XMLHttpRequest();
        xhr.open("DELETE", APIurl, true);
        xhr.addEventListener("readystatechange", xmlDeletedata); 

		xhr.send();
	function xmlDeletedata(e){
     	if (this.readyState === 4 && this.status === 200) {
     		var xml = this.responseText;
     		
     		getDataFDB()

}}}
//Lagrar data som förändras och updaterar efter id som skickas 
function upTDB(){
	
	
	var iddata = this.name; //namnet inehåller inläggets id
	
	var dataElems = document.getElementsByClassName("belongsTo_"+this.name); 
	

	

	var jsonObj = {"title": dataElems[0].value, "text": dataElems[1].value};
	var UPdata = JSON.stringify(jsonObj);
	

		
		var APIurl = "http://localhost:8888/php/API/uppgift3/post/"+iddata+"?key=123CloWn";
		
	   	var xhr = new XMLHttpRequest();
        xhr.open("PUT", APIurl, true);
        xhr.addEventListener("readystatechange", xmlUpdata); 
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("UPdata=" + UPdata);
		
	function xmlUpdata(e){
     	if (this.readyState === 4 && this.status === 200) {
     		var xml = this.responseText;
     		
     		
			getDataFDB()

}
}
}
		//Funktion som körs med init för att alltid uppdatera sidan vid förändring, den hämtar från databasen och skapar element med inehållet
		function getDataFDB() {
	    	
	    	var APIurl = "http://localhost:8888/php/API/uppgift3/posts/?key=123CloWn";
	    	 var xhr = new XMLHttpRequest();
		        xhr.open('GET', APIurl, true);
		        xhr.addEventListener("readystatechange", xmlGetdata2); 

		       xhr.send();

		        function xmlGetdata2(e){
     			if (this.readyState === 4 && this.status === 200) {
     			var xml = this.responseText;
     			

     			var dtaFDB = JSON.parse(xml);

				var output = document.getElementById("output");
				output.innerHTML = "";

     			for (var key in dtaFDB) {
     					
     					var br = document.createElement("br");
     					output.appendChild(br);
     					var head = document.createElement("input");
     					head.setAttribute("class", "belongsTo_" + dtaFDB[key].id);
     					head.setAttribute("value", dtaFDB[key].rubrik); 
     					
     					output.appendChild(head);
     					var br = document.createElement("br");
     					output.appendChild(br);
     					var textarea = document.createElement("textarea");
     					textarea.setAttribute("class", "belongsTo_" + dtaFDB[key].id);	
     					var textmes = document.createTextNode(dtaFDB[key].text);
     					textarea.appendChild(textmes);
     					output.appendChild(textarea);
     					var br = document.createElement("br");
     					output.appendChild(br);
     					var up = document.createElement("button");
     					var upd = document.createTextNode("updatera");
     					
     					up.setAttribute("name", dtaFDB[key].id);
     					up.addEventListener("click", upTDB);
     					up.appendChild(upd);
     					output.appendChild(up);
     					
     					var del = document.createElement("button");
     					var dele = document.createTextNode("ta bort");
     					del.setAttribute("id",dtaFDB[key].id);
     					
     					del.addEventListener("click", removeFDB);
     					del.appendChild(dele);
     					
     					output.appendChild(del);

     					

     					



     					
     			}

     			
     		;
     	}
     }
	}
	

	}