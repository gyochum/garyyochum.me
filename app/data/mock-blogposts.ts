import { BlogPost } from '../../app/models/blogpost';

export const POSTS:Array<BlogPost> = [
    new BlogPost({
        id: "1",
        url: "http://www.cnn.com",
        title: "Gary First Post", 
        preview: "This is my preview!", 
        body: "This is the body of the post!", 
        isActive: true
    }),
    new BlogPost({
        id: "1",
        url: "http://www.cnn.com",
        title: "Gary Second Post", 
        preview: "This is my preview!", 
        body: "This is the body of the post!", 
        isActive: true
    }),
    new BlogPost({
        id: "1",
        url: "http://www.cnn.com",
        title: "Gary Third Post", 
        preview: "This is my preview!", 
        body: "This is the body of the post!", 
        isActive: true
    }),
    new BlogPost({
        id: "1",
        url: "http://www.aol.com",
        title: "Gary Fourth Post", 
        preview: "This is my preview!", 
        body: "This is the body of the post!", 
        isActive: true
    })
];