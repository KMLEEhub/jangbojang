<template>
    <div style="margin: auto">
        <el-card shadow="never">
            <template #header>
                <div class="about" style="margin-top: -10px; maring-bottom: -10px">
                    <h3 style="margin-left: 10px; display: inline-block">
                        {{ this.storeName }}
                    </h3>
                    <div style="width: 25px; weight: 25px; display: inline-block; margin-left: 10px" @click="cl_JJIM()" v-if="this.jjim">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                            <path
                                fill="currentColor"
                                d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
                            ></path>
                        </svg>
                    </div>
                    <div style="width: 25px; weight: 25px; display: inline-block; margin-left: 10px" @click="cl_JJIM()" v-else>
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                            <path
                                fill="currentColor"
                                d="m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
                            ></path>
                        </svg>
                    </div>

                    <el-button color="red" @click="btn_out()" style="float: right; margin-top: 20px; margin-right: 10px; color: white">?????????</el-button>
                </div>
            </template>
            <!-- ?????? ?????? ??????. -->
            <div style="height: 220px">
                <user-video :stream-manager="sellerSubs" />
            </div>
        </el-card>
        <!--???????????? -->
        <!-- ?????? -->
        <el-card shadow="never" style="margin-top: 10px; height: 80px">
            <div style="text-align: center">
                <h4 style="display: inline-block; text-align: left; color: #e07c49; margin-top: 28px" v-if="this.hochul == true">?????????... ?????? : {{ this.number }}???</h4>
                <!-- <h3 style="display: inline-block" v-else>????????? ?????? ???????????????</h3> -->
                <el-button color="#e07c49" @click="getHocul" v-if="this.hochul == false" style="margin-top: 25px; color: white" round>???????????? </el-button>
                <el-button color="#42413e" @click="reHocul" v-else style="margin-left: 10px; margin-top: 25px; margin-right: 20px; float: right" round> ???????????? </el-button>
            </div>
        </el-card>
        <!-- ????????? -->
        <el-card shadow="never" style="margin-top: 10px">
            <el-scrollbar>
                <div class="scrollbar-flex-content">
                    <div v-for="(menu, idx) in menus" :key="idx" class="scrollbar-demo-item" >
                            <div v-if="!menu.soldout" @click="cl_item(menu)">
                                {{menu.itemName}}/{{menu.price}}???
                            </div>
                            <div v-else style="color:#b7b9bd">{{menu.itemName}}/??????
                            </div>

                    </div>
                </div>
            </el-scrollbar>
        </el-card>

        <!-- ???????????? -->

        <el-tabs type="border-card" tab-position="top" class="demo-tabs" style="margin-top: 10px">
            <el-tab-pane label="????????????">
                <div>
                    <el-table :data="orderItems" style="width: 90%; margin: auto" max-height="250">
                        <el-table-column prop="itemName" label="??????" width="90" />
                        <el-table-column prop="price" label="??????" width="90" />
                        <el-table-column prop="count" label="??????" width="60" />
                        <el-table-column label="??????" width="60">
                            <template #default="scope">
                                <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)" style="font-weight: bold"> ?????? </el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="text-align: right; margin-right: 20px; margin-top: -10px">
                        <h4>?????? : {{ money }}???</h4>
                    </div>
                </div>
                <div>
                    <h4 style="margin-left: 10px">????????????</h4>
                    <div style="text-align: center">
                        <el-input v-model="this.selected.itemName" placeholder="??????" style="width: 140px">
                            <template #prepend>??????</template>
                        </el-input>
                        <el-input v-model="this.selected.count" placeholder="??????" style="width: 140px">
                            <template #prepend>??????</template>
                        </el-input>
                        <el-button :icon="Plus" circle @click="btn_add()" style="margin: auto; margin-top: 10px; background-color: #42413e; color: white; display: block" />
                    </div>
                </div>
                <el-button round color="#e07c49" @click="btn_preorder()" style="float: right; margin-top: 15px; color: white">????????????</el-button>
            </el-tab-pane>
            <el-tab-pane label="??????">
                <room-chat ref="chat" @message="sendMessage" :subscribers="subscribers"></room-chat>
            </el-tab-pane>
        </el-tabs>

        <el-dialog v-model="centerDialogVisible" title="?????? ??????" width="90%" center>
            <el-table :data="orderItems" style="width: 90%; margin: auto" max-height="250">
                <el-table-column prop="itemName" label="??????" width="90" />
                <el-table-column prop="price" label="??????" width="90" />
                <el-table-column prop="count" label="??????" width="60" />
                <el-table-column label="??????" width="60">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)"> ?????? </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="text-align: right; margin-right: 20px; margin-top: -10px">
                <h4>?????? : {{ money }}???</h4>
            </div>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="btn_order" color="#42413e">????????????</el-button>
                    <el-button @click="centerDialogVisible = false" class="btn_cancle" style="background-color: white">??????</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
