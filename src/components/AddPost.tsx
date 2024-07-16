import React, { useState } from 'react';
import { useAddPostMutation } from '../services/api';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import Hero from './Hero';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

const AddPostForm = () => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState(1); // Assume we are user-1
  const [message, setMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await addPost({ title, userId, body }).unwrap();
      if (response) {
        setMessage('Post created successfully!');
        setTitle('');
        setBody('');
      } else {
        setMessage('Failed to create post.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setShowDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className='h-screen bg-[#111827] '>
      <Hero isHomePage={false} />
      <div className='container py-10 px-6 flex-grow max-w-7xl mx-auto flex-col items-center justify-center pb-10'>
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md space-y-4">
          <h2 className="text-xl font-bold">Add New Post</h2>
          <div>
            <label className="block mb-2">Title:</label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Content:</label>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Post'}
          </Button>
        </form>

        {/* Open AlertDialog */}
        <AlertDialog open={showDialog} onOpenChange={handleCloseDialog}>
          <AlertDialogTrigger asChild>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Notification</AlertDialogTitle>
              <AlertDialogDescription>{message}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCloseDialog}>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default AddPostForm;
