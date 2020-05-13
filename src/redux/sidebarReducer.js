let initialState = {
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

const sidebarReducer = (state = initialState, action) => {

    return state;
}


export default sidebarReducer;