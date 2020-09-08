class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
     }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            @media screen and (max-width: 550px) {
                #searchButtonElement{
                    width: 20%;  
                    font-size: 12px;
                }
            }
            
            .search-container{
                margin: 2% auto;
                width: 70%;  
            }
            .search-container input{
                width: 70%;
                margin-left: 1%;
                height: 40px;
                display: inline-block;
                padding: 10px;
                border-radius: 5px;
                border: 2px solid #fa8100;
                color: rgb(167, 108, 0);
            }
            .search-container button{
                width: 15%;
                height: 40px;
                display: inline-block;
                border-radius: 5px;
                border: 2px solid #ffa647;
                background-color: rgb(255, 183, 49);
                color: white;
                font-size: 14px;
            }
            .search-container input:focus{
                outline-color: #fa8100;
                box-shadow: 5px 5px 30px rgba(190, 76, 0, 0.473);
            }
            .search-container button:hover{
                background-color: #fa8100;
            }
            .search-container button:focus{
                outline-color: #ffa647;
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search your meal here..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);