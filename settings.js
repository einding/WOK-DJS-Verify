module.exports = { 
listaccts: function() { 
events.EventEmitter.call(this); 
} 
} 
util.inherits(exports.listaccts, events.EventEmitter); 
exports.listaccts.prototype.listme = function() { 
thisList = this; 
let req = https.request(requestOptions, function(res) { 
res.on('data', function() { 
console.log('started')
}); 
res.on('end', function(d) { 
console.log('ended')
}); 
}); 
}
