import { BlogPost } from '../../app/models/blogpost';

export const POSTS:Array<BlogPost> = [
    new BlogPost("1", "http://www.cnn.com", "Gary First Post", "This is my preview!", "This is the body of the post!", true),
    new BlogPost("2", "http://www.aol.com", "Gary Second Post", "This is my preview!", "This is the body of the post!", true),
    new BlogPost("3", "http://www.football365.com", "Gary Third Post", "This is my preview!", "This is the body of the post!", true),
    new BlogPost("4", "http://www.vox.com", "Gary Fourth Post", "This is my preview!", "This is the body of the post!", true)        
];