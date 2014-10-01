/**
 * Created by kikimans on 2014-10-01.
 */
$(document).ready(function(){
   $('#joinForm').submit(function(e){
       if($.trim($('#name').val()) == '' || $.trim($('#email').val()) == ''){
           alert('이름과 이메일을 입력해주세요');
           return false;
       }
   });
});