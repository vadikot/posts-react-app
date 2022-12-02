import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetching} from "../Hooks/useFetching";
import Loader from "../Components/Loader/Loader";
import Comments from "../Components/Comments";

const PostById = () => {
    let params = useParams();

    const [currentPost, setCurrentPost] = useState({});
    const [commentsArr, setCommentsArr] = useState([])
    const [fetchPost, postIsLoading, postError] = useFetching(async (id) => {
        const currentPost = await PostService.getByID(id);

        setCurrentPost(currentPost)
    });
    const [fetchComment, commentIsLoading, commentError] = useFetching(async (id) => {
        const postComments = await PostService.getPostComments(id);

        setCommentsArr(postComments);
    })

    useEffect(() => {
        fetchPost(params.id).then();
        fetchComment(params.id).then();
    }, []);

    return (
        <div>
            {
                postError && <h1>Произошла ошибка. Пост не найден.</h1>
            }
            {
                postIsLoading
                    ? <Loader/>
                    : <div style={{margin: '15px'}}>
                        <h3>{currentPost.id}. {currentPost.title}</h3>
                        <hr/>
                        <p>{currentPost.body}</p>
                    </div>
            }
            {
                commentIsLoading
                    ? <Loader/>
                    : <Comments comments={commentsArr}/>

            }
        </div>
    );
};

export default PostById;