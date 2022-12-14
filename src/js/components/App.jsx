// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';

// import Statistics from 'js/pages/Statistics';

import PrivateRoute from 'js/services/Routes/PrivateRoute';
import PublicRoute from 'js/services/Routes/PublicRoute';
import Container from 'js/utils/Container/Container';
import { Loading } from 'notiflix';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ModalMyTrainingPlaying from 'js/components/ModalMyTrainingPlaying/ModalMyTrainingPlaying'


const Login = lazy(async () => {
  let obj = await import('../pages/Login/Login');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Register = lazy(async () => {
  let obj = await import('../pages/Register/Register');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Layout = lazy(async () => {
  let obj = await import('./Layout/Layout');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Library = lazy(async () => {
  let obj = await import('../pages/Library/Library');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Workout = lazy(async () => {
  let obj = await import('../pages/workout/Workout');
  return typeof obj.default === 'function' ? obj : obj.default;
});

export default function App() {
  
  return (
    <Container>
      <Suspense fallback={Loading.circle()}>
        <Layout />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/" element={<PublicRoute restricted />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/" element={<PublicRoute restricted />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/library" element={<Library />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/workout" element={<Workout />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            {/* <Route path="/statistic" element={<Statistics />} /> */}
            <Route path="/statistic" element={<ModalMyTrainingPlaying
            
            />} />
          </Route>
        </Routes>
        {Loading.remove()}
      </Suspense>
    </Container>
    // <Container>
    //   <Routes>
    //     <Route
    //       path="/login"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Login />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="/register"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Register />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="/"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Layout />
    //         </Suspense>
    //       }
    //     >
    //       <Route
    //         path="/library"
    //         element={
    //           <Suspense fallback={<>...</>}>
    //             <Library />
    //           </Suspense>
    //         }
    //       />
    //       <Route
    //         path="/myWorkout"
    //         element={
    //           <Suspense fallback={<>...</>}>
    //             <Workout />
    //           </Suspense>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </Container>
  );
}
