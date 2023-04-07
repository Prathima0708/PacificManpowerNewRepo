// import React from "react";
// /** Add Route Component */
// //Home Section
// const Layout1 = React.lazy(() => import("../pages/Home/Layout1/Layout1"));
// // const Layout2 = React.lazy(() => import("../pages/Home/Layout2/Layout2"));
// // const Layout3 = React.lazy(() => import("../pages/Home/Layout3/Layout3"));

// //Company Section
// const AboutUs = React.lazy(() => import("../pages/Company/AboutUs/AboutUs"));
// const Services = React.lazy(() => import("../pages/Company/Services/Services"));
// const Team = React.lazy(() => import("../pages/Company/Team/Team"));
// const Pricing = React.lazy(() => import("../pages/Company/Pricing/Pricing"));
// const PrivacyAndPolicy = React.lazy(() =>
//   import("../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy")
// );
// const Faqs = React.lazy(() => import("../pages/Company/Faqs/Faqs"));

// //Jobs Section
// const JobList = React.lazy(() => import("../pages/Jobs/JobList/JobList"));
// const JobList2 = React.lazy(() => import("../pages/Jobs/JobList2/JobList2"));
// const JobGrid = React.lazy(() => import("../pages/Jobs/JobGrid/JobGrid"));
// const JobGrid2 = React.lazy(() => import("../pages/Jobs/JobGrid2/JobGrid2"));
// const JobDetails = React.lazy(() =>
//   import("../pages/Jobs/JobDetails/JobDetails")
// );
// const JobsCategories = React.lazy(() =>
//   import("../pages/Jobs/JobsCategories/JobsCategories")
// );

// //Candidate and Company Section
// const CandidateList = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CandidateList/CandidateList")
// );
// const CandidateGrid = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CandidateGrid/CandidateGrid")
// );
// const CandidateDetails = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CandidateDetails/CandidateDetails")
// );
// const CompanyList = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CompanyList/CompanyList")
// );
// const CompanyDetails = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CompanyDetails/CompanyDetails")
// );

// //Blog Section
// const Blog = React.lazy(() => import("../pages/Blog/Blog/Blog"));
// const BlogGrid = React.lazy(() => import("../pages/Blog/BlogGrid/BlogGrid"));
// const BlogModern = React.lazy(() =>
//   import("../pages/Blog/BlogModern/BlogModern")
// );
// const BlogMasonary = React.lazy(() =>
//   import("../pages/Blog/BlogMasonary/BlogMasonary")
// );
// const BlogDetails = React.lazy(() =>
//   import("../pages/Blog/BlogDetails/BlogDetails")
// );
// const BlogAuther = React.lazy(() =>
//   import("../pages/Blog/BlogAuther/BlogAuther")
// );

// //const Contacts
// const Contact = React.lazy(() => import("../pages/Contact/Contact"));

// //const AuthPages
// const SignIn = React.lazy(() => import("../pages/ExtraPages/SignIn"));
// const SignUp = React.lazy(() => import("../pages/ExtraPages/SignUp"));
// const SignOut = React.lazy(() => import("../pages/ExtraPages/SignOut"));
// const ResetPassword = React.lazy(() =>
//   import("../pages/ExtraPages/ResetPassword")
// );
// const ComingSoon = React.lazy(() => import("../pages/ExtraPages/ComingSoon"));
// const Error404 = React.lazy(() => import("../pages/ExtraPages/Error404"));
// const Components = React.lazy(() =>
//   import("../pages/ExtraPages/Components/Components")
// );

// //profile section(User Profile)
// const BookMarkJobPost = React.lazy(() =>
//   import("../pages/Profile/BookMarkJobPost/BookMarkJobPost")
// );
// const ManageJobs = React.lazy(() =>
//   import("../pages/Profile/ManageJobs/ManageJobs")
// );
// const BookMarkJobs = React.lazy(() =>
//   import("../pages/Profile/BookMarkJobs/BookMarkJobs")
// );
// const MyProfile = React.lazy(() =>
//   import("../pages/Profile/MyProfile/MyProfile")
// );

// const userRoutes = [
//   //profile Section(User Profile)
//   { path: "/bookmarkjobpost", component: BookMarkJobPost },
//   { path: "/myprofile", component: MyProfile },
//   { path: "/bookmarkjobs", component: BookMarkJobs },
//   { path: "/managejobs", component: ManageJobs },

