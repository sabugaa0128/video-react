import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import * as Dom from '../utils/dom';

const propTypes = {
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
  getPercent: PropTypes.func,
  vertical: PropTypes.bool,
  children: PropTypes.node,
  player: PropTypes.object,
  label: PropTypes.string,
  valuenow: PropTypes.string,
  valuetext: PropTypes.string,
};

export default class Slider extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.stepBack = this.stepBack.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.renderChildren = this.renderChildren.bind(this);

    this.state = {
      active: false,
    };
  }

  getProgress() {
    const { getPercent } = this.props;
    if (!getPercent) {
      return 0;
    }
    let progress = getPercent();

    // Protect against no duration and other division issues
    if (typeof progress !== 'number' ||
      progress < 0 ||
      progress === Infinity) {
      progress = 0;
    }
    return progress;
  }

  handleMouseDown(event) {
    const { onMouseDown } = this.props;
    event.preventDefault();
    event.stopPropagation();

    document.addEventListener('mousemove', this.handleMouseMove, true);
    document.addEventListener('mouseup', this.handleMouseUp, true);
    document.addEventListener('touchmove', this.handleMouseMove, true);
    document.addEventListener('touchend', this.handleMouseUp, true);

    this.setState({
      active: true,
      distance: 0,
    });

    this.handleMouseMove(event);

    if (onMouseDown) {
      onMouseDown(event);
    }
  }

  handleMouseMove(event) {
    const { onMouseMove } = this.props;

    if (onMouseMove) {
      onMouseMove(event);
    }
  }

  handleMouseUp(event) {
    const { onMouseUp } = this.props;

    document.removeEventListener('mousemove', this.handleMouseMove, true);
    document.removeEventListener('mouseup', this.handleMouseUp, true);
    document.removeEventListener('touchmove', this.handleMouseMove, true);
    document.removeEventListener('touchend', this.handleMouseUp, true);

    this.setState({
      active: false,
    });

    if (onMouseUp) {
      onMouseUp(event);
    }
  }

  handleFocus() {
    document.addEventListener('keydown', this.handleKeyPress, true);
  }

  handleBlur() {
    document.removeEventListener('keydown', this.handleKeyPress, true);
  }

  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  handleKeyPress(event) {
    if (event.which === 37 || event.which === 40) { // Left and Down Arrows
      event.preventDefault();
      event.stopPropagation();
      this.stepBack();
    } else if (event.which === 38 || event.which === 39) { // Up and Right Arrows
      event.preventDefault();
      event.stopPropagation();
      this.stepForward();
    }
  }

  stepForward() {
  }

  stepBack() {
  }

  calculateDistance(event) {
    const node = findDOMNode(this);
    const position = Dom.getPointerPosition(node, event);
    if (this.props.vertical) {
      return position.y;
    }
    return position.x;
  }

  renderChildren() {
    const progress = this.getProgress();
    const percentage = `${(progress * 100).toFixed(2)}%`;
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { progress, percentage })
    );
  }

  render() {
    const { vertical, label, valuenow, valuetext } = this.props;

    return (
      <div
        className={classNames(this.props.className, {
          'video-react-slider-vertical': vertical,
          'video-react-slider-horizontal': !vertical,
          'video-react-sliding': this.state.active,
        }, 'video-react-slider')}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleMouseDown}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onClick={this.handleClick}
        aria-label={label || ''}
        aria-valuenow={valuenow || ''}
        aria-valuetext={valuetext || ''}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        { this.renderChildren() }
      </div>
    );
  }
}

Slider.propTypes = propTypes;

