import React, { Suspense } from 'react';
import api from './api/suspenseFakeApi';
import data from './static/data';
import 'bulma/css/bulma.css';

export default class ImagesCollage extends React.Component {
    constructor(){
        super();
        this.state = {
            colCount:2
        }
        this.mediaQueries = ['(min-width:1500px)', '(min-width:1000px)', '(min-width:700px)'];
        this.colCountArr = [5,4,3];
    }
    componentDidMount() {
        this.changeColCount(this.mediaQueries, this.colCountArr);
        const matchedMediaQueries = this.mediaQueries.map(q => window.matchMedia(q));
        matchedMediaQueries.forEach(mq => {
            mq.addEventListener('change', this.changeColCount);
        })
    }
    changeColCount = () => {
        const matchedMediaQueries = this.mediaQueries.map(q => window.matchMedia(q));
        const matchedIndex = matchedMediaQueries.findIndex(mq => mq.matches);
        this.setState({
            colCount: this.colCountArr[matchedIndex]
        });
    }
    render(){
        const colCount = this.state.colCount;
        console.log('count is', colCount);
        const colArr = new Array(colCount);
        colArr.fill(0);
        const colValArr = new Array(colCount).fill().map(() => []);
        data.forEach(item => {
            const minHeightInd = colArr.indexOf(Math.min(...colArr));
            colArr[minHeightInd]+= item.height;
            colValArr[minHeightInd].push(item);
        });
        return (
            <div className="columns is-mobile">
            {colValArr.map(item => <div className='column'>
        { item.map(subItem => <img src={subItem.image} alt='abc' /> )}
            </div>
            )}
        </div>
        );
    }
}