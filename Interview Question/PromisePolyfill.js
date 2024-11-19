class MyPromise {
  constructor(executor) {
    this.thenCb;
    this.catchCb;
    this.finallyCb;
    this.thenData;
    this.catchData;
    this.state = "Pending";

    this.resolve = (data) => {
      if (this.thenCb) {
        this.state = "Fulfulled";
        this.thenCb(data);
        if (this.finallyCb) {
          this.finallyCb();
        }
      } else {
        this.thenData = data;
      }
    };

    this.reject = (err) => {
      if (this.catchCb) {
        this.state = "Rejected";
        this.catchCb(err);
        if (this.finallyCb) {
          this.finallyCb();
        }
      } else {
        this.catchData = err;
      }
    };

    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  then(cb) {
    if (this.state === "Pending" && this.thenData) {
      this.state = "Fulfulled";
      cb(this.thenData);
    } else {
      this.thenCb = cb;
    }
    return this;
  }

  catch(cb) {
    if (this.state === "Pending" && this.catchData) {
      this.state = "Rejected";
      cb(this.catchData);
    } else {
      this.catchCb = cb;
    }

    return this;
  }

  finally(cb) {
    if (this.state !== "Pending" && (this.thenData || this.catchData)) {
      cb();
    } else {
      this.finallyCb = cb;
    }
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => reject("Hello, World!"), 1000);
});

myPromise
  .then((data) => {
    console.log("On Then First : ", data);
    return "Hey";
  })
  // .then((secdata) => console.log("On Then Second : ",secdata))
  .catch((data) => console.log("On Catch : ", data))
  .finally(() => console.log("finally..."));
