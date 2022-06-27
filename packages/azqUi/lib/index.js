/*
 * @Author: 『安忠琪』 anzhongqi@marknum.com
 * @Date: 2022-06-27 17:10:35
 * @Description: 
 */
'use strict';
import azqButton from './azq-button/index.vue'

const components = [azqButton]
const install = (app) => {
    components.forEach(com => {
        app.component(com.name, com)
    })
    return app;
}
export default {
    install
}
