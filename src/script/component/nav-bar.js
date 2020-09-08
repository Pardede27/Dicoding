class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400&display=swap');

            * {
                margin: 0;
                padding: 20px;
                box-sizing: border-box;
            }
            :host{
                position: sticky;
                top: 0;
                width: 100%;
                background-color: #fa8100;
                font-family: 'Roboto', sans-serif;
                display: flex;
                padding: 20px 8%;
                justify-content: space-between;
                align-items: center; 
            }
            @media screen and (max-width: 615px) {
                :host{
                    flex-direction: column;
                }  
                ul{
                    margin: 0% auto;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;
                } 
                li a{
                    display: block;
                    padding: 10px 20px;
                }
                
                
            }
            .logo a{
                text-decoration: none;
                font-weight: 900;
                font-size: 20px;
                color: white;
            }

            ul{
                float: right;
                display: flex;
            }
            li{
                list-style: none;
                display: inline;
                padding: 0 20px;
            }
            li a{
                color: white;
                font-weight: 100;
                text-decoration: none;
                font-size: 14px;
            }
            li a:hover{
                background-color: #ff9326;
                transition: 500ms;
            }
            
        </style>
        <div class="logo">
            <a href="#">YourMeals</a>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        `;
    }
}

customElements.define("nav-bar", NavBar);
