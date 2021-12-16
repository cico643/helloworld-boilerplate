import Page3Design from 'generated/pages/page3';
import Router from '@smartface/router/lib/router/Router';

export default class Page3 extends Page3Design {
    router: Router;
    routeData: { [key: string]: any };  
	constructor({ ...args }) {
		super();
        Object.assign(this, args);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
	}
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(this: Page3, superOnShow: () => void) {
  superOnShow();
}
  
/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(this: Page3, superOnLoad: () => void) {
  superOnLoad();
}