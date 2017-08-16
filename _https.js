class Https {

	constructor(env){
		this.env = env;
		this.isSafe = false;
		this.host = window.location.host;
		this.domain = window.location.origin;
		this.protocol = window.location.protocol;

		if(!env) return console.error("1. HALT! - ENV MISSING");
		else return this.init();
	}

	init(){
		if(this.env == "DEV") return this._dev();			// DEV
		if(this.env == "PROD") return this._prod();			// PROD	
	}

	_prod(){
		console.log("PROD Mode");
		return this._httpsCheck();
	}

	_dev(){ console.log("DEV Mode...everything is allowed!"); }
	_isSafe(){ return this.isSafe;}
	_httpsCheck(){ if(this.protocol != "https:") this._redirect(); else console.clear(); }
	_redirect(){ window.location = "https://"+ this.host; }
	_info(){ return this; }

};