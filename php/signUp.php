<?php
if(isset($_POST["submit"]) && $_POST["submit"]=="Sign up") {
    // define variations
    $username=$_POST["username"];
    $password=$_POST["password"];
    $email=$_POST["email"];
    $phoneNumber=$_POST["phoneNumber"];

    // database
    $con=mysql_connect("localhost","bran","liaomelo15@","szurdesign");
    if(mysql_connect_errno($con)) {
        // check connection
        echo "Fail to connect to MySQL Database";
    }
    $checkSql="select username from userInfo where username='$username' or email='$email';";
    $result=mysql_query($checkSql);
    $num=mysql_num_rows($result);
    if($num) {
        // 已存在用户名
        echo "<script>alert('用户名已存在！')</script>";
    }else {
        // 用户名不存在，可以注册
        $sql_insert="insert into userInfo(username,password,email,phoneNumber)
           values('$username','$password','$email','$phoneNumber');";
        $res_insert=mysql_query($sql_insert);
        if($res_insert) {
            echo "<script>alert('注册成功！')</script>";
        }else {
            echo "<script>alert('注册失败！')</script>";
        }
    }
}else {
    echo "注册失败！";
}
?>
