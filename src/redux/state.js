import {rerenderEntireTree} from "../render";

let state = {
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
        newPostText: 'You text'
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
        newMessageText: 'text'
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
}



        /*Profile New Post*/

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewTextPost = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


                /*Dialogs New Massage*/
export let addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewTexMessage = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};


export default state;