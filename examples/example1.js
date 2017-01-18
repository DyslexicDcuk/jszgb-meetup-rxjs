const source = Rx.Observable.interval(1000)
const subscription = source
  .subscribe((t) => console.log(t))

setTimeout(() => subscription.unsubscribe(), 10000)
