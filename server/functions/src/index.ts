import admin = require('firebase-admin')
admin.initializeApp()
exports.userApi = require('./users')