const $input = document.querySelector('#myInput')

Rx.Observable.fromEvent($input, 'keyup')
  .map((v) => v.target.value)
  .filter((v) => v.length > 2)
  .debounceTime(500)
  .distinctUntilChanged()
  .subscribe((v) => console.log(v))