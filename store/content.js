let posts = require('~/assets/content/posts.json')
posts = posts.map((post) => {
    post.route = post.title.replace(/ /g, '-').toLowerCase()
    post.content = require('~/assets/content/posts/' + post.content).default
    post.date = new Date(post.date)
    return post
})

let answers = require('~/assets/content/answers.json')
answers = answers.map((answer) => {
    answer.route = answer.title.replace(/ /g, '-').toLowerCase()
    answer.content = require('~/assets/content/answers/' +
        answer.content).default
    answer.date = new Date(answer.date)
    return answer
})

export const state = () => ({
    posts,
    answers
})

export const getters = {
    posts(state) {
        return state.posts
    },
    answers(state) {
        return state.answers
    }
}
