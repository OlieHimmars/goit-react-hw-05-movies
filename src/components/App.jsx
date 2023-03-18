import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import Loader from './Loader/Loader';
const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../pages/CastPage'));
const Reviews = lazy(() => import('../pages/ReviewsPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;