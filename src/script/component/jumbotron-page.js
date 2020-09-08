import JumbotronImage from './images/meal.jpg'

class JumbotronPage extends HTMLElement {

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


            @media only screen and (max-width: 1000px) {
                #slogan{
                    font-size: 55px;
                }
            }
            @media only screen and (max-width: 660px) {
                #slogan{
                    font-size: 35px;
                    margin-top: 10%;
                }
            }
            
            .jumbotron {
                background-color: white;
                height: 400px;
                margin-top: 1%;
                background: url(${JumbotronImage});
                background-position: center;
                background-repeat: none;
                background-size: cover;      
            }
            .jumbotron h1{
                font-weight: 100;
                margin-top: -50px;
                font-size: 65px;
            }
            .jumbotron p{
                font-weight: medium;
                font-size: 35px;
                margin-top: 20px;
            }
            .jumbotron-words{
                
                padding: 7%;
                color: white;
                text-align: center;
                text-shadow: 2px 2px 5px rgb(190, 76, 0);
            }
        </style>
        <div class="jumbotron">
            <div class="jumbotron-words">
                <h1 id="slogan">Jelajahi bermacam makanan dari berbagai belahan dunia</h1>
                <p>Temukan disini!</p>
            </div>
        </div>   
        `;
    }
}

customElements.define("jumbotron-page", JumbotronPage);
