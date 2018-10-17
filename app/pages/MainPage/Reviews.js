import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import reviews from '../../../data/reviews';
import ReviewSlide from './ReviewSlide.js';


class Reviews extends Component {
    constructor(props) {
        super(props);    
        this.goNext = this.goNext.bind(this)
        this.goPrev = this.goPrev.bind(this)
        this.swiper = null,
        this.state = {
            activeIndex: null,
            imagesLoaded: null,
            isBeginning: true,
            isEnd: false
        }
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext()
    }
    
    goPrev() {
        if (this.swiper) this.swiper.slidePrev()
    }

    componentDidMount(){
        this.setState({activeIndex: this.swiper.activeIndex})
        this.setState({imagesLoaded: this.swiper.imagesLoaded})
        this.setState({isBeginning: this.swiper.isBeginning})
        this.setState({isEnd: this.swiper.isEnd})
    }
    
   
    render() { 
        const params = {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
            speed: 600,
            // pagination: {
            //     el: '.swiper-pagination',
            //     type: 'fraction',
            // },    
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
            breakpoints: {
                900: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                }
            },
            on: {
                init: (swiper)=>{this.swiper = swiper},
                slideChangeTransitionStart: () => this.swiper && this.setState({ activeIndex: this.swiper.activeIndex, isBeginning: this.swiper.isBeginning, isEnd: this.swiper.isEnd  }),
              },
          }   
          
        return (
            
            <section className="section section3">
                <h2>Отзывы от реальных жильцов ЖК</h2>
                <div className="reviews-list">
                    <Swiper {...params} ref={node => {
                        if(node) this.swiper = node.swiper }
                        }>
                        {
                            reviews.map((el, i) => (
                                <ReviewSlide                                     
                                    key={el.id} 
                                    {...el}
                                />)
                            )
                        }     
                    </Swiper>

                <div className="swiper-pagination my-pagination">
                    <span>{this.swiper && Math.ceil((Number(this.state.activeIndex)+3)/3)}</span> / 
                    <span>{this.swiper && Math.ceil(Number(this.state.imagesLoaded)/3)}</span>
                </div>   

                <div className={`swiper-button-prev ${this.state.isBeginning ? 'swiper-button-disabled' : ''}`} onClick={this.goPrev}></div> 
                <div className={`swiper-button-next ${this.state.isEnd ? 'swiper-button-disabled' : ''}`} onClick={this.goNext}></div>   
           
            </div>
          </section> 
        )
    }
}

export default Reviews