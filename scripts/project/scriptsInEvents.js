


const scriptsInEvents = {

		async E_start_Event1_Act1(runtime, localVars)
		{
			var token = "eyJ0eXAiO";
			var decoded = jwt(token);
			
			console.log(decoded);
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

