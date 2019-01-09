import dynamic from 'next/dynamic';
import Skeleton from './skeleton';

const DynamicLoadedEditor = dynamic(() => import('./editor'), {
  loading: Skeleton,
  ssr: false,
});

export default DynamicLoadedEditor;