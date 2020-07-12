<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null">
            <div class="logo">{{collapsed? '接口': "接口自动化测试平台"}}</div>
            <a-menu theme="dark" mode="inline" :defaultSelectedKeys="selectedKeys" :defaultOpenKeys="selectedOpenKyes">
                <a-sub-menu key="快抢业务">
                    <span slot="title"><a-icon type="appstore"/><span>快抢业务</span></span>
                    <a-menu-item key="/analysis">
                        <router-link to="/analysis" tag="div">图表分析</router-link>
                    </a-menu-item>
                    <a-menu-item key="/testcases">
                        <router-link to="/testcases" tag="div">用例管理</router-link>
                    </a-menu-item>
                    <a-menu-item key="/warnlist">
                        <router-link to="/warnlist" tag="div">告警配置</router-link>
                    </a-menu-item>
                    <a-menu-item key="/rulecheck">
                        <router-link to="/rulecheck" tag="div">规则校验</router-link>
                    </a-menu-item>

                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-row>
                    <a-col :span="20">
                        <a-icon
                                class="trigger"
                                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                                @click="() => (collapsed = !collapsed)"
                        />
                    </a-col>
                    <a-col :span="2">
                        <a-dropdown type="flex" justify="end">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                xxx
                                <a-icon type="down"/>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <a-icon type="api"/>
                                        修改密码</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;" @click="logout">
                                        <a-icon type="api"/>
                                        注销登录</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                    <a-col :span="2">
                        <a-dropdown type="flex" justify="end">
                            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                                测试环境
                                <a-icon type="down"/>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <a-icon type="api"/>
                                        开发环境</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <a-icon type="api"/>
                                        预发环境</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">
                                        <a-icon type="api"/>
                                        生产环境</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <a-breadcrumb v-if="$route.meta.module">
                    <a-breadcrumb-item>{{$route.meta.module}}</a-breadcrumb-item>
                    <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
                </a-breadcrumb>
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        data() {
            return {
                collapsed: false,
                selectedKeys: [],
                selectedOpenKyes: []
            };
        },
        created() {
            if(this.$route.meta && this.$route.meta.module){
                this.selectedOpenKyes = [this.$route.meta.module]
            }
            this.selectedKeys = [this.$route.path]
        },
        methods: {
            logout(){
                //清除cookie
                this.$router.push("/login")
            }
        },
    };
</script>
<style>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
        line-height: 32px;
        color: white;
        text-align: center;
        letter-spacing: 2px;
        font-weight: bold;
        font-size: medium;
    }

    #components-layout-demo-custom-trigger {
        height: 100%;
        width: 100%;
    }

    .item {
        justify-content: end;
    }
</style>