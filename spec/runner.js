require('jsclass')
JS.require('JS.Range', 'JS.Test')

require('../vendor/faye/build/faye-node')
require('../vendor/faye/spec/javascript/engine_spec')
require('./redis_engine_spec')

JS.Test.autorun()