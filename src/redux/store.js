import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _collSubscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi!',
                    like: 25
                },
                {
                    id: 2,
                    message: 'How do you do?',
                    like: 12
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Sasha',
                    image: 'https://cache.kwork.ru/pics/t3/47/435505-1535454647.jpg',
                    status: 'online'
                },
                {
                    id: 2,
                    name: 'Masha',
                    image: 'https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
                    status: 'online'
                },
                {
                    id: 3,
                    name: 'Vitya',
                    image: 'https://ispolnu.ru/uploads/services/20180618/1529316303dbca.jpg',
                    status: 'offline'
                },
                {
                    id: 4,
                    name: 'Katya',
                    image: 'https://steamuserimages-a.akamaihd.net/ugc/878625635424782000/DB798C0A0F8E97035012AC04ADD5FFA8F49ED590/',
                    status: 'offline'
                }
            ],
            messages: [
                {
                    id: 1,
                    message: 'Hi!'
                },
                {
                    id: 2,
                    message: 'How do you do?'
                },
                {
                    id: 3,
                    message: 'Yo'
                },
                {
                    id: 4,
                    message: 'Hi!'
                },
                {
                    id: 5,
                    message: 'How do you do?'
                },
                {
                    id: 6,
                    message: 'Yo'
                }
            ],
            newMessageText: ''
        },
        navbarPage: {
            sidebar: [
                {
                    id: 1,
                    name: 'Sasha',
                    image: 'https://cache.kwork.ru/pics/t3/47/435505-1535454647.jpg',
                    status: 'online'
                },
                {
                    id: 2,
                    name: 'Masha',
                    image: 'https://user-life.com/uploads/posts/2018-08/1535608847_kak-udalit-avatarku-ubrat-postavit-sdelat-zagruzit-dobavit-foto-vkontakte-dlya-telegramma-skaypa-vayber-diskorda.jpg',
                    status: 'online'
                },
                {
                    id: 3,
                    name: 'Vitya',
                    image: 'https://ispolnu.ru/uploads/services/20180618/1529316303dbca.jpg',
                    status: 'offline'
                },
                {
                    id: 4,
                    name: 'Katya',
                    image: 'https://steamuserimages-a.akamaihd.net/ugc/878625635424782000/DB798C0A0F8E97035012AC04ADD5FFA8F49ED590/',
                    status: 'offline'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._collSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbarPage = sidebarReducer(this._state.navbarPage, action)

        this._collSubscriber(this._state);
    }
}



export default store;

