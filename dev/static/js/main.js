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
})