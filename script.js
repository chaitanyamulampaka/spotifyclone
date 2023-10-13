function boxloop(a, b, boxframe) {
    for (let i = a; i <= b; i++) {
        let box = document.createElement('div');
        box.className = `box${i} box`;
        boxframe.appendChild(box);
    }
}
function gridloop(a, b, gridframe) {
    for (let i = a; i <= b; i++) {
        let grid = document.createElement('div');
        grid.className = `grid${i} grid`;
        gridframe.appendChild(grid);
        let greenpause= document.createElement('div');
        greenpause.className='greenpause';
        grid.appendChild(greenpause);
        let greenplaybut = document.createElement('div');
        greenpause.appendChild(greenplaybut);
        greenplaybut.className='greenplaybut';
        greenplaybut.innerHTML='<i class="fa-solid fa-play Arey"></i>';
    
}
function goBack() {
    window.history.back();
}

}
function picloop(){
    let i=1;
    let linklist=["https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe","https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg","https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5","https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112","https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg","https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg","https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg","https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg","https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg","https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg","https://t.scdn.co/images/96b5132876eb4e818723555ce365cd87.jpeg","https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg","https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg","https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af","https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png"] 
    
    let titlelist=['Made for you','Charts','New releases','Discover','Live events','BollyWood','Punjabi','Tamil','Telugu','Indie','Gaming','RADAR','EQUAL','Pop','chaitanya']
    for (let i = 1; i < linklist.length; i++) {

        const element1 = linklist[i];
        const element2 = titlelist[i];        
        console.log(element2)
        let picdiv=document.createElement('div');
        picdiv.className=`picdiv${i}`;
        picdiv.innerHTML=`<img src='${element1}'></img>`;
        let box1=document.querySelector(`.box${i}`);
        box1.innerText=element2;
        box1.appendChild(picdiv) ;
        var computedStyle = getComputedStyle(box1);
        var backgroundColor = computedStyle.backgroundColor;
        picdiv.style.backgroundColor = backgroundColor;

        console.log(backgroundColor)
        

    }


}

