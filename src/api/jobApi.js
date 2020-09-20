import ajax from './index'

// 1. 获取学前教师培训分类
export const  getJobPre = ()=>ajax('/web/job/job_pre');

// 2. 获取家园共育培训分类
export const  getJobFamily = ()=>ajax('/web/job/job_family');

// 3. 获取人生资源
export const  getJobList = (page_num, page_size, job_pre_edu_id, job_family_edu_id)=>ajax('/web/job/list', {page_num, page_size, job_pre_edu_id, job_family_edu_id}, 'post');
