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
		{"name": "campbell", 	"lat": 42.308914, 	"lng": -83.133154},
		{"name": "bowen", 		"lat": 42.323272,	"lng": -83.088836},
		{"name": "conely",		"lat": 42.331161,   "lng": -83.127261},
		{"name": "automotive",	"lat": 42.333902,	"lng": -83.046755},
		{"name": "skillman",	"lat": 42.333902,	"lng": -83.046755},
		{"name": "elmwood",		"lat": 42.340847, 	"lng": -83.023601},
		{"name": "douglass",	"lat": 42.34315,	"lng": -83.074121, 		"tempClosed":true},
		{"name": "edison",		"lat": 42.357806,	"lng": -83.220108},
		{"name": "main",		"lat": 42.358453,	"lng": -83.06668},
		{"name": "duffield",	"lat": 42.3633,		"lng": -83.093233},
		{"name": "monteith",	"lat": 42.377385,	"lng": -82.950649},
		{"name": "chaney",		"lat": 42.395191,	"lng": -83.205282},
		{"name": "parkman",		"lat": 42.396886,	"lng": -83.126842},
		{"name": "chandler",	"lat": 42.401552,	"lng": -82.974305},
		{"name": "jefferson",	"lat": 42.404008,	"lng": -82.937269},
		{"name": "redford",		"lat": 42.413423,	"lng": -83.249924, 		"tempClosed":true},
		{"name": "knapp",		"lat": 42.41493,	"lng": -83.061059},
		{"name": "hubbard",		"lat": 42.416376,	"lng": -83.172729},
		{"name": "franklin",	"lat": 42.426872,	"lng": -82.984255},
		{"name": "chase",		"lat": 42.430053,	"lng": -83.217493},
		{"name": "wilder",		"lat": 42.43156,	"lng": -83.144448},
		{"name": "lincoln",		"lat": 42.432832,	"lng": -83.090829},
		{"name": "sherwood",	"lat": 42.433862,	"lng": -83.030151}];

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
				}
			}
		} else {
			console.log("empty userLat or userLng");
		}	

	console.log(closest.name);
	$("#eventsTitle").text("Upcoming Events For " + closest.name + " Branch")
	return closest.name;
};

function pointsDistance( point1, point2 )
{
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}