function addmainpanel() {
    const contentDiv = document.getElementById('main-panel');
    let searchbar = document.createElement("div");
    searchbar.className = 'search-bar';

    let leftclicker = document.createElement("div");
    let rightclicker = document.createElement("div");
    let placeholder = document.createElement("div");
    let signup = document.createElement("div");
    let login = document.createElement("button");
    let browse=document.createElement('div');

    leftclicker.className = 'left-clicker click';
    rightclicker.className = "right-clicker click";
    placeholder.className = "place-holder";
    signup.className = "signup bri trans";
    login.className = "login trans";
    browse.className='browse';
    signup.innerHTML='signup';
    login.innerText='Log in' ;
    browse.innerText='Browse all' ;
    
    // Append child elements to the searchbar
    searchbar.appendChild(leftclicker);
    searchbar.appendChild(rightclicker);
    searchbar.appendChild(placeholder);
    searchbar.appendChild(signup);
    searchbar.appendChild(login);
    contentDiv.appendChild(browse);
    
    // Append the searchbar to the main panel
    document.getElementById("main-panel").appendChild(searchbar);
    leftclicker.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    rightclicker.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    let inputElement = document.createElement('input');
    inputElement.className = 'pholder';
    inputElement.setAttribute('placeholder', '\uf002 What do you want to listen to?');
    
     // Unicode for the font-awesome icon
    


    placeholder.appendChild(inputElement);
    let boxframe1=document.createElement('div');
    
    let boxframe2=document.createElement('div');
    let boxframe3=document.createElement('div');
    
    boxframe1.className='box-line';
    boxframe2.className='box-line';
    boxframe3.className='box-line';
   
    contentDiv.appendChild(boxframe1);
    contentDiv.appendChild(boxframe2);
    contentDiv.appendChild(boxframe3);
   
    boxloop(1,5,boxframe1)
    boxloop(6,10,boxframe2)
    boxloop(11,15,boxframe3)
    
    picloop()
    login.addEventListener("click", function() {
        loadContent('loginpage');
      });
    
     
        
        
        
    

}
function addhomepanel(){
    const contentDiv = document.getElementById('main-panel');
    let searchbar = document.createElement("div");
    searchbar.className = 'search-bar';
    let leftclicker = document.createElement("div");
    let rightclicker = document.createElement("div");
    let signup = document.createElement("div");
    let login = document.createElement("button");
    let browse=document.createElement('div');
    leftclicker.className = 'left-clicker click';
    rightclicker.className = "right-clicker click";
    browse.className ='browse';
    signup.className = "signup bri trans";
    login.className = "login trans";
    
    signup.innerHTML='signup';
    login.innerText='Log in' ;
    browse.innerText='Spotify Playlists' ;
    searchbar.appendChild(leftclicker);
    searchbar.appendChild(rightclicker);
    searchbar.appendChild(signup);
    searchbar.appendChild(login);
    contentDiv.appendChild(searchbar);
    contentDiv.appendChild(browse);
    leftclicker.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    rightclicker.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    let gridframe1=document.createElement('div');
    let gridframe2=document.createElement('div');
    gridframe1.className='grid-line';
    gridframe2.className='grid-line';
   
   
    contentDiv.appendChild(gridframe1);
    contentDiv.appendChild(gridframe2);
  
   
    gridloop(1,5,gridframe1);
    gridloop(6,10,gridframe2);
    login.addEventListener("click", function() {
        loadContent('loginpage');
      });
    
}
function loginpage(){
    let wholepage = document.createElement('div');
    document.body.appendChild(wholepage);
    wholepage.innerText='hello';
    
    let loginspotifyiconcontainer=document.createElement('div');
    loginspotifyiconcontainer.className='loginspotifyiconcontainer';
    wholepage.appendChild(loginspotifyiconcontainer);
    
    let loginspotifyicon=document.createElement('div');
    loginspotifyicon.className='loginspotifyicon';
    loginspotifyiconcontainer.appendChild(loginspotifyicon);
    loginspotifyicon.innerHTML='<i class="fa-brands fa-spotify b"></i>';
    
    let loginspotifytext=document.createElement('div');
    loginspotifytext.className='loginspotifytext';
    loginspotifyiconcontainer.appendChild(loginspotifytext);
    loginspotifytext.innerText='Spotify';
    
    let remain=document.createElement('div');
    remain.className='remain';
    wholepage.appendChild(remain);
    
    let remainaccounts=document.createElement('div');
    remainaccounts.className='remainaccounts';
    remain.appendChild(remainaccounts);
    
    let remaintext=document.createElement('div');
    remaintext.className='remaintext';
    remainaccounts.appendChild(remaintext);
    remaintext.innerText='Log in to Spotify';
    
    let googlelogin=document.createElement('button');
    googlelogin.className='googlelogin';
    remainaccounts.appendChild(googlelogin);

    let googlepic=document.createElement('div');
    googlepic.className='googlepic'
    googlelogin.appendChild(googlepic)
    
    let googlelogintext=document.createElement('div');
    googlelogintext.className='googlelogintext'
    googlelogin.appendChild(googlelogintext)
    googlelogintext.innerText='Continue with Google';  

    let fblogin=document.createElement('button');
    fblogin.className='fblogin';
    remainaccounts.appendChild(fblogin);

    let fbpic=document.createElement('div');
    fbpic.className='fbpic'
    fblogin.appendChild(fbpic)
    
    let fblogintext=document.createElement('div');
    fblogintext.className='fblogintext'
    fblogin.appendChild(fblogintext)
    fblogintext.innerText='Continue with Facebook';

    let applelogin=document.createElement('button');
    applelogin.className='applelogin';
    remainaccounts.appendChild(applelogin);

    let applepic=document.createElement('div');
    applepic.className='applepic'
    applelogin.appendChild(applepic)
    
    let applelogintext=document.createElement('div');
    applelogintext.className='applelogintext'
    applelogin.appendChild(applelogintext)
    applelogintext.innerText='Continue with Apple';

    let phonelogin=document.createElement('button');
    phonelogin.className='phonelogin';
    remainaccounts.appendChild(phonelogin);
    phonelogin.innerText='Continue with phone number';

    let line=document.createElement('div');
    line.className='line2';
    remainaccounts.appendChild(line);

    let emaillogin=document.createElement('div');
    emaillogin.className='emaillogin email';
    remainaccounts.appendChild(emaillogin);
    emaillogin.innerText='Email or username';

    
    let email = document.createElement('div');
    email.className = 'email';
    remainaccounts.appendChild(email);

    let emailinput = document.createElement('input');
    emailinput.className = 'emailinput';
    email.appendChild(emailinput);

    let passwordtext=document.createElement('div');
    passwordtext.className='passwordtext email';
    remainaccounts.appendChild(passwordtext);
    passwordtext.innerText='Password';

    let password = document.createElement('div');
    password.className = 'password';
    remainaccounts.appendChild(password);
   

    let passwordinput = document.createElement('input');
    passwordinput.className = 'passwordinput';
    password.appendChild(passwordinput);
    
    function addpasswordtext(){
        let passwordinputtext1 = document.createElement('div');
        passwordinputtext1.className = 'passwordinputtext1';
        remainaccounts.appendChild(passwordinputtext1);
        passwordinputtext1.innerText='Password';
    }
    addpasswordtext()

    function addemailtext(){
        let addemailinputtext = document.createElement('div');
        addemailinputtext.className = 'addemailinputtext';
        email.appendChild(addemailinputtext);
        addemailinputtext.innerText='Email or username';
    }
    addemailtext()
    
    function addpclearwarn(){
        let pclearwarn=document.createElement('div');
        pclearwarn.className='pclearwarn';
        password.appendChild(pclearwarn);
        pclearwarn.innerHTML=`Please enter your password`;

    }

    function addeclearwarn(){
        let eclearwarn=document.createElement('div');
        eclearwarn.className='eclearwarn';
        remainaccounts.appendChild(eclearwarn);
        eclearwarn.innerHTML=`<i class="fa-solid fa-exclamation"></i>   Please enter your Username or email`;

    }
    
    let remember=document.createElement('div');
    remember.className='remember';
    remainaccounts.appendChild(remember);

    let rememberme=document.createElement('div');
    rememberme.className='rememberme';
    remember.appendChild(rememberme);

    let remembermetext=document.createElement('div');
    remembermetext.className='remembermetext';
    remainaccounts.appendChild(remembermetext);
    remembermetext.innerText='Remember me';

    let label=document.createElement('div');
    label.className='label';
    rememberme.appendChild(label);
    remswitch=true;
    rememberme.addEventListener("click",function(){
        if(remswitch){
            rememberme.style.background='#1FDF64';
            label.style.transform='translateX(13px)';
            rememberme.style.border='2px solid black';
            remember.style.border='3px solid white';
            remember.style.borderRadius='14px';
        }
        else{
            rememberme.style.background='#727272';
            label.style.transform='translateX(0px)';
            rememberme.style.border='2px solid black';
            remember.style.border='3px solid white';
            remember.style.borderRadius='14px';
        }
        remswitch=!remswitch;
    
    
    })

    
    let passwordicon = document.createElement('div');
    passwordicon.className = 'passwordicon';
    password.appendChild(passwordicon);
    passwordicon.innerHTML='<i class="fa-regular fa-eye-slash A"></i>';
    
    passwordinput.addEventListener('input', function() {
    const inputValue = passwordinput.value;
    
    if (inputValue === '') {
        passwordinput.style.borderColor='red';
        addpasswordtext();
        addpclearwarn();
        

    }
    if (inputValue!=''){
        passwordinput.style.borderColor='white';
        let pclearwarn = document.querySelector('.pclearwarn');
        if (pclearwarn) {
            console.log('lll');
            pclearwarn.remove();
        }
    }
    })
    emailinput.addEventListener('input', function() {
    const inputValue = emailinput.value;
    
    if (inputValue === '') {
        emailinput.style.borderColor='red';
        addemailtext();
        addeclearwarn();
        

    }
    if (inputValue!=''){
        emailinput.style.borderColor='white';
        let eclearwarn = document.querySelector('.eclearwarn');
        if (eclearwarn) {
            console.log('lll');
            eclearwarn.remove();
        }
        
    }
});
    let x=true;
    passwordicon.addEventListener("click",function(){
        const icon=passwordicon.querySelector('i');
        if (x){
            icon.classList.remove('fa-regular' ,'fa-eye-slash','A');
            icon.classList.add('fa-regular', 'fa-eye','A');
            passwordinput.type='text';
            
            
}
        else{
            icon.classList.remove('fa-regular', 'fa-eye','A');
            icon.classList.add('fa-regular' ,'fa-eye-slash','A');
            passwordinput.type='password';
        }
        x=!x;

    })
    function removeDiv() {
        var divToRemove = document.querySelector('.passwordinputtext1');
        
        if (divToRemove) {
            console.log(divToRemove);
        
            divToRemove.remove();

        }
    }
    function removeDivE() {
        var divToRemove = document.querySelector('.addemailinputtext');
        if (divToRemove) {
            console.log(divToRemove);
            
            divToRemove.remove();
        }
    }
    
    passwordinput.addEventListener("keydown",removeDiv);
    emailinput.addEventListener("keydown",removeDivE);
    
    

    console.log(passwordinput.value);

    let loglogin =document.createElement('div');
    loglogin.className='loglogin trans';
    remainaccounts.appendChild(loglogin);
    loglogin.innerText='Log in';

    let forgetpassword=document.createElement('div');
    forgetpassword.className='forgetpassword';
    remainaccounts.appendChild(forgetpassword);
    forgetpassword.innerHTML='forgot your password ?';
    forgetpassword.style.textDecoration = 'underline';

    let line3=document.createElement('div');
    line3.className='line2';
    remainaccounts.appendChild(line3);
    
    let donthavecont=document.createElement('div');
    donthavecont.className='donthavecont';
    remainaccounts.appendChild(donthavecont);

    let donthave=document.createElement('div');
    donthave.className='donthave';
    donthavecont.appendChild(donthave);
    donthave.innerText=`Don't have an account?`;

    let logsignup=document.createElement('div');
    logsignup.className='logsignup';
    donthavecont.appendChild(logsignup);
    logsignup.innerText=`Signup for Spotify`;
    logsignup.style.textDecoration = 'underline';
    
   

    
    
    




    
    

    
     




    
    
    
    let backbutton=document.createElement('button');
    backbutton.className='backbutton';
    wholepage.appendChild(backbutton)
    backbutton.addEventListener('click',retrieveLastPage);





}
// Save the current page's URL to localStorage before navigating to a new page
function saveLastPage() {
    localStorage.setItem('lastPage', window.location.href);
  }
  
  // Attach the saveLastPage function to a link or button click event