//   //Components Section(Extra Pages)
//   { path: "/components", component: Components },

//   //Contact
//   { path: "/contact", component: Contact },

//   // Blog Section
//   { path: "/blogauther", component: BlogAuther },
//   { path: "/blogdetails", component: BlogDetails },
//   { path: "/blogmodern", component: BlogModern },
//   { path: "/blogmasonary", component: BlogMasonary },
//   { path: "/bloggrid", component: BlogGrid },
//   { path: "/blog", component: Blog },

//   //Candidate and Company Section
//   { path: "/companydetails", component: CompanyDetails },
//   { path: "/companylist", component: CompanyList },
//   { path: "/candidatedetails", component: CandidateDetails },
//   { path: "/candidategrid", component: CandidateGrid },
//   { path: "/candidatelist", component: CandidateList },

//   //Jobs Section
//   { path: "/jobscategories", component: JobsCategories },
//   { path: "/jobdetails", component: JobDetails },
//   { path: "/jobgrid2", component: JobGrid2 },
//   { path: "/jobgrid", component: JobGrid },
//   { path: "/joblist2", component: JobList2 },
//   { path: "/joblist", component: JobList },

//   //Company Section
//   { path: "/faqs", component: Faqs },
//   { path: "/privacyandpolicy", component: PrivacyAndPolicy },
//   { path: "/pricing", component: Pricing },
//   { path: "/team", component: Team },
//   { path: "/services", component: Services },
//   { path: "/aboutus", component: AboutUs },

//   //Home Section
//   // { path: "/layout3", component: Layout3 },
//   // { path: "/layout2", component: Layout2 },
//   { path: "/signup", component: SignUp },
//   { path: "/home", component: Layout1 },
// ];

// const authRoutes = [
//   // { path: "/error404", component: Error404 },
//   // { path: "/comingsoon", component: ComingSoon },
//   // { path: "/resetpassword", component: ResetPassword },
//   // { path: "/signout", component: SignOut },
//   { path: "/", component: SignUp },
//   { path: "/signin", component: SignIn },
// ];

// export { userRoutes, authRoutes };

import React from "react";

/** Add Route Component */
//Home Section
const Layout1 = React.lazy(() => import("../pages/Home/Layout1/Layout1"));
const Layout2 = React.lazy(() => import("../pages/Home/Layout2/Layout2"));
const Layout3 = React.lazy(() =>
  import("../adminPanel/adminPages/Home/Layout3/Layout3")
);

//Company Section
const AboutUs = React.lazy(() => import("../pages/Company/AboutUs/AboutUs"));
const Services = React.lazy(() => import("../pages/Company/Services/Services"));
const Team = React.lazy(() => import("../pages/Company/Team/Team"));
const Pricing = React.lazy(() => import("../pages/Company/Pricing/Pricing"));
const PrivacyAndPolicy = React.lazy(() =>
  import("../pages/Company/PrivacyAndPolicy/PrivacyAndPolicy")
);
const Faqs = React.lazy(() => import("../pages/Company/Faqs/Faqs"));
const ReadmoreNews = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/ReadMoreNews")
);
const NullPowerPlant = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/Nullpowerplant/Nullpowerplant")
);
const HiddenValley = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/HiddenValley/HiddenValley")
);
const NewOwner = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/NewOwner/NewOwner")
);
const RecordProduction = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/RecordProduction/RecordProduction")
);
const Morobe = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/Morobe/Morobe")
);
const Newcrest = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/NewCrest/NewCrest")
);
const LihirGold = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/LihirGold/LihirGold")
);
const NewGas = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/NewGas/NewGas")
);
const LandOwners = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/LandOwners/LandOwners")
);
const Turkai = React.lazy(() =>
  import("../pages/Company/Faqs/ReadmoreNews/Turkai/Turkai")
);

const Manpower = React.lazy(() => import("../pages/Company/Manpower/Manpower"));
const LandOwner = React.lazy(() =>
  import("../pages/Company/AboutUs/LandOwner/LandOwner")
);
const Winima = React.lazy(() =>
  import("../pages/Company/AboutUs/Winima/Winima")
);
const TKIHistory = React.lazy(() =>
  import("../pages/Company/AboutUs/TKIHistory/TKIHistory")
);
const TKIManpower = React.lazy(() =>
  import("../pages/Company/AboutUs/TKIManpower/TKIManpower")
);

