window.document.addEventListener('DOMContentLoaded', () => {
    'use strick';

    // KEYBOARD<<<<<<<<<<<<
    {
        let keyboard = document.querySelector('.keyboard'),
            searchBtn = document.querySelector('.search-form__keyboard'),
            close = document.getElementById('close-keyboard'),
            formIn = document.querySelector('.search-form__input');

        const toggleKeyboard = () => keyboard.style.top = keyboard.style.top ? "" : '50%';
        searchBtn.addEventListener('click', toggleKeyboard);
        close.addEventListener('click', toggleKeyboard);

        const typing = event => {
            if (event.target !== switchLang && event.target.tagName.toUpperCase() === "BUTTON") {
                let text = event.target.textContent.trim();
                if (event.target.id == 'keyboard-backspace') {
                    formIn.value = formIn.value.slice(0, formIn.value.length - 1);
                } else if (!event.target.textContent) {
                    formIn.value += " ";

                } else {
                    formIn.value += text;
                }
            }

        };
        keyboard.addEventListener('click', typing);

        let switchLang = keyboard.querySelectorAll('tbody')[6].querySelector('td').childNodes[1];
        switchLang.style.visibility = "visible";
        switchLang.textContent = 'En';
        switchLang.addEventListener('click', function () {
            let button = [...keyboard.querySelectorAll('button')].filter((elem) => {
                if (!elem.style.visibility && elem.textContent) {
                    return elem;
                }
            });
            if (this.textContent == 'En') {
                for (let i = 0; i < button.length; i++) {
                    button[i].textContent = langEn[i];
                }
                this.textContent = 'Ru';

            } else {
                for (let i = 0; i < button.length; i++) {
                    button[i].textContent = langRu[i];
                }
                this.textContent = 'En';
            }
        });
        const langRu = [
            'ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
            'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
            'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
            'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'

        ];
        const langEn = [
            '`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', '⬅',
            'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"',
            'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
        ];
    }
    // sideBar<<<<<<<<<<<<<<
    {
        let menuBtn = document.querySelector('.spinner'),
            siteBar = document.querySelector('.sidebarMenu'),
            list = siteBar.querySelectorAll('ul li');

        menuBtn.addEventListener('click', function () {
            siteBar.classList.toggle('rollUp');
            this.classList.toggle('active');
        });
        siteBar.addEventListener('click', function (event) {
            let t = event.target;
            t = t.closest('a');
            if (t) {
                const parentE = t.parentNode;
                list.forEach(function (item) {
                    item.classList.remove('active');
                });
                parentE.classList.add('active');
            }

        });
    }
    // Modal window<<<<<<<<<<<<<<
        const forFunYotuber=()=>{const youTubeItems = document.querySelectorAll('[data-youtuber]'),
            youTuberModal = document.querySelector('.youTuberModal'),
            closeModal = document.querySelector('#youtuberClose'),
            containerFrame = document.querySelector('#youtuberContainer'),
            qw = [3840, 2560, 1920, 1280, 854, 640, 426, 256],
            qh = [2160, 1440, 1080, 720, 480, 360, 240, 144];


        (closeModal && youTuberModal).addEventListener('click', () => {
            youTuberModal.style.display = "none";
            containerFrame.innerHTML = '';
        });
        youTubeItems.forEach(function (elem) {
            elem.addEventListener('click', function () {
                youTuberModal.style.display = 'flex';
                const inVideo = this.dataset.youtuber,
                    windowFrame = document.createElement('iframe');
                windowFrame.src = `https://youtube.com/embed/${inVideo}`;
                containerFrame.insertAdjacentElement('beforeend', windowFrame);
                window.addEventListener('resize', sizeVideo);
                sizeVideo();

            });

        });
        const sizeVideo = () => {
            const ww = document.documentElement.clientWidth,
                wh = document.documentElement.clientHeight;
            for (let i = 0; i < qw.length; i++) {
                if (ww > qw[i]) {
                    containerFrame.style.cssText = `
                        width: ${qw[i]}px;
                        height: ${qh[i]}px;
                        top: ${(wh-qh[i])/2}px;
                        left: ${(ww-qw[i])/2}px;
                    `;
                    containerFrame.querySelector('iframe').style.cssText = `
                        width: ${qw[i]}px;
                        height: ${qh[i]}px;
                        border: transparent;
                    `;
                    break;
                }
            }
        };
        };

        {document.body.insertAdjacentHTML('beforeend',
            `<div class="youTuberModal">
        <div id="youtuberClose">&#215;</div>
        <div id="youtuberContainer"></div>
        </div>`);
        forFunYotuber();
        }
    
    
    // youTube API
    {
        const APIkey = 'AIzaSyDROQK__U05j5GugwgJpEaT_kBabnE9oeM',
            clienId = '771444457038-lf0a7tfcul4k60fl0pbarsfbhg3qmfvr.apps.googleusercontent.com';

        // autorization
        {
            const btnAuth = document.getElementById('authorize'),
                wrapAuth = document.querySelector('.auth_wrap'),
                blockAuth = document.querySelector('.auth'),
                gapi =window.gapi;
            const errorAuth =err=>{
                console.error(err);
            };

                btnAuth.addEventListener('click',()=>authenticate().then(loadClient));
                gapi.load("client:auth2",()=>gapi.auth2.init({client_id: clienId}));

            const authenticate = ()=> { 
                return gapi.auth2.getAuthInstance()
                .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
                .then(()=>console.log("Sign-in successful"))
                .catch(errorAuth);
            };
            const loadClient=()=> {
                gapi.client.setApiKey(APIkey);
                return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
                    .then(()=>console.log("GAPI client loaded for API"))
                    .then(()=>blockAuth.style.display='none')
                    .catch(errorAuth);
            };
        }
        // request
        {
            const   gapi = window.gapi,
                    gloTube = document.querySelector('.logo-academy'),
                    trends =document.getElementById('yt_trend'),
                    subscript = document.getElementById('yt_subscriptions'),
                    liked = document.getElementById('yt_like'),
                    mainHome = document.getElementById('yt_main');
                    mainHome.addEventListener('click',event=>event.preventDefault());

            const request = options => gapi.client.youtube[options.method].list(options)
            .then(response => response.result.items)
            .then(render)
            .then(forFunYotuber)
            .catch(err=> console.log(err));

            const render = data=>{
                console.log(data);
                const ytWrapper=document.querySelector('#yt-wrapper');
                ytWrapper.textContent='';
                data.forEach((item)=>{
                    try
                        {const {
                            id,
                            id:{videoId},
                            snippet:{
                                    channelTitle,
                                    resourceId:{
                                        videoId:likedVideoId
                                    }={},
                                    title,
                                    thumbnails:{high:{url}={}}}
                                }=item;

                        ytWrapper.innerHTML += `
                        <div class="yt" data-youtuber="${likedVideoId||videoId || id}">
                            <div class="yt-thumbnail" style="--aspect-ratio:16/9;">
                            <img src="${url}" class="yt-thumbnail__img">
                            </div>
                            <div class="yt-title">${title}</div>
                            <div class="yt-channel">${channelTitle}</div>
                        </div>`;
                    } catch(err){
                        console.error(err);
                    }
                });
            };

            gloTube.addEventListener('click',()=>{
                request({
                    method: 'search',
                    part: 'snippet',
                    channelId:'UCVswRUcKC-M35RzgPRv8qUg',
                    order: 'date',
                    maxResults: 6,
                });
                
            });
            trends.addEventListener('click',()=>{
                request({
                    method: 'videos',
                    part: 'snippet',
                    chart: 'mostPopular',
                    regionCode:'RU',
                    channelId:'UCVswRUcKC-M35RzgPRv8qUg',
                    order: 'date',
                    maxResults: 6,
                });
            });
            liked.addEventListener('click',()=>{
                request({
                    method: 'playlistItems',
                    part: 'snippet',
                    chart: 'mostPopular',
                    playlistId:'LLvJZAnHQ_o24pKhQa2t0lXg',
                    maxResults: 6,
                });
            });
        }
    }

});