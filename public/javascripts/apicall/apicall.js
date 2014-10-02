/**
 * Created by kikimans on 2014-10-01.
 */
$(document).ready(function(){
    $('#apiForm').submit(function(e){
        if($.trim($('#username').val()) == '' || $.trim($('#password').val()) == ''){
            alert('계정과 비밀번호을 입력해주세요');
            return false;
        };
        if($.trim($('#method').val()) == '' || $.trim($('#url').val()) == ''){
            alert('테스트 URL 과 테스트 메소드를 입력해주세요');
            return false;
        }
    });
});