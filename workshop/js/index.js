var books=new Array();
books[0]={"name":"book1","category":"fiction"};
books[1]={"name":"book2","category":"fiction"};

function iterate(){
for (var key in books) {
    document.write(books[key].name + "<br>");
  }
}
iterate();


function add(){
    var name=document.getElementById('name').value;
    var cat=document.getElementById('category').value;
    console.log(name);
    console.log(cat);
    item={"name":name,"category":cat};
    books.push(item);
}


function del(){
    var nam=document.getElementById('nam').value;
    for (var key in books) {

    if(books.name==nam){
        delete books[key];
    }
    }
    iterate();
}
