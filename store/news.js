let posts = require('~/assets/posts.json');
posts = posts.map(post => {
    post.route = post.title.replace(' ', '-');
    post.content = require('~/assets/posts/' + post.content).default;
    return post;
});

export const state = () => ({
    posts
});

export const getters = {
    posts(state) {
        return state.posts;
    }
}
