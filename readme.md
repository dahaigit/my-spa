# 玺越后台api配置

## 运行环境
* PHP >= 7.1
* MySQL >= 5.2
* Nginx

## PHP扩展
* mbstring
* openssl
* pdo_mysql
* mcrypt
* redis
* mongodb

## 安装
```
composer install

# 生产环境
cp .env.production .env

# 开发环境
cp .env.develop .env

# 生成passport加密密钥
php artisan passport:keys
php artisan passport:install

# 生成微信客户端专用的密码,输入sass_xiyue_api
php artisian artisan:client --password

```
