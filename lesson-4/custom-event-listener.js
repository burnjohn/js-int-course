
$0.addEventListener1 = function(eventType, cb) {
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

$0.removeEventListener1 = function(eventType, cb) {
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

$0.addEventListener1('click', showClick);
$0.addEventListener1('click', showClick1);
$0.addEventListener1('click', showClick2);


$0.addEventListener1('focus', showFocus);
$0.addEventListener1('focus', showFocus1);
$0.addEventListener1('focus', showFocus2);