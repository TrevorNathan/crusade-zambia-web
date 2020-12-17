var tmmFormDiv = document.getElementById('tmm-mentor-form');
var tmmFormHash = tmmFormDiv.dataset.formhash;
tmmFormDiv.innerHTML = '<style>\n	.tmm-form, .tmm-form input, .tmm-form textarea, .tmm-form select, .tmm-form .form-radio-label {\n		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n		font-size: 12pt;\n	}\n	.tmm-form .form-field {\n		padding-bottom: 8px;\n	}\n	.tmm-form .form-field label {\n		display: inline-block;\n		width: 40%;\n	}\n	.tmm-form input, .tmm-form select {\n		width: 55%;\n		display: inline-block;\n		padding: 8px;\n	 }\n	.tmm-form select {\n		-webkit-appearance: none;\n		-moz-appearance: none;\n	}\n	.tmm-form textarea {\n		display: block;\n		width: 96%;\n		height: 200px;\n		padding: 8px;\n	}\n	.tmm-form label.form-radio-label, .tmm-form .form-input-radio {\n		display: inline;\n		width: auto;\n	}\n	.tmm-form .form-radio-option {\n		display: inline-block;\n		padding-right: 10px;\n	}\n	.tmm-form .form-input-radio {\n		width: auto;\n	}\n	.tmm-form .form-submit input {\n		width: auto;\n	}\n	.form-thanks {\n		font-weight: bold;\n		color: #009900;\n		padding: 10px;\n		border: 1px solid #009900;\n		margin: 10px 0;\n		background-color: #efffe9;\n	}\n	.form-warning {\n		font-weight: bold;\n		color: #990000;\n		padding: 10px;\n		border: 1px solid #990000;\n		margin: 10px 0;\n		background-color: #ffefe9;\n	}\n	.tmm-form .form-instructions {\n		clear:both;\n	}\n	.tmm-form .form-instructions-label {\n		font-style: italic;\n	}\n	.tmm-form .form-instructions-details {\n		padding-top: 10px;\n	}\n	.tmm-form .form-default-recaptcha, .tmm-form .form-default-submit {\n		clear: both;\n		padding-top: 20px;\n	}\n\n\n	</style>\n\n\n\n\n<form name="new_form" action="https://forms.run/on/89af" method="POST" class="tmm-form">\n		<div class="form-name form-field form-text">\n					<label for="field_name">Numele</label>\n			<input type="text"\n				   name="name"\n				   id="field_name"\n				   class="form-input-text"\n				   value=""\n				   placeholder="Sau nickname-ul după dorință." />\n			</div>\n		<div class="form-email form-field form-email">\n					<label for="field_email">Email</label>\n			<input type="text"\n				   name="email"\n				   id="field_email"\n				   class="form-input-text"\n				   value=""\n				   placeholder="Va rămâne confidențial." />\n			</div>\n		<div class="form-message form-field form-textarea">\n					<label for="field_message">Mesaj</label>\n			<textarea id="field_message" name="message" class="form-textarea"\n					  placeholder="Vă rugăm să ne comunicați întrebările ce vă interesează."></textarea>\n			</div>\n		<div class="form-gender form-field form-radio">\n					<label for="field_gender">Sex</label>\n												<span class="form-radio-option">\n						<input type="radio"\n							   class="form-input-radio"\n							   name="gender"\n							   id="field_gender_male"\n							   value="male"\n								\n						/>\n						<label for="field_gender_male" class="form-radio-label">Bărbat</label>\n					</span>\n																<span class="form-radio-option">\n						<input type="radio"\n							   class="form-input-radio"\n							   name="gender"\n							   id="field_gender_female"\n							   value="female"\n								\n						/>\n						<label for="field_gender_female" class="form-radio-label">Femeie</label>\n					</span>\n										</div>\n		<div class="form-age form-field form-radio">\n					<label for="field_age">Vârsta</label>\n												<span class="form-radio-option">\n						<input type="radio"\n							   class="form-input-radio"\n							   name="age"\n							   id="field_age_minor"\n							   value="minor"\n								\n						/>\n						<label for="field_age_minor" class="form-radio-label">13-17</label>\n					</span>\n																<span class="form-radio-option">\n						<input type="radio"\n							   class="form-input-radio"\n							   name="age"\n							   id="field_age_adult"\n							   value="adult"\n								\n						/>\n						<label for="field_age_adult" class="form-radio-label">18+</label>\n					</span>\n										</div>\n	\n	\n	<input type="hidden" name="referer" id="tmm-form-referer" value="" />\n	<input type="hidden" name="page" id="tmm-form-page" value="" />\n\n			<div class="form-submit form-default-submit form-field">\n			<input type="submit" id="field_submit" class="form-input-submit button btn-primary w-100 mt10" value="Transmite" />\n		</div>\n	</form>\n';
var tmm_input_ref = document.getElementById('tmm-form-referer');
tmm_input_ref.value = document.referrer;
var tmm_input_page = document.getElementById('tmm-form-page');
tmm_input_page.value = window.location.href;
var $_GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
                   .toString()
                   .replace(/^.*?\?/, '')
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}
if($_GET['tmm-form-thanks']=='show')
    tmmFormDiv.innerHTML = '<div id="form-message" class="form-thanks">Спасибо, что связались с нами.</div>' + tmmFormDiv.innerHTML;
if($_GET['tmm-form-errors'])
{
    var tmmFormErrors = document.getElementById('form-errors-list');

    if(tmmFormErrors == null)
        tmmFormDiv.innerHTML = '<div id="form-message" class="form-warning">We were unable to restore your other answers because your browser appears to have third-party cookies turned off.</div>' + tmmFormDiv.innerHTML;

    tmmFormDiv.innerHTML = '<div id="form-message" class="form-warning">' + decodeURIComponent($_GET['tmm-form-errors'].replace(/\+/g, ' ')) + '</div>' + tmmFormDiv.innerHTML;
}

var tmm_form_message = document.getElementById('form-message');
if(tmm_form_message != null)
    tmm_form_message.scrollIntoView();