const Passport = React.lazy(() => import("../pages/Company/Passport/Passport"));
const Payroll = React.lazy(() => import("../pages/Company/Payroll/Payroll"));
const Recruitment = React.lazy(() =>
  import("../pages/Company/Recruitment/Recruitment")
);
const Technical = React.lazy(() =>
  import("../pages/Company/Technical/Technical")
);
const RecruitmentService = React.lazy(() =>
  import("../pages/Recruitment Service/RecruitmentService")
);
//Jobs Section
const JobList = React.lazy(() => import("../pages/Jobs/JobList/JobList"));
const JobList2 = React.lazy(() => import("../pages/Jobs/JobList2/JobList2"));
const JobGrid = React.lazy(() => import("../pages/Jobs/JobGrid/JobGrid"));
const JobGrid2 = React.lazy(() => import("../pages/Jobs/JobGrid2/JobGrid2"));
const JobDetails = React.lazy(() =>
  import("../pages/Jobs/JobDetails/JobDetails")
);
const JobsCategories = React.lazy(() =>
  import("../pages/Jobs/JobsCategories/JobsCategories")
);

//Candidate and Company Section
// const CandidateList = React.lazy(() =>
//   import("../pages/CandidateAndCompany/CandidateList/CandidateList")
// );
const CandidateGrid = React.lazy(() =>
  import("../pages/CandidateAndCompany/CandidateGrid/CandidateGrid")
);
const CandidateDetails = React.lazy(() =>
  import("../pages/CandidateAndCompany/CandidateDetails/CandidateDetails")
);
const CompanyList = React.lazy(() =>
  import("../pages/CandidateAndCompany/CompanyList/CompanyList")
);
const CompanyDetails = React.lazy(() =>
  import("../pages/CandidateAndCompany/CompanyDetails/CompanyDetails")
);

//Blog Section
const Blog = React.lazy(() => import("../pages/Blog/Blog/Blog"));
const BlogGrid = React.lazy(() => import("../pages/Blog/BlogGrid/BlogGrid"));
const BlogModern = React.lazy(() =>
  import("../pages/Blog/BlogModern/BlogModern")
);
const BlogMasonary = React.lazy(() =>
  import("../pages/Blog/BlogMasonary/BlogMasonary")
);
const BlogDetails = React.lazy(() =>
  import("../pages/Blog/BlogDetails/BlogDetails")
);
const BlogAuther = React.lazy(() =>
  import("../pages/Blog/BlogAuther/BlogAuther")
);

//const Contacts
const Contact = React.lazy(() => import("../pages/Contact/Contact"));

//const AuthPages
const SignIn = React.lazy(() => import("../pages/ExtraPages/SignIn"));
const SignUp = React.lazy(() => import("../pages/ExtraPages/SignUp"));
const SignOut = React.lazy(() => import("../pages/ExtraPages/SignOut"));
const ResetPassword = React.lazy(() =>
  import("../pages/ExtraPages/ResetPassword")
);
const ComingSoon = React.lazy(() => import("../pages/ExtraPages/ComingSoon"));
const Error404 = React.lazy(() => import("../pages/ExtraPages/Error404"));
const Components = React.lazy(() =>
  import("../pages/ExtraPages/Components/Components")
);

//profile section(User Profile)
// const BookMarkJobPost = React.lazy(() =>
//   import("../pages/Profile/BookMarkJobPost/BookMarkJobPost")
// );
// const ManageJobs = React.lazy(() =>
//   import("../pages/Profile/ManageJobs/ManageJobs")
// );
const BookMarkJobs = React.lazy(() =>
  import("../pages/Profile/BookMarkJobs/BookMarkJobs")
);
const ApplyJob = React.lazy(() => import("../pages/Profile/ApplyJob/ApplyJob"));
const MyProfile = React.lazy(() =>
  import("../pages/Profile/MyProfile/MyProfile")
);

