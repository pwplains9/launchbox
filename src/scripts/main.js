import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';

import '@styles/vendor.scss';
import '@styles/main.scss';

import actualYear from '@scripts/modules/actual-year';
import lazyLoad from '@scripts/modules/lazy-load';
import uaParser from '@scripts/modules/ua-parser';
import vhFix from '@scripts/modules/vh-fix';
import gsap from 'gsap';
import {isDevices} from '@scripts/helpers/index';
import popup from "../components/popup/popup";
import NiceSelect from "nice-select2/dist/js/nice-select2";
import modal from "../components/popup/modal";


let els = document.querySelectorAll(".custom-select");

els.forEach(function(select){
    // NiceSelect.bind(select);

    new NiceSelect(select);
});

window._debounce = debounce;
window._throttle = throttle;
window.gsap = gsap;
let resizeWidth = null;

const resize = () => {
    if (isDevices() && resizeWidth && resizeWidth === innerWidth) {
        return;
    }

    document.body.classList.add('is-resizing');

    uaParser.resize();
    // resize logic

    document.body.classList.remove('is-resizing');

    resizeWidth = innerWidth;
};

const tabs = () => {
    if (!document.querySelectorAll('.js-tabs').length) {
        return false;
    }

    document.querySelectorAll('.tabs').forEach((item, index) => {
        let tabNav = item.querySelectorAll('.js-tab'),
            tabName;

        tabNav.forEach((item) => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach((item) => {
                item.classList.remove('is-active');
            });

            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-target');
            selectTabContent(tabName);
        }

        function selectTabContent(tab) {
            let activeTab = item.querySelector('.js-tabs-container.is-active');
            let nextTab = item.querySelector(`.js-tabs-container[id='${tab}']`);

            console.log(activeTab, nextTab)
            gsap.timeline().to(activeTab, 0.5, {
                autoAlpha: 0,
                clearProps: true,
            })
                .call(() => {
                    activeTab.classList.add('is-hidden');
                    activeTab.classList.remove('is-active');
                    nextTab.classList.remove('is-hidden');
                    nextTab.classList.add('is-active');
                }).from(nextTab, 0.5, {
                autoAlpha: 0,
                clearProps: true,
            })
        }
    })
}

const options = () => {
    if (!document.querySelectorAll('.options').length) {
        return false;
    }

    const nav = document.querySelectorAll('.options-nav');

    nav.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            document.querySelector('.options-nav.is-active').classList.remove('is-active');
            event.currentTarget.classList.add('is-active');
            let data = event.currentTarget.getAttribute('data-select');

            document.querySelectorAll('#tabs-containers').forEach((item) => {
                item.setAttribute('data-view', data)
            })
        });
    })
}

const toggle = (element) => {
    if (!document.querySelectorAll(`.${element}`).length) {
        return false;
    }

    const cardButton = document.querySelectorAll(`.${element}`);

    cardButton.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            if (!event.currentTarget.classList.contains('is-active')) {
                event.currentTarget.classList.add('is-active');
            } else {
                event.currentTarget.classList.remove('is-active');
            }
        })
    })
}


const init = () => {
    uaParser.init();
    actualYear.init();
    vhFix.init();
    lazyLoad.init();


    tabs();
    popup.init();
    modal.init();

    options();
    toggle('card-add');
    resizeWidth = innerWidth;


    window.addEventListener('resize', _debounce(resize, 500));
};

init();
