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
            const page = new Pages.Page1({ router, routeData: route.getState().routeData });
            Router.getActiveRouter().setState({ view: page });
            return page;
          },
        }),
        Route.of({
          path: '/pages/page2',
          build: (router, route) => {
            const page = new Pages.Page2({ router, routeData: route.getState().routeData });
            page.on(Page.Events.Show, () => console.log('You can add events from here too'));
            Router.getActiveRouter().setState({ view: page });
            return page;
          },
        }),
        StackRouter.of({
            path: '/pages/modal',
            to: '/pages/modal/page3',
            modal: true,
            routes: [
              Route.of({
                path: '/pages/modal/page3',
                build: (router, route) => {
                  const page = new Pages.Page3({ router, routeData: route.getState().routeData });
                  Router.getActiveRouter().setState({ view: page });
                  return page;
                },
              })
            ],
          }),
      ],
    }),
  ],
});

Application.android.onBackButtonPressed = () => {
    const page = Router.getActiveRouter().getState().view;
    page.router.goBack();
}

export default router;
