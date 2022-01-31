// let inp = document.getElementById("inp");
// let result = document.getElementById("result");
//let inp="https://github.com/amverma-systango/JavaScriptAssignmentByVaibhavSir/blob/main/question14/main.js";


function check(url){
	let inp=url;
    let requestPort = ["https://www.","http://www."];
let requestDomain = [".com",".ru",".org",".net",".ir",".in",".uk",".au",".de",".ua",".gov",".io",".edu",".info",".biz"]; 
	let validPort = false;
	let validDomain = false;

	
	for( let x of requestPort){
		if(inp.includes(x)){
			validPort = true;
		}
	}
	



	for( let x of requestDomain){
		if(inp.includes(x)){
			validDomain = true;
		}
	}
	

	
	let res = validPort && validDomain;
	
	if(res === true){
		console.log( "Yes, its a valid URL");
	}
	else{
		console.log( "No, its not a valid URL");

	}
}
check("https://github.com/amverma-systango/JavaScriptAssignmentByVaibhavSir/blob/main/question14/main.js");
check("https://www.google.com/search?q=youtube&oq=&aqs=chrome.1.69i59i450l8.30417863j0j15&sourceid=chrome&ie=UTF-8");