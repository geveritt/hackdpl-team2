function isEmpty (data) {
		
	//Boolean and number types indicate data is not empty
	if(typeof data === 'number' || typeof data  === 'boolean') {		
		return false;
	}
	
	//Because typeof null === 'object'  yeap, that's a thing. 
	if(typeof data === 'undefined' || data === null) {	
		return true;
	}
	
	//Zero length strings and arrays
	if(data.length === 0) {	
		return true;
	}
	
	//If there is a string or array that has passed the length check, it presumably
	// has a length and contains something.  The validity of those contents is not checked.  
	if(data.length > 0) {
		return false;
	}
	
	//Not checking objects now. 
	if(typeof data === 'object') {
		return undefined;
	}
	
	//Other?
	Yelp.logToConsole("new case for isEmpty may need to be added");
	return undefined;
};

function initHome () {
	determineClosestBranch();
	populateServicesContent();
	attachLibFormValidation();
};

function determineClosestBranch () {
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(returnClosestBranchName);
    } else {
        returnClosestBranchName({"coords":{"latitude":42.358453, "longitude":-83.06668}});
    }
};

function returnClosestBranchName (position) {
	var userLat, userLng;
	userLat = position.coords.latitude;
	userLng = position.coords.longitude;

	var locations = [
		{"name": "campbell", 	"lat": 42.308914, 	"lng": -83.133154, 	"phone":"(313) 481-1550", 	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "bowen", 		"lat": 42.323272,	"lng": -83.088836, 	"phone":"(313) 481-1540", 	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "conely",		"lat": 42.331161,   "lng": -83.127261, 	"phone":"(313) 481-1590", 	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "skillman and national automotive history collection",	"lat": 42.333902,	"lng": -83.046755, "phone":"(313) 481-1862", "hours":"M, T, W, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "elmwood park",	"lat": 42.340847, 	"lng": -83.023601, "phone":"(313) 481-1732", "hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "douglass",	"lat": 42.34315,	"lng": -83.074121, 	"address":"3666 Grand River", "tempClosed":true},
		{"name": "edison",		"lat": 42.357806,	"lng": -83.220108, 	"phone":"(313) 481-1720", 	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "main",		"lat": 42.358453,	"lng": -83.06668,  	"phone":"(313) 481-1300", 	"hours":" T, W: 12 p.m. - 8 p.m. Th, F, Sa: 10 a.m. - 6 p.m. Su, M: CLOSED"},
		{"name": "duffield",	"lat": 42.3633,		"lng": -83.093233, 	"phone":"(313) 481-1710", 	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "monteith",	"lat": 42.377385,	"lng": -82.950649, 	"phone":"(313) 481-1800", 	"hours":"M: 12 p.m. - 8 p.m. T: 10 a.m. - 6 p.m. W, Th, F, Sa, Su: CLOSED"},
		{"name": "chaney",		"lat": 42.395191,	"lng": -83.205282,	"phone":"(313) 481-1570", 	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "parkman",		"lat": 42.396886,	"lng": -83.126842,	"phone":"(313) 481-1810",	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "chandler park",	"lat": 42.401552,	"lng": -82.974305, "phone":"(313) 481-1560", "hours":"W, F: 10 a.m. - 6 p.m. Th: 12 p.m. - 8 p.m. M, T, Sa, Su: CLOSED"},
		{"name": "jefferson",	"lat": 42.404008,	"lng": -82.937269,	"phone":"(313) 481-1760",	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "redford",		"lat": 42.413423,	"lng": -83.249924, 	"phone":"(313) 481-1820",	"tempClosed":true},
		{"name": "knapp",		"lat": 42.41493,	"lng": -83.061059,	"phone":"(313) 481-1770",	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "hubbard",		"lat": 42.416376,	"lng": -83.172729,	"phone":"(313) 481-1750",	"hours":"M, W: 12 p.m. - 8 p.m. T, Th, F: 10 a.m. - 6 p.m. Sa, Su: CLOSED"},
		{"name": "franklin",	"lat": 42.426872,	"lng": -82.984255,	"phone":"(313) 481-1740",	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "chase",		"lat": 42.430053,	"lng": -83.217493,	"phone":"(313) 481-1580",	"hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"},
		{"name": "wilder",		"lat": 42.43156,	"lng": -83.144448,	"phone":"(313) 481-1870",	"hours":"W: 12 p.m. - 8 p.m. Th, F:  10 a.m. - 6 p.m. M, T, Sa, Su: CLOSED"},
		{"name": "lincoln",		"lat": 42.432832,	"lng": -83.090829, 	"phone":"(313) 481-1780",	"hours":"M: 12 p.m. - 8 p.m. T: 10 a.m. - 6 p.m. W, Th, F, Sa, Su: CLOSED"},
		{"name": "sherwood forest",	"lat": 42.433862,	"lng": -83.030151, "phone":"(313) 481-1840", "hours":"M, W, F: 10 a.m. - 6 p.m. T, Th: 12 p.m. - 8 p.m. Sa, Su: CLOSED"}];

		var closest = {};

		if (!isEmpty(userLat) && !isEmpty(userLng)) {

			console.log("browser reported lat and lng as:");
			console.log(userLat + ", " + userLng);

			closest.dist = 999999999;
			closest.name = null;
			var distance = null;

			for (var i=0; i<locations.length; i++) {
				distance = pointsDistance({"x":userLat, "y":userLng},
								{"x":locations[i].lat, 	"y":locations[i].lng});

				if (distance < closest.dist) {
					closest.dist = distance;
					closest.name = locations[i].name;
					if(!isEmpty(locations[i].hours)) closest.hours = locations[i].hours;
					if(!isEmpty(locations[i].phone)) closest.phone = locations[i].phone;
					if(!isEmpty(locations[i].lat)) closest.lat = locations[i].lat;
					if(!isEmpty(locations[i].lng)) closest.lng = locations[i].lng;
				}
			}
		} else {
			console.log("empty userLat or userLng");
		}	

	console.log(closest.name);
	$("#nearest_branch_name").append(closest.name + " BRANCH");
	$("#nearest_branch_hours").text(closest.hours);
	$("#nearest_branch_phone").text(closest.phone).attr("href", "tel:+1" + closest.phone);
	$("#nearest_branch_name").attr("href", "geo:" + closest.lat + "," + closest.lng).attr("target", "_blank");
};

