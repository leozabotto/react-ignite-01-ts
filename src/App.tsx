import { Header } from './components/Header';
import { Sidebar } from './components/Siderbar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leozabotto.png',
      name: 'Leonardo Z',
      role: 'FullStack Web Developer',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala povo 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return.',
      },
      {
        type: 'link',
        content: 'github.com/leozabotto',
      },
    ],
    publishedAt: new Date('2023-03-15 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala povo 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return.',
      },
      {
        type: 'link',
        content: 'github.com/diego3g',
      },
    ],
    publishedAt: new Date('2023-05-18 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
