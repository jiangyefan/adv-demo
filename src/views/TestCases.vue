<template>
    <a-table :columns="columns" :data-source="data">
        <span slot="operation" slot-scope="text, record">
            <a-divider type="vertical"/>
            <a>Delete</a>
        </span>
    </a-table>
</template>
<script>
    const columns = [
        {
            dataIndex: 'type',
            key: 'type',
            title: '接口类型',
        },
        {
            title: '用例',
            dataIndex: 'caseUrl',
            key: 'caseUrl',
            customRender(text, record, index){
                return record.caseUrl.split('?')[0]
            }
        },
        {
            title: '参数',
            dataIndex: 'para',
            key: 'para',
            customRender(text, record, index){
                return record.caseUrl.split('?')[1]
            }
        },
        {
            title: 'PC前端页',
            dataIndex: 'webUrl',
            key: 'webUrl',
        },
        {
            title: 'APP前端页',
            key: 'mobileUrl',
            dataIndex: 'mobileUrl',
        },
        {
            title: '结果',
            key: 'pass',
            dataIndex: 'pass'
        },
        {
            title: '校验详情',
            dataIndex: 'retdesc',
            key: 'retdesc',
        },
        {
            title: '执行环境',
            dataIndex: 'env',
            key: 'env',
        },
        {
            title: '执行时间',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '修改',
            key: 'operation',
            scopedSlots:{customRender:"operation"}
        }
    ];

    const data = [
        {
            key: '1',
            type: 'HTTP',
            caseUrl: 'https://list.mogu.com/search?&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50244&action=clothing',
            para: '123',
            webUrl: '',
            mobileUrl: '',
            pass: 'pass',
            retdesc: "{id: '123', name: 'jiangjiang'}",
            env: '测试环境',
            time: '2020年6月20日',

        },
        {
            key: '2',
            type: 'HTTP',
            caseUrl: 'https://list.mogu.com/search?callback=jQuery211002854114760738735_1594108743385&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50244&action=clothing',
            para: '345',
            webUrl: '',
            mobileUrl: '',
            pass: 'pass',
            retdesc: "{id: '345', name: 'jiangjiang'}",
            env: '预发环境',
            time: '2020年6月20日',

        },
        {
            key: '3',
            type: 'HTTP',
            caseUrl: 'https://list.mogu.com/search?callback=jQuery211002854114760738735_1594108743385&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50244&action=clothing',
            para: '',
            webUrl: '',
            mobileUrl: '',
            pass: 'pass',
            retdesc: "{id: '678', name: 'jiangjiang'}",
            env: '生产环境',
            time: '2020年6月20日',

        },
    ];

    export default {
        data() {
            return {
                data,
                columns,
            };
        },
    };
</script>