function pointsDistance(point1, point2) {
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

function populateServicesContent() {

	var servicesContent = [
		{"name_id":"hype-modal-name", "name_content":"Hype Teen Center", "desc_id":"hype-modal-desc", "desc_content":"<p>Branch:  Main<br/>Welcome to HYPE, the Detroit Public Library's Teen Center.<br/><br/><b>What's the HYPE?</b><br/>HYPE stands for Helping Young People Excel. It is the umbrella for teen focused programs and services at the Detroit Public Library.  DPL recognizes that teens need their own space to learn, explore, or simply hang out.  Our newest HYPE Center, located at the Main library, combines digital technology with interaction, resulting in innovation and engagement that allows our teens to develop and become hyped for success.<br/><br/><b>HYPE'd for Success</b><br/>Our vision for teen services is to provide an environment that inspires our teens to strive for and achieve their highest potential!<br/><br/><b>Who Says Learning Can't Be Fun?</b></br>Check out the HYPE on the web at www.detroitpubliclibrary.org/hype, or visit the new HYPE Teen Center at the Main Library. We promise you will be motivated to excel!  For more information, please call (313) 481-1371.</p>"},
		{"name_id":"librarian-modal-name", "name_content":"Ask A Librarian", "desc_id":"librarian-modal-desc", "desc_content":"Ask-A-Librarian service is designed to provide brief, factual answers to your reference questions via e-mail or phone. If your question is more in-depth or requires research, please plan a visit to Main Library or contact the library telephone reference center at (313) 481-1400 during regular library hours."},
		{"name_id":"read-modal-name", "name_content":"Detroit Reads!", "desc_id":"read-modal-desc", "desc_content":"Branch:  Main  <br/><br/>Do you want to learn to read, or become a better reader?  Our tutoring is free. The books are free. At the Detroit Public Library we can help you:<br/><ul><li>To become a better reader</li><li>Learn to read</li><li>Have a tutor meet with you for two hours, one day per week</li><li>You choose the time and day the tutoring takes place</li></ul><br/><br/><b>Learner Sign Up</b><br/>Fill out this form and someone will contact you."},
		{"name_id":"career-modal-name", "name_content":"Career and Employment Services", "desc_id":"career-modal-desc", "desc_content":"Branch:  Main <br/><br/><b>Career and Employment Assistance</b><ul><li>Job search and career exploration -- guidance in examining career and employment options and searching for gainful employment.</li><li>Information Strategy -- assistance in identifying resources appropriate to each step of the job or career search process.</li><li>Internet Job Search -- assistance in finding job ads, completing online job applications, and researching employers.</li><li>One-on-one assistance with resume preparation</li><li>Over 2,000 books for checkout including career guides; job search, resume and interview books</li><li>Test preparation materials for professional certification and licensing, GED, ASVAB, LSAT, GRE, GMAT, apprenticeship, civil service and many more</li></ul><b>Contact Information</b><br/>Technology, Literacy and Career (TLC) Center<br/>Detroit Public Library</br>5201 Woodward Avenue</br>Detroit, MI  48202<br/>(313) 481-1363 or (313) 481-1365<br/>tlc@detroitpubliclibrary.org<br/><br/><b>Hours</b><br/>Tuesday-Wednesday, Noon - 8 p.m.; Thursday-Saturday, 10 a.m. - 6 p.m.; Sunday-Monday, CLOSED."}
	];

	for (var i=0; i<servicesContent.length; i++) {
		$("#" + servicesContent[i].name_id).html(servicesContent[i].name_content);
		$("#" + servicesContent[i].desc_id).html(servicesContent[i].desc_content);
	}


	$("#librarian-modal-desc-more").html("Occasionally, our responses to Ask-A-Librarian questions are blocked by firewalls or spam filters. If you do not receive a response within five business days, please e-mail your question directly to: askalibrarian@detroitpubliclibrary.org from your email account.  For an Obituary or Death Notice search, please download the Obituary or Death Notice Search Request form.");
};

function attachLibFormValidation() {
	$('#lib-form').on('valid.fndtn.abide', function() {
  		console.log("form validated");
  		console.log($("#lib-name").text());
  		console.log($("#lib-email").text());
  		console.log($("#lib-city").text());
  		console.log($("#lib-state").text());
  		console.log($("#lib-question").text());
	});
};

function attachReadFormValidation() {
	$('#read-form').on('valid.fndtn.abide', function() {
  		console.log("form validated");
  		console.log($("#read-name").text());
  		console.log($("#read-availability").text());
  		console.log($("#18-radio-yes").value());
	});
};