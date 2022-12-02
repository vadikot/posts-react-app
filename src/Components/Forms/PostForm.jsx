import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (event) => {
        event.preventDefault();

        const newPost = {
            ...post,
            id: Date.now(),
        };

        setPost({title: '', body: ''});
        create(newPost);
    }

    return (
        <form className='post__form'>
            <h1 className='post__form__title'>Create post</h1>
            <MyInput
                type="text"
                placeholder="title"
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput
                type="text"
                placeholder="description"
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <MyButton onClick={addNewPost}>Add new post</MyButton>
        </form>
    );
};

export default PostForm;