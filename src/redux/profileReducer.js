const ADD_POST = 'ADD-POS';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newPostText = action.newTextPost;
            return state;
        default: return state;
    }
}

export const add_Post_Creator = () => ({ type: ADD_POST });
export const update_New_Text_Post_Creator = (text) =>
    ({type: UPDATE_NEW_TEXT_POST, newTextPost: text});

export default profileReducer;