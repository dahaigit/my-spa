import engine from 'store/src/store-engine'
import localStorage from 'store/storages/localStorage'
import cookieStorage from 'store/storages/cookieStorage'
import sessionStorage from 'store/storages/sessionStorage'
import defaultPlugin from 'store/plugins/defaults'
import expirePlugin from 'store/plugins/expire'

let storages = [sessionStorage, localStorage, cookieStorage]
let plugins = [defaultPlugin, expirePlugin]
let Store = engine.createStore(storages, plugins)



export default {
    /**
     * 缓存engine对象
     */
    store: Store,
    /**
     * 切换存储引擎
     *
     * @param {string} [type='cookie|local|session']
     * @returns
     */
    switch (type = 'cookie') {
        let storage = cookieStorage
        switch (type) {
            case 'local':
                storage = localStorage
                break
            case 'session':
                storage = sessionStorage
                break
        }
        this.store = engine.createStore([storage], plugins)

        return this
    },
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
        this.store.set(key, data, expiredTime)
        return
    },
    /**
     * 删除缓存中的数据
     * @param key
     */
    remove(key){
        return this.store.remove(key)
    }
}


