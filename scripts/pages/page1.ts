import Page1Design from 'generated/pages/page1';
import PageTitleLayout from 'components/PageTitleLayout';
import System from '@smartface/native/device/system';
import Label from '@smartface/native/ui/label';
import FlexLayout from '@smartface/native/ui/flexlayout';
import Color from '@smartface/native/ui/color';

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

    // HERE WHEN WE CHANGE THE TEXT DYNAMICALLY ON THE RUNTIME
    // flWrapper DOESN'T CALCULATE ITS LAYOUT SIZES AUTOMATICALLY
    // AND CAUSES US TO MANUALLY CALCULATE LABEL'S NEW HEIGHT
    // AND DISPATCH THAT TO WRAPPER FLEX WHICH IS A VERY PAINFUL
    // PROCESS TO DO.
    setTimeout(() => {
      this.lblInside.text = `lblinside that will overflow into 6 lineslblinside that will overflow into 6 lineslblinside that will overflow into 6 lineslblinside that will overflow into 6 lines`;
      if (System.OS === System.OSType.ANDROID) {
        this.lblInside.getParent().applyLayout(); // APPLYLAYOUT ALSO SADLY NOT DOING THE WORK FOR US
      }
    }, 2000);

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
