var form=document.getElementById('addForm');
var taskList= document.getElementById('items');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(e.target.children[0].value);
    var task=e.target.children[0].value;
    var li=document.createElement('li');
    li.setAttribute('class','list-group-item');
    li.innerText=task;
    var btn=document.createElement('button');
    btn.setAttribute('class','btn list-btn btn-sm float-right delete');
    btn.innerText='x';
    li.append(btn);
    taskList.append(li);
    e.target.children[0].value='';
    var btn=document.createElement('update');
    btn.setAttribute('class','btn list-btn btn-sm float-right update');
    btn.innerText='update';
    li.append(btn);
    taskList.append(li);
})

//---------delete task-------------
taskList.addEventListener('click',(e)=>{
  var dlt=e.target;
  if(dlt.classList.contains('delete')){
    dlt.parentElement.remove();
  }
})
//-----update-----
 
//-------search task-----------
 const filter=document.getElementById('filter');
 filter.addEventListener('keyup' ,(e)=>{
  var Search=e.target.value;
  var tasks=taskList.children;
  for (let task of tasks) {
    if(task.innerText.includes(Search)){
      task.computedStyleMap.display="block";
    }
    else{
      task.style.display='none';
    }
  }
 })

//-----theme------
const theme =document.getElementById('theme');
const body =document.getElementsByTagName('body')[0];
theme.addEventListener('click',(e)=>{
themeColor =e.target.getAttribute('id');
body.setAttribute('class',themeColor);

//removing active class
for(let color of theme.children){
    color.setAttribute('class','dropdown-item');
}

//adding active class in li
e.target.classList.add('active');
})