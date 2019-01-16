import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import renderGlobe from './renderGlobe';
import SweetScroll from 'sweet-scroll';


const mapStateToProps = ({ windowHeight, windowWidth, showTopMenu, globeSpin }) => ({
  windowHeight,
  windowWidth,
  showTopMenu,
  globeSpin,
});

class GlobeMenu extends PureComponent {

  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
    this.state = {
      showGlobe: props.windowWidth > 800,
    };
  }

  componentDidMount() {
    this.globe = renderGlobe(this.container, [-100, 0]);

    // stop spin when glob is off-screen, resume when on-screen
    let height = window.innerHeight - 63;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= height && this.props.globeSpin) {
        this.globe.stopSpin();
      } else if (window.pageYOffset < height && !this.props.globeSpin) {
        this.globe.startSpin();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    // rerender globe is window size changes
    if (nextProps.windowHeight !== this.props.windowHeight
      || nextProps.windowWidth !== this.props.windowWidth) {
      d3.select('.globe').remove();
      clearInterval(this.globe.interval);
      const rotation = this.globe.projection.rotate();
      this.globe = renderGlobe(this.container, rotation);
    }
  }

  scrollDown() {
    const sweetScroll = new SweetScroll();
    const height = this.props.windowHeight - 62;
    sweetScroll.to(height, 0);
  }

  render() {
    return this.state.showGlobe && (
      <div className="page-container">
        <div
          ref={(el) => { this.container = el; }}
          className="globeContainer"
          style={{ height: (window.innerHeight - 64) }}
        />
        <i className="icon fa fa-chevron-down faa-pulse animated" onClick={this.scrollDown} style={{ right: (window.innerWidth / 2) - 22.5 }} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(GlobeMenu);
