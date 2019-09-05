
function login() {

    var param = $("form[name=loginform]").serialize();

    alert(param)
    $.ajax({
            type: "POST",
            dataType: "json",
            url: "/login",
            data: param,
        }).done(function(data) {
            if(data.result_code==200){
                alert("로그인 성공\n"+data.user+"님 환영합니다!")
                document.location.href = '/user';
            }
            else if(data.result_code==500){
                alert("로그인 실패! 아이디와 비밀번호를 다시 입력해주세요!")
            }
        })



}