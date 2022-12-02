import React, {useContext, useEffect, useState} from "react";
import List from "../Components/List";
import PostForm from "../Components/Forms/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../UI/MyModal/MyModal";
import MyButton from "../UI/Button/MyButton";
import {usePosts} from "../Hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../Components/Loader/Loader";
import {useFetching} from "../Hooks/useFetching";
import {getTotalPages} from "../utils/pages";
import Pagination from "../Components/Pagination";
import AuthContext from "../Context/AuthContext";

function Posts() {
    const {isAuth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearched = usePosts(filter.sort, filter.query, posts);

    const [modalPost, setModalPost] = useState(false);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(page, limit);
        const fetchedTotalCount = response.headers['x-total-count'];

        setTotalCount(getTotalPages(fetchedTotalCount, limit));
        setPosts(response.data);
    });

    useEffect(() => {
        fetchPosts();
    }, [page, limit]);

    function createPost(post) {
        setPosts([...posts, post]);
        setModalPost(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(item => item.id !== post.id));
    }

    return (
        <div>
            {
                isAuth
                && <MyButton onClick={() => setModalPost(true)}
                             style={{
                                 marginRight: '10px',
                                 marginLeft: 'auto',
                                 display: 'block',
                             }}
                >
                    create new post
                </MyButton>
            }
            <MyModal isVisible={modalPost} setIsVisible={setModalPost}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            {
                postError && <h1>Произошла ошибка: {postError}</h1>
            }
            {
                isPostsLoading
                    ? <Loader/>
                    : <List posts={sortedAndSearched} remove={removePost} title={'Posts'}/>
            }
            <Pagination
                totalCount={totalCount}
                page={page}
                setPage={setPage}
            />

        </div>
    );
}

export default Posts;
