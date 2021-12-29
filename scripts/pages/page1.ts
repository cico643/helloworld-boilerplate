import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';

export default class Page1 extends Page1Design {
  constructor(private router: any) {
    super();
    this.btnNext.onPress = () => {
      this.router.push('/pages/page2', { message: 'Hello World!' });
    };
  }

  /**
   * @event onShow
   * This event is called when a page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    console.log('onShow Page1');
    // this.headerBar.titleLayout.applyLayout();

    this.lblInside.text = 'lblinside that will overflow into 2 lines';
    // HERE WE CALCULATE THE HEIGHT OF THE LABEL MANUALLY AND
    // DISPATCH THAT HEIGHT TO THE PARENT WRAPPER
    this.flInfoWrapper.dispatch({
      type: 'updateUserStyle',
      userStyle: { height: 50 },
    });
    this.flInfoWrapper.applyLayout();

    this.headerBar.titleLayout.applyLayout();
  }

  /**
   * @event onLoad
   * This event is called once when page is created.
   */
  onLoad() {
    super.onLoad();
    console.log('Onload Page1 : ', super.onLoad);
    this.headerBar.leftItemEnabled = false;
    this.headerBar.titleLayout = new PageTitleLayout();
    this.addStyleableChild(this.headerBar.titleLayout, 'titleLayout');
    if (System.OS === 'Android') {
      this.headerBar.title = '';
    }
  }
}
