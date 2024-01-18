class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if(this.capacity === this.length) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if(this.length > 0) {
      let popped = this.data[this.length - 1];
      this.data[this.length - 1] = undefined;
      this.length--;

      return popped;
    } else {
      return undefined;
    }
  }

  shift() {
    if(this.length > 0) {
      let shifted = this.data[0];
    this.data[0] = undefined;

    for(let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.length--;
    return shifted;
    } else {
      return undefined;
    }
  }

  unshift(val) {
    if(this.capacity === this.length) {
      this.resize();
    }
    for(let i = this.length; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.length++;
    this.data[0] = val;
  }

  indexOf(val) {
    for(let i = 0; i < this.length; i++) {
      if(val === this.data[i]) {
        return i;
      }
    }

    return -1
  }

  resize() {
    this.capacity = this.capacity * 2;
    let resized = new Array(this.capacity)

    for(let i = 0; i < this.length; i++) {
      resized[i] = this.data[i];
    }

    this.data = resized;
  }

}


module.exports = DynamicArray;
