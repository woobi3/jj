<!DOCTYPE html>
<html>
    <html lang="en">
        <head >
            <title style="color: brown">About Nerdpaw</title>
            <meta name="author" content="Will">
            <meta charset="utf-8">
            <link rel="stylesheet" href="site.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
            <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        </head>
        <body>
            <aside class="sidebar">
                <div class="sidebar_inner">
                    <header class="sidebar_header">
                        <button type="button" class="sidebar_burger" onclick="toggleSidebar()">
                          <i class="fa-solid fa-bars burger-icon"></i>
                        </button>
                        <span class="nerdpaw">NERDPAW</span>
                        <img src="PAW.svg" class="sidebar_logo">
                    </header>
                    <nav class="sidebar_nav">
                        <a href="/">
                            <button type="button">
                                <i class="fa-solid fa-house"></i>
                                <span style="animation-delay: .5s">Home</span>
                            </button>
                        </a>
                        <a href="/photography">
                            <button type="button">
                                <i style=color:#353795 class="fa-solid fa-camera"></i>
                                <span style="animation-delay: .4s">Photography</span>
                            </button>
                        </a>
                        <a href="/it">
                            <button type="button">
                            <i style=color:#f6eb13 class="fa-solid fa-computer"></i>
                                <span style="animation-delay: .3s">IT Services</span>
                            </button>
                        </a>
                        <a href="/about">
                            <button type="button">
                                <i style=color:#009966 class="fa-solid fa-user"></i>
                                <span style="animation-delay: .2s">About</span>
                            </button>
                        </a>
                    </nav>
                    <footer class="sidebar_footer">
                        
                    </footer>
                </div>
            </aside>
            
            <div class="copy">
                <p style="text-align: center;">Welcome To <a href="/about" target="_blank"> About</a></p>
                <img class="paragraphmark" src="PAW.svg">
                <p>Hi my name is Will Gee, I am from Rivett in Canberra.   I have a keen interest in anything IT and amatuer phtography, I am mostly self-taught in both of these fields but I did have some help along the way from friends and experts.  Nerdpaw as a business is a professional alias which enables me to help others and provide services to events and customers.</p>
            </div>
            
            <script src="/src/script.js"></script>
        </body>
    </html>
    
</html>