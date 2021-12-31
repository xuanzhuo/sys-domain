/**
 * 通过指定属性检验对象
 * @param {object} targetObject - 待检验对象
 * @param {object} condition - 校验条件（属性:值）
 * @returns {boolean}
 */
export function checkCondition(targetObject,condition){
    let checkRes = true;
    for(let key in condition){
        if(condition[key] !== targetObject[key]){
            checkRes = false;
            break;
        }
    }
    return checkRes
}

/**
 * 检验选中数据的长度
 * @param {object[]} selects - 选中的数据 
 * @param {'single'|'multiple'} mode - 单选/多选
 * @returns {boolean}
 */
export function checkSelectsLength(selects,mode){
    return  mode === 'single'?selects.length === 1:selects.length !== 0;
}

/**
 * 选中数据的按钮权限(亮显)
 * @param {object[]} selects 
 * @param {object} opts - 配置项
 * @param {'single'|'multiple'} [opts.mode] - 单选/多选(默认'single')
 * @param {object} [opts.condition] - 校验条件（属性:值）
 * @returns {boolean}
 */
export default function btnPower(selects,{mode='single',condition}){
    if(!checkSelectsLength(selects,mode)){
        return false;
    }
    if(condition){
        if(mode === 'single'){
            return checkCondition(selects[0],condition)
        }else{
            return !selects.some(item=>{
                return !checkCondition(item,condition)
            })
        }
    }
}