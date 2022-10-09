import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams,
    HashRouter,
} from "react-router-dom";

import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import FrontPage from '../pages/frontPage/FrontPage';

// 找医院
import FindHospital from '../pages/findHospital/FindHospital';
import RelatedHospitalDetail from '../pages/findHospital/hospital/RelatedHospitalDetail';
import DelatedDoctor from '../pages/findHospital/DelatedDoctor/DelatedDoctor';

// 药品通
import DrugPass from '../pages/drugPass/DrugPass';
import ColdMedicineDetail from '../pages/drugPass/ColdMedicineDetail';
import MenHealth from '../pages/drugPass/MenHealth';

import Meeting from '../pages/meeting/Meeting';

// 管培
import TubeTrain from '../pages/tubeTrain/TubeTrain';
import ManagementCourse from '../pages/tubeTrain/ManagementCourse';
import LiveStream from '../pages/tubeTrain/LiveStream';

// 企业介绍
import CompanyProfile from '../pages/CompanyProfile/CompanyProfile';
// 企业荣誉
import EnterpriseHonor from '../pages/EnterpriseHonor/EnterpriseHonor';
// 意见反馈
import Feedback from '../pages/Feedback/Feedback';
// 战略合作
import StrategyCooperate from '../pages/StrategyCooperate/StrategyCooperate';
// 招贤纳士
import Careers from '../pages/Careers/Careers';
// 招贤纳士 - 职业匹配
import CareerMatch from '../pages/Careers/CareerMatch/CareerMatch';
// 招贤纳士 - 职业匹配 - 加入我们
import JoinUs from '../pages/Careers/JoinUs/JoinUs';
// 招贤纳士 - 校园招聘
import SchoolRecruitment from '../pages/Careers/Position/SchoolRecruitment';

import About from '../pages/about/About';


// 会议
import MeetingHome from '../pages/meeting/MeetingPage/MeetingHome';
import MeetingIndex from '../pages/meeting/MeetingPage/Index';
// 会议简介
import ConferenceIntroduction from '../pages/meeting/MeetingPage/ConferenceIntroduction';
// 会议日程
import MeetSchedule from '../pages/meeting/MeetingPage/MeetSchedule';
// 会议嘉宾
import ConferenceGuests from '../pages/meeting/MeetingPage/ConferenceGuests';

const router = () => {

  function homeRouter() {
    return (
      <Home>
        <Switch>
          <Route exact path="/home/frontPage" component={FrontPage} />

          <Route exact path="/home/findHospital" component={FindHospital} />
          <Route exact path="/home/findHospital/relatedHospitalDetail" component={RelatedHospitalDetail} />
          <Route exact path="/home/findHospital/delatedDoctor" component={DelatedDoctor} />

          <Route exact path="/home/drugPass" component={DrugPass} />
          <Route exact path="/home/drugPass/details" component={ColdMedicineDetail} />
          <Route exact path="/home/drugPass/menHealth" component={MenHealth} />

          <Route exact path="/home/meeting" component={Meeting} />

          <Route exact path="/home/tubeTrain" component={TubeTrain} />
          <Route exact path="/home/tubeTrain/managementCourse" component={ManagementCourse} />
          <Route exact path="/home/tubeTrain/liveStream" component={LiveStream} />

          <Route exact path="/home/about" component={About} />

          <Route exact path="/home/companyProfile" component={CompanyProfile} />
          <Route exact path="/home/enterpriseHonor" component={EnterpriseHonor} />
          <Route exact path="/home/feedback" component={Feedback} />
          <Route exact path="/home/strategyCooperate" component={StrategyCooperate} />

          <Route exact path="/home/careers" component={Careers} />
          <Route exact path="/home/careers/careerMatch" component={CareerMatch} />
          <Route exact path="/home/careers/careerMatch/joinUs" component={JoinUs} />
          <Route exact path="/home/careers/schoolRecruitment/:type" component={SchoolRecruitment} />
        </Switch>
      </Home>
    )
  }

  // 会议
  function meetRouter() {
    return (
      <MeetingHome>
        <Switch>
          <Route exact path="/meet/index" component={MeetingIndex} />
          <Route exact path="/meet/meetSchedule" component={MeetSchedule} />
          <Route exact path="/meet/conferenceIntroduction" component={ConferenceIntroduction} />
          <Route exact path="/meet/conferenceGuests" component={ConferenceGuests} />
        </Switch>
      </MeetingHome>
    )
  }

  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home/frontPage'/>
        <Redirect exact from='/home' to='/home/frontPage'/>
        <Route exact path="/login" component={Login} />
        <Route
          path="/meet"
          component={meetRouter}
        />
        <Route
          path="/home"
          component={homeRouter}
        />
      </Switch>
    </HashRouter>
    );
};

export default router;