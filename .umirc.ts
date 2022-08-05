export default {
  npmClient: "npm",
  apiRoute: {
    platform: "vercel",
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/posts/create", component: "posts/create" },
    { path: "/login", component: "login" },
    { path: "/posts/:postId", component: "posts/post" },
    { path: "/register", component: "register" },
  ],
  plugins: [require.resolve("@umijs/plugins/dist/tailwindcss")],
  tailwindcss: {},
};
