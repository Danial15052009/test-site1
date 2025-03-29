window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    // Tabs module

    const hideTabsContent = () => {
        tabsContent.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
        })

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show');

        tabs[i].classList.add('tabheader__item_active');
    } 

    hideTabsContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (tab == target) {
                    hideTabsContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Date module
    
    // Math.floor() -- округление в меньшую сторону

    const deadline = '2025-03-30';

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor(t / (1000 * 60) % 60),
              seconds = Math.floor(t / 1000 % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const getZero = (num) => {
        if(num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    } // Если минут/секунд/часов и т.д. осталось меньше 10, то будем к ним приписывать 0

    const setClock = (selector, deadline) => {
        const timer = document.querySelector(selector),
              days = document.querySelector("#days"),
              hours = document.querySelector("#hours"),
              minutes = document.querySelector("#minutes"),
              seconds = document.querySelector("#seconds");

        const updateClock = () => {
            const t = getTimeRemaining(deadline);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
    }

    setClock('.timer', deadline);

    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

    // pop, push, reverse, sort, length, forEach, find
})