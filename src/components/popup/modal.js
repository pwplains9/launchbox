import helpers from "../../scripts/helpers/helpers";

const init = () => {
    const modal = document.querySelectorAll('.js-modal');

    if (!modal.length) {
        return;
    }

    const $popup = document.querySelectorAll('.modal')
    const $popupContent = document.querySelector('.modal-content')
    const $closeButton = document.querySelectorAll('.modal-close')
    const $bg = document.querySelectorAll('.modal-bg')
    const $open = document.querySelectorAll('.js-modal');

    const open = (event) => {
        if (helpers.isAnimating()) {
            return;
        }

        helpers.isAnimating(true);

        let popup = document.querySelector(`.modal[data-modal="${event}"]`);

        let content = popup.querySelector('.modal-content');

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
                }
            }).from(content, 0.5, {
                opacity: 0, y: 50, onStart: () => {
                    content.classList.remove('is-hidden');
                }
            })
        }
    }

    const validModal = () => {
        let gameTitle = document.querySelector('[data-input="game-title"]');
        let gamePlatform = document.querySelector('[data-input="game-platform"]').nextSibling;

        if(gameTitle.querySelector('input').value.length >= 1) {
            document.querySelector('[data-input-info="game-title"]').textContent = gameTitle.querySelector('input').value;
            close();

            setTimeout(() => {
                open('step-2');
            }, 1000)
        }

        if(gamePlatform.querySelector('.selected').textContent !== 'Select') {
            document.querySelector('[data-input-info="game-platform"]').textContent = gamePlatform.querySelector('.selected').textContent;
        } else {
            document.querySelector('[data-input-info="game-platform"]').textContent = 'Dont select';
        }
    }

    document.addEventListener("click", function (event) {
        const target = event.target.closest('.js-modal');

        if(!target) {
            return;
        }

        let name = target.getAttribute('data-modal');

        if (!name) {
            return;
        }

        if(name === 'step-2') {
            validModal();

            return;
        }

        open(name);
    });

    function close(){
        if (helpers.isAnimating()) {
            return;
        }

        let popup = document.querySelector(`.modal.is-active`);
        let content = popup.querySelector('.modal-content');

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
