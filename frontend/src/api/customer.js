import { CustomerInstance } from "./index.js";

const api = CustomerInstance();

//id중복체크
async function getId(id, success, fail) {
    await api.get(`/idcheck/${id}`).then(success).catch(fail);
}

//회원가입
async function joinCustomer(params, success, fail) {
    await api.post(`/signup`, params).then(success).catch(fail);
}

//로그인
async function loginCustomer(params, success, fail) {
    await api.post(`/login`, params).then(success).catch(fail);
}

//회원수정
async function updateCustomer(no, params, success, fail) {
    await api.put(`/${no}`, params).then(success).catch(fail);
}

//회원조회
async function getCustomer(no, success, fail) {
    await api.get(`/${no}`).then(success).catch(fail);
}

//주문내역조회
async function getOrderList(no, success, fail) {
    await api.get(`/${no}/orders`).then(success).catch(fail);
}
export { getId, joinCustomer, loginCustomer, updateCustomer, getCustomer, getOrderList };