var dev_usercurrentloc="";async function getAPIData(url){let _data={};await fetch(url).then(function(response){if(response.ok)return response.json();throw new Error("Request failed.");}).then(function(data){_data=data;}).catch(function(error){console.log(url);console.log(error);});return _data;}
var countryLocationData;async function getLmsCountryLocation(){let _data=helperJS.getSessionItem('countrylocation');if(!_data){_data=await getAPIData("/getcountrylocation");helperJS.setSessionItem('countrylocation',_data)}
let _selcity=helperJS.getCookie('_selcity');countryLocationData=_data;var allcodes=[];$.each(_data,function(index,value){if(allcodes.indexOf(value.code)==-1){$(".ddlCountryCode").append('<option value="'+value.code+'">+'+value.code+"</option>");allcodes.push(value.code);}});$(".ddlLocation").not(".property-m").append('<option value="" readonly>Select City</option>');if(countryLocationData[0].locations.length>0){countryLocationData[0].locations.forEach(function(element){$(".ddlLocation").append('<option value="'+element.name+'">'+element.name+"</option>");});if(_selcity&&parseInt(_selcity.id)>0){_selcity.name=_selcity.name.charAt(0).toUpperCase()+_selcity.name.slice(1);$(".ddlLocation,.dev_inputelement").val(_selcity.name);$("#ClientCallForm_location").val(_selcity.name);$("#ClientCallForm_location_city").val(_selcity.name);}}
if(_selcity&&parseInt(_selcity.id)==36){$(".ddlCountryCode").val('971').change();}}
async function populateMobileCodesField(){let _data=await getAPIData("/getcountrylocation");let _selcity=helperJS.getCookie('_selcity');countryLocationData=_data;var allcodes=[];$.each(_data,function(index,value){if(allcodes.indexOf(value.code)==-1){$(".ddlCountryCode").append('<option value="'+value.code+'">+'+value.code+"</option>");allcodes.push(value.code);}});}
function onChangeLmsCountryCode(countryCodeControl,locationId,formid){let _code=$(countryCodeControl).find("option:selected").val();if(countryLocationData!==undefined&&countryLocationData){$("#"+formid+" #"+locationId).empty();let _selectedLoc=countryLocationData.filter(f=>f.code==_code)[0];if(_selectedLoc.locations.length>0){_selectedLoc.locations.forEach(function(element){$("#"+formid+" #"+locationId).append('<option value="'+element.name+'">'+element.name+"</option>");});let _selcity=helperJS.getCookie('_selcity');if(_selcity&&parseInt(_selcity.id)>0)
_selcity.name=_selcity.name.charAt(0).toUpperCase()+_selcity.name.slice(1);$("#"+formid+" #"+locationId).val(_selcity.name);}else{$("#"+formid+" #"+locationId).append('<option value="'+
_selectedLoc.name.split("(",1)[0]+
'">'+
_selectedLoc.name.split("(",1)[0]+
"</option>");}}}
var imageUnitGalleryUI={init:function(){var gal=$('#jsGallery').jsGallery({showAlbums:true,connectAlbums:true});gal.jsGallery('show','Unit Image',0);$(".jsg-name").text('Unit Image');$(".jsg-nav > .jsg-prev,.jsg-nav > .jsg-next,.jsg-albums > span.jsg-album").off("click");$(".jsg-nav > .jsg-prev,.jsg-nav > .jsg-next,.jsg-albums > span.jsg-album").on("click",function(){var selectedAlbum=$(".jsg-albums > span.jsg-album.active").attr("data-title");var index=parseInt($(".jsg-images > img").attr("data-image-index"));var albumtitle=$("#jsGallery span[data-album-name = '"+selectedAlbum+"']").eq(index).attr("data-alt");$(".jsg-name").text(albumtitle);});$(".jsg-thumbnails").off("click");$(".jsg-thumbnails").on("click",function(){var selectedAlbum=$(".jsg-albums > span.jsg-album.active").attr("data-title");var index=parseInt($(".jsg-images > img").attr("data-image-index"));var albumtitle=$("#jsGallery span[data-album-name = '"+selectedAlbum+"']").eq(index).attr("data-alt");$(".jsg-name").text(albumtitle);});if($(".jsg-thumbnails").length>0){$(".jsg-thumbnails")[0].click();}}};const copyToClipboard=(elementId)=>{var copyText=document.getElementById(elementId);copyText.select();copyText.setSelectionRange(0,99999)
document.execCommand("copy");}
var googlePlacesAutocomplete={init:function(autocompleteid){if(typeof google=='undefined'&&typeof googleMapKey!='undefined'){$.getScript("https://maps.googleapis.com/maps/api/js?key="+googleMapKey+"&libraries=drawing,places,geometry",function(){googlePlacesAutocomplete.init(autocompleteid);});return false;}
var placeSearch,autocomplete;var componentForm={street_number:'short_name',route:'long_name',locality:'long_name',administrative_area_level_1:'short_name',country:'long_name',postal_code:'short_name'};function initAutocomplete(){autocomplete=new google.maps.places.Autocomplete(document.getElementById(autocompleteid),{});autocomplete.setFields(['address_component']);autocomplete.addListener('place_changed',fillInAddress);}
function fillInAddress(){var place=autocomplete.getPlace();for(var i=0;i<place.address_components.length;i++){var addressType=place.address_components[i].types[0];if(componentForm[addressType]&&addressType=="locality"){var val=place.address_components[i][componentForm[addressType]];if(val=="Gurugram"){val="Gurgaon";}
if(val=="Bengaluru"){val="Bangalore";}
document.getElementById(autocompleteid+"_city").value=val;}}}
initAutocomplete();}};function getQueryStringValue(key){return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(key).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"));}
function setDataFromSharerCode(formid){if(getQueryStringValue('share')!="")
{var qs1=getQueryStringValue('share');var url='https://www.squareyards.com/micro/assets/SharerApi.php?share='+qs1;$.ajax({headers:{Accept:"application/json; charset=utf-8",},async:false,url:url,type:'GET',dataType:'json',success:function(resp){if((resp.code=='200')){var SharerCode=resp.data.SharerCode;var SharerName=resp.data.SharerName;var SharerEmail=resp.data.SharerEmail;var SharerContactNo=resp.data.SharerContactNo;var SharerId=resp.data.SharerId;var SharerType=resp.data.SharerType;$("#"+formid).find("#SharerCode").val(SharerCode);$("#"+formid).find("#SharerName").val(SharerName);$("#"+formid).find("#SharerEmail").val(SharerEmail);$("#"+formid).find("#SharerContactNo").val(SharerContactNo);$("#"+formid).find("#SharerId").val(SharerId);$("#"+formid).find("#SharerType").val(SharerType);}
else{}},error:function(d){}});}}
$(document).ready(function(){$(document).on('input',"input[type='tel']",function(event){if($(this).attr("name").indexOf("otp")==-1){this.value=this.value.replace(/([^0-9])|(^[0]+)/g,'');}});$(document).on('keypress',"input[type='tel']",function(event){let code=event.keyCode?event.keyCode:event.which?event.which:event.charCode;if(code==48&&!$(this).val()&&$(this).attr("name").indexOf("otp")==-1){return false;}
if(((code>=48&&code<=57)||code==8||code==9||code==37||code==38||code==39||code==40||code==46)){return true;}else{return false;}});$(document).on('keyup',"input[data-type='name']",function(event){let val=$(this).val().replace(/[^a-zA-Z ]/g,'').replace(/\s+/g,' ');$(this).val(val);})
$("input[type='email']").each(function(){$(this)[0].oninvalid=function(){this.setCustomValidity("Please enter valid email address");};$(this)[0].oninput=function(){this.setCustomValidity("");};});$(document).on('paste',"input[type='tel']",function(event){event.preventDefault();})});