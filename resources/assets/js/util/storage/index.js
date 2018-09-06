var engine = require('store/src/store-engine')
var localStorage = require('store/storages/localStorage')
var cookieStorage = require('store/storages/cookieStorage')
var sessionStorage = require('store/storages/sessionStorage')

/**
 * 默认选择的存储引擎
 * @type {[null,null,null]}
 */
var storages = [
    localStorage,
    cookieStorage,
    sessionStorage
]
/**
 * 使用的js插件
 * @type {[null,null]}
 */
var plugins = [
    require('store/plugins/defaults'),
    require('store/plugins/expire')
]
var store = engine.createStore(storages, plugins)

export default {
    /**
     * 缓存engine对象
     */
    store: store,
    /**
     * 获取缓存中的数据
     * @param key
     */
    get(key){
        return this.store.get(key)
    },
    /**
     * 向缓存中添加数据
     * @param key
     * @param data 数据
     * @param duration 有效时间秒
     */
    set(key, data, duration = 100){
        duration = (duration === parseInt(duration, 10)) ? parseInt(duration, 10) : 10
        let expiredTime = new Date().getTime() + (1000 * duration)
        return this.store.set(key, data, duration)
    },
    /**
     * 删除缓存中的数据
     * @param key
     */
    remove(key){
        return this.store.remove(key)
    },
}


