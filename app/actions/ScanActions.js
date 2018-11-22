/**
 * Created by lucker on 2018/6/21.
 */
import alt from "../altInstance";
class ScanActions {

    /**
     * 开始扫码
     * @param routerState 当前路由状态uri
     */
    scan(routerState) {
        return routerState;
    }

    /**
     * 设置扫描结果
     * @param qrStr
     * @return {*}
     */
    setScanResult(qrStr) {
        return qrStr;
    }

    /**
     * 重置Scan状态；最好在使用完以后调用一下
     * @return {boolean}
     */
    reset() {
        return true;
    }
}

export default alt.createActions(ScanActions);