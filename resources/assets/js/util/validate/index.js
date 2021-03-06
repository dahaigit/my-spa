import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from './locate/zh_CN.js';//引入中文文件

// 配置中文
Validator.localize('zh_CN', zh);

Vue.use(VeeValidate, {
    locale: zh,
    dictionary: {
        zh_CN: {
            messages: {
                email: () => '请输入正确的邮箱格式',
                required: ( field )=> "请输入" + field
            },
            attributes:{
                email:'邮箱',
                username: '账号',
                password:'密码',
                phone:'手机号码',
                password_confirmation:'验证密码',
            }
        }
    }
});

// 自定义validate


Validator.extend('phone', {
    messages: {
        zh_CN:field => field + '必须是11位手机号码',
    },
    validate: value => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