//storeNo??? storeName  router.params??? ????????? ????????? ?????????

// import StoreMenu from "@/components/Room/StoreMenu.vue";
import UserVideo from "@/components/Openvidu/UserVideo";
import RoomChat from "@/components/Openvidu/RoomChat.vue";
import { Plus, Star, StarFilled } from "@element-plus/icons-vue";
import { makeCall, deleteCall, getCall } from "@/api/call"; //webrtc??????
import { setJJim, getJJim } from "@/api/customer";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
//import {getItem} from "@/api/market";
import { getOrder } from "@/api/market";
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { OpenVidu } from "openvidu-browser";

axios.defaults.headers.post["Content-Type"] = "application/json";

const OPENVIDU_SERVER_URL = "https://" + "i7a602.p.ssafy.io" + ":4443";
const OPENVIDU_SERVER_SECRET = "jangbo602";


window.onbeforeunload = () => {
    // Gracefully leave session
    if (this.session) {
        this.removeUser();
        this.leaveSession();
    }
};

export default {
    beforeRouteLeave(to, from, next) {
        this.leaveSession();
        next();
    },
    components: {
        // StoreMenu,
        UserVideo,
        RoomChat,
    },

    mounted() {
        this.joinSession();
    },
    created() {
        //this.myUserName = this.$route.params.userName;
        //this.myUserNo = this.$route.params.userNo;
        this.jjim = this.$route.params.storeJJim;
        this.mySessionId = this.$route.params.storeNo;
        this.storeName = this.$route.params.storeName;
        //this.sellerNo = this.$route.path.no (????????? ?????? ??????)
        //this.storeName = this.$route.params.storeName (?????? ?????? ?????????)
        console.log(this.userId);

        getJJim(
            this.myUserNo,
            (res) => {
                console.log(res);
                res.data.forEach((store) => {
                    this.zzimlist.push({
                        storeNo: store.storeNo,
                    });
                });
                for (var i = 0; i < this.zzimlist.length; i++) {
                    if (this.zzimlist[i].storeNo == this.mySessionId) {
                        this.jjim = true;
                    }
                }
            },
            (err) => {
                console.log(err);
            }
        );

        /* ????????????
    getItem(
      12,
      (response)=> {
        console.log(response);
        //this.menus = response.data;
      },
      (error) => {
        console.log(error);
      }
      )
      */
    },
    data() {
        return {
            OV: undefined,
            session: undefined,
            publisher: undefined,
            subscribers: [],

            //myUserNo: "",
            //???????????? ????????????
            mySessionId: "1",
            myUserName: "",
        };
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const zzimlist = ref([]);
        //????????? ??????
        const customerNo = computed(() => store.state.userInfo.userNo);
        const myUserNo = computed(() => store.state.userInfo.userNo);
        const userId = computed(() => store.state.userInfo.userId);
        const myConnectionId = ref("");
        const myConnection = ref("");
        //webrtc client??????
        const clientdata = ref({
            //myUserName
            type: 1, //0,1
            userName: userId,
            userNo: myUserNo,
            isConnected: false, //??????????????????.
        });
        //seller ??? ????????? ?????? webrtc?????? ??????..
        const sellerConnectionId = ref("");
        const sellerSubs = ref(undefined);
        const sellerConnection = ref(undefined);

        const storeName = ref("");
        const number = ref("");
        //??? ?????????
        const jjim = ref(false);
        const menus = ref([

        ]);
        const orderItems = ref([

        ]);

        const selected = ref({
            itemName: "",
            itemNo: "",
            count: "",
            price: "",
        });

        const params = ref([]);
        const hochul = ref(false);
        const content = ref(true);

        const deleteRow = (index) => {
            orderItems.value.splice(index, 1);
            params.value.splice(index, 1);
        };

        const open = (message) => {
            ElMessage.success(message);
        };

        const centerDialogVisible = ref(false);
        return {
            centerDialogVisible,
            clientdata,
            router,
            Plus,
            Star,
            StarFilled,
            jjim,
            myUserNo,
            number,
            userId,
            myConnectionId,
            myConnection,
            params,
            customerNo,
            storeName,
            menus,
            selected,
            orderItems,
            hochul,
            content,
            deleteRow,
            open,
            sellerConnectionId,
            sellerSubs,
            sellerConnection,
            zzimlist,
        };
    },
    //////////////////////////////setup ends///////////////////////////////////////////////
    computed: {
        money() {
            var sum = 0;
            for (var i = 0; i < this.orderItems.length; i++) {
                sum += this.orderItems[i].count * this.orderItems[i].price;
            }

            return sum;
        },
    },

    methods: {
        /*---------------------------------------------------------joinSession---------------------------------------------------------------*/
        joinSession() {
            // --- Get an OpenVidu object ---
            this.OV = new OpenVidu();
            // --- Init a session ---
            this.session = this.OV.initSession();
            // --- Specify the actions when events take place in the session ---
            // On every new Stream received...

            this.session.on("streamCreated", ({ stream }) => {
                this.count++;
                const subscriber = this.session.subscribe(stream);
                console.log(JSON.parse(stream.connection.data));

                //???????????? subscribers??? ??????,????????? ?????? ??????.
                if (JSON.parse(stream.connection.data).clientData.type == 0) {
                    this.sellerConnectionId = stream.connection.connctionId;
                    this.sellerConnection = stream.connection;
                    this.sellerSubs = subscriber;
                    this.subscribers.push(subscriber);

                    //?????? ????????????
                    // this.requestMenu();
                }
            });

            this.session.on("streamDestroyed", ({ stream }) => {
                // this.$store.commit('decrease')
                this.count--;
                //???????????? ???????????? ????????? ??????.
                if (this.sellerConnectionId == stream.connection.connctionId) {
                    alert("???????????? ????????? ??????????????????!");
                    this.btn_out();
                }
                // const index = this.subscribers.indexOf(stream.streamManager, 0)
                // if (index >= 0) {
                //     this.subscribers.splice(index, 1);
                // }
            });

            // On every asynchronous exception...
            this.session.on("exception", ({ exception }) => {
                console.warn(exception);
            });

            // public ?????? signal ??????
            this.session.on("signal:public-chat", (event) => {
                console.log(JSON.parse(event.data).sender);
                this.$refs.chat.addMessage(event.data, JSON.parse(event.data).sender === this.userId, false);
            });

            // private ?????? signal ??????
            this.session.on("signal:private-chat", (event) => {
                this.$refs.chat.addMessage(event.data, false, true);
            });

            //?????????????????? ?????????????????? ?????? ?????? ????????????
            this.session.on("signal:delete-hochul", (event) => {
                this.console.log(event);
            });
            //???????????? ?????? on-off ?????????
            this.session.on("signal:linkCall", (event) => {
                console.log("????????????");
                console.log(event.data);
                console.log(this.isConnected);
                this.isConnected = !this.isConnected;
                this.publisher.publishAudio(this.isConnected); //false
                this.publisher.publishVideo(this.isConnected); //false
                console.log(this.isConnected ? "?????????" : "???????????????");

                //?????? ????????????????????? ?????? ??????.
                if (this.hochul) {
                    this.reHocul();
                }
            });
            this.session.on("signal:loadMenu", (event) => {
                console.log("??????????????????!");
                console.log(JSON.parse(event.data));
                this.menus = JSON.parse(event.data);
            });
            this.session.on("signal:callCount", (event) => {
                console.log("????????????????????????.!");
                console.log(JSON.parse(event.data));
                this.number = event.data;
            });

            // --- Connect to the session with a valid user token ---

            //createtoken
            this.createToken(this.mySessionId).then((token) => {
                this.session
                    .connect(token, { clientData: this.clientdata })
                    .then(() => {
                        //  --- Get your own camera stream with the desired properties ---

                        let publisher = this.OV.initPublisher(undefined, {
                            audioSource: undefined, // The source of audio. If undefined default microphone
                            videoSource: undefined, // The source of video. If undefined default webcam
                            publishAudio: true, // Whether you want to start publishing with your audio unmuted or not
                            publishVideo: false, // Whether you want to start publishing with your video enabled or not
                            //resolution: "640x480", // The resolution of your video
                            resolution: "160x120",
                            frameRate: 30, // The frame rate of your video
                            insertMode: "PREPEND", // How the video is inserted in the target element 'video-container'
                            mirror: false, // Whether to mirror your local video or not
                        });
                        this.publisher = publisher;
                        this.session.publish(this.publisher);
                        this.myConnection = publisher.stream.connection;
                        this.myConnectionId = publisher.stream.connection.connectionId;
                    })
                    .catch((error) => {
                        console.log("There was an error connecting to the session:", error.code, error.message);
                    });
            });

            window.addEventListener("beforeunload", this.leaveSession);
        },
        /*---------------------------------------------------------joinSession ends---------------------------------------------------------------*/
        //TODO:?????? ?????????
        //?????????
        cl_JJIM() {
            setJJim(
                this.myUserNo,
                { storeNo: this.mySessionId },
                (response) => {
                    if (response.data.check == true) {
                        this.jjim = true;
                    } else {
                        this.jjim = false;
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        //???????????? ?????????
        btn_out() {
            //this.cl_cancleho();
            this.leaveSession();
            this.$router.push({ name: "home" });
        },
        btn_preorder() {
            this.centerDialogVisible = true;
        },
        //????????????
        btn_order() {
            // //?????????
            // console.log(this.sellerConnection)
            this.session
                .signal({
                    data: JSON.stringify(this.userId), //?????? ????????? ID??? ??????.,
                    to: [this.sellerConnection],
                    type: "makeOrder",
                })
                .then(() => {
                    console.log("??????????????? ???????????????");
                })
                .catch((error) => {
                    console.log(error);
                });

            //axios
            getOrder(
                this.customerNo,
                //sessionId??? ????????????
                this.mySessionId,
                this.params,
                (response) => {
                    console.log(response);
                    this.open("????????? ?????????????????????");
                },
                (error) => {
                    console.log(error);
                }
            );
        },

        cl_item(menu) {
            //?????? ??????
            this.selected = menu;
            this.selected.count = "";
        },
        //?????? ?????? ????????????
        totalhochul() {
            getCall(
                this.mySessionId,
                (response) => {
                    console.log(response.data);
                    for (var i = 0; i < response.data.length; i++) {
                        if (response.data[i].customerId == this.userId) {
                            this.number = response.data[i].orderNo;
                            console.log(this.number);
                        }
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        //????????????
        cl_hochul() {
            console.log("??????");
            console.log(this.userId + " " + this.mySessionId);
            makeCall(
                this.userId,
                this.mySessionId,
                (response) => {
                    console.log(response);
                    this.number = response.data;
                    this.hochul = true;
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        //?????? ??????
        cl_cancleho() {
            console.log("????????????");
            console.log(this.userId + " " + this.mySessionId);
            deleteCall(
                this.userId,
                this.mySessionId,
                (response) => {
                    console.log(response);
                    this.hochul = false;
                },
                (error) => {
                    console.log(error);
                }
            );
        },
        // ??????????????????
        btn_jang() {
            this.content = true;
            console.log("jang");
        },
        //????????????
        btn_chat() {
            this.content = false;
            console.log("chat");
        },
        //??????????????? ????????????
        btn_add() {
            console.log(this.selected.itemName);
            if (this.selected.itemName == "") {
                this.open("????????? ???????????????");
            } else if (this.selected.count == "") {
                this.open("????????? ??????????????????");
            } else {
                this.orderItems.push({
                    itemNo: this.selected.itemNo,
                    count: this.selected.count,
                    itemName: this.selected.itemName,
                    price: this.selected.price,
                });
                this.params.push({
                    itemNo: this.selected.itemNo,
                    count: this.selected.count,
                });
                this.selected = {};
            }
        },
        // ????????????
        isPublisher(userName) {
            return userName.includes("pu");
        },

        // ??????????????? ?????????????????? ?????? ?????????

        reHocul() {
            console.log("?????? ?????? ??????");
            this.session
                .signal({
                    data: this.myConnectionId,
                    to: [this.sellerConnection],
                    type: "delete-call",
                })
                .then(() => {
                    console.log("?????? ?????? ??????");
                    this.hochul = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        getHocul() {
            console.log("?????? ??????");
            this.session
                .signal({
                    data: JSON.stringify({
                        connectionId: this.myConnectionId,
                        userNo: this.myUserNo,
                        userName: this.userId,
                    }),
                    to: [this.sellerConnection],
                    type: "send-call",
                })
                .then(() => {
                    console.log("?????? ??????");
                    this.hochul = true;
                    //?????? ?????? ??????, ?????? ?????? ????????? ??????. ????????? ???????????? ????????????.
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        sendMessage({ content, to }) {
            let now = new Date();
            let current = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false, // true??? ?????? ?????? 10:25??? ?????? ?????????.
            });

            let messageData = {
                content: content,
                sender: this.userId,
                time: current,
            };

            // ?????? ?????????
            if (to === "all") {
                this.session
                    .signal({
                        data: JSON.stringify(messageData),
                        to: [],
                        type: "public-chat",
                    })
                    .then(() => {
                        console.log("????????? ?????? ??????");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            // ?????? ?????????
            if (to !== "all") {
                this.session
                    .signal({
                        data: JSON.stringify(messageData),
                        to: [to],
                        type: "private-chat",
                    })
                    .then(() => {
                        // ?????? ?????? ?????? ????????? ??????
                        this.$refs.chat.addMessage(JSON.stringify(messageData), true, true);
                        console.log("????????? ?????? ??????");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },

        leaveSession() {
            // --- Leave the session by calling 'disconnect' method over the Session object ---
            if (this.session) this.session.disconnect();

            this.session = undefined;
            this.mainStreamManager = undefined;
            this.publisher = undefined;
            this.subscribers = [];
            this.OV = undefined;

            window.removeEventListener("beforeunload", this.leaveSession);
        },
        /*
    updateMainVideoStreamManager(stream) {
      if (this.mainStreamManager === stream) return;
      this.mainStreamManager = stream;
    },
*/
        /**
         * --------------------------
         * SERVER-SIDE RESPONSIBILITY
         * --------------------------
         * These methods retrieve the mandatory user token from OpenVidu Server.
         * This behavior MUST BE IN YOUR SERVER-SIDE IN PRODUCTION (by using
         * the API REST, openvidu-java-client or openvidu-node-client):
         *   1) Initialize a Session in OpenVidu Server	(POST /openvidu/api/sessions)
         *   2) Create a Connection in OpenVidu Server (POST /openvidu/api/sessions/<SESSION_ID>/connection)
         *   3) The Connection.token must be consumed in Session.connect() method
         */

        getToken(mySessionId) {
            return this.createSession(mySessionId).then((sessionId) => this.createToken(sessionId));
        },

        // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-session
        createSession(sessionId) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        `${OPENVIDU_SERVER_URL}/openvidu/api/sessions`,
                        JSON.stringify({
                            customSessionId: sessionId,
                        }),
                        {
                            auth: {
                                username: "OPENVIDUAPP",
                                password: OPENVIDU_SERVER_SECRET,
                            },
                        }
                    )
                    .then((response) => response.data)
                    .then((data) => resolve(data.id))
                    .catch((error) => {
                        if (error.response.status === 409) {
                            resolve(sessionId);
                        } else {
                            console.warn(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`);
                            if (
                                window.confirm(
                                    `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`
                                )
                            ) {
                                location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
                            }
                            reject(error.response);
                        }
                    });
            });
        },

        // See https://docs.openvidu.io/en/stable/reference-docs/REST-API/#post-connection
        createToken(sessionId) {
            return new Promise((resolve, reject) => {
                axios
                    .post(
                        `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
                        {},
                        {
                            auth: {
                                username: "OPENVIDUAPP",
                                password: OPENVIDU_SERVER_SECRET,
                            },
                        }
                    )
                    .then((response) => response.data)
                    .then((data) => resolve(data.token))
                    .catch((error) => reject(error.response));
            });
        },
    },
};
</script>
<style scoped>
.el-card {
    --el-card-padding: 5px !important;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    margin-left: -10px;
    width: 320px;
}

.dialog-footer button:first-child {
    margin-right: 10px;
}

.div_content {
    margin-top: 20px;
}

.scrollbar-flex-content {
    display: flex;
}
.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: white;
    border: 1px solid;
    color: #42413e;
}

.el-button--warning.is-link,
.el-button--warning.is-plain,
.el-button--warning.is-text {
    --el-button-border-color: #e07c49 !important;
    --el-button-bg-color: #e07c49 !important;
}

.el-button.is-plain {
    --el-button-hover-bg-color: #42413e;
    --el-button-hover-text-color: white;
    --el-button-hover-border-color: white;
}
</style>
