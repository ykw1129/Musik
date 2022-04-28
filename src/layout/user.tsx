import React,{lazy, Suspense} from 'react'
import Sidebar from './sidebar'
import Loading from '../components/loading';
import { Route,Routes } from 'react-router-dom';
type Props = {}

const Home = lazy(() => import('../pages/home'));
export default function User({}: Props) {
  return (
    <div className='flex flex-row'>
          <Sidebar />
          <Routes>
              <Route path='/' element={lazyComp(Home)} />
          </Routes>
    </div>
  )
}

function lazyComp(Component: React.LazyExoticComponent<() => JSX.Element>) {
  return (props: any) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
}