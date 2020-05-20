// 获取年月日
var yy = new Date().getFullYear();
var mm = new Date().getMonth() + 1;
var dd = new Date().getDate();

// vue 组件
var date = new Vue({
    el: '.stats',
    data: {
        date: yy + "年" + mm + "月" + dd + "日"
    }
})

// 网站主页描述
var descriptionText = "This is a Website project for Jilin University Software College."

var descriptionElement = new Vue({
    el: ".parallax_description",
    data: {
        description: descriptionText
    }
})