$(function () {
    const header = () => {
        const menu = $('.header__bottom')
        const body = $('body')
        const btn = $('.hamburger')
        const headerSearch = $('.header__search')
        const searchBtn = $('.header__search-btn')
        const searchInput = $('.header__search-input')
        btn.on('click', function () {
            $(this).toggleClass('is-active')
            body.toggleClass('hidden')
            menu.slideToggle()
            headerSearch.toggleClass('header__search--close')
            searchInput.hide()
        })

        function responsiveSearch() {
            const w = $(window).width()
            if (w <= 650) {
                searchInput.removeAttr('style')
                searchBtn.addClass('js-open')
            } else {
                searchBtn.removeClass('js-open')
            }
        }

        responsiveSearch()
        searchBtn.on('click', function (e) {
            if (searchBtn.hasClass('js-open')) {
                e.preventDefault()
                searchInput.slideToggle()
            }

        })


        function responsiveMenu() {
            const w = $(window).width()
            if (w >= 650) {
                btn.removeClass('open')
                menu.removeAttr('style')
                body.removeClass('hidden')
                headerSearch.removeClass('header__search--close')
            }
        }

        responsiveMenu()
        $(window).resize(function (e) {
            responsiveMenu()
            responsiveSearch()
        });
    }
    header()
    const lawyerSlider = () => {
        $('.lawyer__slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<button class="arrow arrow--left"><svg class="icon icon-arrow icon-arrow--s-small icon-arrow--color-orange"><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-left"></use></svg></button>',
            prevArrow: '<button class="arrow arrow--right"><svg class="icon icon-arrow icon-arrow--s-small icon-arrow--color-orange"><use xlink:href="static/images/sprite/symbol/sprite.svg#arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1121,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 901,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        rows: 2,
                        appendArrows: '.lawyer__arrows--mobile'
                    }
                }
            ]
        })
    }
    lawyerSlider()
})