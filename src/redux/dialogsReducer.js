const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            };
        }
        case UPDATE_NEW_TEXT_MESSAGE: {
            return {
                ...state,
                newMessageText: action.newTextMessage
            };
        }
        default: return state
    }
}

export const add_Message_Creator = () => ({ type: ADD_MESSAGE });
export const update_New_Text_Message_Creator = (text) =>
    ({type: UPDATE_NEW_TEXT_MESSAGE, newTextMessage: text});


export default dialogsReducer;