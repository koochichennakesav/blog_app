import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map(blog =>
                blog.id === action.payload.id ?
                    action.payload
                    :
                    blog
            );
        case 'delete_blogpost':
            return state.filter(blog => blog.id !== action.payload);
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content,
            }]
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPosts = dispatch => {
    return async (title, content, callBack) => {
        await jsonServer.post("/blogposts", { title, content });
        // dispatch({ type: 'add_blogpost', payload: { title, content } });
        if (callBack) {
            callBack();
        }
    };
}

const editBlogPost = dispatch => {
    return async (id, title, content, callBack) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({
            type: 'edit_blogpost',
            payload: { id, title, content },
        });
        if (callBack) {
            callBack();
        }
    };
}

const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPosts, deleteBlogPost, editBlogPost, getBlogPosts },
    [],
);