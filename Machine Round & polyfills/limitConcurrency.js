function limitConcurrency(promises, maxConcurrency) {
  return new Promise((resolve, reject) => {
    const runningPromises = [];
    let currentIndex = 0;

    const executeNext = async () => {
      if (currentIndex < promises.length) {
        const promise = promises[currentIndex]();
        currentIndex++;

        runningPromises.push(promise);

        promise.then(() => {
          runningPromises.splice(runningPromises.indexOf(promise), 1);
          if (runningPromises.length === 0) resolve();
        }).finally(executeNext);

        if (runningPromises.length < maxConcurrency) {
          executeNext();
        }
      }
    };
    executeNext()
  });
}

const promisesToExecute = [...Array(10)].map((item, index) => {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Executed");
        resolve();
      }, 1000);
    });
  };
});

const maxConcurrency = 2; // Set our desired maximum concurrency

limitConcurrency(promisesToExecute, maxConcurrency).then(() => {
  console.log('All promisеs complеtеd.');
});
