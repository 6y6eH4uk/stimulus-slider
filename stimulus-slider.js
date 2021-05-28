class SliderController extends Stimulus.Controller {
		static targets = ['slider']
    
    static values = {
        slidesToShow: Number,
        slidesToScroll: Number
    }

    initialize() {
        $(this.sliderTarget).slick({
            slidesToShow: this.slidesToShowValue,
            slidesToScroll: this.slidesToScrollValue,
            arrows: false
        })
    }

    prev() {
        $(this.sliderTarget).slick('slickPrev')
    }

    next() {
        $(this.sliderTarget).slick('slickNext')
    }
    
    goTo({ currentTarget }) {
    		$(this.sliderTarget).slick('slickGoTo', currentTarget.dataset.slideIndex)
    }
}

let application;

if (window.stimulusApplication) {
	application	= window.stimulusApplication
} else {
	application = Stimulus.Application.start()
}

application.register('slider', SliderController)

window.stimulusApplication = application
