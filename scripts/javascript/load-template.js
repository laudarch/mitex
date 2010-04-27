function loadTemplateFile(value) {
    $(function () {
	    begin = document.getElementById("begin");
	    middle = document.getElementById("middle");
	    end = document.getElementById("end");
	    submit = document.getElementById("submit");
	    preamble = document.getElementById("latex_preamble");
	    body = document.getElementById("latex_body");
	    check = document.getElementById("check");
	    
	    if(value != "none") {
 		$.get("scripts/python/serve-template.py", { template: value, type: "begin" },
		      function(data) {
			  begin.innerHTML = data;
			  begin_latex = data;
		      });

		$.get("scripts/python/serve-template.py", { template: value, type: "preamble" },
		      function(data) {
			  preamble.value = data;
			  copy_to_editarea(preamble);
		      });
		
		$.get("scripts/python/serve-template.py", { template: value, type: "middle" },
		      function(data) {
			  middle.innerHTML = data;
			  mid_latex = data;
		      });
		
		$.get("scripts/python/serve-template.py", { template: value, type: "body" },
		      function(data) {
			  body.value = data;
			  copy_to_editarea(body);
		      });
		
		$.get("scripts/python/serve-template.py", { template: value, type: "end" },
		      function(data) {
			  end.innerHTML = data;
			  end_latex = data;
		      });

		preamble.disabled = "";
		body.disabled = "";
		submit.disabled = "";
		check.disabled = "";
	    } else {
		begin.innerHTML = "";
		middle.innerHTML = "";
		end.innerHTML = "";
		preamble.disabled = "true";
		body.disabled = "true";
		submit.disabled = "true";
		check.disabled = "true";
	    }
	    
	    reload_editarea();
	});
}
