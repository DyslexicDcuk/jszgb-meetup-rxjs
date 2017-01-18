const source = Rx.Observable.interval(1000)
const subscription = source
  // .do((i) => console.log(i + ' seconds have passed'))
  // .filter((i) => i % 2)
  // .map((i) => 'odd number: ' + i)
  .subscribe((i) => console.log(i))

setTimeout(() => subscription.unsubscribe(), 10000)
