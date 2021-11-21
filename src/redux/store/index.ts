import {showLogin, showLogout} from "../actions/MenuActions";
import store from '../../js/store'
export interface StoreWindow extends Window {
    store: typeof store
    showLogin(): { type: string }
    showLogout(): { type: string }
}
declare let window: StoreWindow
window.store = store
window.showLogin = showLogin
window.showLogout = showLogout
