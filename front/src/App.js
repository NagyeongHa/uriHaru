import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Header from "./components/Header";
=======
// import Header from "./components/Header";
//import Main from "./components/Main";
>>>>>>> origin
import Home from "./route/Home";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
<<<<<<< HEAD
import TextEdit from "./components/TextEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/textedit' element={<TextEdit />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
=======
import DiaryWrite from "./components/DiaryWrite";
import DiaryModify from "./components/DiaryModify";
import { useState, useEffect, createContext } from "react";
import { getCurrentUser } from "./service/ApiService";
import AuthRoute from "./Context/AuthRoute";
import MyPage from "./components/MyPage";
export const UserIdContext = createContext("");

function App() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setUserId(user);
    //console.log("유저", user);
  }, []);

  console.log(userId);
  return (
    <div>
      <BrowserRouter>
        <UserIdContext.Provider value={userId}>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route
              path='/'
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            ></Route>
            {/* <Route path='/' element={<Home />}></Route> */}
            <Route path='/diary/create' element={<DiaryWrite />}></Route>
            <Route path='/diary/modify' element={<DiaryModify />}></Route>
            <Route path='/mypage' element={<MyPage />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </UserIdContext.Provider>
>>>>>>> origin
      </BrowserRouter>
    </div>
  );
}

export default App;
