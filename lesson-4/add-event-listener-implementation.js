const element = document.querySelector('div');

element.addEventListenerCustom = function(eventType, cb) {
  const domEl = this;

  if (!domEl.events) {
    domEl.events = {};
  }

  let eventsList = domEl.events;

  if (!Array.isArray(eventsList[eventType])) {
    eventsList[eventType] = [cb];
  } else {
    eventsList[eventType].push(cb);
  }

  domEl[eventType + '1'] = function(){
    eventsList[eventType].forEach((eventHandler => eventHandler).call(this))
  }
};

element.removeEventListenerCustom = function(eventType, cb) {
  const domEl = this;

  let currentEventList  = domEl.events[eventType];

  if (!Array.isArray(currentEventList)) {
    return;
  }

  domEl.events[eventType] = currentEventList.filter(
    (eventHandler) => eventHandler !== cb
  )
};

const showClick = function() {
  console.log('click!!!!');
};

const showClick1 = function() {
  console.log('click 1111');
};

const showClick2 = function() {
  console.log('click 2222')
};


const showFocus = function() {
  console.log('focus!!!!');
};

const showFocus1 = function() {
  console.log('focus 1111');
};

const showFocus2 = function() {
  console.log('focus 2222');
};

element.addEventListenerCustom('click', showClick);
element.addEventListenerCustom('click', showClick1);
element.addEventListenerCustom('click', showClick2);


element.addEventListenerCustom('focus', showFocus);
element.addEventListenerCustom('focus', showFocus1);
element.addEventListenerCustom('focus', showFocus2);