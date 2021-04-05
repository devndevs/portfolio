import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
     <body class="font-monospace" id="page-container">
    <nav class="navbar navbar-dark navbar-expand-md fixed-top portfolio-navbar gradient" style="padding: 16.2px 0px;">
        <div class="container-fluid"><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarNav"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNav" style="padding: -14px;height: 28px;"><a class="navbar-brand visible logo" href="#">Deven Perkins</a>
                <ul class="navbar-nav ms-auto visible">
                    <li class="nav-item visible"><a class="nav-link visible" href="index.html">Home</a></li>
                    <li class="nav-item visible"><a class="nav-link visible" href="projects-grid-cards.html">Projects</a></li>
                    <li class="nav-item visible"><a class="nav-link visible" href="cv.html"><strong>About Me</strong></a></li>
                    <li class="nav-item visible"><a class="nav-link visible" href="hire-me.html">Let's Connect</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="visible page lanidng-page" style="background: #f6f4f1;">
        <section class="text-danger visible portfolio-block block-intro" data-aos="fade" data-aos-duration="1000" data-aos-delay="100" style="color: rgb(33, 37, 41);background: url(&quot;assets/img/nature/Untitled%20design.svg&quot;) center / cover no-repeat, #f6f4f1;padding: 447px 0px;height: 549px;">
            <div class="container visible">
                <div class="visible" style="width: 1066px;height: 81px;margin: 48px;padding: 74px;"></div>
            </div>
            <p class="visible" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" style="color: #423e3a;background: rgba(89,85,81,0);border-top-color: #423e3a;border-right-color: rgba(66,62,58,0);">Hi I'm Deven and this is my happy place</p><a class="btn btn-outline-primary visible" role="button" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" href="hire-me.html" style="color: #423e3a;border-color: #423e3a;background: #f6f4f1;">Let's Connect</a>
        </section>
        <section class="visible portfolio-block photography">
            <div class="container visible">
                <div class="row g-0 visible">
                    <div class="col-md-6 col-lg-4 visible item zoom-on-hover"><a class="visible" href="#"></a></div>
                    <div class="col-md-6 col-lg-4 visible item zoom-on-hover"><a class="visible" href="#"></a></div>
                    <div class="col-md-6 col-lg-4 visible item zoom-on-hover"><a class="visible" href="#"></a></div>
                </div>
            </div>
        </section>
        <section class="visible portfolio-block skills" style="padding: 114px 0px;background: #ffffff;border-color: rgba(33,37,41,0);border-top-color: rgba(33,37,41,0);border-right-color: rgba(33,37,41,0);border-left-color: rgba(33,37,41,0);">
            <div class="container visible" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                <div class="visible heading">
                    <h2 class="visible" style="color: rgb(37,52,57);">Technical Skills</h2>
                </div>
                <div class="row visible">
                    <div class="col-md-4 visible">
                        <div class="card visible special-skill-item border-0">
                            <div class="card-header visible bg-transparent border-0" style="padding: 5px 16px;"><i class="material-icons visible" data-bss-hover-animate="pulse" style="font-size: 47px;color: rgb(37,52,57);">computer</i></div>
                            <div class="card-body visible">
                                <h3 class="visible card-title" style="color: rgb(37,52,57);"><strong>Front-End</strong><br>Development<br></br></h3>
                                <h3 class="visible card-title"></h3>
                                <p class="visible card-text">HTML · CSS · Javascript [React]</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 visible">
                        <div class="card visible special-skill-item border-0">
                            <div class="card-header visible bg-transparent border-0"><i class="fa fa-cog visible" data-bss-hover-animate="pulse" style="font-size: 47px;color: rgb(37,52,57);"></i></div>
                            <div class="card-body visible">
                                <h3 class="visible card-title" style="color: rgb(37,52,57);">Back-End<br>Development</h3>
                                <h3 class="visible card-title"></h3>
                                <p class="visible card-text">Ruby · Ruby On Rails · PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 visible">
                        <div class="card visible special-skill-item border-0">
                            <div class="card-header visible bg-transparent border-0"><i class="fa fa-bullseye visible" data-bss-hover-animate="pulse" style="font-size: 47px;color: rgb(37,52,57);"></i></div>
                            <div class="card-body visible">
                                <h3 class="visible card-title" style="color: rgb(37,52,57);">Test Driven<br>Development</h3>
                                <h3 class="visible card-title"></h3>
                                <p class="visible card-text">Jest · RSpec · Enzyme</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="card-group visible" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="true" style="background: rgba(255,255,255,0);">
        <div class="card visible"><img class="card-img-top w-100 d-block visible" src="assets/img/nature/Deven%20Perkins%20(1).svg" style="height: 298px;background: #f6f4f1;border-color: #ffffff;border-right-style: solid;">
            <div class="card-body visible" style="background: #253439;text-align: center;border-right-style: solid;">
                <h4 class="visible card-title" style="color: var(--bs-light);"><strong>Wildlife Tracker</strong></h4>
                <p class="visible card-text" style="color: var(--bs-light);text-align: center;">Into the wild indeed! I was dropped into the middle of the Pacific North West and needed an app to to keep track of all of the amazing and unique wild life that I was encountering. Glad I brought my solar charger! This app was rewarding because we learned how to create RESTful APIs and test them using Postman.</p><a class="btn btn-primary visible" role="button" href="https://github.com/learn-academy-2021-alpha/wildlife-tracker-DevenPerkins" style="background: rgb(246,244,241);color: rgb(124,137,139);border-color: rgb(100,109,112);border-right-color: rgb(246,244,241);" target="_blank">Check out</a>
            </div>
        </div>
        <div class="card visible"><img class="card-img-top w-100 d-block visible" src="assets/img/nature/Untitled%20design%20(3).svg" style="height: 297px;background: #f6f4f1;border-color: rgba(33,37,41,0);border-left-style: solid;">
            <div class="card-body visible" style="background: #253439;text-align: center;border-right-style: solid;">
                <h4 class="visible card-title" style="color: var(--bs-light);"><strong>Cat Tinder</strong><br></h4>
                <p class="visible card-text" style="color: var(--bs-light);text-align: center;">It's a PLAYdating app for cats! Let's face it.. cats have strong personalities. So we made an app that is just as robust to help them find the right play date. This app was rewarding to create because it refined our skills with TDD and introduced us to the concept of React IN Rails.&nbsp;</p><a class="btn btn-primary visible" role="button" style="background: rgb(246,244,241);color: rgb(124,137,139);border-color: rgb(100,109,112);border-right-color: rgb(246,244,241);" href="https://github.com/DevenPerkins/cat-tinder-frontend-nick-deven" target="_blank">Swipe Left</a><a class="btn btn-primary visible" role="button" style="background: rgb(246,244,241);color: rgb(124,137,139);border-color: rgb(100,109,112);border-right-color: rgb(246,244,241);" href="https://github.com/DevenPerkins/cat-tinder-backend-nick-deven" target="_blank">Swipe Right</a>
            </div>
        </div>
    </div>
    <footer class="visible page-footer" style="padding: 53px 0px 20px;">
        <div class="container visible" style="background: #ffffff;width: 1140px;height: 83px;">
            <div class="visible links"><a class="visible" href="cv.html" style="border-right-color: rgb(37,52,57);">About me</a><a class="visible" href="hire-me.html" style="border-right-color: rgb(37,52,57);">Contact me</a><a class="visible" href="projects-grid-cards.html" style="border-right-color: rgb(37,52,57);">Projects</a></div>
            <div class="visible social-icons"><a class="visible" data-bss-hover-animate="pulse" href="https://www.linkedin.com/in/deven-perkins-50356b51/" style="background: rgb(37,52,57);" target="_blank"><i class="icon ion-social-linkedin visible"></i></a><a class="visible" data-bss-hover-animate="pulse" href="https://github.com/DevenPerkins" style="background: rgb(37,52,57);" target="_blank"><i class="icon ion-social-github visible"></i></a><a class="visible" data-bss-hover-animate="pulse" href="https://www.instagram.com/dperkheezy/" style="background: rgb(37,52,57);" target="_blank"><i class="icon ion-social-instagram-outline visible"></i></a></div>
        </div>
    </footer>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/smart-forms.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
    <script src="assets/js/theme.js"></script>
</body>
    </div>
    </>
  );
}

export default App;
