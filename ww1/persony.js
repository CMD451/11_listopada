// Akysz Kubiś!! ~ Szymon Sabaka
let all_columns = Array.from(document.getElementsByClassName("column"));

all_columns.forEach((column) =>
    {
        column.addEventListener("mouseover", e=>{
            all_columns.forEach((e)=>{
                if(e !== column)e.classList.add('blur')});
        });
        column.addEventListener("mouseout", e=>all_columns.forEach((e)=>{e.classList.remove('blur')}));
    }
);
