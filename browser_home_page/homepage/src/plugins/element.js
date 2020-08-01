/* eslint-disable import/no-duplicates */

import Vue from 'vue'
import { Button, Row } from 'element-ui'
import { Form, FormItem } from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'
import { container,header,footer,main,row,col } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(container)
Vue.use(header)
Vue.use(footer)
Vue.use(main)
Vue.use(row)
Vue.use(col)
Vue.prototype.$message = Message
