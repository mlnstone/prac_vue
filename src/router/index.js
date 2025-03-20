import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Users from "@/pages/Users.vue";
import Admins from "@/pages/Admins.vue";
import Login from "@/pages/Login.vue";
import About from "@/pages/About.vue";
import PostList from "@/pages/Post/PostList.vue";
import PostDetail from "@/pages/Post/PostDetail.vue";
import PostWrite from "@/pages/Post/PostWrite.vue";
import NotFound from "@/pages/NotFound.vue";
import MessageCreate from "@/pages/Message/MessageCreate.vue";
import MessageDetails from "@/pages/Message/MessageDetails.vue";
import MessageList from "@/pages/Message/MessageList.vue";
import ProjectList from "@/pages/Project/ProjectList.vue";
import ProjectDetail from "@/pages/Project/ProjectDetail.vue";
import ProjectWrite from "@/pages/Project/ProjectWrite.vue";
import TeamList from "@/pages/team/TeamList.vue";
import TeamDeteil from "@/pages/team/TeamDeteil.vue";
import TeamWrite from "@/pages/team/TeamWrite.vue";
import ReportCreate from '@/pages/report/ReportCreate.vue';
import ReportList from '@/pages/report/ReportList.vue';
import ReportDetails from '@/pages/report/ReportDetails.vue';
import CommentList from "@/pages/Post/Comment/CommentList.vue";
import CommentCreate from "@/pages/Post/Comment/CommentCreate.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/users", component: Users},
    {path: "/admins", component: Admins},
    {path: "/about", component: About},
    {path: "/post", component: PostList},
    {path: "/post/:postNo", component: PostDetail},
    {path: "/post/write", name: "PostWrite", component: PostWrite},
    {path: '/posts/:postNo/comments', name: 'CommentList', component: CommentList },
    {path: '/posts/:postNo/comments/create', name: 'CommentCreate', component: CommentCreate },
    {path: "/messages/list", component: MessageList},
    {path: "/messages/write", component: MessageCreate},
    {path: "/messages/:messageNo", component: MessageDetails},
    {path: "/team", name: "TeamList", component: TeamList},
    {path: "/team/:teamtNo", name: "TeamDetailt", component: TeamDeteil},
    {path: "/team/write", name: "TeamWrite", component: TeamWrite},
    { path: '/reports/write', component: ReportCreate},
    { path: '/reports/list', component: ReportList},
    { path: '/reports/:reportNo', component: ReportDetails },
    {path: "/project", name: "ProjectList", component: ProjectList},
    {path: "/project/:projectNo", name: "ProjectDetailt", component: ProjectDeteil},
    {path: "/project/write", name: "ProjectWrite", component: ProjectWrite},
    {path: "/:paths(.*)*", component: NotFound},
  ],
});

export default router;
