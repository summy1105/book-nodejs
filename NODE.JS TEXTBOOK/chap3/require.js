console.log('requeire가 가장 위에 오지 않아도 됨')

module.exports ='find me'

require('./var')

console.log('require.cache:', require.cache)
console.log('require.main:', require.main===module, require.main.filename)