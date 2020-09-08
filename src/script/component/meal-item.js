class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML =  `
        <style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            width: 23%;
            display: block;
            height: 300px;
            margin-left: 7%;
            margin-bottom: 4%;
            border-radius: 5px;
            float: left;
            border: 1px solid rgb(255, 123, 0);
        }
        @media screen and (max-width: 1115px) {
            :host{
                width: 40%;
            }   
            
        }
        @media screen and (max-width: 720px) {
            :host{
                width: 80%;
                margin-left: 9%;
            }   
            
        }
        
        
        .meal-image {
            border-radius: 5px;
            width: 100%;
            height: 180px;
            object-fit: cover;
            object-position: center;
        
        }
        
        .meal-info {
            overflow: hidden;
            font-family: 'Mukta';
        }
        
        .meal-info > h2 {
            padding: 6px;
            font-weight: lighter;
            text-align: center;
            border-bottom: 1px solid rgb(255, 123, 0); 
            background-color: rgb(255, 145, 0, 0.8);  
        }
        
        .meal-info > p {
            margin-top: 5px;
            padding: 0px 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        <img class="meal-image" src="  ${this._meal.strMealThumb}  " alt="meal-image"> 
        <div class="meal-info"> 
            <h2>  ${this._meal.strMeal}  </h2> 
            <p>Category : ${this._meal.strCategory}  </p>
            <p>Origin   : ${this._meal.strArea}  </p> 
        </div>`;
    }
}

customElements.define("meal-item", MealItem);