import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import FAQs from './pages/faqs/FAQs';
import Partnership from './pages/partnership/Partnership';
import CollectImg from './pages/collect_img/CollectImg';
import AvailableOn from './pages/available_on/AvailableOn';
import SocialLink from './pages/social_link/SocialLink';
import Team from './pages/team/Team';
import Social from './pages/social/Social';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
// test
import Form from './pages/dashboard/Form';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/partnership" element={<Partnership />} />
          <Route exact path="/collectImgs" element={<CollectImg />} />
          <Route exact path="/availableOn" element={<AvailableOn />} />
          <Route exact path="/sociallink" element={<SocialLink />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/social" element={<Social />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/form" element={<Form />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;