function retrieveLastPage() {
    const lastPageUrl = localStorage.getItem('lastPage');
  
    if (lastPageUrl) {
      // Redirect to the last visited page
      window.location.href = lastPageUrl;
    } else {
      // Handle the case where there is no last page saved
      alert('No last page found.');
    }
  }
  
  

function loadContent(page) {
    const contentDiv = document.getElementById('main-panel');
    let body=document.body;
    let login=document.getElementsByClassName('login');

    switch (page) {
        case 'search':
            contentDiv.innerHTML = '';
            addmainpanel()
            console.log('hii')
            break;
        case 'home':
            contentDiv.innerHTML = '';
            addhomepanel()
            console.log('home')
            break;
        case 'loginpage':
            saveLastPage();
            contentDiv.innerHTML = '';
            body.innerHTML='';
            loginpage()
            console.log('login');
            break;

        default:
            
            break;
            
    }
}
window.addEventListener('DOMContentLoaded', function() {
    loadContent('search');
})
// Push a new state onto the history stack
function navigateToPage(pageName, pageTitle) {
    window.history.pushState({ page: pageName }, pageTitle, `/${pageName}`);
  }
  
  // Handle popstate events (e.g., when the back button is pressed)
  window.addEventListener('popstate', function (event) {
    if (event.state) {
      // The user clicked the back button, so handle it here
      // For example, you can load the content for the previous page
      console.log('Back button pressed. Page name:', event.state.page);
    }
  });
  
  // Initial page load
  navigateToPage('home', 'Home Page');
  
  // Example usage for navigating to other pages
  // navigateToPage('about', 'About Us');
  // navigateToPage('contact', 'Contact Us');
  
