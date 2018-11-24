
class Timer {
  constructor(currentCount) {
    this._state = {
      timerId: null,
      currentCount
    };

    const showStartCount = () => {
      console.log(currentCount);
    };

    showStartCount();

    this.startInterval = this.startInterval.bind(this);
    this.stopInterval = this.stopInterval.bind(this);
  }

  _saveToState(property, value){
    this._state[property] = value;
  }

  _startClicker() {}

  _showClickCount() {
    console.log(this._state.currentCount)
  }

  startInterval(interval) {

    if (this._state.timerId) {
      console.log('Timer was started');
      return;
    }

    this._startClicker();

    const increaseCounter = () => {
      this._saveToState('currentCount', this._state.currentCount + 1);
      this._showClickCount();
    };

    const timer = setInterval(increaseCounter, interval);

    this._saveToState('timerId', timer);
  }

  stopInterval() {
    clearInterval(this._state.timerId);
  }

}



const timer = new Timer(10);