//Admin Section
const ManageJobs = React.lazy(() =>
  import("../adminPanel/AdminProfile/ManageJobs/ManageJobs")
);
const BookMarkJobPost = React.lazy(() =>
  import("../adminPanel/AdminProfile/BookMarkJobPost/BookMarkJobPost")
);
const News = React.lazy(() => import("../adminPanel/News/News"));
const CandidateList = React.lazy(() =>
  import("../adminPanel/CandidateAndCompany/CandidateList/CandidateList")
);
const NewsList = React.lazy(() =>
  import("../adminPanel/News/NewsList/NewsList")
);
const AddCompany = React.lazy(() =>
  import("../adminPanel/AddCompany/AddCompany")
);

const userRoutes = [
  //profile Section(User Profile)
  // { path: "/bookmarkjobpost", component: BookMarkJobPost },
  { path: "/myprofile", component: MyProfile },
  { path: "/bookmarkjobs", component: BookMarkJobs },
  // { path: "/managejobs", component: ManageJobs },

  //Components Section(Extra Pages)
  { path: "/components", component: Components },

  //Contact
  { path: "/contact", component: Contact },

  // Blog Section
  { path: "/blogauther", component: BlogAuther },
  { path: "/blogdetails", component: BlogDetails },
  { path: "/blogmodern", component: BlogModern },
  { path: "/blogmasonary", component: BlogMasonary },
  { path: "/bloggrid", component: BlogGrid },
  { path: "/blog", component: Blog },

  //Candidate and Company Section
  { path: "/companydetails", component: CompanyDetails },
  { path: "/companylist", component: CompanyList },
  { path: "/candidatedetails", component: CandidateDetails },
  { path: "/candidategrid", component: CandidateGrid },
  // { path: "/candidatelist", component: CandidateList },

  //Jobs Section
  { path: "/jobscategories", component: JobsCategories },
  { path: "/jobdetails", component: JobDetails },
  { path: "/jobgrid2", component: JobGrid2 },
  { path: "/jobgrid", component: JobGrid },
  { path: "/joblist2", component: JobList2 },
  { path: "/joblist", component: JobList },
  { path: "/applyforjob", component: ApplyJob },

  //Company Section
  { path: "/news", component: Faqs },
  { path: "/readmore/:id", component: ReadmoreNews },
  { path: "/readmorenewsnullpowerplant", component: NullPowerPlant },
  { path: "/readmorenewsNewOwner", component: NewOwner },
  { path: "/readmorenewsHiddenValley", component: HiddenValley },
  { path: "/readmorenewsRecordProduction", component: RecordProduction },
  { path: "/readmoreMorobe", component: Morobe },
  { path: "/readmoreNewCrest", component: Newcrest },
  { path: "/readmoreLihirGold", component: LihirGold },
  { path: "/readmoreNewGas", component: NewGas },
  { path: "/readmoreLandowners", component: LandOwners },
  { path: "/readmoreTurkai", component: Turkai },

  { path: "/ITservices", component: PrivacyAndPolicy },
  { path: "/pricing", component: Pricing },
  { path: "/team", component: Team },
  { path: "/services", component: Services },
  { path: "/aboutus", component: AboutUs },
  { path: "/landowner", component: LandOwner },
  { path: "/winima", component: Winima },
  { path: "/tkihistory", component: TKIHistory },
  { path: "/tkimanpower", component: TKIManpower },

  { path: "/manpower", component: Manpower },
  { path: "/passport", component: Passport },
  { path: "/payroll", component: Payroll },
  { path: "/recruitment", component: Recruitment },
  { path: "/technical", component: Technical },
  { path: "/recruitmentservice", component: RecruitmentService },

  //Home Section
  // { path: "/admin", component: Layout3 },
  { path: "/layout2", component: Layout2 },
  { path: "/home", component: Layout1 },
];

const authRoutes = [
  { path: "/error404", component: Error404 },
  { path: "/comingsoon", component: ComingSoon },
  { path: "/resetpassword", component: ResetPassword },
  { path: "/signout", component: SignOut },
  { path: "/signup", component: SignUp },
  { path: "/", component: SignIn },
];
const adminRoutes = [
  { path: "/admin", component: Layout3 },
  { path: "/myjobs", component: ManageJobs },
  { path: "/postjob", component: BookMarkJobPost },
  { path: "/addnews", component: News },
  { path: "/candidatelist", component: CandidateList },
  { path: "/mynews", component: NewsList },
  { path: "/addcompany", component: AddCompany },
];
export { userRoutes, authRoutes, adminRoutes };
