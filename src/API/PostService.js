import axios from "axios";

export default class PostService {
    static async getAll(page, limit) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page,
                _limit: limit,
            }
        });

        return response;
    }

    static async getByID(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        return response.data;
    }

    static async getPostComments(postID) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`);

        return response.data;
    }
}