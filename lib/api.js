

        const BASE_URL = "http://api.v5soft.com";
        
        const request = (url, method, data)=> {
            let header = {
                "content-type": "application/json",
            }

            return new Promise((resolve, reject) => {
                uni.request({
                    url: BASE_URL + url,
                    method:method,
                    data:data,
                    header:header,
                    success: (response) => {
                        resolve(response.data)
                    },
                    fail: (error) => {
                        reject(error)
                    },
                  });
            })
        }

        const getURL = ()=>{
            return BASE_URL;
        }

        const getToken = ()=>{
            return "";
        }

        export default {
            request,
            getURL,
            getToken,
            CmsAd:(data={})=>{
                // cms-广告位 列表
                return request("/api/cms/ad", "post", data);
            },CmsArticle:(data={})=>{
                // cms-文章 列表
                return request("/api/cms/article", "post", data);
            },CmsArticleInfo:(data={})=>{
                // cms-文章 信息
                return request("/api/cms/article/info", "get", data);
            },CmsArticleClass:(data={})=>{
                // cms-文章类别 列表
                return request("/api/cms/articleclass", "post", data);
            },CmsArticleComment:(data={})=>{
                // cms-文章评论 列表
                return request("/api/cms/articlecomment", "post", data);
            },CmsArticleCommentCreate:(data={})=>{
                // cms-文章评论 创建
                return request("/api/cms/articlecomment/create", "post", data);
            },CmsArticleCommentDelete:(data={})=>{
                // cms-文章评论 删除
                return request("/api/cms/articlecomment/delete", "delete", data);
            },CmsArticleCommentUpdate:(data={})=>{
                // cms-文章评论 更新
                return request("/api/cms/articlecomment/update", "put", data);
            },CmsArticleConfigInfo:(data={})=>{
                // cms-文章配置 信息
                return request("/api/cms/articleconfig/info", "get", data);
            },CmsDiy:(data={})=>{
                // cms-单页图文 列表
                return request("/api/cms/diy", "post", data);
            },CmsDiyInfo:(data={})=>{
                // cms-单页图文 信息
                return request("/api/cms/diy/info", "get", data);
            },CmsDiyClass:(data={})=>{
                // cms-单页图文类别 列表
                return request("/api/cms/diyclass", "post", data);
            },CmsFriend:(data={})=>{
                // cms-友情链接 列表
                return request("/api/cms/friend", "post", data);
            },CmsFriendClass:(data={})=>{
                // cms-友情链接类别 列表
                return request("/api/cms/friendclass", "post", data);
            },CmsMessage:(data={})=>{
                // cms-留言板 列表
                return request("/api/cms/message", "post", data);
            },CmsMessageCreate:(data={})=>{
                // cms-留言板 创建
                return request("/api/cms/message/create", "post", data);
            },CmsMessageUpdate:(data={})=>{
                // cms-留言板 更新
                return request("/api/cms/message/update", "put", data);
            },CoreBlockerCreate:(data={})=>{
                // 核心-碎片块 创建
                return request("/api/core/blocker/create", "post", data);
            },CoreBlockerInfo:(data={})=>{
                // 核心-碎片块 信息
                return request("/api/core/blocker/info", "get", data);
            },CoreBlockerUpdate:(data={})=>{
                // 核心-碎片块 更新
                return request("/api/core/blocker/update", "put", data);
            },CoreConfigInfo:(data={})=>{
                // 核心-配置 信息
                return request("/api/core/config/info", "get", data);
            },CoreDict:(data={})=>{
                // 核心-字典 列表
                return request("/api/core/dict", "post", data);
            },CoreDictInfo:(data={})=>{
                // 核心-字典 信息
                return request("/api/core/dict/info", "get", data);
            },CoreKeywords:(data={})=>{
                // 核心-关键词 列表
                return request("/api/core/keywords", "post", data);
            },CoreMiniProgramWeiXinMiniAuth:(data={})=>{
                // 核心-小程序-微信小程序 授权
                return request("/api/core/miniprogram/weixinmini/auth", "post", data);
            },CoreMiniProgramWeiXinMiniPay:(data={})=>{
                // 核心-小程序-微信小程序 支付
                return request("/api/core/miniprogram/weixinmini/pay", "post", data);
            },CoreNav:(data={})=>{
                // 核心-导航 列表
                return request("/api/core/nav", "post", data);
            },CorePayment:(data={})=>{
                // 核心-支付 列表
                return request("/api/core/payment", "post", data);
            },CoreShipment:(data={})=>{
                // 核心-物流 列表
                return request("/api/core/shipment", "post", data);
            },CoreSystemArea:(data={})=>{
                // 核心-系统 地区
                return request("/api/core/system/area", "post", data);
            },CoreSystemSms:(data={})=>{
                // 核心-系统 下发验证码
                return request("/api/core/system/sms", "post", data);
            },CoreSystemUpload:(data={})=>{
                // 核心-系统 上传
                return request("/api/core/system/upload", "post", data);
            },CoreSystemVerCode:(data={})=>{
                // 核心-系统 验证码
                return request("/api/core/system/vercode", "post", data);
            },CoreThirdpartyLogin:(data={})=>{
                // 核心-系统 列表
                return request("/api/core/thirdpartylogin/list", "post", data);
            },CoreUserForget:(data={})=>{
                // 核心-用户 忘记密码
                return request("/api/core/user/forget", "post", data);
            },CoreUserInfo:(data={})=>{
                // 核心-用户 信息
                return request("/api/core/user/info", "get", data);
            },CoreUserLogin:(data={})=>{
                // 核心-用户 登录
                return request("/api/core/user/login", "post", data);
            },CoreUserLoginMobile:(data={})=>{
                // 核心-用户 手机号登录
                return request("/api/core/user/login/mobile", "post", data);
            },CoreUserLogout:(data={})=>{
                // 核心-用户 登出
                return request("/api/core/user/logout", "post", data);
            },CoreUserReg:(data={})=>{
                // 核心-用户 注册
                return request("/api/core/user/reg", "post", data);
            },CoreUserUpdate:(data={})=>{
                // 核心-用户 更新
                return request("/api/core/user/update", "put", data);
            },CoreUserAddress:(data={})=>{
                // 核心-用户地址 列表
                return request("/api/core/useraddress", "post", data);
            },CoreUserAddressCreate:(data={})=>{
                // 核心-用户地址 创建
                return request("/api/core/useraddress/create", "post", data);
            },CoreUserAddressDelete:(data={})=>{
                // 核心-用户地址 删除
                return request("/api/core/useraddress/delete", "delete", data);
            },CoreUserAddressInfo:(data={})=>{
                // 核心-用户地址 信息
                return request("/api/core/useraddress/info", "get", data);
            },CoreUserAddressUpdate:(data={})=>{
                // 核心-用户地址 更新
                return request("/api/core/useraddress/update", "put", data);
            },CoreUserLevel:(data={})=>{
                // 核心-用户等级 列表
                return request("/api/core/userlevel", "post", data);
            },CoreUserLevelInfo:(data={})=>{
                // 核心-用户等级 信息
                return request("/api/core/userlevel/info", "get", data);
            },CoreWxMpLocation:(data={})=>{
                // 核心-微信小程序 更新用户位置
                return request("/api/core/weixin/location", "post", data);
            },PluginDiningOrder:(data={})=>{
                // 插件-扫描点餐-订单 列表
                return request("/api/plugin/dining/order", "post", data);
            },PluginDiningOrderCall:(data={})=>{
                // 插件-扫描点餐-订单 回调
                return request("/api/plugin/dining/order/call", "post", data);
            },PluginDiningOrderCreate:(data={})=>{
                // 插件-扫描点餐-订单 点餐
                return request("/api/plugin/dining/order/create", "post", data);
            },PluginDiningOrderPay:(data={})=>{
                // 插件-扫描点餐-订单 结账
                return request("/api/plugin/dining/order/pay", "post", data);
            },PluginDiningOrderProductAdd:(data={})=>{
                // 插件-扫描点餐-订单 加菜
                return request("/api/plugin/dining/order/product/add", "post", data);
            },PluginDiningOrderProductDelete:(data={})=>{
                // 插件-扫描点餐-订单 删除
                return request("/api/plugin/dining/order/product/delete", "post", data);
            },PluginDiningOrderProductNum:(data={})=>{
                // 插件-扫描点餐-订单 数量
                return request("/api/plugin/dining/order/product/num", "post", data);
            },PluginDiningTable:(data={})=>{
                // 插件-扫描点餐-餐桌 列表
                return request("/api/plugin/dining/table", "post", data);
            },PluginDiningTableInfo:(data={})=>{
                // 插件-扫描点餐-餐桌 详细
                return request("/api/plugin/dining/table/info", "post", data);
            },VisualClass:(data={})=>{
                // 可视化-类别 列表
                return request("/api/plugin/visual/class", "post", data);
            },VisualClassBat:(data={})=>{
                // 可视化-类别 操作
                return request("/api/plugin/visual/class/bat", "post", data);
            },VisualClassCreate:(data={})=>{
                // 可视化-类别 创建
                return request("/api/plugin/visual/class/create", "post", data);
            },VisualClassDelete:(data={})=>{
                // 可视化-类别 删除
                return request("/api/plugin/visual/class/delete", "delete", data);
            },VisualClassInfo:(data={})=>{
                // 可视化-类别 信息
                return request("/api/plugin/visual/class/info", "get", data);
            },VisualClassUpdate:(data={})=>{
                // 可视化-类别 更新
                return request("/api/plugin/visual/class/update", "put", data);
            },VisualDataSource:(data={})=>{
                // 可视化-数据源 列表
                return request("/api/plugin/visual/datasource", "post", data);
            },VisualDataSourceBat:(data={})=>{
                // 可视化-数据源 操作
                return request("/api/plugin/visual/datasource/bat", "post", data);
            },undefined:(data={})=>{
                // 可视化-数据源 创建
                return request("/api/plugin/visual/datasource/create", "post", data);
            },VisualDataSourceDelete:(data={})=>{
                // 可视化-数据源 删除
                return request("/api/plugin/visual/datasource/delete", "delete", data);
            },VisualDataSourceInfo:(data={})=>{
                // 可视化-数据源 信息
                return request("/api/plugin/visual/datasource/info", "get", data);
            },VisualDataSourceUpdate:(data={})=>{
                // 可视化-数据源 更新
                return request("/api/plugin/visual/datasource/update", "put", data);
            },VisualProject:(data={})=>{
                // 可视化-项目 列表
                return request("/api/plugin/visual/project", "post", data);
            },VisualProjectBat:(data={})=>{
                // 可视化-项目 操作
                return request("/api/plugin/visual/project/bat", "post", data);
            },VisualProjectCreate:(data={})=>{
                // 可视化-项目 创建
                return request("/api/plugin/visual/project/create", "post", data);
            },VisualProjectDelete:(data={})=>{
                // 可视化-项目 删除
                return request("/api/plugin/visual/project/delete", "delete", data);
            },VisualProjectExportFlutter:(data={})=>{
                // 可视化-项目 导出flutter
                return request("/api/plugin/visual/project/export_flutter", "post", data);
            },VisualProjectExportUniApp:(data={})=>{
                // 可视化-项目 导出UniApp
                return request("/api/plugin/visual/project/export_uniapp", "post", data);
            },VisualProjectExportVue:(data={})=>{
                // 可视化-项目 导出vue
                return request("/api/plugin/visual/project/export_vue", "post", data);
            },VisualProjectExportWeChat:(data={})=>{
                // 可视化-项目 导出wechat
                return request("/api/plugin/visual/project/export_wechat", "post", data);
            },VisualProjectInfo:(data={})=>{
                // 可视化-项目 信息
                return request("/api/plugin/visual/project/info", "get", data);
            },VisualProjectUpdate:(data={})=>{
                // 可视化-项目 更新
                return request("/api/plugin/visual/project/update", "put", data);
            },ProductAddition:(data={})=>{
                // 商品-品牌 列表
                return request("/api/product/addition", "post", data);
            },ProductBrand:(data={})=>{
                // 商品-品牌 列表
                return request("/api/product/brand", "post", data);
            },ProductCart:(data={})=>{
                // 商品-购物车 列表
                return request("/api/product/cart", "post", data);
            },ProductCartCreate:(data={})=>{
                // 商品-购物车 加入
                return request("/api/product/cart/create", "post", data);
            },ProductCartDelete:(data={})=>{
                // 商品-购物车 删除
                return request("/api/product/cart/delete", "delete", data);
            },ProductCartEmpty:(data={})=>{
                // 商品-购物车 清空
                return request("/api/product/cart/empty", "post", data);
            },ProductCartNum:(data={})=>{
                // 商品-购物车 修改数量
                return request("/api/product/cart/num", "post", data);
            },ProductCartSelected:(data={})=>{
                // 商品-购物车 选中
                return request("/api/product/cart/selected", "post", data);
            },ProductComment:(data={})=>{
                // 商品-评论 列表
                return request("/api/product/comment", "post", data);
            },ProductCommentCreate:(data={})=>{
                // 商品-评论 创建
                return request("/api/product/comment/create", "post", data);
            },ProductCommentDelete:(data={})=>{
                // 商品-评论 删除
                return request("/api/product/comment/delete", "delete", data);
            },ProductCommentUpdate:(data={})=>{
                // 商品-评论 更新
                return request("/api/product/comment/update", "put", data);
            },ProductDimensionContent:(data={})=>{
                // 商品-规格 列表
                return request("/api/product/dimension/content", "post", data);
            },ProductFav:(data={})=>{
                // 商品-收藏 列表
                return request("/api/product/fav", "post", data);
            },ProductFavInfo:(data={})=>{
                // 商品-收藏 检测
                return request("/api/product/fav/check", "get", data);
            },ProductFavCreate:(data={})=>{
                // 商品-收藏 加入
                return request("/api/product/fav/create", "post", data);
            },ProductFavDelete:(data={})=>{
                // 商品-收藏 删除
                return request("/api/product/fav/delete", "delete", data);
            },ProductFreight:(data={})=>{
                // 商品-重量模板 列表
                return request("/api/product/freight", "post", data);
            },ProductMarketingCoupon:(data={})=>{
                // 商品-营销-优惠券 列表
                return request("/api/product/marketingcoupon", "post", data);
            },ProductMarketingDistribution:(data={})=>{
                // 商城-营销-分销 列表
                return request("/api/product/marketingdistribution", "post", data);
            },ProductMarketingGroup:(data={})=>{
                // 商品-营销-组团 列表
                return request("/api/product/marketinggroup", "post", data);
            },ProductMarketingRebate:(data={})=>{
                // 商品-营销-折扣 列表
                return request("/api/product/marketingrebate", "post", data);
            },ProductOrder:(data={})=>{
                // 商品-订单 列表
                return request("/api/product/order", "post", data);
            },ProductOrderCallBack:(data={})=>{
                // 商品-订单 支付回调
                return request("/api/product/order/callback", "post", data);
            },ProductOrderComment:(data={})=>{
                // 商品-订单 订单评论
                return request("/api/product/order/comment", "post", data);
            },ProductOrderCreate:(data={})=>{
                // 商品-订单 创建
                return request("/api/product/order/create", "post", data);
            },ProductOrderDelete:(data={})=>{
                // 商品-订单 删除
                return request("/api/product/order/delete", "delete", data);
            },ProductOrderInfo:(data={})=>{
                // 商品-订单 信息
                return request("/api/product/order/info", "get", data);
            },ProductOrderSummary:(data={})=>{
                // 商品-订单 汇总
                return request("/api/product/order/summary", "post", data);
            },ProductOrderUpdate:(data={})=>{
                // 商品-订单 更新
                return request("/api/product/order/update", "put", data);
            },ProductOrderProduct:(data={})=>{
                // 商品-订单产品 列表
                return request("/api/product/orderproduct", "post", data);
            },ProductOrderProductComment:(data={})=>{
                // 商品-订单产品评论 列表
                return request("/api/product/orderproductcomment", "post", data);
            },ProductOrderProductCommentCreate:(data={})=>{
                // 商品-订单产品评论 创建
                return request("/api/product/orderproductcomment/create", "post", data);
            },ProductOrderProductCommentUpdate:(data={})=>{
                // 商品-订单产品评论 更新
                return request("/api/product/orderproductcomment/update", "put", data);
            },ProductOrderReport:(data={})=>{
                // 商品-订单报表 列表
                return request("/api/product/orderreport", "post", data);
            },ProductOrderReportInfo:(data={})=>{
                // 商品-订单报表 信息
                return request("/api/product/orderreport/info", "get", data);
            },ProductProduct:(data={})=>{
                // 商品-产品 列表
                return request("/api/product/product", "post", data);
            },ProductProductInfo:(data={})=>{
                // 商品-产品 信息
                return request("/api/product/product/info", "get", data);
            },ProductProductClass:(data={})=>{
                // 商品-类别 列表
                return request("/api/product/productclass", "post", data);
            },ProductProductConfigInfo:(data={})=>{
                // 商品-产品配置 信息
                return request("/api/product/productconfig/info", "get", data);
            },ProductShop:(data={})=>{
                // 商品-商铺 列表
                return request("/api/product/shop", "post", data);
            },ProductShopApply:(data={})=>{
                // 商品-商铺 申请
                return request("/api/product/shop/apply", "post", data);
            },ProductShopInfo:(data={})=>{
                // 商品-商铺 信息
                return request("/api/product/shop/info", "get", data);
            },ProductShopUpdate:(data={})=>{
                // 商品-商铺 更新
                return request("/api/product/shop/update", "put", data);
            },ProductShopUser:(data={})=>{
                // 商品-商铺用户 列表
                return request("/api/product/shopuser", "post", data);
            },ProductTopicClass:(data={})=>{
                // 商品-专题类别 列表
                return request("/api/product/topicclass", "post", data);
            }
        }