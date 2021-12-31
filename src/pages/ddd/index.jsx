import React,{Component,useEffect, useState} from 'react'
import * as Student from '@/domain/student'
import {Table,Space,Button} from 'antd'
const columns = [
    {
        title:'姓名',
        dataIndex: 'name',
    },
    {
        title:'年龄',
        dataIndex: 'age',
    },
    {
        title:'班级',
        dataIndex: 'className',
    },
]

function index() {
    const [students,setStudents] = useState([]);
    const [selecRows,setselecRows] = useState([]);
    useEffect(()=>{
        Student.list().then(res=>{
            setStudents(res)
        })
    },[])
    function add(){
        const stu = {
            name:'张三',
            age:17,
            className:'高三1班',
        }
        Student.add(stu).then(res=>{
            console.log('新增成功',res)
        })
    }
    function edit(){
        const stu = {
            id:'111',
            name:'张三',
            age:17,
            className:'高三1班'
        }
        Student.edit(stu).then(res=>{
            console.log('编辑成功',res)
        })
        setselecRows([
            {
                a:1
            },
            {
                a:1
            },
        ])

    }
    function del(){
        const ids={
            id:'11,12'
        }
        Student.del(ids).then(res=>{
            console.log('删除成功',res)
        })
    }
    return (
        <div style={{padding:10}}>
            <Space>
                <Button onClick={add} disabled={!Student.addPower(selecRows)}>新增</Button>
                <Button onClick={edit}>编辑</Button>
                <Button onClick={del}>删除</Button>
            </Space>
            <Table 
                size="small"
                columns={columns}
                dataSource={students}
                rowKey="id"
                pagination = {false}
                scroll={{
                    y:500
                }}
            />
        </div>
    )
}

export default index