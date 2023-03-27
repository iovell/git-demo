const _d = [
  {name: 'zs', age: 18, address: 'xxxxxx'},
  {name: 'ls', age: 20, address: 'dxxxxxx'},
  {name: 'ww', age: 19, address: 'xxxxxxx'},
  {name: 'zl', age: 16, address: 'xxxxxxx'}
]

const dp = () => {
  return _d.filter(o_user => o_user.age >= 18)
}

console.log(dp());