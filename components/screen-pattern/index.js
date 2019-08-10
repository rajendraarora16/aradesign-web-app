import React, { Component } from 'react'
import { Box, Dot } from './structs'
import './style.less'

class Pattern extends Component {
    static defaultProps = {
        animate: false,
        mouseEffect: true
    }

    constructor(props) {
        super(props);
        this.box = new Box();
        this.dotsArray = [];
        this.state = {
            width: 0, height: 0
        }
    }

    componentDidMount() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        }, () => {
            const domCanvas = this.refs.canvas;
            this.ctx = domCanvas.getContext('2d');    
            const { width, height } = this.state;

            const rows = Math.round(height/25);
            const columns = Math.round(width/25);

            const wStep = width/columns;
            const hStep = height/rows;

            for (let i = 0; i < width; i+=wStep) {
                for (let j = 0; j < height; j+=hStep) {
                    this.dotsArray.push(new Dot(i, j, this.box, this.props.animate));
                }
            }

            if (this.props.animate) {
                this.animateDropDots();
            } else {
                this.draw();
            }

            if (this.props.mouseEffect) {
                document.body.addEventListener("mousemove", (evt) => {
                    this.box.move(evt.clientX, evt.clientY);
                    this.draw(this.ctx)
                });
            }
        })
    }

    draw() {
        const { width, height } = this.state;

        this.ctx.clearRect(0, 0, width, height)
    
        for (let i = 0; i < this.dotsArray.length; i++) {
            const dot = this.dotsArray[i];
            dot.draw(this.ctx);
        }
    }

    animateDropDots() {
        const getProgress = ({ elapsed, total }) => Math.min(elapsed / total, 1)
    
        const easeOut = progress => {
            const newProgress = progress - 1
    
            return newProgress ** 5 + 1
        }
    
        const time = {
            start: performance.now(),
            total: 2000,
        }
    
        const step = now => {
            time.elapsed = now - time.start
            const progress = getProgress(time)
            const easing = easeOut(progress)
            const currVal = easing * 1
            
            for (let i = 0; i < this.dotsArray.length; i++) {
                this.dotsArray[i].animate(currVal);
            }
            this.draw()
            
            if (progress < 1) requestAnimationFrame(step)
        }
    
        requestAnimationFrame(step)
    }
    
    
    render() {
        const { width, height } = this.state;

        return (
            <canvas
                width={width}
                height={height}
                className="screen-pattern" 
                ref="canvas" />
        );
    }
}

export default Pattern