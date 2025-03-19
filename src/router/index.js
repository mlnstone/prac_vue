import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Users from '@/pages/Users.vue';
import Admins from '@/pages/Admins.vue';
import Login from '@/pages/Login.vue';
import About from '@/pages/About.vue';
import PostList from '@/pages/Post/PostList.vue';
import AddPost from '@/pages/Post/AddPost.vue';
import EditPost from '@/pages/Post/EditPost.vue';
import PostDetail from '@/pages/Post/PostDetail.vue';
import NotFound from '@/pages/NotFound.vue';
import ProjectList from '@/pages/Project/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/users', component: Users },
        { path: '/admins', component: Admins },
        { path: '/about', component: About },
        { path: '/posts', component: PostList },
        { path: '/posts/add', component: AddPost },
        { path: '/posts/:postNo', name: 'EditPost', component: EditPost },
        { path: '/posts/:postNo', name: 'PostDetail', component: PostDetail },
        { path: '/projects', name: 'ProjectList', component: ProjectList },
        { path: '/:paths(.*)*', component: NotFound },
    ]
})

export default router;