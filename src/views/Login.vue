<template>
    <div id="window" style="">
        <div class="page page-front">
            <div class="page-content">
                <div class="input-row">
                    <label class="label fadeIn">用户名</label>
                    <input id="username" type="text" data-fyll="用户名" class="input fadeIn delay1" v-model="loginInfo.username"/>
                </div>
                <div class="input-row">
                    <label class="label fadeIn delay2">密码</label>
                    <input id="password" type="password" data-fyll="密码" class="input fadeIn delay3" v-model="loginInfo.password"/>
                </div>
                <div class="input-row perspective">
                    <button id="submit" class="button load-btn fadeIn delay4" @click="login"> <span class="default"><i class="ion-arrow-right-b"></i>登录</span>
                        <div class="load-state">
                            <div class="ball"></div>
                            <div class="ball"></div>
                            <div class="ball"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../assets/css/reset.css'
import '../assets/css/style.css'
    export default{
    data(){
        return{
            loginInfo: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.loginInfo.username == "admin" && this.loginInfo.password == "123"){
                this.$message.success('登录成功', 2, () => {this.$router.push('/')});
            }else{
                this.$message.warning('用户名/密码错误')
            }
        }

    }
    }
</script>
