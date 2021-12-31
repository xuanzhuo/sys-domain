import { get,post} from '@/domain/helper/request'
import btnPower from '@/domain/helper/btnPower'


/**
 * id(数字)
 * @typedef {{id:number}} Nid 
 */

/**
 * id(字符串)
 * @typedef {object} Sid 
 * @property {string} id - id
 */


/**
 * 学生
 * @typedef {object} Student
 * @property {string}  name - 姓名
 * @property {number}  age - 年龄
 * @property {string}  className - 班级名陈
 */

/**
 * 学生花名册
 * @returns {Promise<Array<Sid & Student>>}
 */
 export const list = async ()=>{
    const {data} = await get('/student/list')
    return data
}

/**
 * 新增按钮权限
 * @param {object[]} selects 
 */
export function addPower(selects){
    return btnPower(selects,{condition:{a:1}})
}

/**
 * 添加学生信息
 * @param {Student} student
 * @returns {Promise<Sid & Student>}
 */
export const add = async (student)=>{
    const {data} = await post('/student/add',student)
    return data
}

/**
 * 编辑学生信息
 * @param {Sid & Student} student
 * @returns {Promise<Student>}
 */
export const edit = async (student)=>{
    const {data} = await post('/student/edit',student)
    return data
}

/**
 * 删除学生信息(支持批量)
 * @param {Sid} ids
 * @returns {Promise<Array<Sid & Student>>}
 */
export const del = async (ids)=>{
    const {data} = await post('/student/del',ids)
    return data
}