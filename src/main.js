import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import i18n from "./plugins/i18n.js";
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {token} from "./components/key.js";
import router from "./router/index.js";
const app = createApp(App)
// 检查系统是否为暗色模式
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// 设置 Element Plus 的暗色主题
const updateTheme = () => {
    if (prefersDark.matches) {
        document.documentElement.classList.add('dark'); // 添加暗色主题的类
    } else {
        document.documentElement.classList.remove('dark'); // 移除暗色主题的类
    }
};

// 初始化时设置主题
updateTheme();

// 监听系统颜色模式变化

prefersDark.addEventListener('change', updateTheme);
app.use(ElementPlus)
app.provide(token, '5487-4689-5461-5589')
app.directive('focus', {
    mounted: (el) => el.focus()
})
app.use(i18n, {
    greetings: {
        hello: {
            cn: '你好👋',
            en: 'Hello, World!'
        }
    }
})

app.use(router)
app.mount('#app')


