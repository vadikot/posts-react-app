import {useMemo} from "react";

export const useSortedPosts = (sort, posts) => {
    return useMemo(() => {
        if (sort !== '') {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        } else {
            return posts;
        }
    }, [sort, posts]);
};

export const usePosts = (sort, query, posts) => {
    const sortedPosts = useSortedPosts(sort, posts);

    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query));
    }, [query, sortedPosts]);

};
