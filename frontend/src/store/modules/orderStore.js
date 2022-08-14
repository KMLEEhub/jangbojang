import { getOrderList } from "@/api/customer";

const orderStore = {
    namespaced: true,
    state: {
        /*orderList: [
            { storeNo: "999", storeName: "재승이네청과", status: "배달완료", order_item: "사과1박스", orderNo: "999", orderDate: "2022-08-11" },
            { storeNo: "777", storeName: "다이소", status: "배달준비중", order_item: "샴푸1개", orderNo: "356", orderDate: "2022-08-10" },
        ]*/
        orderList: [
            {
                marketName: "시장장",
                marketNo: "9999",
                storeNo: "777",
                storeName: "우리동네 분식집",
                status: "완료",
                orderNo: "356",
                orderDate: "2022-08-10",
                orderItems: [
                    { count: "1", itemName: "닭강정", orderItemNo: "12", orderNo: "357", price: "10000" },
                    { count: "1", itemName: "떡볶이", orderItemNo: "13", orderNo: "555", price: "5000" },
                ],
            },
        ],
    },
mutations: {
        /*
        SET_SIDO_LIST: (state, sidos) => {
            sidos.forEach((sido) => {
                state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
            });
        },
        SET_GUGUN_LIST: (state, guguns) => {
            guguns.forEach((gugun) => {
                state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
            });
        },*/
        SET_ITEM: (state, items) => {
            items.forEach((item) => {
                state.orderList.orderItems.push({
                    count: item.count,
                    itemName: item.itemName,
                    orderItemNo: item.orderItemNo,
                    orderNo: item.orderNo,
                    price: item.price,
                });
            });
        },
        SET_ORDERLIST2: (state, orders) => {
            orders.forEach((order) => {
                state.orderList.push({
                    marketName: order.marketName,
                    marketNo: order.marketNo,
                    storeNo: order.storeNo,
                    storeName: order.storeName,
                    status: order.status,
                    orderNo: order.orderNo,
                    orderDate: order.orderDate,
                });
            });
        },
        SET_ORDERLIST: (state, orders) => {
            orders.forEach((order) => {
                state.orderList.push({ storeNo: order.storeNo, storeName: order.storeName, status: order.status, order_item: order.order_item, orderNo: order.orderNo, orderDate: order.orderDate });
            });
        },

        CLEAR_ORDERLIST: (state) => {
            state.orderList = [
                { storeNo: "999", storeName: "재승이네청과", status: "배달완료", order_item: "사과1박스", orderNo: "999", orderDate: "2022-08-11" },
                { storeNo: "777", storeName: "다이소", status: "배달준비중", order_item: "샴푸1개", orderNo: "356", orderDate: "2022-08-10" },
            ];
        },
    },

    actions: {
        getOrder: ({ commit }, no) => {
            //commit("CLEAR_ORDERLIST");
            console.log(no);
            getOrderList(
                no,
                (response) => {
                    console.log(response);
                    commit("SET_ORDERLIST2", response.data);
                },
                (error) => {
                    console.log(error);
                }
            );
        },
    },
};

export default orderStore;