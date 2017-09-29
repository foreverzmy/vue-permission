const Content = () =>
  import ( /* webpackChunkName: "group-foo" */ '@/components/Content');
const Bar = () =>
  import ( /* webpackChunkName: "group-foo" */ '@/components/Bar');
const Foo = () =>
  import ( /* webpackChunkName: "group-foo1" */ '@/components/Foo');

export default [{
    path: '/',
    name: 'content',
    component: Content,
    redirect: '/bar',
    children: [{
      path: 'bar',
      component: Bar
    }, {
      path: 'foo',
      component: Foo
    }]
  },
  {
    path: '*',
    component: Content
  }
]
