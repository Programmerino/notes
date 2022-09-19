function PiiForm(config) {
  "use strict";

  this.config = config !== undefined?config:{
    parentTag: 'body',
    containerTag: 'div',
    attachStylesheet: true,
    path: 'collecting-feedback',
    spanishTranslation: false,
    debug: true,
    delay: 0
  };

  if(this.config.delay === undefined){
      this.config.delay = 0;
  }

  this.http = new XMLHttpRequest();

  this.uuid = false;

  this.parentElement = false;
  this.containerElement = false;
  this.closeElement = false;

  this.questions = [];

  this.language = 'en';

  this.params = {
    'site_path': window.location.href,
    'language': this.language
  };

  if(window.location.href.search(/(iqscloud|iqsolutions)/) > -1) {
    this.config.delay = 40000;
  }

  if(this.config.spanishTranslation !== undefined){
      if(this.params.site_path.search(/\/es\//) > -1) {
          this.language = 'es';
      }
  }

  this.params.language = this.language;

  this.setParentElement();
  this.attachStylesheet();
}

PiiForm.prototype.getQuestions = function getQuestions() {
    "use strict";

    var that = this
        , params = []
        , url = this.config.path + "/questions.json";

    this.http.open("GET", url, true);

    this.http.onreadystatechange = function() {//Call a function when the state changes.
        if(this.readyState === 4 && this.status === 200) {

            that.questions = JSON.parse(this.responseText);

            setTimeout(function() {
                that.buildContainer();
                that.buildInputGroups();
            }, that.config.delay);
        }
    };

    this.http.send(params.join('&'));

}

PiiForm.prototype.displayForm = function displayForm(delay) {
  "use strict";

  var url = "/fbf_api/get_uuid",
      that = this,
      params = [];

  for(var param in this.params){
      params.push(param + '=' + this.params[param]);
  }

  this.http.open("POST", url, true);

  //Send the proper header information along with the request
  this.http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  this.http.onreadystatechange = function() {//Call a function when the state changes.
      if(that.http.readyState === 4 && that.http.status === 200) {
          try {

              that.getQuestions();
          }
          catch (e) {
              that.uuid = false;
          }
      }
  };

  if(this.config.debug) {
      that.uuid = Math.random();
      that.getQuestions();
  } else {
      this.http.send(params.join('&'));
  }

};

PiiForm.prototype.removeForm = function removeForm() {
  "use strict";

  var that = this;

  this.closeElement.setAttribute('style','display:none;');

  setTimeout(function() {
    that.parentElement[0].removeChild(that.containerElement);
  }, 7000);

};

PiiForm.prototype.buildContainer = function buildContainer() {
  "use strict";
  this.closeElement = document.createElement('img');
  var that = this;

  this.containerElement = document.createElement(this.config.containerTag);
  this.containerElement.setAttribute('class','pii-form-container local-override-class');

  this.closeElement.setAttribute('src',this.config.path+'/close-icon.svg');
  this.closeElement.setAttribute('class','pii-form-close');

  this.closeElement.addEventListener('click',function() {
    var d = new Date(),
      expires = 'expires=';
    d.setTime(d.getTime() + (1*24*60*60*1000)); //days*hours*minutes*seconds*milliseconds
    expires += d.toUTCString();
    document.cookie = 'nidafbfclsd=yes;'+expires+";path=/";
    that.parentElement[0].removeChild(that.containerElement);
  });

  this.containerElement.appendChild(this.closeElement);

  this.parentElement[0].appendChild(this.containerElement);
};

PiiForm.prototype.attachToParent = function attachToParent() {
  "use strict";

  this.parentElement[0].appendChild(this.containerElement);
};

PiiForm.prototype.setParentElement = function setParentElement() {
  "use strict";

  this.parentElement = document.getElementsByTagName(this.config.parentTag);
};

PiiForm.prototype.attachStylesheet = function attachStylesheet() {
  "use strict";

  if(this.config.attachStylesheet) {
    var stylesheet = document.createElement('link');

    stylesheet.setAttribute('rel','stylesheet');
    stylesheet.setAttribute('href',this.config.path+'/dist/styles.css');

    this.parentElement[0].appendChild(stylesheet);
  }

};

PiiForm.prototype.generateForm = function generateForm(config, input) {
  "use strict";

  var inputGroupElement = document.createElement('div'),
    inputGroupLabel = document.createElement('label');

  inputGroupElement.setAttribute('class', 'pii-form'+ (config.active?' active':''));
  inputGroupElement.setAttribute('id', config.id + '_container');

  inputGroupLabel.setAttribute('class', 'pii-form-label');
  inputGroupLabel.innerHTML = config.text[this.language];

  inputGroupElement.appendChild(inputGroupLabel);
  inputGroupElement.appendChild(input);

  return inputGroupElement;

};

PiiForm.prototype.generateTextareaForm = function generateTextareaForm(config) {
  "use strict";

  var inputGroupInput = document.createElement('textarea'),
    inputGroupElement,
    inputGroupButton = document.createElement('button'),
    that = this;

  inputGroupInput.setAttribute('id', config.id);
  inputGroupInput.setAttribute('name', config.id);
  inputGroupInput.setAttribute('placeholder', config.placeholder[this.language]);

  if(this.language === 'es') {
    inputGroupButton.innerHTML = "Continuar";
  } else {
    inputGroupButton.innerHTML = "Continue";
  }

  inputGroupElement = this.generateForm(config,inputGroupInput);
  inputGroupElement.appendChild(inputGroupButton);

  inputGroupButton.addEventListener('click',function(event) {
    that.submitGroup(inputGroupInput);
  });

  return inputGroupElement;

};

PiiForm.prototype.generateSelectForm = function generateSelectForm(config) {
  "use strict";

  var inputGroupElement,
    inputGroupInput = document.createElement('select'),
    option,
    that = this;

  inputGroupElement = this.generateForm(config,inputGroupInput);

  inputGroupInput.setAttribute('id', config.id);
  inputGroupInput.setAttribute('name', config.id);

  config.selectOptions[this.language].forEach(function(selectOptions){

    option = document.createElement('option');
    option.value = option.textContent = selectOptions;

    inputGroupInput.appendChild(option);

  });

  inputGroupInput.addEventListener('change',function() {
    that.submitGroup(this);
  });

  return inputGroupElement;

};

PiiForm.prototype.generateRadioForm = function generateRadioForm(config) {
  "use strict";

  var inputGroupElement,
    radioGroup = document.createElement('div');

  radioGroup.setAttribute('class', 'pii-form-radio-group');

  for(var i in config.options) {
    this.generateRadioGroup(config.options[i], radioGroup);
  }

  inputGroupElement = this.generateForm(config,radioGroup);

  return inputGroupElement;

}

PiiForm.prototype.generateRadioGroup = function generateRadioGroup(config,radioGroup) {
  "use strict";

  var inputGroupInputLabel = document.createElement('label'),
    inputGroupInput = document.createElement('input'),
    that = this;

  inputGroupInputLabel.setAttribute('for', config.id);
  inputGroupInputLabel.setAttribute('class', 'pii-form-radio' + config.class);
  inputGroupInputLabel.innerHTML = config.text[this.language];
  inputGroupInput.setAttribute('type', 'radio');
  inputGroupInput.setAttribute('id', config.id);
  inputGroupInput.setAttribute('name', config.name);
  inputGroupInput.setAttribute('value', config.value);

  radioGroup.appendChild(inputGroupInput);
  radioGroup.appendChild(inputGroupInputLabel);

  inputGroupInput.addEventListener('click',function() {
    that.submitGroup(this);
  });

};

PiiForm.prototype.buildInputGroups = function buildInputGroups() {
    "use strict";

    for(var i in this.questions) {
        var question = this.questions[i]
            ,questionElement = false;

        switch (question.inputType) {
            case "radio":
                questionElement = this.generateRadioForm(question);
                break;
            case "textarea":
                questionElement = this.generateTextareaForm(question);
                break;
            case "select":
                questionElement = this.generateSelectForm(question);
                break;
        }

        if(questionElement !== false) {
            this.containerElement.appendChild(questionElement);
        }
    }

    var inputGroupElement = document.createElement('div');
    var inputGroupLabel = document.createElement('h2');
    var timerContainer = document.createElement('p');

    inputGroupElement.setAttribute('class', 'pii-form');
    inputGroupElement.setAttribute('id', 'thankyou_container');
    timerContainer.setAttribute('id', 'fbftimer');
    timerContainer.setAttribute('class', 'fbftimer');

    inputGroupLabel.setAttribute('class', 'pii-form-label');
    if(this.language === 'es'){
        inputGroupLabel.innerHTML = "¡Gracias por tus comentarios!";
        timerContainer.innerHTML = "Este formulario se cerrará en 7 segundos";
    } else{
        inputGroupLabel.innerHTML = "Thank you for your feedback!";
        timerContainer.innerHTML = "This form will close in 7 seconds";
    }

    inputGroupElement.appendChild(inputGroupLabel);
    inputGroupElement.appendChild(timerContainer);

    this.containerElement.appendChild(inputGroupElement);

};

PiiForm.prototype.submitGroup = function submitGroup(input) {
    "use strict";

    var previousContainer
        , nextContainer;

    this.params[input.name] = input.value;
    previousContainer = input.name+'_container';

    if(typeof this.questions[input.name].dependencies === 'string') {
        nextContainer = this.questions[input.name].dependencies+'_container';
    }
    else {
        if(typeof this.questions[input.name].dependencies[input.value] !== 'undefined'){
            nextContainer = this.questions[input.name].dependencies[input.value] + '_container';
        }
    }

    document.getElementById(previousContainer).classList.toggle('active');
    document.getElementById(nextContainer).classList.toggle('active');

    if(this.questions[input.name].lastQuestion) {
        this.sendData();
        this.removeForm();
    }
};

PiiForm.prototype.sendData = function sendData() {
  "use strict";

  var http = new XMLHttpRequest(),
    url = "/fbf_api/submit_form",
    params = [];

  for(var param in this.params){
    params.push(param + '=' + this.params[param]);
  }

  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.send(params.join('&'));
};

//# sourceMappingURL=scripts.js.map
