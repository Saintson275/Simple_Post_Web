
import React, { useState } from 'react';
import { useGetPostsQuery } from '../services/api';
import { Card, CardContent, CardFooter, CardTitle } from './ui/card';
import { User } from 'lucide-react';
import { Button } from './ui/button';
import { Heart, MessageSquare, Forward } from 'lucide-react';


const PostList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [visibleCount, setVisibleCount] = useState(12);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <div className="p-4">
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto gap-4">
        {posts.slice(0, visibleCount).map((post: { userId: number; id: number; title: string; body: string }) => (
          <Card key={post.id} className="bg-white/90 shadow-md rounded-md p-4">
            <CardTitle className="flex items-center gap-x-2">
              <div className="flex-shrink-0">
                <User />
              </div>
              <p>User ID:{post.userId}</p>
            </CardTitle>
            <CardContent className='pt-4 px-0'>
              <p className='relative text-[.8rem] font-semibold text-center mb-2 py-2 text-yellow-500 sm:min-h-[3.5rem]'>Title:{post.title}</p>
              <hr className='h-10'/>
              <p className='text-[0.8rem] text-gray-900 sm:min-h-[6rem]'>{post.body}</p>
            </CardContent>
            <CardFooter className="gap-3">
                <Button variant="ghost" size='icon'><Heart/></Button>
                <Button variant="ghost" size='icon'><MessageSquare/></Button>
                <Button variant="ghost" size='icon'><Forward/></Button>
                <Button>Read more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {visibleCount < posts.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={handleLoadMore} variant='outline' className="bg-[#111827]  md:text-lg text-white p-4 md:p-6 rounded-full font-semibold hover:bg-blue-300">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostList;
