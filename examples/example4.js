const $input = document.querySelector('#myInput')

Rx.Observable.fromEvent($input, 'keyup')
  // .map((v) => v.target.value)
  // .filter((v) => v.length > 2)
  // .debounceTime(500)
  // .distinctUntilChanged()
  .subscribe((v) => console.log(v))

// .switchMap(searchTerm => apiService.getData(searchTerm))
// .subscribe(
//   (res) => console.log('Success: ' + res),
//   (err) => console.error('Error: ' + err),
//   () => console.log('Done!'),
// )
