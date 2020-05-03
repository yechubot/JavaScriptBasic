/*function 함수명( [인자...[,인자]] ){
   코드
   return 반환값
}
*/

function numbering() {
i = 0; 
while(i < 10) {
document.write(i);
i ++;
}
numbering();

/* what if there is no function?
반복문 - 그 자리에서만
함수 - 여기저기 호출; 재사용성이 핵심. 유지보수 용이(maintainance), 가독성 좋음.
*/

//출력
function get_member(){
    return 'egoing'; 
    return 'k8805';
    return 'sorialgi';
}
alert(get_member()); // 'egoing' 뱉어내고 끝남. return 했으니까 종료됨.

//입력                parameter 매개변수
function get_argument(arg){
    return arg*1000;
}
 
alert(get_argument(1)); // arg가 변수가 되서 arg = 1 이 됨. 인자: argument
alert(get_argument(2));

// different ways of using functions. all below are the same.

function numbering() {
i = 0; 
while(i < 10) {
document.write(i);
i ++;
}
numbering();


numbering = function() {
i = 0; 
while(i < 10) {
document.write(i);
i ++;
}
numbering();

(function() {
i = 0; 
while(i < 10) {
document.write(i);
i ++;
}) (); //()로 묶은 함수를 ()로 호출 ; 익명함수: 이름이 없음. 일회성 호출. 
//함수형 언어.. 함수는 재사용을 높여준다.













