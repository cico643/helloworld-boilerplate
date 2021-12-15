import { NativeRouter as Router, NativeStackRouter as StackRouter, Route } from '@smartface/router';
import * as Pages from 'pages';
import Page from '@smartface/native/ui/page';
import Application from '@smartface/native/application';

const router = Router.of({
  path: '/',
  isRoot: true,
  routes: [
    StackRouter.of({
      path: '/pages',
      routes: [
        Route.of({
          path: '/pages/page1',
          build: (router, route) => {
            const page = new Pages.Page1({ router });
            return page;
          },
        }),
        Route.of({
          path: '/pages/page2',
          build: (router, route) => {
            const page = new Pages.Page2({ router, routeData: route.getState().routeData });
            page.on(Page.Events.Show, () => console.log('You can add events from here too'));
            return page;
          }
        }),
      ],
    }),
  ],
});

Application.on(Application.Events.BackButtonPressed, () => {
    const page = router.getState().view;
    page.goBack();
});

export default router;
