const source = Rx.Observable.interval(1000)
const subscription = source
  .subscribe((t) => console.log('first: ' + t))

setTimeout(() => subscription.unsubscribe(), 10000)

// setTimeout(() => source.subscribe((t) => console.log('second: ' + t)), 3000)
