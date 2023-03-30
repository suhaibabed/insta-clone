import { useState } from 'react';
import Story from './Story';
import DataStories from './data';
import IStory from './typedStory';

const Stories = () => {
  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
     border-gray-200 border rounded-sm 
     overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {DataStories.map((story: IStory) => {
        console.log(`DataStories${DataStories}`);
        let username = story.username.split(' ').join('').toLowerCase();
        username =
          username.length <= 10 ? username : `${username.slice(0, 8)}...`;
        return (
          <Story key={story.id} img={story.image} username={story.username} />
        );
      })}
    </div>
  );
};

export default Stories;
