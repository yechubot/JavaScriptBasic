//{ 로 시작해서 }로 끝남. index가 문자.

var grades = {'yechu':10, 'bot':20}
//key : yechu, key value : 10 and so on..
//grades['yechu'] = grades.yechu - > value : 10; 

/* other method to make Object below.
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;
*/
//배열은 저장된 데이터가 순서를 가지고 있다. - 이 순서가 유지되어있음.
//객체는 순서가 없고, only Key , Value exist.

var ranks ={ 'yechu':1, 'bot':5, 'max':7 };
for (var key in ranks) {
document.write( "key : "+key+" value : "+ranks[key]+"<br />");
}//<li>document.write( "key : "+key+", value : "+ranks[key]+"<br />")</li>; -> html 에서 리스트로 보임!

var ranks = { 
'list' : { 'yechu' : 10, 'bot': 20, 'mxm' :30},
'show' : function(){
          for(var name in this.list){ 
          console.log(name, this.list[name]);
              //this - 그 함수가 포함된 객체를 가리킴.
              }
          }
}
ranks.show();
