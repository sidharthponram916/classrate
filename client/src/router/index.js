import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Intro",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/view/stream",
    name: "Stream",
    component: () => import("../views/Stream.vue"),
    meta: {
      authProtected: true,
    },
  },
  {
    path: "/login",
    name: "Log In",
    component: () => import("../views/auth/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: () => import("../views/auth/SignUp.vue"),
  },
  {
    path: "/write",
    name: "Write",
    component: () => import("../views/review/WriteReview.vue"),
    meta: {
      authProtected: true,
      verified: true,
    },
  },
  {
    path: "/view/profile",
    name: "Profile",
    component: () => import("../views/profile/MyProfile.vue"),
    meta: {
      authProtected: true,
    },
  },
  {
    path: "/reviews/view/:id",
    name: "ReviewView",
    component: () => import("../views/review/ReviewView.vue"),
  },
  {
    path: "/schools/add",
    name: "AddSchool",
    component: () => import("../views/school/AddSchool.vue"),
    meta: {
      authProtected: true,
      verified: true,
    },
  },
  {
    path: "/schools/view/:id",
    name: "SchoolView",
    component: () => import("../views/school/SchoolView.vue"),
  },
  {
    path: "/schools/edit/:id",
    name: "SchoolView",
    component: () => import("../views/school/EditSchool.vue"),
    meta: {
      authProtected: true,
    },
  },
  {
    path: "/schools/builder/:id",
    name: "Class Builder",
    component: () => import("../views/school/builder/ClassBuilder.vue"),
  },
  { 
    path: "/tools/builder/connect", 
    name: "Builder Connect", 
    component: () => import("../views/school/builder/BuilderConnect.vue")
  },
  {
    path: "/courses/view/:id",
    name: "CourseView",
    component: () => import("../views/course/CourseView.vue"),
  },
  {
    path: "/user/:id/confirm/:token",
    name: "VerifyEmail",
    component: () => import("../views/auth/VerifyEmail.vue"),
  },
  {
    path: "/user/:id/resetpwd/:token",
    name: "ResetPassword",
    component: () => import("../views/auth/ResetPassword.vue"),
  },
  {
    path: "/admin/44_ajk2dfsd7f5adsfadslfjdsaf4w22247f42",
    name: "Admin",
    component: () => import("../views/auth/AdminDB.vue"),
    meta: {
      authProtected: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Log In" && localStorage.getItem("token") != null)
    next({ name: "Home" });
  else next();
});

router.beforeEach((to, from, next) => {
  if (to.meta.authProtected && !localStorage.getItem("token"))
    next({ name: "Log In" });
  else next();
});

export default router;
