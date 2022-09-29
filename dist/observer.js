import _ from 'lodash';

class Observer {
  constructor(props) {
    this.listentoScroll = () => {
      let flag = this.isElementInViewport(); // console.log(flag);

      if (flag == true && this.listenInViewportExternal) {
        this.listenInViewportExternal();
      }
    };

    this.isElementInViewport = () => {
      let el = this.element; // Special bonus for those using jQuery
      // if (typeof jQuery === "function" && el instanceof jQuery) {
      //     el = el[0];
      // }

      if (!el || !el.getBoundingClientRect) {
        return false;
      }

      var bounding = el.getBoundingClientRect(); //    console.log("on scroll",bounding, window.innerHeight, window.innerWidth, bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight);

      return window.innerHeight, window.innerWidth, bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight;
    };

    //  console.log(props);
    if (props && props.element) {
      this.element = props.element;
      this.listenInViewportExternal = props.listenInViewportExternal;
    }

    if (process.browser) {
      this.listentoScroll();
      window.addEventListener('load', () => {// this.listenWindowLoad()
      });
      window.addEventListener('scroll', _.throttle(() => {
        this.listentoScroll();
      }), 1000);
    }
  }

}

export default Observer;