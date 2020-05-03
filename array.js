var member = ['yeeun', 'yechu', 'bot'] // 배열은 [ 로 시작해서 ]로 끝나야 한다.
/*그릇에 담고 변수 member 에 담은 것, 하나의 변수안에 여러개의 데이터를 담는다. 
배열에 들어있는 것 각각 원소 - element , element가 고유한 식별자 가짐- 색인, index */

//funtion A(a,b,c) - > reuturn 값은 한개 
//without array 
function get_member1(){
    return 'egoing';
}
document.write(get_member1());
 
function get_member2(){
    return 'k8805';
}
document.write(get_member2());
//... and so on

//with array 
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
var members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);

function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(members[i].toUpperCase() + "<br />");   
}

