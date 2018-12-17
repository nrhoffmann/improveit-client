import dynamic from 'next/dynamic';

const DynamicLoadedEditor = dynamic(() => import('./editor'), {
  loading: () => (<p>Loading ...</p>),
  ssr: false,
});

export default DynamicLoadedEditor;