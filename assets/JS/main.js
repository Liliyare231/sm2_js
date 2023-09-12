
 let for_box = document.querySelector('.for_box');
 let array =[
    {   name: "Новость для практики №1", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: 1,
        date:"12.09.23",
        author:"Иван"},

    {   name: "Новость для практики №2", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: 2,
        date:"11.09.23",
        author:"Никита"},

    {   name: "Новость для практики №3", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: 3,
        date:"15.08.23",
        author:"Степан"},
    
    {   name: "Новость для практики №4", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: 4,
        date:"10.09.23",
        author:"Маргарита"},
       
    {   name: "Новость для практики №5", 
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        id: 5,
        date:"9.09.23",
        author:"Светлана"}
 ]

 for( let key in array){

    for_box.insertAdjacentHTML('beforeend',` 
    <div class="box">
        <div class="name_date">
            <h1 class="name">`+
                array[key]['name']
            +`</h1>
            <p class="date">`+
                array[key]['date']
            +`</p>
        </div>
        <p class="text">`+
                array[key]['text']
        +`</p>
        <div class="author_id">
            <h1 class="author">`+
                 array[key]['author']
            +`</h1>
            <p class="id">id: `+
                array[key]['id']
            +`</p>
        </div>
    </div>`);
}
