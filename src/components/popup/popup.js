import helpers from "../../scripts/helpers/helpers";

const init = () => {
    const gallery = document.querySelectorAll('.js-popup');

    if (!gallery.length) {
        return;
    }

    const $popup = document.querySelectorAll('.popup')
    const $popupContent = document.querySelector('.popup-content')
    const $closeButton = document.querySelectorAll('.popup-close')
    const $bg = document.querySelectorAll('.popup-bg')
    const $open = document.querySelectorAll('.js-popup');

    const open = (event) => {
        if (helpers.isAnimating()) {
            return;
        }

        helpers.isAnimating(true);

        let popup = document.querySelector(`.popup[data-item="1"]`);

        let content = popup.querySelector('.popup-content');

        function createContent() {
            let $info = event.target.closest('.js-popup');

            if (!$info) {
                return;
            }

            let $title = $info.querySelector('.grid-text');

            let title = popup.querySelector('.popup-text');

            if($title) {
                title.textContent = $title.textContent;
            }

            document.querySelector('.popup-images').innerHTML = '';

            let image = $info.querySelector('img');

            document.querySelector('.popup-images').innerHTML += `<img src='${image.src}' width='${image.clientWidth}' height='${image.clientHeight < 400 ? image.clientHeight * 2: image.clientHeight}' alt="">`;
        }

        if (popup.classList.contains('is-hidden')) {
            helpers.lockScroll(true, document.querySelector('main'), 'main')
            gsap.timeline({
                onComplete: () => {
                    helpers.isAnimating(false);
                }
            }).from(popup, 0.5, {
                opacity: 0, onStart: () => {
                    popup.classList.remove('is-hidden');
                    popup.classList.add('is-active');

                    createContent();
                }
            }).from(content, 0.5, {
                opacity: 0, y: 50, onStart: () => {
                    content.classList.remove('is-hidden');
                }
            })
        }
    }

    document.addEventListener("click", function (event) {
        const target = event.target.closest('.js-popup');

        // let name = target.getAttribute('data-project');

        if (!target) {
            return;
        }

        open(event);
    });

    const close = () => {
        if (helpers.isAnimating()) {
            return;
        }

        let popup = document.querySelector(`.popup.is-active`);
        let content = popup.querySelector('.popup-content');

        gsap.timeline().to(content, 0.5, {
            opacity: 0, y: 50,
            clearProps: true,
            onComplete: () => {
                content.classList.add('is-hidden');
            }
        }).to(popup, 0.5, {
            opacity: 0, clearProps: true,
            onComplete: () => {
                popup.classList.add('is-hidden');
                popup.classList.remove('is-active');
                helpers.lockScroll(false, document.querySelector('main'), 'main')
                gsap.killTweensOf([popup, content])
            }
        })
    }

    // $open.forEach((el) => {
    //     el.addEventListener('click', () => {
    //         open();
    //     })
    // });

    $closeButton.forEach((item, index) => {
        item.addEventListener('click', () => {
            close();
        })
    })

    $bg.forEach((item, index) => {
        item.addEventListener('click', () => {
            close();
        })
    })
};

export default {
    init,
}
