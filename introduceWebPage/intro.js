function intro() {
  //setting
  const introBtns = document.querySelectorAll('.introBtn');
  const introContent = document.querySelectorAll('.introContent');

  //intro페이지 클릭 이벤트
  introPageClickBtn = () => {
    introBtns.forEach((introBtn, i) => {
      introBtn.addEventListener('click',()=>{
        introBtns.forEach((nonClickBtn) => {
          nonClickBtn.style.color = `#5D5D5D`;
          nonClickBtn.style.fontWeight = `400`;
        })
        introBtn.style.color = `#000`;
        introBtn.style.fontWeight = `bold`;

        introContent.forEach((content) => {
          content.style.display = `none`;
        })
        introContent[i].style.display = `flex` ;
      })
    })
  }
  introPageClickBtn()

  //About me페이지 클릭 이벤트
  aboutMePageClickBtn = () => {
    //btn세팅
    const abmBtns = document.querySelectorAll('.abmBtn');
    //content세팅
    const contents = document.querySelectorAll('.rightBoxContent');

    abmBtns.forEach((btns, i) => {
      btns.addEventListener('click', () => {
        abmBtns.forEach(bts => {
          bts.style.fontWeight = '400';
        });
        btns.style.fontWeight = 'bold';

        contents.forEach(cons => {
          cons.style.display = 'none';
        })
        contents[i].style.display = 'flex';
      })
    })
  }
  aboutMePageClickBtn()

  //Playlist 클릭 이벤트
  playList = () => {
    const playObj = {
      neverNot: 'never_not',
      stay: 'stay',
      iWishItWasMe: 'i_wish_it_was_me',
      sober: 'sober',
      run: 'run',
      asItWas: 'as_it_was',
      high: 'high',
      finale: 'finale'
    }

    const list = document.querySelectorAll('.plyList > li');
    list.forEach((clickList,i) => {
      clickList.addEventListener('click', () => {
        list.forEach(listAll=>{listAll.style.backgroundColor = `rgba(255,255,255,0)`});
        document.getElementById('playControls').src = `./playList/${playObj[clickList.className]}.m4a`;
        document.querySelector('.albumCover > img').src = `./introWebPhoto/앨범커버/${playObj[clickList.className]}.jpg`
        document.getElementById('plyContent').style.backgroundImage = `url('./introWebPhoto/playlist_img/playlist_bg/${playObj[clickList.className]}_bg.png')`
        clickList.style.backgroundColor = `rgba(255,255,255,0.7)`;
        clickList.style.borderRadius = `10px`;
      })
    });

  }
  playList()

  // 배경색 그라데이션 스크롤
  scrollBgChange = () =>{
    gsap.registerPlugin(ScrollTrigger);
    let bgChange = gsap.timeline({
      scrollTrigger: {
        start: 0,
        end: 'max',
        scrub: true,
      }
    });
    bgChange.to('.bgSection', {
      "--bg-color": "#fff"
    })
    bgChange.to('.bgSection', {
      "--bg-color": "#c2d8e4"
    })
    .to('.bgSection', {
      "--bg-color": "#F8F8F8"
    })
  }
  scrollBgChange()
}

intro()